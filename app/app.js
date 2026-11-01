/* WARNO Counter : client app. Data via WarnoLib (decode + units/divisions). */
(function () {
  const { decodeDeckString, encodeDeck, UNITS, DIVISIONS } = window.WarnoLib;
  const MAPS = window.WARNO_MAPS;

  const CAT_LABEL = {
    log: "Logistics", inf: "Infantry", art: "Artillery", tank: "Tanks / AFVs",
    rec: "Recon", aa: "Air Defense", hel: "Helicopters", air: "Aircraft",
    trans: "Transports", "?": "Unknown", "": "Other"
  };
  const CAT_ORDER = ["log", "rec", "inf", "tank", "art", "aa", "hel", "air", "trans", "?", ""];

  const VET = ["Rookie", "Trained", "Hardened", "Veteran", "Elite"];

  function $(sel) { return document.querySelector(sel); }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function unitInfo(id) {
    const u = UNITS[id] || UNITS[String(id)];
    if (u) return u;
    return { id, name: "Unknown unit #" + id, category: "?", descriptor: null };
  }

  function divInfo(id) {
    const d = DIVISIONS[id] || DIVISIONS[String(id)];
    if (d) return d;
    return { id, name: "Unknown division #" + id, alliance: "?", country: "?", units: [] };
  }

  function decode(code) {
    const cleaned = code.trim().replace(/\s+/g, "");
    const deck = decodeDeckString(cleaned);
    const div = divInfo(deck.division.id);
    const cards = deck.cards.map((c, i) => {
      const u = unitInfo(c.unit.id);
      const t = c.transport ? unitInfo(c.transport.id) : null;
      return {
        index: i,
        veterancy: c.veterancy,
        vetLabel: VET[c.veterancy] || ("V" + c.veterancy),
        unit: u,
        transport: t,
        category: u.category || "?"
      };
    });
    return { raw: deck, div, cards, code: cleaned };
  }

  function analyze(decoded) {
    const counts = {};
    for (const c of decoded.cards) {
      const cat = c.category || "?";
      counts[cat] = (counts[cat] || 0) + 1;
    }
    const total = decoded.cards.length || 1;
    const pct = (cat) => ((counts[cat] || 0) / total) * 100;

    const strengths = [];
    const weaknesses = [];

    if ((counts.tank || 0) >= 5) strengths.push({ key: "armor", text: "Heavy armor presence (" + (counts.tank || 0) + " tank/AFV cards)" });
    if ((counts.art || 0) >= 4) strengths.push({ key: "arty", text: "Strong artillery (" + (counts.art || 0) + " cards)" });
    if ((counts.aa || 0) >= 4) strengths.push({ key: "aa", text: "Solid air defense (" + (counts.aa || 0) + " cards)" });
    if ((counts.hel || 0) >= 3) strengths.push({ key: "helos", text: "Helicopter-heavy (" + (counts.hel || 0) + " cards)" });
    if ((counts.air || 0) >= 3) strengths.push({ key: "air", text: "Significant air wing (" + (counts.air || 0) + " cards)" });
    if ((counts.inf || 0) >= 6) strengths.push({ key: "inf", text: "Infantry mass (" + (counts.inf || 0) + " cards)" });
    if ((counts.rec || 0) >= 3) strengths.push({ key: "recon", text: "Good recon coverage (" + (counts.rec || 0) + " cards)" });

    if ((counts.aa || 0) <= 2) weaknesses.push({ key: "weak_aa", text: "Thin AA (" + (counts.aa || 0) + " cards) : vulnerable to helos and CAS" });
    if ((counts.rec || 0) <= 1) weaknesses.push({ key: "weak_recon", text: "Low recon (" + (counts.rec || 0) + ") : blind to flanking" });
    if ((counts.hel || 0) === 0 && (counts.air || 0) <= 1) weaknesses.push({ key: "weak_air", text: "Little air/helo threat : you can push armor more freely" });
    if ((counts.tank || 0) <= 2) weaknesses.push({ key: "weak_armor", text: "Light on tanks (" + (counts.tank || 0) + ") : punish with armor in open ground" });
    if ((counts.inf || 0) <= 2) weaknesses.push({ key: "weak_inf", text: "Few infantry cards : weak in forests/towns" });
    if ((counts.art || 0) <= 1) weaknesses.push({ key: "weak_arty", text: "Limited artillery : less counter-battery and suppression" });
    if ((counts.tank || 0) >= 6 && (counts.inf || 0) <= 3) weaknesses.push({ key: "armor_glass", text: "Armor-heavy, infantry-light : soft in close terrain" });

    if (!strengths.length) strengths.push({ key: "balanced", text: "No extreme category spike : relatively balanced list" });
    if (!weaknesses.length) weaknesses.push({ key: "solid", text: "No glaring holes from card counts alone" });

    return { counts, pct, strengths, weaknesses, total };
  }

  /** Prefer divisions that have unit pools (warno-db). */
  function candidateDivisions(enemyAlliance, preferredId) {
    const want = enemyAlliance === "NATO" ? "PACT" : "NATO";
    const all = Object.values(DIVISIONS).filter(d => d.units && d.units.length > 5);
    let pool = all.filter(d => d.alliance === want);
    if (preferredId && preferredId !== "auto") {
      const pref = DIVISIONS[preferredId] || DIVISIONS[String(preferredId)];
      if (pref && pref.units && pref.units.length) return [pref];
    }
    if (!pool.length) pool = all;
    return pool;
  }

  function scoreDivisionForCounter(div, analysis) {
    const units = div.units || [];
    const byCat = {};
    for (const u of units) byCat[u.category] = (byCat[u.category] || 0) + 1;
    let score = 0;
    const notes = [];
    for (const w of analysis.weaknesses) {
      if (w.key === "weak_aa" && (byCat.hel || 0) + (byCat.air || 0) >= 4) { score += 5; notes.push("Exploits thin AA with air/helos"); }
      if (w.key === "weak_armor" && (byCat.tank || 0) >= 8) { score += 5; notes.push("Brings heavy armor vs light enemy tanks"); }
      if (w.key === "weak_inf" && (byCat.inf || 0) >= 8) { score += 4; notes.push("Infantry to take woods/towns"); }
      if (w.key === "weak_recon" && (byCat.rec || 0) >= 4) { score += 2; notes.push("Recon edge"); }
      if (w.key === "weak_arty" && (byCat.art || 0) >= 5) { score += 3; notes.push("Artillery advantage"); }
      if (w.key === "armor_glass" && (byCat.inf || 0) >= 6) { score += 4; notes.push("Infantry to knife-fight their armor in cover"); }
    }
    for (const s of analysis.strengths) {
      if (s.key === "armor" && (byCat.inf || 0) >= 5) { score += 3; notes.push("ATGMs/infantry to blunt their armor"); }
      if (s.key === "helos" && (byCat.aa || 0) >= 4) { score += 4; notes.push("AA to shut down their helos"); }
      if (s.key === "air" && (byCat.aa || 0) >= 4) { score += 4; notes.push("AA vs their air wing"); }
      if (s.key === "arty" && (byCat.rec || 0) >= 3) { score += 2; notes.push("Recon to hunt their artillery"); }
      if (s.key === "inf" && (byCat.tank || 0) >= 6) { score += 3; notes.push("Armor to smash infantry in the open"); }
    }
    // slight preference for armored/mech tags
    if ((div.tags || []).includes("armored")) score += 1;
    return { score, notes: [...new Set(notes)], byCat };
  }


  const FACTORY_FOR_CAT = {
    log: "Logistic", rec: "Recons", inf: "Infantry", tank: "Tanks",
    art: "Art", aa: "DCA", hel: "Helis", air: "Planes"
  };

  function deckRulesFor(divId) {
    const R = window.WARNO_DECK_RULES || {};
    return R[divId] || R[String(divId)] || null;
  }

  function unitRule(rules, unitId) {
    if (!rules || !rules.u) return null;
    return rules.u[unitId] || rules.u[String(unitId)] || null;
  }

  function pickTransport(rule, unitName) {
    if (!rule) return null;
    if (rule.w) return null; // allowed without
    const tids = rule.t || [];
    if (!tids.length) return null;
    // Prefer IFV/APC (BMP, BTR, Marder, M113, Fuchs) over soft UAZ/Iltis/Unimog when listed.
    const scored = tids.map(function (id) {
      const n = (unitInfo(id).name || "").toLowerCase();
      let s = 0;
      if (/bmp|marder|warrior|bradley|m2|puma/.test(n)) s += 5;
      if (/btr|m113|tpz|fuchs|amx|vab|bmd/.test(n)) s += 3;
      if (/mtlb|ot-64|ot 64|btr-d/.test(n)) s += 2;
      if (/uaz|iltis|unimog|gaz|jeep|traban|vw /.test(n)) s -= 2;
      if (unitName && /btr/i.test(unitName) && /btr/i.test(n)) s += 2;
      if (unitName && /bmp/i.test(unitName) && /bmp/i.test(n)) s += 2;
      return { id: id, s: s };
    });
    scored.sort(function (a, b) { return b.s - a.s; });
    return { id: scored[0].id };
  }

  function allowedVet(rule, fallbackCat) {
    // xpMult[i] > 0 means vet level i available; pick highest affordable style
    if (rule && rule.x) {
      for (let v = rule.x.length - 1; v >= 0; v--) {
        if (rule.x[v] > 0) {
          // prefer trained(1) for elite cats, rookie(0) for line if available
          break;
        }
      }
      const avail = [];
      for (let v = 0; v < rule.x.length; v++) if (rule.x[v] > 0) avail.push(v);
      if (!avail.length) return fallbackCat === "rec" || fallbackCat === "hel" || fallbackCat === "air" ? 1 : 0;
      if (fallbackCat === "rec" || fallbackCat === "hel" || fallbackCat === "air" || fallbackCat === "log") {
        return avail.includes(1) ? 1 : avail[0];
      }
      return avail.includes(0) ? 0 : avail[0];
    }
    return fallbackCat === "rec" || fallbackCat === "hel" || fallbackCat === "air" || fallbackCat === "log" ? 1 : 0;
  }

  function slotCost(rules, cat, slotIndex) {
    const fac = FACTORY_FOR_CAT[cat];
    if (!rules || !rules.c || !fac || !rules.c[fac]) return 1;
    const arr = rules.c[fac];
    if (!arr.length) return 99;
    if (slotIndex >= arr.length) return 99; // no more slots in this factory
    return arr[slotIndex];
  }

  function pickUnits(div, analysis, map) {
    const rules = deckRulesFor(div.id);
    const units = (div.units || []).filter(u => u.id != null && u.category && u.category !== "trans");
    const byCat = {};
    for (const u of units) {
      let cat = u.category;
      // GameData sometimes leaves FOB uncategorized ("?"); treat as logistics.
      if (cat === "?" || !cat) {
        if (/\bFOB\b/i.test(u.name || "")) cat = "log";
        else continue;
      }
      const uu = (cat === u.category) ? u : Object.assign({}, u, { category: cat });
      (byCat[cat] = byCat[cat] || []).push(uu);
    }
    function priorityBoost(u, cat) {
      const n = (u.name || "") + " " + (u.descriptor || "");
      if (/\bFOB\b/i.test(n)) return 1000;
      if (/supply/i.test(n)) return 80;
      // Prefer a couple of command units in log/inf; do not flood tanks with CMD-only cards.
      if (/CMD|Command/i.test(n)) return (cat === "log" || cat === "inf") ? 60 : 5;
      return 0;
    }
    for (const k of Object.keys(byCat)) {
      byCat[k].sort((a, b) => {
        const pb = priorityBoost(b, k) - priorityBoost(a, k);
        if (pb) return pb;
        return (b.availability || 1) - (a.availability || 1);
      });
    }

    // Desired category mix (soft). Fill AP to max.
    const targets = { log: 4, rec: 4, inf: 7, tank: 7, art: 4, aa: 4, hel: 3, air: 3 };
    for (const w of analysis.weaknesses) {
      if (w.key === "weak_aa") { targets.hel += 1; targets.air += 1; }
      if (w.key === "weak_armor") { targets.tank += 2; }
      if (w.key === "weak_inf") { targets.inf += 2; }
      if (w.key === "armor_glass") { targets.inf += 1; targets.hel += 1; }
    }
    for (const s of analysis.strengths) {
      if (s.key === "armor") { targets.inf += 1; }
      if (s.key === "helos" || s.key === "air") { targets.aa += 2; }
      if (s.key === "arty") { targets.rec += 1; targets.art += 1; }
      if (s.key === "inf") { targets.tank += 1; }
    }
    if (map) {
      if (map.character.includes("forest") || map.character.includes("urban") || map.character.includes("closed")) {
        targets.inf += 2; targets.tank = Math.max(4, targets.tank - 1);
      }
      if (map.character.includes("open") || map.character.includes("long-range")) {
        targets.tank += 1; targets.aa += 1; targets.rec += 1;
      }
    }

    const maxAP = (rules && rules.ap) || div.maxActivationPoints || 50;
    const picked = [];
    const usedPacks = {}; // unitId -> packs taken
    const catSlots = {}; // cat -> next slot index
    const catTaken = {}; // soft target tracking
    let spent = 0;

    function canTake(u, cat) {
      const rule = unitRule(rules, u.id);
      const maxPack = rule ? rule.m : Math.min(2, u.availability || 1);
      const taken = usedPacks[u.id] || 0;
      if (taken >= maxPack) return false;
      const slot = catSlots[cat] || 0;
      const cost = slotCost(rules, cat, slot);
      if (cost >= 99) return false;
      if (spent + cost > maxAP) return false;
      if (rule && !rule.w && !(rule.t && rule.t.length)) return false;
      return true;
    }

    function addCard(u, cat) {
      const rule = unitRule(rules, u.id);
      const slot = catSlots[cat] || 0;
      const cost = slotCost(rules, cat, slot);
      const vet = allowedVet(rule, cat);
      const transport = pickTransport(rule, u.name);
      picked.push({
        veterancy: vet,
        unit: { id: u.id, descriptor: u.descriptor || null, name: u.name, category: u.category || cat },
        transport: transport || undefined,
        name: u.name,
        descriptor: u.descriptor || null,
        category: cat,
        availability: (rule && rule.a) || u.availability,
        apCost: cost
      });
      usedPacks[u.id] = (usedPacks[u.id] || 0) + 1;
      catSlots[cat] = slot + 1;
      catTaken[cat] = (catTaken[cat] || 0) + 1;
      spent += cost;
    }

    // Seed essential logistics / command first, then fill remaining AP.
    function seedEssential(cat, pred, limit) {
      const pool = byCat[cat] || [];
      let n = 0;
      let guard = 0;
      while (n < limit && guard++ < 50) {
        let placed = false;
        for (const u of pool) {
          if (n >= limit) break;
          if (!pred(u)) continue;
          if (!canTake(u, cat)) continue;
          addCard(u, cat);
          n++;
          placed = true;
          break;
        }
        if (!placed) break;
      }
      return n;
    }
    seedEssential("log", function (u) { return /\bFOB\b/i.test(u.name || ""); }, 1);
    seedEssential("log", function (u) { return /CMD|Command/i.test(u.name || ""); }, 1);
    seedEssential("log", function (u) { return /supply/i.test(u.name || ""); }, 2);
    seedEssential("inf", function (u) { return /CMD|Command/i.test(u.name || ""); }, 1);

    // Prefer cheaper factory slots first so we land near a full 35-40 card deck like ranked builds.
    const fillOrder = ["log", "rec", "inf", "tank", "aa", "art", "hel", "air"];
    for (const maxCost of [1, 2, 3, 4]) {
      let progress = true;
      let guard = 0;
      while (progress && spent < maxAP && guard < 500) {
        guard++;
        progress = false;
        // Prefer categories still under soft target, then others
        const cats = fillOrder.slice().sort((a, b) => {
          const da = (catTaken[a] || 0) - (targets[a] || 0);
          const db = (catTaken[b] || 0) - (targets[b] || 0);
          return da - db;
        });
        for (const cat of cats) {
          const slot = catSlots[cat] || 0;
          const cost = slotCost(rules, cat, slot);
          if (cost > maxCost || cost > maxAP - spent) continue;
          const pool = byCat[cat] || [];
          let placed = false;
          for (const u of pool) {
            if (!canTake(u, cat)) continue;
            // re-check cost at current slot
            if (slotCost(rules, cat, catSlots[cat] || 0) > maxCost) break;
            addCard(u, cat);
            placed = true;
            progress = true;
            break;
          }
          if (placed) break;
        }
      }
    }

    return picked;
  }

  function tryEncodeCounter(div, picked) {
    try {
      const cards = picked.map(p => {
        const card = {
          veterancy: p.veterancy,
          unit: { id: p.unit.id }
        };
        if (p.transport && p.transport.id) {
          card.transport = { id: p.transport.id };
        }
        return card;
      });
      const simple = {
        modded: false,
        division: { id: div.id },
        numberCards: cards.length,
        cards
      };
      // 13-bit unit fields match typical in-game Armory exports (default lib floor is 12).
      const UNIT_ID_BITS = 13;
      const code = encodeDeck(simple, UNIT_ID_BITS);
      const round = decodeDeckString(code);
      if (round.division.id !== div.id || round.cards.length !== cards.length) {
        return { code: null, warning: "Encoder produced mismatched deck; code withheld." };
      }
      for (let i = 0; i < cards.length; i++) {
        if (round.cards[i].unit.id !== cards[i].unit.id) {
          return { code: null, warning: "Encoder unit mismatch; code withheld." };
        }
        const rt = round.cards[i].transport && round.cards[i].transport.id;
        const et = cards[i].transport && cards[i].transport.id;
        if ((rt || null) !== (et || null)) {
          return { code: null, warning: "Encoder transport mismatch; code withheld." };
        }
        if (round.cards[i].veterancy !== cards[i].veterancy) {
          return { code: null, warning: "Encoder veterancy mismatch; code withheld." };
        }
      }
      // Exact re-encode of decoded form (normalize)
      const normalized = {
        modded: false,
        division: { id: round.division.id },
        numberCards: round.cards.length,
        cards: round.cards.map(c => {
          const o = { veterancy: c.veterancy, unit: { id: c.unit.id } };
          if (c.transport && c.transport.id) o.transport = { id: c.transport.id };
          return o;
        })
      };
      const code2 = encodeDeck(normalized, UNIT_ID_BITS);
      return { code: code2, warning: null, cardCount: cards.length, apSpent: picked.reduce((s, p) => s + (p.apCost || 0), 0) };
    } catch (e) {
      return { code: null, warning: "Could not encode: " + e.message };
    }
  }

  function buildTips(decoded, analysis, counter, map) {
    const tips = [];
    tips.push("Enemy: " + decoded.div.name + " (" + (decoded.div.alliance || "?") + "). Counter division: " + counter.div.name + ".");
    for (const w of analysis.weaknesses) tips.push("Matchup: " + w.text + ".");
    for (const n of counter.scoreNotes.slice(0, 4)) tips.push("Plan: " + n + ".");
    if (map) {
      tips.push("Map (" + map.name + "): " + map.character.join(", ") + ".");
      for (const t of map.tips) tips.push(t);
      // Cross rules
      if (map.character.includes("forest") || map.character.includes("urban")) {
        tips.push("On this map, prioritize infantry + ATGM pushes into cover; keep tanks as overwatch.");
      }
      if (map.character.includes("open")) {
        tips.push("On this open map, screen with recon, stage AA forward, and trade at range with tanks/ATGM vehicles.");
      }
      if (analysis.weaknesses.some(w => w.key === "weak_aa") && (map.character.includes("open") || map.character.includes("semi-open"))) {
        tips.push("Their AA is thin and the map is open : early helo/CAS pressure can snowball.");
      }
    }
    tips.push("Reminder: availability, transports, and AP slot costs come from your GameData DivisionRules/CostMatrix; always sanity-check the import in Armory before ranked.");
    return tips;
  }

  function generateCounter(decoded, analysis, mapId, preferredDiv) {
    const map = MAPS.find(m => m.id === mapId) || null;
    const cands = candidateDivisions(decoded.div.alliance, preferredDiv);
    let best = null;
    for (const d of cands) {
      const sc = scoreDivisionForCounter(d, analysis);
      if (!best || sc.score > best.sc.score) best = { div: d, sc };
    }
    if (!best) throw new Error("No counter divisions with unit pools in the local database.");
    const picked = pickUnits(best.div, analysis, map).map(p => {
      if (p.transport && p.transport.id) {
        p.transport = Object.assign({}, unitInfo(p.transport.id), { id: p.transport.id });
      }
      return p;
    });
    const enc = tryEncodeCounter(best.div, picked);
    const tips = buildTips(decoded, analysis, { div: best.div, scoreNotes: best.sc.notes }, map);
    return { div: best.div, score: best.sc.score, scoreNotes: best.sc.notes, picked, encode: enc, tips, map };
  }

  // --- UI ---
  function fillMapSelect() {
    const sel = $("#map");
    sel.innerHTML = "";
    for (const m of MAPS) {
      const o = document.createElement("option");
      o.value = m.id;
      o.textContent = m.name + " (" + m.mode + ")";
      sel.appendChild(o);
    }
    sel.value = "black_forest_duel";
  }

  function fillDivSelect() {
    const sel = $("#counter-div");
    sel.innerHTML = "";
    const auto = document.createElement("option");
    auto.value = "auto";
    auto.textContent = "Auto (best opposing division)";
    sel.appendChild(auto);
    const withUnits = Object.values(DIVISIONS)
      .filter(d => d.units && d.units.length > 5)
      .sort((a, b) => (a.alliance + a.name).localeCompare(b.alliance + b.name));
    for (const d of withUnits) {
      const o = document.createElement("option");
      o.value = d.id;
      o.textContent = "[" + d.alliance + "] " + d.name + (d.country ? " (" + d.country + ")" : "");
      sel.appendChild(o);
    }
  }


  function unitIconHtml(unit, kindHint) {
    const I = window.WARNO_UNIT_ICONS;
    if (!I || !I.imgTag) return "";
    let u = unit;
    if (u && u.id != null && !u.descriptor) {
      u = unitInfo(u.id);
    }
    let kind = kindHint || (u && u.category) || "tank";
    const map = { log: "log", recon: "recon", rec: "recon", inf: "infantry", tank: "tank", at: "atgm", aa: "aa", art: "arty", hel: "helo", air: "air" };
    if (map[kind]) kind = map[kind];
    return I.imgTag(kind, u, "uicon");
  }

  function renderDeck(decoded, analysis) {
    const root = $("#enemy-deck");
    root.innerHTML = "";
    root.appendChild(el("h2", null, "Enemy battlegroup"));
    const meta = el("div", "meta");
    meta.innerHTML = "<strong>" + escapeHtml(decoded.div.name) + "</strong> · " +
      escapeHtml(decoded.div.alliance || "?") + " · " +
      escapeHtml(decoded.div.country || "") + " · " +
      decoded.cards.length + " cards · div id " + decoded.div.id;
    root.appendChild(meta);

    const bars = el("div", "cat-bars");
    for (const cat of CAT_ORDER) {
      const n = analysis.counts[cat] || 0;
      if (!n) continue;
      const row = el("div", "cat-row");
      row.innerHTML = "<span class='cat-label'>" + (CAT_LABEL[cat] || cat) + "</span>" +
        "<span class='cat-bar'><i style='width:" + Math.min(100, analysis.pct(cat) * 2) + "%'></i></span>" +
        "<span class='cat-n'>" + n + "</span>";
      bars.appendChild(row);
    }
    root.appendChild(bars);

    const cols = el("div", "sw");
    const st = el("div", "sw-col");
    st.innerHTML = "<h3>Strengths</h3><ul>" + analysis.strengths.map(s => "<li>" + escapeHtml(s.text) + "</li>").join("") + "</ul>";
    const wk = el("div", "sw-col");
    wk.innerHTML = "<h3>Weaknesses</h3><ul>" + analysis.weaknesses.map(s => "<li>" + escapeHtml(s.text) + "</li>").join("") + "</ul>";
    cols.appendChild(st); cols.appendChild(wk);
    root.appendChild(cols);

    const list = el("div", "card-list");
    const byCat = {};
    for (const c of decoded.cards) {
      (byCat[c.category] = byCat[c.category] || []).push(c);
    }
    for (const cat of CAT_ORDER) {
      const arr = byCat[cat];
      if (!arr) continue;
      list.appendChild(el("h3", "cat-head", CAT_LABEL[cat] || cat));
      for (const c of arr) {
        const line = el("div", "card");
        const icon = unitIconHtml(c.unit, cat);
        const tIcon = c.transport ? unitIconHtml(c.transport, cat) : "";
        line.innerHTML = "<span class='vet'>" + escapeHtml(c.vetLabel) + "</span> " +
          icon +
          "<span class='uname'>" + escapeHtml(c.unit.name) + "</span>" +
          (c.transport ? " <span class='trans'>/ " + tIcon + escapeHtml(c.transport.name) + "</span>" : "") +
          " <span class='uid'>#" + c.unit.id + "</span>";
        list.appendChild(line);
      }
    }
    root.appendChild(list);
  }

  function renderCounter(counter) {
    const root = $("#counter-deck");
    root.innerHTML = "";
    root.appendChild(el("h2", null, "Suggested counter"));
    const meta = el("div", "meta");
    meta.innerHTML = "<strong>" + escapeHtml(counter.div.name) + "</strong> · " +
      escapeHtml(counter.div.alliance) + " · score " + counter.score +
      " · " + counter.picked.length + " suggested cards";
    root.appendChild(meta);

    if (counter.scoreNotes.length) {
      root.appendChild(el("ul", "notes", counter.scoreNotes.map(n => "<li>" + escapeHtml(n) + "</li>").join("")));
    }

    const list = el("div", "card-list");
    const byCat = {};
    for (const c of counter.picked) (byCat[c.category] = byCat[c.category] || []).push(c);
    for (const cat of CAT_ORDER) {
      const arr = byCat[cat];
      if (!arr) continue;
      list.appendChild(el("h3", "cat-head", CAT_LABEL[cat] || cat));
      for (const c of arr) {
        const line = el("div", "card");
        const icon = unitIconHtml(c.unit || { name: c.name }, cat);
        const tIcon = (c.transport && c.transport.name) ? unitIconHtml(c.transport, cat) : "";
        line.innerHTML = "<span class='vet'>" + escapeHtml(VET[c.veterancy] || ("V" + c.veterancy)) + "</span> " +
          icon +
          "<span class='uname'>" + escapeHtml(c.name) + "</span>" +
          (c.transport && c.transport.name ? " <span class='trans'>/ " + tIcon + escapeHtml(c.transport.name) + "</span>" : "") +
          " <span class='uid'>#" + c.unit.id + " · avail " + (c.availability || "?") + "</span>";
        list.appendChild(line);
      }
    }
    root.appendChild(list);

    const codeBox = el("div", "code-box");
    if (counter.encode.code) {
      codeBox.innerHTML = "<h3>Importable counter code</h3>" +
        "<p class='meta'>" + (counter.encode.cardCount || counter.picked.length) + " cards · ~" +
        (counter.encode.apSpent != null ? counter.encode.apSpent : "?") + " AP spent (max " +
        ((deckRulesFor(counter.div.id)||{}).ap || counter.div.maxActivationPoints || 50) + ")</p>" +
        "<p class='warn'>Built from DivisionRules (transports, MaxPack) + CostMatrix AP slots. Encoder round-trip verified. Always test-import in Armory.</p>" +
        "<textarea readonly id='counter-code'>" + escapeHtml(counter.encode.code) + "</textarea>" +
        "<button type='button' id='copy-counter'>Copy code</button>";
    } else {
      codeBox.innerHTML = "<h3>Importable counter code</h3><p class='warn'>Not emitted: " +
        escapeHtml(counter.encode.warning || "unavailable") +
        " Showing unit list only (PLACEHOLDER for native import).</p>";
    }
    root.appendChild(codeBox);

    const tips = el("div", "tips");
    tips.innerHTML = "<h3>How to use it" + (counter.map ? " on " + escapeHtml(counter.map.name) : "") + "</h3><ol>" +
      counter.tips.map(t => "<li>" + escapeHtml(t) + "</li>").join("") + "</ol>";
    root.appendChild(tips);

    const copyBtn = $("#copy-counter");
    if (copyBtn) copyBtn.onclick = () => {
      const ta = $("#counter-code");
      navigator.clipboard.writeText(ta.value).then(() => { copyBtn.textContent = "Copied"; });
    };
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function run() {
    const err = $("#error");
    err.textContent = "";
    try {
      const code = $("#code").value;
      if (!code.trim()) throw new Error("Paste a battlegroup import code.");
      const decoded = decode(code);
      const analysis = analyze(decoded);
      const counter = generateCounter(decoded, analysis, $("#map").value, $("#counter-div").value);
      $("#results").hidden = false;
      renderDeck(decoded, analysis);
      renderCounter(counter);
      const mapPanel = $("#map-panel");
      if (mapPanel && window.WarnoMapPanel) {
        mapPanel.hidden = false;
        WarnoMapPanel.mount(mapPanel, $("#map").value, { analysis, counter, decoded });
      }
      window.__last = { decoded, analysis, counter };
    } catch (e) {
      $("#results").hidden = true;
      const mp = $("#map-panel"); if (mp) mp.hidden = true;
      err.textContent = e.message || String(e);
      console.error(e);
    }
  }

  const EXAMPLE_CODE = "FhEo0ImptwAAgqgACIyAAAmYAACZgAADpAAQ34PoCbwdYJwD5gUsPmBSw+YL6D6gXgRsCdQAAJ1AAAjAAACLAAAQvAABC8AACKwAAIrAAAisAACKwAAIrAAAiwAAiKgAAIpAAAO0AAifgAACrAAIpEAAijQACJFAABA=";

  function loadExample() {
    $("#code").value = EXAMPLE_CODE;
    run();
  }

  function init() {
    fillMapSelect();
    fillDivSelect();
    $("#go").onclick = run;
    // Keep the import field empty on open. Example button pastes a sample when clicked.
    $("#code").value = "";
    $("#example").onclick = (e) => { e.preventDefault(); loadExample(); };
  }

  document.addEventListener("DOMContentLoaded", function() {
  init();
  // Optional demo mode only when explicitly requested via ?demo=1
  if (/[?&]demo=1/.test(location.search)) setTimeout(loadExample, 200);
});
})();
