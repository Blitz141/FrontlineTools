(function () {
  const $ = (id) => document.getElementById(id);
  const state = {
    factions: [], maps: [], overlays: {}, builds: {}, commanders: {}, plans: {},
    faction: null, mapId: null, phase: "opening",
    layers: { vp: true, fuel: true, munitions: true, territory: true, start: true, plan: true },
    zoom: 1, panX: 0, panY: 0,
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function boot() {
    try {
      const D = window.COH2_DATA || {};
      const factions = D.factions || window.COH2_FACTIONS || [];
      const maps = D.maps || window.COH2_MAPS || [];
      const overlays = D.overlays || window.COH2_OVERLAYS || {};
      const builds = D.builds || window.COH2_BUILDS || {};
      const commanders = D.commanders || window.COH2_COMMANDERS || {};
      const plans = D.plans || window.COH2_PLANS || {};
      if (!factions.length || !maps.length) {
        throw new Error("CoH2 data scripts missing. Open via OPEN_ME.html / index.html from the installed folder, and ensure coh2/data.js is present.");
      }
      state.factions = factions;
      state.maps = maps;
      state.overlays = overlays;
      state.builds = builds;
      state.commanders = commanders;
      state.plans = plans;
      fillSelects();
      $("data-note").textContent =
        "Data: " + maps.length + " minimaps from game archives; point markers from scenario .info; build orders and commander text are curated (labeled in panels). Offline via data.js (file:// safe).";
    } catch (e) {
      $("error").textContent = String(e.message || e);
    }
  }

  function fillSelects() {
    $("faction").innerHTML = state.factions.map((f) =>
      `<option value="${esc(f.id)}">${esc(f.name)}</option>`).join("");
    $("map").innerHTML = state.maps.map((m) => {
      const tag = m.hand_tuned ? " · tuned" : "";
      return `<option value="${esc(m.id)}">${esc(m.name)}${tag}</option>`;
    }).join("");
  }

  function currentFaction() {
    return state.factions.find((f) => f.id === state.faction) || state.factions[0];
  }
  function currentMap() {
    return state.maps.find((m) => m.id === state.mapId) || state.maps[0];
  }

  function render() {
    const fac = currentFaction();
    const map = currentMap();
    if (!fac || !map) return;
    $("results").hidden = false;
    renderBuild(fac);
    renderCommanders(fac, map);
    renderPlan(fac, map);
    renderMap(fac, map);
  }

  function renderBuild(fac) {
    const b = state.builds[fac.id];
    if (!b) {
      $("build-panel").innerHTML = "<h2>Build order</h2><p class='meta'>No curated build for this faction yet.</p>";
      return;
    }
    const steps = (b.steps || []).map((s) =>
      `<li><span class="t">${esc(s.t)}</span><div><div class="item">${esc(s.item)}</div><div class="note">${esc(s.note)}</div></div></li>`
    ).join("");
    $("build-panel").innerHTML = `
      <h2>Build order</h2>
      <p class="meta"><span class="faction-pill" style="border-color:${esc(fac.color)};color:${esc(fac.color)}">${esc(fac.short)}</span>
        · ${esc(b.title)} · <strong>source: ${esc(b.source)}</strong></p>
      <p class="meta">${esc(fac.blurb)}</p>
      <ul class="build-steps">${steps}</ul>
      <div class="tips"><strong>Light adaptations</strong><p style="margin:6px 0 0;font-size:13px;color:var(--muted)">${esc(b.adapt || "")}</p></div>`;
  }

  function renderCommanders(fac, map) {
    const list = state.commanders[fac.id] || [];
    const cards = list.map((c) =>
      `<div class="cmd-card"><div class="tier">${esc(c.tier || "pick")}</div>
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.why)}</p>
        <p style="margin-top:6px;font-size:11px;opacity:.75">Game id: ${esc(c.id)}</p></div>`
    ).join("");
    $("cmd-panel").innerHTML = `
      <h2>Commander recommendations</h2>
      <p class="meta">General for <strong>${esc(fac.short)}</strong> on maps like <strong>${esc(map.name)}</strong>. Not a hard counter list.
        Ids from AttribArchive commander RGDs; reasons are curated.</p>
      <div class="cmd-list">${cards || "<p class='meta'>None listed.</p>"}</div>`;
  }

  function renderPlan(fac, map) {
    const plan = state.plans[map.id] || {};
    const phase = state.phase;
    const block = (plan.phases && plan.phases[phase]) || { goals: [], marks_hint: "" };
    const goals = (block.goals || []).map((g) => `<li>${esc(g)}</li>`).join("");
    const src = plan.source === "auto_from_info" ? "auto from .info points" : (map.hand_tuned ? "hand-tuned + game points" : "curated");
    $("plan-panel").innerHTML = `
      <h2>Match plan · ${esc(plan.name || map.name)}</h2>
      <p class="meta">${esc(plan.summary || "")} · <strong>source: ${esc(src)}</strong></p>
      <div class="phase-tabs">
        <button type="button" data-phase="opening" class="${phase === "opening" ? "active" : ""}">Opening</button>
        <button type="button" data-phase="mid" class="${phase === "mid" ? "active" : ""}">Mid</button>
        <button type="button" data-phase="late" class="${phase === "late" ? "active" : ""}">Late</button>
      </div>
      <h3>${esc(phase)} goals for ${esc(fac.short)}</h3>
      <ul class="plan-goals">${goals}</ul>
      <p class="meta" style="margin-top:10px">${esc(block.marks_hint || "")}</p>`;
    $("plan-panel").querySelectorAll("[data-phase]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.phase = btn.getAttribute("data-phase");
        renderPlan(fac, map);
        renderMap(fac, map);
      });
    });
  }

  function layerChecks() {
    const L = state.layers;
    return `
      <div class="coh-legend">
        <label class="leg-item"><input type="checkbox" data-layer="vp" ${L.vp ? "checked" : ""}/> <i class="coh-dot-vp"></i> Victory</label>
        <label class="leg-item"><input type="checkbox" data-layer="fuel" ${L.fuel ? "checked" : ""}/> <i class="coh-dot-fuel"></i> Fuel</label>
        <label class="leg-item"><input type="checkbox" data-layer="munitions" ${L.munitions ? "checked" : ""}/> <i class="coh-dot-munitions"></i> Munitions</label>
        <label class="leg-item"><input type="checkbox" data-layer="territory" ${L.territory ? "checked" : ""}/> <i class="coh-dot-territory"></i> Territory</label>
        <label class="leg-item"><input type="checkbox" data-layer="start" ${L.start ? "checked" : ""}/> <i class="coh-dot-start"></i> Starts</label>
        <label class="leg-item"><input type="checkbox" data-layer="plan" ${L.plan ? "checked" : ""}/> Plan arrows</label>
      </div>`;
  }

  function pointColor(kind) {
    return ({ vp: "#e0b84a", fuel: "#6ea06a", munitions: "#5b8fc7", territory: "#8a9a8c", start: "#c45c4a", cutoff: "#c4a35a" })[kind] || "#8a9a8c";
  }

  function planArrows(points, phase, facColor) {
    const starts = points.filter((p) => p.kind === "start");
    const fuels = points.filter((p) => p.kind === "fuel");
    const vps = points.filter((p) => p.kind === "vp");
    if (!starts.length) return "";
    const s0 = starts[0];
    let targets = [];
    if (phase === "opening") targets = fuels.slice(0, 1).concat(vps.slice(0, 1));
    else if (phase === "mid") targets = vps.slice(0, 2).concat(fuels.slice(0, 1));
    else targets = fuels.slice(0, 2);
    let svg = "";
    targets.forEach((t, i) => {
      const x1 = s0.x, y1 = s0.y, x2 = t.x, y2 = t.y;
      const mx = (x1 + x2) / 2 + (i % 2 ? 4 : -4);
      const my = (y1 + y2) / 2 - 3;
      const col = i === 0 ? facColor : "#e0b84a";
      svg += `<path d="M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}" fill="none" stroke="${col}" stroke-width="0.9" opacity="0.85" />`;
      svg += `<circle cx="${x2}" cy="${y2}" r="1.4" fill="${col}" opacity="0.9" />`;
    });
    return svg;
  }

  function renderMap(fac, map) {
    const ov = state.overlays[map.id] || { points: [] };
    const points = ov.points || [];
    const L = state.layers;
    let marks = "";
    points.forEach((p) => {
      if (L[p.kind] === false) return;
      if (p.kind === "territory" && !L.territory) return;
      const col = pointColor(p.kind);
      const r = p.kind === "vp" ? 1.8 : p.kind === "start" ? 2.1 : 1.45;
      const label = ({ vp: "VP", fuel: "Fuel", munitions: "Mun", start: "Start", territory: "", cutoff: "Cut" })[p.kind] || "";
      marks += `<g opacity="0.95">
        <circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${col}" stroke="#0b0f0d" stroke-width="0.35" />
        ${label ? `<text x="${p.x}" y="${p.y - 2.4}" text-anchor="middle" font-size="2.1" fill="#f4f7f2" font-family="Segoe UI,sans-serif" font-weight="700">${label}</text>` : ""}
      </g>`;
    });
    const arrows = L.plan ? planArrows(points, state.phase, fac.color || "#c4a35a") : "";
    const img = map.image || ("maps/" + map.id + ".png");
    $("map-panel").innerHTML = `
      <h2>Tactical map</h2>
      <p class="meta">${esc(map.name)} · points from game <code>.info</code> · minimap from archive TGA · phase ${esc(state.phase)}</p>
      ${layerChecks()}
      <div class="map-stage" id="coh-stage">
        <div class="map-zoom-inner" id="coh-zoom" style="transform:translate(${state.panX}px,${state.panY}px) scale(${state.zoom}); transform-origin: center top;">
          <div class="map-frame" id="coh-frame" style="width:640px; height:640px; position:relative;">
            <img class="map-img" id="coh-img" src="${esc(img)}" alt="${esc(map.name)} minimap" draggable="false" />
            <svg class="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">${arrows}${marks}</svg>
          </div>
        </div>
        <div class="map-zoom-controls">
          <button type="button" id="zoom-in">+</button>
          <button type="button" id="zoom-out">-</button>
          <button type="button" id="zoom-reset">Reset</button>
        </div>
      </div>`;
    wireMapControls();
    $("map-panel").querySelectorAll("[data-layer]").forEach((inp) => {
      inp.addEventListener("change", () => {
        state.layers[inp.getAttribute("data-layer")] = inp.checked;
        renderMap(fac, map);
      });
    });
  }

  function wireMapControls() {
    const stage = $("coh-stage");
    const zoomEl = $("coh-zoom");
    if (!stage || !zoomEl) return;
    const apply = () => {
      zoomEl.style.transform = `translate(${state.panX}px,${state.panY}px) scale(${state.zoom})`;
    };
    $("zoom-in").onclick = () => { state.zoom = Math.min(4, state.zoom * 1.25); apply(); };
    $("zoom-out").onclick = () => { state.zoom = Math.max(0.7, state.zoom / 1.25); apply(); };
    $("zoom-reset").onclick = () => { state.zoom = 1; state.panX = 0; state.panY = 0; apply(); };
    let drag = false, lx = 0, ly = 0;
    stage.addEventListener("mousedown", (e) => { drag = true; lx = e.clientX; ly = e.clientY; stage.classList.add("panning"); });
    window.addEventListener("mouseup", () => { drag = false; stage.classList.remove("panning"); });
    window.addEventListener("mousemove", (e) => {
      if (!drag) return;
      state.panX += e.clientX - lx; state.panY += e.clientY - ly;
      lx = e.clientX; ly = e.clientY; apply();
    });
    stage.addEventListener("wheel", (e) => {
      e.preventDefault();
      const f = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      state.zoom = Math.min(4, Math.max(0.7, state.zoom * f));
      apply();
    }, { passive: false });
  }

  function go() {
    $("error").textContent = "";
    state.faction = $("faction").value;
    state.mapId = $("map").value;
    state.phase = "opening";
    state.zoom = 1; state.panX = 0; state.panY = 0;
    render();
  }

  $("go").addEventListener("click", go);
  $("example").addEventListener("click", () => {
    $("faction").value = "soviet";
    if ([...$("map").options].some((o) => o.value === "langres")) $("map").value = "langres";
    go();
  });

  boot();
})();
