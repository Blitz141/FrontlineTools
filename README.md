# WARNO Battlegroup Counter

Static offline site: paste a WARNO import code + pick a map → decoded deck, strengths/weaknesses, suggested opposing battlegroup, tips, and (when possible) an importable counter code.

## Open

Double-click `index.html` (or `app/index.html`). No server required.

## Data sources (authoritative)

Built from the **user's own WARNO install** (`base.zip` extracted 2026-11-01; GameData files dated **2025-08-18**):

| File | Use |
|------|-----|
| `Generated/Gameplay/Decks/DeckSerializer.ndf` | Division IDs; unit IDs |
| `Generated/Gameplay/Decks/Divisions.ndf` | Names/coalition/nation/AP |
| `Generated/Gameplay/Decks/DivisionRules.ndf` | Per-division unit availability |
| `Generated/Gameplay/Gfx/UniteDescriptor.ndf` | Factory→category, country, coalition |

**Important ID quirk:** deck-code **unit** IDs equal `DeckSerializer` numeric IDs **+ 1** (validated: with this offset, the user's code and a known Reddit 7. Panzer code both land 100%/94% inside their division pools). Division IDs are used as-is. Codec: `@izohek/warno-deck-utils`.

Display names are derived from descriptors (localization CSVs were not in the extract).

## Honest note on the example code

The user-supplied code `FhEo0Imptw...` decodes as **5. Panzerdivision (FRG / NATO)**, div id **10**, with **Leopard 2A3/2A4** tanks - **not** GDR 7. Panzer.  
GDR **7. Panzerdivision** is div id **9** and uses T-55/T-72-family tanks (verified with a known Reddit 7. Panzer code).

## Limits

- ~72 divisions have full unit pools from DivisionRules; others decode by name only.
- Counter picks are rule-based heuristics, not AP-perfect Armory builds.
- Always verify import codes in-game Armory.


## Tactical map panel

- Display maps are the game's own Preview/Minimap textures from each map `*_Assets.dat` (EDAT TGV to PNG).
- Zone data (deploy/CP) still comes from scenario `*_Details.dat`, kept for alignment and plan reasoning.
  Zone polygons are not drawn (sectors already live on the game map look; UI focuses on tactics).
- Alignment: playable-bbox bounds transform shared with the game texture (exact_bounds for all shipped maps).
  Aspect-matched orientation + land-brightness flip pick. Community Jasp137 images are no longer the primary base.
- Symbology layers (toggleable): advance, flank, fallback, defend, rally, ATGM, tank lanes, infantry,
  recon, AA umbrella (+ range rings), arty/FOB, helo lanes, chokepoints, enemy plan (red).
- Phased matchup plan (Opening / Mid / Late), 5-8 concrete steps naming units from both decks,
  terrain-aware (forest/open/water/town segmentation). Suggested, not gospel.
- Layout: large map with zoom/pan; plan panel beside on wide screens, below on narrow.
- See `alignment_sheet.png` and `alignment_report.json` for per-map source and quality.

