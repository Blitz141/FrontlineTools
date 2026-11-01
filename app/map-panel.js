/* Tactical map panel: decluttered symbology + phased matchup plan. */
(function () {
  const OVERLAYS = window.WARNO_OVERLAYS || {};

  /* Layer groups (defaults: AA ranges off) */
  const GROUPS = [
    { id: "recon", label: "Recon", color: "#6aae78", on: true },
    { id: "armor", label: "Armor", color: "#c9a15c", on: true },
    { id: "infantry", label: "Infantry", color: "#7eb87a", on: true },
    { id: "at", label: "AT / ATGM", color: "#e08a3a", on: true },
    { id: "aa", label: "AA", color: "#5aa0d4", on: true },
    { id: "arty", label: "Artillery", color: "#c4a04a", on: true },
    { id: "helo", label: "Helicopters", color: "#9b7ed9", on: true },
    { id: "support", label: "Support / logistics", color: "#9bb7e0", on: true },
    { id: "defend", label: "Defensive lines", color: "#5b8fc7", on: true },
    { id: "advance", label: "Advance routes", color: "#4a9de0", on: true },
    { id: "flank", label: "Flank routes", color: "#6ecf8e", on: true },
    { id: "retreat", label: "Retreat / fallback", color: "#e0b84a", on: true },
    { id: "enemy", label: "Enemy expected moves", color: "#e0554a", on: true },
    { id: "terrain", label: "Terrain / chokes", color: "#d2c98a", on: true },
    { id: "ranges", label: "Ranges (AA/arty)", color: "#5b9fd4", on: false }
  ];

  const WATER_SAMPLES = {"two_lakes": [[8, 40], [12, 55], [15, 65], [18, 72], [82, 58], [88, 50], [90, 65], [85, 75], [92, 30], [8, 25]]};

  let state = {
    mapId: null,
    flip: false,
    phase: "opening",
    layers: Object.fromEntries(GROUPS.map(g => [g.id, g.on])),
    analysis: null,
    counter: null,
    decoded: null,
    highlightStep: null,
    hoverAA: null,
    zoom: 1,
    panX: 0,
    panY: 0,
    markerMode: "symbols", // symbols | images
    showSecondaryLabels: false
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function zoomFactor() {
    // Counter-scale markers under CSS zoom so they stay readable zoomed out
    // and grow modestly with detail when zoomed in.
    const z = state.zoom || 1;
    const f = 1 / Math.pow(z, 0.55);
    return Math.max(0.42, Math.min(1.25, f));
  }

  function showDetailLabels() {
    return (state.zoom || 1) >= 1.6 || state.showSecondaryLabels;
  }

  function pickUnitForKind(kind) {
    const c = state.counter;
    if (!c || !c.picked) return null;
    const UNITS = (window.WarnoLib && window.WarnoLib.UNITS) || {};
    function enrich(hit) {
      if (!hit) return null;
      const id = hit.unit && hit.unit.id;
      const full = (id != null) ? (UNITS[id] || UNITS[String(id)]) : null;
      return {
        name: (full && full.name) || hit.name,
        descriptor: (full && full.descriptor) || hit.descriptor || (hit.unit && hit.unit.descriptor) || null,
        id: id,
        category: (full && full.category) || hit.category
      };
    }
    const map = {
      tank: ["tank"], infantry: ["inf"], atgm: ["inf", "tank"], recon: ["rec"],
      aa: ["aa"], arty: ["art"], helo: ["hel"], rally: ["log"], defend: ["inf", "tank"],
      log: ["log"], cmd: ["log", "inf"], supply: ["log"]
    };
    const cats = map[kind] || [];
    for (const cat of cats) {
      const hit = c.picked.find(p => String(p.category || "").toLowerCase() === cat);
      if (hit) return enrich(hit);
    }
    return enrich(c.picked[0]);
  }


  function layoutOrient(layout) {
    return (layout && layout.orientation) || "ns";
  }

  function mapPt(x, y, layout) {
    if (!state.flip) return [x, y];
    if (layoutOrient(layout) === "ew") return [100 - x, y];
    return [x, 100 - y];
  }

  function mapPath(path, layout) {
    return (path || []).map(([x, y]) => mapPt(x, y, layout));
  }

  function enemyAlliance() {
    const a = (state.decoded && state.decoded.div && state.decoded.div.alliance) || "";
    const up = String(a).toUpperCase();
    if (up.includes("PACT") || up.includes("WARSZAWA") || up.includes("WP")) return "PACT";
    if (up.includes("NATO")) return "NATO";
    return null;
  }

  function sideCenters(layout) {
    const ds = (layout.deploy_polys || []).map(d => ({
      side: d.side,
      c: mapPt(d.center[0], d.center[1], layout),
      raw: d
    }));
    const nato = ds.filter(d => d.side === "NATO");
    const pact = ds.filter(d => d.side === "PACT");
    const avg = arr => {
      if (!arr.length) return [50, 50];
      return [
        arr.reduce((s, d) => s + d.c[0], 0) / arr.length,
        arr.reduce((s, d) => s + d.c[1], 0) / arr.length
      ];
    };
    return { nato: avg(nato), pact: avg(pact), all: ds, natoList: nato, pactList: pact };
  }

  function catCards(src, cat) {
    if (!src) return [];
    const want = String(cat || "").toLowerCase();
    const cards = src.cards || src.picked || [];
    return cards.filter(c => String(c.category || "").toLowerCase() === want);
  }

  function unitList(src, cats, n) {
    const out = [];
    const want = cats.map(c => String(c).toLowerCase());
    function pushName(name) {
      if (name && !out.includes(name)) out.push(name);
    }
    for (const cat of cats) {
      for (const c of catCards(src, cat)) {
        pushName((c.unit && c.unit.name) || c.name);
        if (out.length >= n) return out;
      }
    }
    // Fall back to division pool units (full available roster)
    const pool = (src && src.div && src.div.units) || [];
    for (const u of pool) {
      const cat = String(u.category || "").toLowerCase();
      if (!want.includes(cat)) continue;
      pushName(u.name);
      if (out.length >= n) return out;
    }
    return out;
  }

  function names(list, fallback) {
    return list.length ? list.join(", ") : fallback;
  }

  function resolveLabels(items) {
    const placed = [];
    for (const it of items) {
      let x = it.x, y = it.y;
      for (let n = 0; n < 12; n++) {
        let hit = false;
        for (const p of placed) {
          if (Math.hypot(p.x - x, p.y - y) < 4.2) { hit = true; break; }
        }
        if (!hit) break;
        const ang = (n * 47) * Math.PI / 180;
        x = it.x + Math.cos(ang) * (3.2 + n * 0.55);
        y = it.y + Math.sin(ang) * (3.2 + n * 0.55);
      }
      x = Math.max(3, Math.min(97, x));
      y = Math.max(3, Math.min(97, y));
      placed.push(Object.assign({}, it, { x, y }));
    }
    return placed;
  }

  function buildPlan(layout) {
    const sides = sideCenters(layout);
    let enemySide = enemyAlliance();
    if (!enemySide) enemySide = "PACT";
    let ourSide = enemySide === "NATO" ? "PACT" : "NATO";
    // Prefer deploy sides that exist
    const have = new Set((layout.deploy_polys || []).map(d => d.side));
    if (have.size && !have.has(ourSide) && have.has(enemySide)) {
      ourSide = enemySide;
      enemySide = ourSide === "NATO" ? "PACT" : "NATO";
    }
    const usC = ourSide === "NATO" ? sides.nato : sides.pact;
    const enemyC = enemySide === "NATO" ? sides.nato : sides.pact;

    const zones = (layout.zones || []).map(z => ({
      label: z.label,
      c: mapPt(z.center[0], z.center[1], layout),
      pts: z.pts,
      raw: z
    }));
    const byUs = zones.slice().sort((a, b) => Math.hypot(a.c[0] - usC[0], a.c[1] - usC[1]) - Math.hypot(b.c[0] - usC[0], b.c[1] - usC[1]));
    const byEnemy = zones.slice().sort((a, b) => Math.hypot(a.c[0] - enemyC[0], a.c[1] - enemyC[1]) - Math.hypot(b.c[0] - enemyC[0], b.c[1] - enemyC[1]));
    const midZones = zones.slice().sort((a, b) => Math.hypot(a.c[0] - 50, a.c[1] - 50) - Math.hypot(b.c[0] - 50, b.c[1] - 50));

    const enemyDeck = state.decoded;
    const ourDeck = state.counter;
    // Categories in this dataset are short codes: tank, inf, rec, aa, art, hel, log, air
    const eTank = unitList(enemyDeck, ["tank", "Tanks", "tanks"], 2);
    const eAA = unitList(enemyDeck, ["aa", "AA", "Air Defense"], 2);
    const eArty = unitList(enemyDeck, ["art", "Artillery", "artillery"], 2);
    const eRecon = unitList(enemyDeck, ["rec", "Recon", "recon"], 2);
    const eInf = unitList(enemyDeck, ["inf", "Infantry", "infantry"], 2);
    const eHel = unitList(enemyDeck, ["hel", "Helicopters", "helicopters", "Helos"], 2);
    let uATAll = unitList(ourDeck, ["inf", "Infantry", "infantry"], 12);
    let uATPref = uATAll.filter(n => /AT|Milan|Konkurs|Fagot|Fagott|SPG|Metis|TOW|Jaguar|Malyutka|Sagger/i.test(n));
    if (!uATPref.length && ourDeck && ourDeck.div && ourDeck.div.units) {
      uATPref = ourDeck.div.units.map(u => u.name).filter(n => /AT|Milan|Konkurs|Fagot|SPG|Metis|TOW|Malytuka|Malyutka/i.test(n || ""));
    }
    const uAT = (uATPref.length ? uATPref : uATAll).slice(0, 3);
    const uRecon = unitList(ourDeck, ["rec", "Recon", "recon"], 2);
    const uAA = unitList(ourDeck, ["aa", "AA", "Air Defense"], 2);
    const uArty = unitList(ourDeck, ["art", "Artillery", "artillery"], 2);
    const uHel = unitList(ourDeck, ["hel", "Helicopters", "helicopters", "Helos"], 2);
    const uInf = unitList(ourDeck, ["inf", "Infantry", "infantry"], 3);
    const uTank = unitList(ourDeck, ["tank", "Tanks", "tanks"], 2);

    const eTankTxt = names(eTank, "enemy tanks");
    const eAATxt = names(eAA, "enemy AA");
    const eArtyTxt = names(eArty, "enemy arty");
    const eReconTxt = names(eRecon, "enemy recon");
    const eInfTxt = names(eInf, "enemy infantry");
    const eHelTxt = names(eHel, "enemy helos");
    const uATTxt = names(uAT, "your AT/infantry");
    const uReconTxt = names(uRecon, "your recon");
    const uAATxt = names(uAA, "your AA");
    const uArtyTxt = names(uArty, "your arty");
    const uHelTxt = names(uHel, "your helos");
    const uInfTxt = names(uInf, "your infantry");
    const uTankTxt = names(uTank, "your tanks");

    const stats = (layout.terrain_stats) || {};
    const forestHeavy = (stats.forest_pct || 0) >= 35;
    const openHeavy = (stats.open_pct || 0) >= 20;
    const wet = (stats.water_pct || 0) >= 15;

    const cover = ((layout.terrain_samples || {}).forest || []).concat((layout.terrain_samples || {}).town || []);
    const open = (layout.terrain_samples || {}).open || [];
    const ambush = (layout.terrain_samples || {}).ambush || [];
    const choke = (layout.terrain_samples || {}).chokepoints || [];

    function nearestSample(pts, target) {
      if (!pts || !pts.length) return target;
      let best = pts[0], bd = 1e9;
      for (const p of pts) {
        const d = Math.hypot(p[0] - target[0], p[1] - target[1]);
        if (d < bd) { bd = d; best = p; }
      }
      return mapPt(best[0], best[1], layout);
    }
    function lerp(a, b, t) {
      return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    }
    function pathVia(a, b, samples) {
      const m = lerp(a, b, 0.5);
      const mid = nearestSample(samples, m);
      // samples already world-percent; nearestSample maps them
      return [a, mid, b];
    }

    const cp1 = byUs[0] || midZones[0];
    const cp2 = byUs[1] || midZones[1] || cp1;
    const cpMid = midZones[0] || cp1;
    const cpEnemy = byEnemy[0] || cpMid;
    const cpEnemy2 = byEnemy[1] || cpEnemy;

    const amb1 = nearestSample(ambush.length ? ambush : cover, cpMid ? cpMid.c : [50, 50]);
    const amb2 = nearestSample(ambush.length ? ambush : cover, cp1 ? cp1.c : usC);
    const chokePt = choke[0] ? mapPt(choke[0][0], choke[0][1], layout) : lerp(usC, enemyC, 0.5);
    const townHold = nearestSample((layout.terrain_samples || {}).town || cover, cp1 ? cp1.c : usC);

    const opening = [];
    if (cp1) {
      opening.push({
        id: "o1", phase: "opening",
        title: "Seize " + cp1.label + " with " + uInfTxt,
        tip: "Minute 0-3: push a CV plus " + uInfTxt + " into " + cp1.label + " (nearest CP to your " + ourSide + " deploy) using wheeled transports on the covered approach. Do not wait for full armor. Why: early income and a foothold before " + eInfTxt + " digs in.",
        path: pathVia(usC, cp1.c, cover.length ? cover : open),
        markers: [
          { kind: "inf", x: cp1.c[0], y: cp1.c[1], tip: uInfTxt + " hold " + cp1.label },
          { kind: "recon", x: amb2[0], y: amb2[1], tip: uReconTxt + " screen the approach" }
        ]
      });
    }
    if (cp2 && cp2 !== cp1) {
      opening.push({
        id: "o2", phase: "opening",
        title: "Screen " + cp2.label + " with " + uReconTxt,
        tip: "Minute 1-4: send " + uReconTxt + " to the cover facing " + cp2.label + " to spot " + eTankTxt + " and " + eReconTxt + " before you commit AT. Keep engines off once in position.",
        path: pathVia(usC, cp2.c, cover),
        markers: [{ kind: "recon", x: cp2.c[0], y: cp2.c[1], tip: uReconTxt + " on " + cp2.label }]
      });
    }
    opening.push({
      id: "o3", phase: "opening",
      title: "AA + FOB depth: " + uAATxt + " / " + uArtyTxt,
      tip: "Minute 0-2: park " + uAATxt + " between deploy and the first tree line (not on the crest). Keep " + uArtyTxt + " and the FOB in deploy depth so " + eHelTxt + " and " + eArtyTxt + " cannot delete them early.",
      markers: [
        { kind: "aa", x: lerp(usC, enemyC, 0.2)[0], y: lerp(usC, enemyC, 0.2)[1], r: 12, tip: uAATxt + " umbrella" },
        { kind: "arty", x: usC[0], y: usC[1], tip: uArtyTxt + " + FOB depth" }
      ]
    });
    opening.push({
      id: "o4", phase: "opening",
      title: "Seed ATGM at " + (cp1 ? cp1.label : "forward cover"),
      tip: "Minute 2-5: place " + uATTxt + " on the tree line / field edge covering the open lane into " + (cp1 ? cp1.label : "the forward CP") + ". Expect " + eTankTxt + " to try the open ground; do not silhouette on the skyline.",
      markers: [{ kind: "atgm", x: amb1[0], y: amb1[1], tip: uATTxt + " ambush line" }]
    });
    if (wet || (choke && choke.length)) {
      opening.push({
        id: "o5", phase: "opening",
        title: "Watch the chokepoint",
        tip: "Minute 2-6: the narrow land corridor is a funnel. Cover it with " + uATTxt + " and a recon pair. Artillery pre-plot " + uArtyTxt + " on the choke for when " + eTankTxt + " bunches up.",
        markers: [{ kind: "cp", x: chokePt[0], y: chokePt[1], tip: "Chokepoint interdiction" }]
      });
    }
    opening.push({
      id: "o6", phase: "opening",
      title: "Deny enemy grab of " + (cpEnemy ? cpEnemy.label : "their near CP"),
      tip: "Enemy will open on " + (cpEnemy ? cpEnemy.label : "their nearest CP") + " with " + eInfTxt + ". Spot with " + uReconTxt + "; if they overextend, strike the transport column with " + uArtyTxt + " before they unload.",
      path: pathVia(enemyC, cpEnemy ? cpEnemy.c : midZones[0].c, open.length ? open : cover),
      markers: [{ kind: "armor", x: (cpEnemy || midZones[0]).c[0], y: (cpEnemy || midZones[0]).c[1], tip: "Enemy opening grab" }]
    });
    if (forestHeavy) {
      opening.push({
        id: "o7", phase: "opening",
        title: "Forest infantry push with " + uInfTxt,
        tip: "Forest-heavy map: lead with " + uInfTxt + " and short-range AT through the trees toward " + (cpMid ? cpMid.label : "mid") + ". Keep " + uTankTxt + " on the roads/clearings only after recon clears ATGM.",
        path: pathVia(usC, cpMid ? cpMid.c : lerp(usC, enemyC, 0.5), cover),
        markers: [{ kind: "inf", x: townHold[0], y: townHold[1], tip: uInfTxt + " in cover" }]
      });
    } else if (openHeavy) {
      opening.push({
        id: "o7", phase: "opening",
        title: "Hull-down " + uTankTxt + " on open lanes",
        tip: "Open map: stage " + uTankTxt + " hull-down on the near treeline covering the field into " + (cpMid ? cpMid.label : "mid") + ". Never park mid-field under " + eArtyTxt + ".",
        markers: [{ kind: "armor", x: amb1[0], y: amb1[1], tip: uTankTxt + " hull-down" }]
      });
    }

    const mid = [];
    if (cpMid) {
      mid.push({
        id: "m1", phase: "mid",
        title: "Contest " + cpMid.label + " as the hinge",
        tip: "Once " + (cp1 ? cp1.label : "your near CP") + " is stable, feed " + uInfTxt + " and " + uATTxt + " into " + cpMid.label + ". Use " + uArtyTxt + " to suppress " + eInfTxt + " in buildings before the assault.",
        path: pathVia(cp1 ? cp1.c : usC, cpMid.c, cover),
        markers: [{ kind: "inf", x: cpMid.c[0], y: cpMid.c[1], tip: "Assault " + cpMid.label }]
      });
    }
    mid.push({
      id: "m2", phase: "mid",
      title: "Kill " + eTankTxt + " on the armor axis",
      tip: "Enemy armor axis runs the open ground from their deploy toward " + (cpMid ? cpMid.label : "mid") + ". Keep ATGM arcs overlapping; when " + eTankTxt + " commits, fix with " + uArtyTxt + " smoke/HE and finish with " + uATTxt + ".",
      path: pathVia(enemyC, cpMid ? cpMid.c : lerp(usC, enemyC, 0.55), open.length ? open : cover),
      markers: [
        { kind: "atgm", x: amb1[0], y: amb1[1], tip: "ATGM kill zone" },
        { kind: "armor", x: lerp(enemyC, usC, 0.35)[0], y: lerp(enemyC, usC, 0.35)[1], tip: eTankTxt + " axis" }
      ]
    });
    mid.push({
      id: "m3", phase: "mid",
      title: "Flank via cover toward " + (cpEnemy2 ? cpEnemy2.label : "their second CP"),
      tip: "If the front stalls, swing " + uInfTxt + " / light vehicles on the covered flank toward " + (cpEnemy2 ? cpEnemy2.label : "the deep CP") + ". " + uReconTxt + " leads; " + uHelTxt + " only if " + eAATxt + " is spotted down.",
      path: pathVia(usC, cpEnemy2 ? cpEnemy2.c : enemyC, cover),
      markers: [{ kind: "helo", x: lerp(usC, enemyC, 0.45)[0], y: lerp(usC, enemyC, 0.45)[1], tip: uHelTxt + " conditional" }]
    });
    mid.push({
      id: "m4", phase: "mid",
      title: "Hold town/forest strongpoint with " + uInfTxt,
      tip: "Turn " + (cp1 ? cp1.label : "your forward CP") + " into a strongpoint: " + uInfTxt + " in buildings/forest, ATGM on the open face, " + uAATxt + " one fold back. This is your rally anchor if a push fails.",
      markers: [
        { kind: "inf", x: townHold[0], y: townHold[1], tip: "Strongpoint" },
        { kind: "aa", x: lerp(usC, enemyC, 0.25)[0], y: lerp(usC, enemyC, 0.25)[1], r: 11, tip: uAATxt }
      ]
    });
    mid.push({
      id: "m5", phase: "mid",
      title: "Counter-battery vs " + eArtyTxt,
      tip: "When " + eArtyTxt + " reveals, shift " + uArtyTxt + " onto their likely gun line behind their deploy. Keep your guns displacing after 2-3 salvos.",
      markers: [{ kind: "arty", x: lerp(enemyC, usC, 0.1)[0], y: lerp(enemyC, usC, 0.1)[1], tip: "Enemy arty depth" }]
    });
    mid.push({
      id: "m6", phase: "mid",
      title: "Refresh recon and ATGM stocks",
      tip: "Mid game attrition eats " + uReconTxt + " and ATGM teams. Rebuy before you push " + (cpMid ? cpMid.label : "mid") + " again; blind attacks into " + eTankTxt + " lose the game.",
      markers: [{ kind: "recon", x: amb2[0], y: amb2[1], tip: "Recon refresh" }]
    });

    const late = [];
    late.push({
      id: "l1", phase: "late",
      title: "Collapse " + (cpEnemy ? cpEnemy.label : "their near CP") + " or force a trade",
      tip: "If you lead on points, squeeze " + (cpEnemy ? cpEnemy.label : "their economy CP") + " with " + uTankTxt + " plus " + uInfTxt + " after " + uArtyTxt + " prep. If you trail, raid with " + uHelTxt + " only under " + uAATxt + " cover after " + eAATxt + " is thin.",
      path: pathVia(cpMid ? cpMid.c : usC, cpEnemy ? cpEnemy.c : enemyC, cover),
      markers: [{ kind: "armor", x: (cpEnemy || { c: enemyC }).c[0], y: (cpEnemy || { c: enemyC }).c[1], tip: "Late pressure" }]
    });
    late.push({
      id: "l2", phase: "late",
      title: "Fallback line if shocked",
      tip: "Pre-mark a secondary line between deploy and " + (cp1 ? cp1.label : "forward CP") + ". Pull shocked " + uTankTxt + " off the open to the rally point under " + uAATxt + ", then re-enter. Do not trickle back onto the same kill zone.",
      path: [lerp(enemyC, usC, 0.4), lerp(usC, enemyC, 0.22), usC],
      markers: [
        { kind: "fob", x: lerp(usC, enemyC, 0.15)[0], y: lerp(usC, enemyC, 0.15)[1], tip: "Rally / 2nd line" }
      ]
    });
    late.push({
      id: "l3", phase: "late",
      title: "AA check vs " + eHelTxt,
      tip: "Late helo plays decide open maps. Keep " + uAATxt + " alive and covering the open lane; if " + eHelTxt + " appears, prioritize them over trading tanks.",
      markers: [{ kind: "aa", x: lerp(usC, enemyC, 0.3)[0], y: lerp(usC, enemyC, 0.3)[1], r: 13, tip: uAATxt + " late umbrella" }]
    });
    late.push({
      id: "l4", phase: "late",
      title: "Clock management",
      tip: "With two minutes left, stop gambling for " + (cpEnemy2 ? cpEnemy2.label : "deep CPs") + " unless you need the points. Reinforce " + (cp1 ? cp1.label : "your CPs") + " and " + (cpMid ? cpMid.label : "mid") + "; spend income on " + uInfTxt + " replacements and ATGM.",
      markers: [{ kind: "cp", x: (cp1 || midZones[0] || { c: usC }).c[0], y: (cp1 || midZones[0] || { c: usC }).c[1], tip: "Hold income CPs" }]
    });
    late.push({
      id: "l5", phase: "late",
      title: "Deny last-minute " + eInfTxt + " snipes",
      tip: "Watch rear CPs and the deploy edge for " + eInfTxt + " / " + eHelTxt + " snipes. Leave one recon and a cheap infantry card on the backline.",
      markers: [{ kind: "inf", x: usC[0], y: usC[1], tip: "Backline security" }]
    });

    return {
      enemySide, ourSide, enemyC, usC,
      phases: { opening, mid, late },
      meta: { eTankTxt, eAATxt, eArtyTxt, uATTxt, uReconTxt, uAATxt, uArtyTxt, uHelTxt, uInfTxt, uTankTxt }
    };
  }


  function mergeNearby(items, dist) {
    const out = [];
    for (const it of items || []) {
      const hit = out.find(o => Math.hypot(o.x - it.x, o.y - it.y) < dist);
      if (hit) {
        hit.tip = (hit.tip || "") + " | " + (it.tip || "");
      } else out.push(Object.assign({}, it));
    }
    return out;
  }


  function typeIconHref(side, unit, kind) {
    const I = window.WARNO_UNIT_ICONS;
    if (!I || !I.resolveTypeIcon) return null;
    let href = I.resolveTypeIcon(side, unit, kind);
    if (!href) return null;
    const inApp = /\/app\/[^/]*$/.test(location.pathname) || location.pathname.endsWith("/app/") || location.pathname.endsWith("/app/index.html");
    if (!inApp && href.startsWith("unit-icons/")) href = "app/" + href;
    return href;
  }

  function shortLabel(kind, raw) {
    const map = {
      atgm: "ATGM", tank: "Tank", infantry: "Inf", recon: "Recon",
      aa: "AA", arty: "Arty", defend: "Hold", rally: "Rally",
      chokepoints: "Choke", helo: "Helo", advance: "Push", flank: "Flank",
      retreat: "Fall back", enemy: "Enemy"
    };
    if (raw && /^DEF |^ADV |^RALLY|^CHOKE|^2nd/.test(raw)) {
      return raw.replace(/^DEF /, "Hold ").replace(/^ADV /, "").replace(/^2nd LINE$/, "2nd line").slice(0, 12);
    }
    return map[kind] || (raw || kind).toString().slice(0, 10);
  }

  function iconGlyph(kind, x, y, color, tip, dim, stepId, unit, side) {
    const zf = zoomFactor();
    const s = 3.55 * zf;
    const ink = "#0b0f0d";
    const sw = 0.42 * zf;
    const opacity = dim ? 0.2 : 1;
    const data = `class="tac-icon${dim ? " dim" : ""}" data-tip="${esc(tip || "")}" data-kind="${esc(kind)}" data-step="${esc(stepId || "")}" opacity="${opacity}"`;
    // Soft drop shadow + dark badge plate
    const shadow = `<ellipse cx="${(x + 0.35 * zf).toFixed(2)}" cy="${(y + 0.55 * zf).toFixed(2)}" rx="${(s * 0.72).toFixed(2)}" ry="${(s * 0.48).toFixed(2)}" fill="rgba(0,0,0,0.45)" />`;
    const plate = `<circle cx="${x}" cy="${y}" r="${(s * 0.78).toFixed(2)}" fill="rgba(8,10,9,0.82)" stroke="${color}" stroke-width="${(0.35 * zf).toFixed(2)}" />`;
    let body = "";
    if (state.markerMode === "images") {
      const I = window.WARNO_UNIT_ICONS;
      // Simple in-game type pictograms: blue for NATO, red for PACT
      let href = null;
      if (I && I.resolveTypeIcon) href = I.resolveTypeIcon(side, unit, kind);
      else if (I && I.specialty) href = I.specialty[kind];
      if (href) {
        const inApp = /\/app\/[^/]*$/.test(location.pathname) || location.pathname.endsWith("/app/") || location.pathname.endsWith("/app/index.html");
        if (!inApp && href.startsWith("unit-icons/")) href = "app/" + href;
        const sz = (s * 1.55).toFixed(2);
        const hx = (x - s * 0.78).toFixed(2), hy = (y - s * 0.78).toFixed(2);
        body = `<image href="${esc(href)}" x="${hx}" y="${hy}" width="${sz}" height="${sz}" preserveAspectRatio="xMidYMid meet" />`;
        return `<g ${data}>${shadow}${plate}${body}</g>`;
      }
    }
    const xf = (v) => (x + v * s).toFixed(2);
    const yf = (v) => (y + v * s).toFixed(2);
    if (kind === "tank") {
      // APP-6 armor: oblong + barrel
      body = `<rect x="${xf(-0.55)}" y="${yf(-0.32)}" width="${(s * 1.1).toFixed(2)}" height="${(s * 0.64).toFixed(2)}" rx="0.28" fill="${color}" stroke="${ink}" stroke-width="${sw}" />` +
        `<rect x="${xf(0.05)}" y="${yf(-0.12)}" width="${(s * 0.62).toFixed(2)}" height="${(s * 0.22).toFixed(2)}" rx="0.12" fill="${ink}" opacity="0.85" />`;
    } else if (kind === "atgm") {
      body = `<polygon points="${xf(0)},${yf(-0.62)} ${xf(0.58)},${yf(0.48)} ${xf(-0.58)},${yf(0.48)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" stroke-linejoin="round" />` +
        `<line x1="${xf(0)}" y1="${yf(-0.2)}" x2="${xf(0)}" y2="${yf(0.35)}" stroke="${ink}" stroke-width="0.35" />`;
    } else if (kind === "infantry") {
      // APP-6 infantry: square with X
      body = `<rect x="${xf(-0.42)}" y="${yf(-0.42)}" width="${(s * 0.84).toFixed(2)}" height="${(s * 0.84).toFixed(2)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" />` +
        `<line x1="${xf(-0.42)}" y1="${yf(-0.42)}" x2="${xf(0.42)}" y2="${yf(0.42)}" stroke="${ink}" stroke-width="0.4" stroke-linecap="round" />` +
        `<line x1="${xf(0.42)}" y1="${yf(-0.42)}" x2="${xf(-0.42)}" y2="${yf(0.42)}" stroke="${ink}" stroke-width="0.4" stroke-linecap="round" />`;
    } else if (kind === "recon") {
      // Recon: diamond + eye
      body = `<polygon points="${xf(0)},${yf(-0.58)} ${xf(0.55)},${yf(0)} ${xf(0)},${yf(0.58)} ${xf(-0.55)},${yf(0)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" stroke-linejoin="round" />` +
        `<circle cx="${x}" cy="${y}" r="${(s * 0.14).toFixed(2)}" fill="${ink}" />`;
    } else if (kind === "aa") {
      body = `<circle cx="${x}" cy="${y}" r="${(s * 0.52).toFixed(2)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" />` +
        `<path d="M ${xf(-0.22)} ${yf(0.18)} L ${xf(0)} ${yf(-0.38)} L ${xf(0.22)} ${yf(0.18)} Z" fill="${ink}" />` +
        `<line x1="${xf(-0.32)}" y1="${yf(0.28)}" x2="${xf(0.32)}" y2="${yf(0.28)}" stroke="${ink}" stroke-width="0.35" stroke-linecap="round" />`;
    } else if (kind === "arty") {
      body = `<circle cx="${x}" cy="${y}" r="${(s * 0.52).toFixed(2)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" />` +
        `<circle cx="${x}" cy="${y}" r="${(s * 0.18).toFixed(2)}" fill="${ink}" />` +
        `<line x1="${xf(0)}" y1="${yf(-0.52)}" x2="${xf(0)}" y2="${yf(-0.22)}" stroke="${ink}" stroke-width="0.4" stroke-linecap="round" />`;
    } else if (kind === "defend") {
      // Fortification: stacked defensive arcs facing outward (up)
      body = `<path d="M ${xf(-0.62)} ${yf(0.15)} Q ${xf(0)} ${yf(-0.55)} ${xf(0.62)} ${yf(0.15)}" fill="none" stroke="${color}" stroke-width="0.7" stroke-linecap="round" />` +
        `<path d="M ${xf(-0.48)} ${yf(0.32)} Q ${xf(0)} ${yf(-0.22)} ${xf(0.48)} ${yf(0.32)}" fill="none" stroke="${color}" stroke-width="0.55" stroke-linecap="round" />` +
        `<path d="M ${xf(-0.32)} ${yf(0.48)} Q ${xf(0)} ${yf(0.08)} ${xf(0.32)} ${yf(0.48)}" fill="none" stroke="${ink}" stroke-width="0.4" stroke-linecap="round" />` +
        `<circle cx="${x}" cy="${yf(0.05)}" r="${(s * 0.12).toFixed(2)}" fill="${color}" stroke="${ink}" stroke-width="0.25" />`;
    } else if (kind === "rally") {
      body = `<line x1="${xf(-0.12)}" y1="${yf(0.58)}" x2="${xf(-0.12)}" y2="${yf(-0.55)}" stroke="${ink}" stroke-width="0.45" stroke-linecap="round" />` +
        `<path d="M ${xf(-0.12)} ${yf(-0.55)} L ${xf(0.55)} ${yf(-0.28)} L ${xf(-0.12)} ${yf(0.02)} Z" fill="${color}" stroke="${ink}" stroke-width="${sw}" stroke-linejoin="round" />`;
    } else if (kind === "chokepoints") {
      body = `<polygon points="${xf(0)},${yf(-0.58)} ${xf(0.5)},${yf(0)} ${xf(0)},${yf(0.58)} ${xf(-0.5)},${yf(0)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" stroke-linejoin="round" />` +
        `<line x1="${xf(-0.22)}" y1="${yf(0)}" x2="${xf(0.22)}" y2="${yf(0)}" stroke="${ink}" stroke-width="0.35" />`;
    } else if (kind === "helo") {
      body = `<ellipse cx="${x}" cy="${y}" rx="${(s * 0.58).toFixed(2)}" ry="${(s * 0.26).toFixed(2)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" />` +
        `<line x1="${xf(-0.7)}" y1="${yf(0)}" x2="${xf(0.7)}" y2="${yf(0)}" stroke="${ink}" stroke-width="0.35" stroke-linecap="round" />` +
        `<line x1="${xf(0)}" y1="${yf(-0.35)}" x2="${xf(0)}" y2="${yf(0.35)}" stroke="${ink}" stroke-width="0.3" />`;
    } else {
      body = `<circle cx="${x}" cy="${y}" r="${(s * 0.48).toFixed(2)}" fill="${color}" stroke="${ink}" stroke-width="${sw}" />`;
    }
    return `<g ${data}>${shadow}${plate}${body}</g>`;
  }

  function labelPill(x, y, text, color, dim, iconHref) {
    const zf = zoomFactor();
    const t = String(text || "").slice(0, showDetailLabels() ? 18 : 12);
    const icon = iconHref ? (2.55 * zf) : 0;
    const gap = iconHref ? (0.55 * zf) : 0;
    const textW = Math.max(7, t.length * 1.28 + 2.6) * zf;
    const w = textW + (icon ? (icon + gap) : 0);
    const h = Math.max(2.95 * zf, icon ? (icon + 0.35 * zf) : 0);
    const op = dim ? 0.18 : 0.96;
    const left = x - w / 2;
    const rx = left.toFixed(2);
    const ry = (y - h - 0.15).toFixed(2);
    let iconSvg = "";
    let textX = x;
    if (iconHref) {
      const ix = left + 0.35 * zf;
      const iy = y - h - 0.15 + (h - icon) / 2;
      iconSvg = `<image href="${esc(iconHref)}" x="${ix.toFixed(2)}" y="${iy.toFixed(2)}" width="${icon.toFixed(2)}" height="${icon.toFixed(2)}" preserveAspectRatio="xMidYMid meet" />`;
      textX = left + icon + gap + (textW / 2);
    }
    return `<g class="tac-label" opacity="${op}" pointer-events="none">
      <rect x="${(left + 0.25).toFixed(2)}" y="${(parseFloat(ry) + 0.35).toFixed(2)}" width="${w.toFixed(2)}" height="${h}" rx="0.7" fill="rgba(0,0,0,0.4)" />
      <rect x="${rx}" y="${ry}" width="${w.toFixed(2)}" height="${h}" rx="0.7"
        fill="rgba(8,10,9,0.9)" stroke="${color}" stroke-width="0.32" />
      ${iconSvg}
      <text x="${textX.toFixed(2)}" y="${(y - 0.78 * zf).toFixed(2)}" text-anchor="middle"
        font-family="Segoe UI, system-ui, sans-serif" font-size="${(2.05 * zf).toFixed(2)}" font-weight="700" fill="#f4f7f2">${esc(t)}</text>
    </g>`;
  }

  function resolveLabels(items) {
    const placed = [];
    for (const it of items) {
      let x = it.x, y = it.y;
      for (let n = 0; n < 16; n++) {
        let hit = false;
        for (const p of placed) {
          if (Math.hypot(p.x - x, p.y - y) < 5.4) { hit = true; break; }
        }
        if (!hit && !inWater(x, y, state.mapId)) break;
        const ang = (n * 48) * Math.PI / 180;
        x = it.x + Math.cos(ang) * (4.0 + n * 0.5);
        y = it.y + Math.sin(ang) * (4.0 + n * 0.5);
      }
      [x, y] = nudgeOffWater(x, y, state.mapId);
      x = Math.max(4, Math.min(96, x));
      y = Math.max(5, Math.min(96, y));
      placed.push(Object.assign({}, it, { x, y }));
    }
    return placed;
  }

  // Build cubic/quadratic segments through waypoints; shaft is cut along the sampled curve.
  function pathSegments(pts) {
    const p = (pts || []).map(pt => [+pt[0], +pt[1]]);
    if (p.length < 2) return null;
    const segs = [];
    if (p.length === 2) {
      const [a, b] = p;
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      const dx = b[1] - a[1], dy = a[0] - b[0];
      const L = Math.hypot(dx, dy) || 1;
      const bulge = Math.min(6, L * 0.12);
      const c = [mx + dx / L * bulge, my + dy / L * bulge];
      segs.push({ type: "Q", a: a, c: c, b: b });
    } else {
      for (let i = 0; i < p.length - 1; i++) {
        const p0 = p[i - 1] || p[i];
        const p1 = p[i];
        const p2 = p[i + 1];
        const p3 = p[i + 2] || p2;
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        segs.push({ type: "C", a: p1, c1: c1, c2: c2, b: p2 });
      }
    }
    return { pts: p, segs: segs };
  }

  function bezPoint(seg, t) {
    const u = 1 - t;
    if (seg.type === "Q") {
      return [
        u * u * seg.a[0] + 2 * u * t * seg.c[0] + t * t * seg.b[0],
        u * u * seg.a[1] + 2 * u * t * seg.c[1] + t * t * seg.b[1]
      ];
    }
    return [
      u * u * u * seg.a[0] + 3 * u * u * t * seg.c1[0] + 3 * u * t * t * seg.c2[0] + t * t * t * seg.b[0],
      u * u * u * seg.a[1] + 3 * u * u * t * seg.c1[1] + 3 * u * t * t * seg.c2[1] + t * t * t * seg.b[1]
    ];
  }

  function endTangent(segs) {
    const s = segs[segs.length - 1];
    let tx, ty;
    if (s.type === "Q") {
      tx = s.b[0] - s.c[0];
      ty = s.b[1] - s.c[1];
    } else {
      tx = s.b[0] - s.c2[0];
      ty = s.b[1] - s.c2[1];
    }
    let n = Math.hypot(tx, ty);
    if (n < 1e-6) {
      tx = s.b[0] - s.a[0];
      ty = s.b[1] - s.a[1];
      n = Math.hypot(tx, ty) || 1;
    }
    return { ux: tx / n, uy: ty / n, ang: Math.atan2(ty, tx), tip: [s.b[0], s.b[1]] };
  }

  function sampleCurve(segs, perSeg) {
    const out = [];
    for (let i = 0; i < segs.length; i++) {
      const start = (i === 0) ? 0 : 1;
      for (let k = start; k <= perSeg; k++) {
        out.push(bezPoint(segs[i], k / perSeg));
      }
    }
    return out;
  }

  function cutShaftSamples(samples, cutDist) {
    if (samples.length < 2) return samples.slice();
    // Walk backward from tip by cutDist along the polyline
    let remain = cutDist;
    let i = samples.length - 1;
    while (i > 0 && remain > 0) {
      const a = samples[i - 1], b = samples[i];
      const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (L >= remain) {
        const t = remain / L;
        const cut = [b[0] - (b[0] - a[0]) * t, b[1] - (b[1] - a[1]) * t];
        return samples.slice(0, i).concat([cut]);
      }
      remain -= L;
      i--;
    }
    return samples.slice(0, Math.max(2, samples.length - 1));
  }

  function samplesToD(samples) {
    if (!samples || samples.length < 2) return "";
    // Light Chaikin-ish smooth via midpoints for a clean stroke
    let d = `M ${samples[0][0].toFixed(2)} ${samples[0][1].toFixed(2)}`;
    if (samples.length === 2) {
      d += ` L ${samples[1][0].toFixed(2)} ${samples[1][1].toFixed(2)}`;
      return d;
    }
    for (let i = 1; i < samples.length - 1; i++) {
      const c = samples[i];
      const n = samples[i + 1];
      const mx = (c[0] + n[0]) / 2, my = (c[1] + n[1]) / 2;
      d += ` Q ${c[0].toFixed(2)} ${c[1].toFixed(2)} ${mx.toFixed(2)} ${my.toFixed(2)}`;
    }
    const last = samples[samples.length - 1];
    d += ` T ${last[0].toFixed(2)} ${last[1].toFixed(2)}`;
    return d;
  }

  function smoothPath(pts) {
    const g = pathSegments(pts);
    if (!g) return "";
    return samplesToD(sampleCurve(g.segs, 16));
  }

  function arrowHeadAt(tip, ang, color, dim, style) {
    const zf = zoomFactor();
    const len = (style === "retreat" ? 2.35 : 2.85) * zf;
    const half = style === "retreat" ? 0.4 : 0.45;
    const left = [tip[0] - len * Math.cos(ang - half), tip[1] - len * Math.sin(ang - half)];
    const right = [tip[0] - len * Math.cos(ang + half), tip[1] - len * Math.sin(ang + half)];
    const op = dim ? 0.18 : 0.98;
    const baseInset = len * Math.cos(half);
    const grow = 0.2;
    const len2 = len + grow;
    const left2 = [tip[0] - len2 * Math.cos(ang - half), tip[1] - len2 * Math.sin(ang - half)];
    const right2 = [tip[0] - len2 * Math.cos(ang + half), tip[1] - len2 * Math.sin(ang + half)];
    const ptsFill = `${tip[0].toFixed(2)},${tip[1].toFixed(2)} ${left[0].toFixed(2)},${left[1].toFixed(2)} ${right[0].toFixed(2)},${right[1].toFixed(2)}`;
    const ptsHalo = `${tip[0].toFixed(2)},${tip[1].toFixed(2)} ${left2[0].toFixed(2)},${left2[1].toFixed(2)} ${right2[0].toFixed(2)},${right2[1].toFixed(2)}`;
    const wings = `M ${left[0].toFixed(2)} ${left[1].toFixed(2)} L ${tip[0].toFixed(2)} ${tip[1].toFixed(2)} L ${right[0].toFixed(2)} ${right[1].toFixed(2)}`;
    // Stem covers the join: a short thick bar from the base toward the tip along the tangent
    const ux = Math.cos(ang), uy = Math.sin(ang);
    const stemBack = [tip[0] - ux * (baseInset + 0.15), tip[1] - uy * (baseInset + 0.15)];
    const stemNear = [tip[0] - ux * (baseInset * 0.35), tip[1] - uy * (baseInset * 0.35)];
    const stem = `M ${stemBack[0].toFixed(2)} ${stemBack[1].toFixed(2)} L ${stemNear[0].toFixed(2)} ${stemNear[1].toFixed(2)}`;
    const svg =
      `<g class="tac-arrow" data-tip-x="${tip[0].toFixed(3)}" data-tip-y="${tip[1].toFixed(3)}" data-ang="${ang.toFixed(4)}" opacity="${op}">` +
      `<path d="${stem}" stroke="#0a0c0a" stroke-width="1.55" stroke-linecap="butt" />` +
      `<path d="${stem}" stroke="${color}" stroke-width="1.25" stroke-linecap="butt" />` +
      `<polygon points="${ptsHalo}" fill="#0a0c0a" opacity="0.92" />` +
      `<polygon points="${ptsFill}" fill="${color}" />` +
      `<path d="${wings}" fill="none" stroke="#0a0c0a" stroke-width="0.26" stroke-linejoin="round" stroke-linecap="round" />` +
      `</g>`;
    return { len: len, half: half, baseInset: baseInset, svg: svg };
  }

  function drawPath(pathPts, color, tip, kind, dim) {
    const g = pathSegments(pathPts);
    if (!g) return "";
    const tan = endTangent(g.segs);
    const head = arrowHeadAt(tan.tip, tan.ang, color, dim, kind);
    const samples = sampleCurve(g.segs, 20);
    // Leave the curve before the head, then finish with a straight run along the end
    // tangent into the triangle base so the shaft seats on-axis (no off-curve gap).
    const approachCut = head.baseInset + 1.8;
    const colorInset = Math.max(0.55, head.baseInset - 0.45);
    const haloInset = head.baseInset + 0.2;
    const approach = cutShaftSamples(samples, approachCut);
    const colorEnd = [tan.tip[0] - tan.ux * colorInset, tan.tip[1] - tan.uy * colorInset];
    const haloEnd = [tan.tip[0] - tan.ux * haloInset, tan.tip[1] - tan.uy * haloInset];
    const colorSamples = approach.concat([colorEnd]);
    const haloSamples = approach.concat([haloEnd]);
    const dColor = samplesToD(colorSamples);
    const dHalo = samplesToD(haloSamples);
    const shaftEnd = colorEnd;
    const op = dim ? 0.14 : 0.96;
    const isRetreat = kind === "retreat";
    const isEnemy = kind === "enemy";
    const zf = zoomFactor();
    const sw = (isEnemy ? 1.2 : (isRetreat ? 1.05 : 1.25)) * zf;
    const dash = isRetreat ? "stroke-dasharray=\"2.2 1.35\"" : (kind === "flank" ? "stroke-dasharray=\"3.2 1.1 0.7 1.1\"" : "");
    const haloW = sw + 1.1;
    let out = "";
    out += `<path class="tac-path-halo" d="${dHalo}" fill="none" stroke="#060807" stroke-width="${haloW}" stroke-linecap="butt" stroke-linejoin="round" opacity="${(op * 0.82).toFixed(2)}" />`;
    out += `<path class="tac-path" d="${dColor}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="butt" stroke-linejoin="round" opacity="${op}" ${dash} data-tip="${esc(tip || "")}" data-end-x="${tan.tip[0].toFixed(3)}" data-end-y="${tan.tip[1].toFixed(3)}" data-end-ang="${tan.ang.toFixed(4)}" data-shaft-x="${shaftEnd[0].toFixed(3)}" data-shaft-y="${shaftEnd[1].toFixed(3)}" />`;
    out += head.svg;
    return out;
  }

  function phaseOk(p) {
    if (!p) return true;
    if (state.phase === "opening") return p === "opening";
    if (state.phase === "mid") return p === "opening" || p === "mid";
    return true;
  }

  function selectEssentials(layout, plan) {
    // Full battle-plan content; declutter is via layer toggles + phase, not by dropping data.
    const T = layout.tactics || {};
    const our = plan.ourSide;
    const enemy = plan.enemySide;
    const L = state.layers;
    const marks = [];
    const paths = [];

    function pushMark(kind, group, arr, filterFn) {
      if (!L[group]) return;
      let list = (arr || []).filter(filterFn || (() => true));
      list = mergeNearby(list.map(d => {
        const unit = pickUnitForKind(kind);
        return {
          kind, group,
          x: d.x, y: d.y, r: d.r, tip: d.tip,
          label: shortLabel(kind, d.label),
          detail: (unit && unit.name) || d.label || shortLabel(kind, d.label),
          side: d.side || our,
          phase: d.phase,
          unit: unit
        };
      }), kind === "chokepoints" ? 7 : 5);
      marks.push(...list);
    }

    // Terrain
    pushMark("chokepoints", "terrain", T.chokepoints);

    // Friendly force markers by role
    pushMark("atgm", "at", T.atgm);
    pushMark("tank", "armor", T.tank);
    pushMark("infantry", "infantry", T.infantry);
    pushMark("recon", "recon", T.recon);
    pushMark("aa", "aa", (T.aa || []).filter(d => !d.side || d.side === our));
    pushMark("arty", "arty", (T.arty || []).filter(d => !d.side || d.side === our));
    pushMark("defend", "defend", (T.defend || []).filter(d => d.side === our && phaseOk(d.phase)));
    pushMark("rally", "support", (T.rally || []).filter(d => !d.side || d.side === our));

    // Helo lanes as marks at path midpoints when layer on
    if (L.helo) {
      (T.helo || []).filter(h => !h.side || h.side === our).forEach(h => {
        const p = h.path || [];
        if (p.length >= 2) {
          const mid = p[Math.floor(p.length / 2)];
          const unit = pickUnitForKind("helo");
          marks.push({ kind: "helo", group: "helo", x: mid[0], y: mid[1], tip: h.tip, label: "Helo", detail: (unit && unit.name) || "Helo", unit, side: our });
        }
        if (L.advance || L.flank) {
          // also draw helo path as flank-styled when movement-like layers allow
        }
      });
    }

    // Movement paths (full set for phase)
    if (L.advance) {
      (T.advance || []).filter(a => a.side === our && phaseOk(a.phase)).forEach(a =>
        paths.push({ kind: "advance", group: "advance", path: a.path, tip: a.tip, label: shortLabel("advance", a.label), color: sideColor(our) }));
    }
    if (L.flank) {
      (T.flank || []).filter(a => a.side === our && phaseOk(a.phase)).forEach(a =>
        paths.push({ kind: "flank", group: "flank", path: a.path, tip: a.tip, label: "Flank", color: sideColor(our) }));
    }
    if (L.retreat && state.phase !== "opening") {
      (T.retreat || []).filter(a => a.side === our).forEach(a =>
        paths.push({ kind: "retreat", group: "retreat", path: a.path, tip: a.tip, label: "Fall back", color: "#e0b84a" }));
    }
    if (L.helo) {
      (T.helo || []).filter(h => (!h.side || h.side === our) && h.path).forEach(h =>
        paths.push({ kind: "flank", group: "helo", path: h.path, tip: h.tip, label: "Helo lane", color: "#9b7ed9" }));
    }

    // Enemy expected moves + threat AA
    if (L.enemy) {
      (T.enemy_plan || []).filter(a => !a.side || a.side === enemy || a.side === our).forEach(a =>
        paths.push({ kind: "enemy", group: "enemy", path: a.path, tip: a.tip, label: shortLabel("enemy", a.label), color: sideColor(enemy) }));
      (T.aa || []).filter(d => d.side === enemy).forEach(d => {
        marks.push({ kind: "aa", group: "enemy", x: d.x, y: d.y, r: d.r, tip: d.tip, label: "Enemy AA", detail: "Enemy AA", side: enemy });
      });
    }

    return { marks, paths };
  }

  function mapImageUrl(layout, mapId) {
    let img = (layout && layout.map_image) ? ("maps/" + layout.map_image) : "";
    if (!img && OVERLAYS._image && OVERLAYS._image[mapId]) img = OVERLAYS._image[mapId];
    const inApp = /\/app\/[^/]*$/.test(location.pathname) || location.pathname.endsWith("/app/") || location.pathname.endsWith("/app/index.html");
    if (img && !inApp && img.startsWith("maps/")) img = "app/" + img;
    return img;
  }

  function sideColor(side) {
    return side === "PACT" ? "#e0554a" : "#4a9de0";
  }

  function colorsFor(kind, ourSide, group) {
    if (group === "enemy" || kind === "enemy") {
      // Enemy markers tinted to enemy alliance (blue NATO / red PACT)
      const enemy = ourSide === "NATO" ? "PACT" : "NATO";
      return sideColor(enemy);
    }
    const map = {
      atgm: "#e08a3a", tank: "#c9a15c", infantry: "#7eb87a", recon: "#6aae78",
      aa: "#5aa0d4", arty: "#c4a04a", defend: "#5b8fc7", rally: "#8eb0dc",
      chokepoints: "#d2c98a", helo: "#9b7ed9"
    };
    if (kind === "advance" || kind === "flank") return sideColor(ourSide);
    if (kind === "retreat") return "#e0b84a";
    return map[kind] || sideColor(ourSide);
  }

  function inWater(x, y, mapId) {
    const samples = WATER_SAMPLES[mapId] || [];
    for (const p of samples) {
      if (Math.hypot(p[0] - x, p[1] - y) < 7.5) return true;
    }
    return false;
  }

  function nudgeOffWater(x, y, mapId) {
    if (!inWater(x, y, mapId)) return [x, y];
    // Step toward map center (inland for typical lake placements)
    const cx = 50, cy = 50;
    let nx = x, ny = y;
    for (let i = 0; i < 12; i++) {
      nx += (cx - nx) * 0.18;
      ny += (cy - ny) * 0.18;
      if (!inWater(nx, ny, mapId)) break;
    }
    return [Math.max(4, Math.min(96, nx)), Math.max(4, Math.min(96, ny))];
  }

  function renderSvg(mapId) {
    const layout = OVERLAYS[mapId];
    if (!layout) return "<p class='warn'>No overlay layout for this map.</p>";
    const img = mapImageUrl(layout, mapId);
    const plan = buildPlan(layout);
    const steps = plan.phases[state.phase] || [];
    const ess = selectEssentials(layout, plan);
    const hi = state.highlightStep;
    const hiStep = hi ? steps.find(s => s.id === hi) : null;

    let svg = "";
    const labelItems = [];

    // Paths (halo + stroke + shaped head)
    ess.paths.forEach(p => {
      const mp = mapPath(p.path, layout);
      const dim = !!(hi && hiStep && !(hiStep.path && pathClose(hiStep.path, mp)));
      svg += drawPath(mp, p.color, p.tip || p.label, p.kind, dim);
      if (p.label && mp.length) {
        const last = mp[mp.length - 1];
        const [lx, ly] = nudgeOffWater(last[0], last[1] - 3.2, mapId);
        labelItems.push({ x: lx, y: ly, text: p.label, color: p.color, dim });
      }
    });

    // Plan step path highlight
    if (hiStep && hiStep.path && hiStep.path.length >= 2) {
      const mp = hiStep.path;
      svg += drawPath(mp, "#e07a3d", hiStep.tip, "advance", false);
    }

    // Markers
    ess.marks.forEach(m => {
      let [x, y] = mapPt(m.x, m.y, layout);
      [x, y] = nudgeOffWater(x, y, mapId);
      const dim = !!(hi && hiStep && !stepOwnsMark(hiStep, m, x, y));
      const col = colorsFor(m.kind, plan.ourSide, m.group);
      const markSide = m.side || (m.group === "enemy" ? plan.enemySide : plan.ourSide);
      svg += iconGlyph(m.kind, x, y, col, m.tip, dim, hi || "", m.unit, markSide);
      // Ranges: AA/arty rings when ranges layer on or hovering AA
      if ((m.kind === "aa" || m.kind === "arty") && m.r && (state.layers.ranges || state.hoverAA === m.tip)) {
        svg += `<circle class="aa-range" cx="${x}" cy="${y}" r="${m.r}" fill="none" stroke="${col}" stroke-width="${(0.4 * zoomFactor()).toFixed(2)}" opacity="0.4" stroke-dasharray="1.2 0.8" />`;
      }
      const lab = showDetailLabels() ? (m.detail || m.label) : m.label;
      const icon = (state.markerMode === "images") ? typeIconHref(markSide, m.unit, m.kind) : null;
      labelItems.push({ x, y: y - 4.4 * zoomFactor(), text: lab, color: col, dim, icon });
    });

    // Step markers when highlighted
    if (hiStep) {
      (hiStep.markers || []).forEach(m => {
        const col = colorsFor(m.kind === "inf" ? "infantry" : m.kind === "armor" ? "tank" : m.kind, plan.ourSide, "your_units");
        const kind = m.kind === "inf" ? "infantry" : m.kind === "armor" ? "tank" : m.kind === "fob" ? "rally" : m.kind === "cp" ? "defend" : m.kind;
        const u = pickUnitForKind(kind);
        svg += iconGlyph(kind, m.x, m.y, col, m.tip, false, hiStep.id, u, plan.ourSide);
        if (m.r && (state.layers.ranges || state.hoverAA)) {
          svg += `<circle class="aa-range" cx="${m.x}" cy="${m.y}" r="${m.r}" fill="none" stroke="${col}" stroke-width="${(0.35 * zoomFactor()).toFixed(2)}" opacity="0.4" />`;
        }
        const ic = (state.markerMode === "images") ? typeIconHref(plan.ourSide, u, kind) : null;
        labelItems.push({ x: m.x, y: m.y - 4.2 * zoomFactor(), text: shortLabel(kind), color: col, dim: false, icon: ic });
      });
    }

    resolveLabels(labelItems).forEach(l => { svg += labelPill(l.x, l.y, l.text, l.color, l.dim, l.icon); });

    const ms = layout.map_size || [1024, 1536];
    const ar = ms[0] / ms[1];
    const maxH = 860;
    const frameH = maxH;
    const frameW = Math.round(frameH * ar);
    const transformStyle = `transform: translate(${state.panX}px, ${state.panY}px) scale(${state.zoom}); transform-origin: 0 0;`;
    const src = layout.map_image_source || layout.source || "game";
    return `
      <div class="map-stage" id="map-stage">
        <div class="map-zoom-inner" style="${transformStyle}">
          <div class="map-frame" style="aspect-ratio:${ar}; height:${frameH}px; width:${frameW}px; max-width:100%;">
            <img src="${esc(img)}" alt="${esc(mapId)} minimap" class="map-img" draggable="false" />
            <svg class="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">${svg}</svg>
          </div>
        </div>
        <div class="map-tip" id="map-tip" hidden></div>
        <div class="map-zoom-controls">
          <button type="button" class="secondary" data-zoom="in">+</button>
          <button type="button" class="secondary" data-zoom="out">-</button>
          <button type="button" class="secondary" data-zoom="reset">Reset</button>
        </div>
      </div>
      <p class="map-orient">${esc(src)} · ${esc(layout.transform || "")} · you ${esc(plan.ourSide)} vs ${esc(plan.enemySide)} · full plan · toggle layers</p>`;
  }

  function pathClose(a, b) {
    if (!a || !b || !a.length || !b.length) return false;
    const a0 = a[0], b0 = b[0], a1 = a[a.length - 1], b1 = b[b.length - 1];
    return Math.hypot(a0[0] - b0[0], a0[1] - b0[1]) < 8 && Math.hypot(a1[0] - b1[0], a1[1] - b1[1]) < 10;
  }
  function stepOwnsMark(step, m, x, y) {
    if (!step) return false;
    if (step.path && step.path.length) {
      const last = step.path[step.path.length - 1];
      if (Math.hypot(last[0] - x, last[1] - y) < 10) return true;
    }
    return (step.markers || []).some(sm => Math.hypot(sm.x - x, sm.y - y) < 8);
  }

  function planPanelHtml(layout) {
    const plan = buildPlan(layout || {});
    const steps = plan.phases[state.phase] || [];
    const stats = (layout && layout.terrain_stats) || {};
    return `<div class="plan-panel">
      <h3>Suggested plan <span class="warn">(not gospel)</span></h3>
      <p class="plan-sides">You: <strong class="${plan.ourSide === "NATO" ? "nato" : "pact"}">${esc(plan.ourSide)}</strong>
        · Enemy: <strong class="${plan.enemySide === "NATO" ? "nato" : "pact"}">${esc(plan.enemySide)}</strong></p>
      <p class="plan-terrain">Terrain: forest ${esc(stats.forest_pct)}% · open ${esc(stats.open_pct)}% · water ${esc(stats.water_pct)}% · towns ${esc(stats.town_pct)}%</p>
      <div class="phase-tabs">
        <button type="button" data-phase="opening" class="phase-btn ${state.phase === "opening" ? "active" : ""}">Opening</button>
        <button type="button" data-phase="mid" class="phase-btn ${state.phase === "mid" ? "active" : ""}">Mid</button>
        <button type="button" data-phase="late" class="phase-btn ${state.phase === "late" ? "active" : ""}">Late</button>
      </div>
      <ol class="plan-steps">
        ${steps.map(s => `<li class="plan-step ${state.highlightStep === s.id ? "active" : ""}" data-step="${esc(s.id)}">
          <strong>${esc(s.title)}</strong>
          <span>${esc(s.tip)}</span>
        </li>`).join("")}
      </ol>
    </div>`;
  }

  function legendHtml() {
    const layers = GROUPS.map(g =>
      `<label class="leg-item"><input type="checkbox" data-layer="${g.id}" ${state.layers[g.id] ? "checked" : ""}/> <i style="background:${g.color}"></i> ${esc(g.label)}</label>`
    ).join("");
    return `<div class="legend-actions">
      <button type="button" class="secondary" data-layers="all">Show all</button>
      <button type="button" class="secondary" data-layers="none">Hide all</button>
      <label class="leg-item mode"><input type="checkbox" data-marker-mode="images" ${state.markerMode === "images" ? "checked" : ""}/> Unit type icons</label>
    </div>` + layers;
  }

  function mount(root, mapId, ctx) {
    state.mapId = mapId;
    state.zoom = 1; state.panX = 0; state.panY = 0; state.highlightStep = null; state.hoverAA = null;
    if (ctx && ctx.analysis !== undefined) {
      state.analysis = ctx.analysis; state.counter = ctx.counter; state.decoded = ctx.decoded;
    } else {
      state.analysis = arguments[2]; state.counter = arguments[3];
      state.decoded = (window.__last && window.__last.decoded) || null;
    }
    const layout = OVERLAYS[mapId];
    root.innerHTML = "";
    root.appendChild(Object.assign(document.createElement("h2"), { textContent: "Tactical map" }));
    const meta = document.createElement("div");
    meta.className = "meta";
    const src = layout && layout.map_image_source;
    meta.innerHTML = "<strong>" + esc((window.WARNO_MAPS || []).find(m => m.id === mapId)?.name || mapId) + "</strong> · " +
      (src ? ("game " + esc(String(src).replace("game_", "")) + " texture · exact bounds") : "map") +
      " · <span class='warn'>plan suggested</span>";
    root.appendChild(meta);
    const controls = document.createElement("div");
    controls.className = "map-controls";
    controls.innerHTML = `<button type="button" class="secondary" id="flip-spawn">Override: flip sides</button><div class="legend">${legendHtml()}</div>`;
    root.appendChild(controls);
    const wrap = document.createElement("div");
    wrap.className = "map-plan-wrap";
    wrap.innerHTML = `<div id="map-body">${renderSvg(mapId)}</div>${planPanelHtml(layout || {})}`;
    root.appendChild(wrap);
    const foot = document.createElement("p");
    foot.className = "map-credit";
    foot.textContent = (OVERLAYS._note || "") + " " + (OVERLAYS._credit || "");
    root.appendChild(foot);
    bind(root);
  }

  function reRender(root) {
    const body = root.querySelector("#map-body");
    const layout = OVERLAYS[state.mapId];
    if (body) body.innerHTML = renderSvg(state.mapId);
    const panel = root.querySelector(".plan-panel");
    if (panel) panel.outerHTML = planPanelHtml(layout || {});
    const legend = root.querySelector(".legend");
    if (legend) legend.innerHTML = legendHtml();
    bind(root);
  }

  function bindTips(root) {
    const tip = root.querySelector("#map-tip");
    root.querySelectorAll("[data-tip]").forEach(el => {
      el.addEventListener("mousemove", ev => {
        if (!tip) return;
        tip.hidden = false;
        tip.textContent = el.getAttribute("data-tip");
        const stage = root.querySelector(".map-stage");
        if (!stage) return;
        const r = stage.getBoundingClientRect();
        tip.style.left = (ev.clientX - r.left + 12) + "px";
        tip.style.top = (ev.clientY - r.top + 12) + "px";
        if (el.getAttribute("data-kind") === "aa") {
          const next = el.getAttribute("data-tip");
          if (state.hoverAA !== next) { state.hoverAA = next; /* soft refresh rings */ }
        }
      });
      el.addEventListener("mouseleave", () => {
        if (tip) tip.hidden = true;
        if (el.getAttribute("data-kind") === "aa") state.hoverAA = null;
      });
    });
  }

  function bindZoomPan(root) {
    const stage = root.querySelector("#map-stage");
    if (!stage) return;
    root.querySelectorAll("[data-zoom]").forEach(btn => {
      btn.onclick = () => {
        const z = btn.getAttribute("data-zoom");
        if (z === "in") state.zoom = Math.min(5, state.zoom * 1.25);
        else if (z === "out") state.zoom = Math.max(0.7, state.zoom / 1.25);
        else if (z === "reset") { state.zoom = 1; state.panX = 0; state.panY = 0; }
        reRender(root);
      };
    });
    let dragging = false, lx = 0, ly = 0;
    stage.addEventListener("pointerdown", ev => {
      if (ev.target.closest("[data-zoom]") || ev.target.closest("button")) return;
      if (Math.abs(state.zoom - 1) < 0.02) return;
      dragging = true; lx = ev.clientX; ly = ev.clientY;
      stage.setPointerCapture(ev.pointerId);
      stage.classList.add("panning");
    });
    stage.addEventListener("pointermove", ev => {
      if (!dragging) return;
      state.panX += ev.clientX - lx; state.panY += ev.clientY - ly;
      lx = ev.clientX; ly = ev.clientY;
      const inner = root.querySelector(".map-zoom-inner");
      if (inner) inner.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    });
    stage.addEventListener("pointerup", () => { dragging = false; stage.classList.remove("panning"); });
    stage.addEventListener("wheel", ev => {
      ev.preventDefault();
      const prev = state.zoom;
      if (ev.deltaY < 0) state.zoom = Math.min(5, state.zoom * 1.12);
      else state.zoom = Math.max(0.7, state.zoom / 1.12);
      // Zoom toward cursor: adjust pan so point under cursor stays put
      const rect = stage.getBoundingClientRect();
      const cx = ev.clientX - rect.left;
      const cy = ev.clientY - rect.top;
      const k = state.zoom / prev;
      state.panX = cx - (cx - state.panX) * k;
      state.panY = cy - (cy - state.panY) * k;
      if (Math.abs(state.zoom - 1) < 0.02) { state.zoom = 1; state.panX = 0; state.panY = 0; }
      reRender(root);
    }, { passive: false });
    // Pinch zoom (touch)
    let pinch = null;
    stage.addEventListener("touchstart", ev => {
      if (ev.touches.length === 2) {
        const dx = ev.touches[0].clientX - ev.touches[1].clientX;
        const dy = ev.touches[0].clientY - ev.touches[1].clientY;
        pinch = { dist: Math.hypot(dx, dy), zoom: state.zoom };
      }
    }, { passive: true });
    stage.addEventListener("touchmove", ev => {
      if (!pinch || ev.touches.length !== 2) return;
      ev.preventDefault();
      const dx = ev.touches[0].clientX - ev.touches[1].clientX;
      const dy = ev.touches[0].clientY - ev.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      state.zoom = Math.max(0.7, Math.min(5, pinch.zoom * (dist / pinch.dist)));
      reRender(root);
    }, { passive: false });
    stage.addEventListener("touchend", () => { pinch = null; }, { passive: true });
  }

  function bind(root) {
    const flipBtn = root.querySelector("#flip-spawn");
    if (flipBtn) flipBtn.onclick = () => { state.flip = !state.flip; reRender(root); };
    root.querySelectorAll("[data-layers]").forEach(btn => {
      btn.onclick = () => {
        const mode = btn.getAttribute("data-layers");
        const on = mode === "all";
        GROUPS.forEach(g => { state.layers[g.id] = on ? true : false; });
        // keep ranges off unless show-all explicitly wants everything
        if (on) state.layers.ranges = true;
        reRender(root);
      };
    });
    const modeInp = root.querySelector("input[data-marker-mode]");
    if (modeInp) modeInp.onchange = () => {
      state.markerMode = modeInp.checked ? "images" : "symbols";
      reRender(root);
    };
    root.querySelectorAll("input[data-layer]").forEach(inp => {
      inp.onchange = () => { state.layers[inp.getAttribute("data-layer")] = inp.checked; reRender(root); };
    });
    root.querySelectorAll(".phase-btn").forEach(btn => {
      btn.onclick = () => { state.phase = btn.getAttribute("data-phase"); state.highlightStep = null; reRender(root); };
    });
    root.querySelectorAll(".plan-step").forEach(li => {
      li.onclick = () => {
        const id = li.getAttribute("data-step");
        state.highlightStep = state.highlightStep === id ? null : id;
        reRender(root);
      };
    });
    bindTips(root);
    bindZoomPan(root);
  }

  window.WarnoMapPanel = { mount, state };
})();
