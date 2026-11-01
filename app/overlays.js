window.WARNO_OVERLAYS = {
  "_note": "Deploy/CP from WARNO scenario Details.dat. Display maps are game Minimap/Preview textures from Maps Assets.dat (EDAT), aligned by playable bbox bounds transform (exact shared world bounds). Zone polys kept for reasoning only; UI draws tactical symbology. Tactics suggested from terrain segmentation + matchup.",
  "_credit": "Zone data: Eugen scenario Details via EDAT. Minimaps: game PC/Texture/*/Minimap|Preview.tgv converted to PNG.",
  "two_lakes": {
    "source": "game_assets",
    "details_file": "_2x3_Two_lakes_2vs2_CONQ_Details.dat",
    "map_image": "two_lakes.jpg",
    "map_image_source": "game_preview",
    "transform": "xy_fxy",
    "tf": {
      "mode": "xy_fxy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      163.0,
      169.0,
      1310556.0,
      1965914.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            64.83,
            94.53
          ],
          [
            46.08,
            94.53
          ],
          [
            46.08,
            82.03
          ],
          [
            64.83,
            82.03
          ]
        ],
        "center": [
          55.46,
          88.28
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_1",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            66.01,
            16.39
          ],
          [
            40.22,
            16.39
          ],
          [
            40.22,
            5.45
          ],
          [
            66.01,
            5.45
          ]
        ],
        "center": [
          53.11,
          10.92
        ],
        "side": "NATO"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            78.9,
            71.09
          ],
          [
            73.04,
            71.87
          ],
          [
            71.87,
            67.96
          ],
          [
            77.73,
            67.18
          ]
        ],
        "center": [
          75.38,
          69.53
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            68.35,
            58.59
          ],
          [
            57.8,
            58.59
          ],
          [
            57.8,
            50.77
          ],
          [
            68.35,
            50.77
          ]
        ],
        "center": [
          63.08,
          54.68
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            40.22,
            69.53
          ],
          [
            34.36,
            69.53
          ],
          [
            34.36,
            65.62
          ],
          [
            40.22,
            65.62
          ]
        ],
        "center": [
          37.29,
          67.57
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            68.11,
            34.52
          ],
          [
            65.77,
            39.21
          ],
          [
            59.91,
            37.65
          ],
          [
            62.25,
            32.96
          ]
        ],
        "center": [
          64.01,
          36.09
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            36.7,
            46.87
          ],
          [
            27.33,
            46.87
          ],
          [
            26.15,
            46.08
          ],
          [
            28.54,
            41.14
          ],
          [
            35.57,
            41.14
          ],
          [
            36.7,
            42.18
          ]
        ],
        "center": [
          31.91,
          44.14
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            32.01,
            26.55
          ],
          [
            26.15,
            26.55
          ],
          [
            26.15,
            21.86
          ],
          [
            32.01,
            21.86
          ]
        ],
        "center": [
          29.08,
          24.21
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 18,
      "open_pct": 42,
      "water_pct": 28,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              48.0,
              18.0
            ],
            [
              40.0,
              22.0
            ],
            [
              32.0,
              24.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "NATO opening: covered swing west to CP6 via field edges."
        },
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              58.0,
              20.0
            ],
            [
              62.0,
              28.0
            ],
            [
              64.0,
              34.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "NATO opening: east road/hedges into CP4."
        },
        {
          "path": [
            [
              50.0,
              30.0
            ],
            [
              42.0,
              36.0
            ],
            [
              36.0,
              42.0
            ],
            [
              33.0,
              44.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO mid: push CP5 along west shore cover."
        },
        {
          "path": [
            [
              55.0,
              35.0
            ],
            [
              52.0,
              42.0
            ],
            [
              50.0,
              48.0
            ],
            [
              48.0,
              52.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV neck",
          "tip": "NATO mid: probe the central neck with recon leading."
        },
        {
          "path": [
            [
              48.0,
              52.0
            ],
            [
              45.0,
              58.0
            ],
            [
              40.0,
              64.0
            ],
            [
              37.0,
              67.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "ADV CP3",
          "tip": "NATO late: through neck cover into CP3."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              62.0,
              80.0
            ],
            [
              70.0,
              74.0
            ],
            [
              75.0,
              71.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "PACT opening: east shore approach into CP1."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              48.0,
              80.0
            ],
            [
              42.0,
              74.0
            ],
            [
              37.0,
              68.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT opening: west fields into CP3."
        },
        {
          "path": [
            [
              50.0,
              72.0
            ],
            [
              55.0,
              65.0
            ],
            [
              60.0,
              58.0
            ],
            [
              63.0,
              54.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "PACT mid: toward CP2 via central/east cover."
        },
        {
          "path": [
            [
              52.0,
              70.0
            ],
            [
              50.0,
              62.0
            ],
            [
              48.0,
              56.0
            ],
            [
              48.0,
              52.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV neck",
          "tip": "PACT mid: contest the central neck."
        },
        {
          "path": [
            [
              48.0,
              52.0
            ],
            [
              42.0,
              48.0
            ],
            [
              36.0,
              45.0
            ],
            [
              33.0,
              44.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "ADV CP5",
          "tip": "PACT late: through neck into CP5."
        }
      ],
      "flank": [
        {
          "path": [
            [
              45.0,
              25.0
            ],
            [
              32.0,
              35.0
            ],
            [
              28.0,
              48.0
            ],
            [
              32.0,
              55.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK W",
          "tip": "NATO west flank along lake shore cover toward CP5 rear."
        },
        {
          "path": [
            [
              65.0,
              80.0
            ],
            [
              75.0,
              70.0
            ],
            [
              78.0,
              60.0
            ],
            [
              70.0,
              52.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK E",
          "tip": "PACT east flank along east lake shore toward CP2/CP4."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              48.0,
              45.0
            ],
            [
              50.0,
              32.0
            ],
            [
              52.0,
              20.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback to secondary line then deploy depth."
        },
        {
          "path": [
            [
              50.0,
              55.0
            ],
            [
              52.0,
              68.0
            ],
            [
              54.0,
              82.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback to southern secondary line then deploy."
        }
      ],
      "defend": [
        {
          "x": 31.0,
          "y": 24.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6 buildings/treelines. Infantry + ATGM facing south."
        },
        {
          "x": 64.0,
          "y": 36.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4. Strongpoint for NATO opening."
        },
        {
          "x": 50.0,
          "y": 40.0,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line across the northern mid fields."
        },
        {
          "x": 75.0,
          "y": 70.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1 near east shore. Infantry in buildings."
        },
        {
          "x": 37.0,
          "y": 68.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3. Cover the southern neck."
        },
        {
          "x": 52.0,
          "y": 72.0,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line north of deploy."
        }
      ],
      "rally": [
        {
          "x": 50.0,
          "y": 20.0,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally behind the first hedgerow south of deploy."
        },
        {
          "x": 52.0,
          "y": 80.0,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally north of deploy under AA cover."
        }
      ],
      "atgm": [
        {
          "x": 42.0,
          "y": 50.0,
          "tip": "Tree line west of central neck, looking east across fields into CP2 approach."
        },
        {
          "x": 60.0,
          "y": 50.0,
          "tip": "Hedge/treeline east of neck covering open into CP5/CP2."
        },
        {
          "x": 38.0,
          "y": 40.0,
          "tip": "Cover facing CP5 village from the north-west fields."
        },
        {
          "x": 68.0,
          "y": 42.0,
          "tip": "Field edge covering CP4 approaches from the south."
        },
        {
          "x": 45.0,
          "y": 68.0,
          "tip": "Treeline north of CP3 covering the southern corridor."
        },
        {
          "x": 70.0,
          "y": 65.0,
          "tip": "Cover overlooking CP1 approaches along the east shore."
        },
        {
          "x": 50.0,
          "y": 30.0,
          "tip": "Treeline south of NATO deploy covering the first open fields."
        },
        {
          "x": 52.0,
          "y": 78.0,
          "tip": "Treeline north of PACT deploy covering the southern fields."
        }
      ],
      "tank": [
        {
          "x": 50.0,
          "y": 35.0,
          "tip": "Hull-down on northern field edge covering the central road."
        },
        {
          "x": 55.0,
          "y": 55.0,
          "tip": "Hull-down covering the neck crossing east-west."
        },
        {
          "x": 48.0,
          "y": 65.0,
          "tip": "Southern fields hull-down toward CP3/CP1."
        },
        {
          "x": 62.0,
          "y": 48.0,
          "tip": "Open lane toward CP2; stay on the near treeline, not mid-field."
        },
        {
          "x": 40.0,
          "y": 58.0,
          "tip": "West corridor lane toward CP5; hull-down off the road."
        }
      ],
      "infantry": [
        {
          "x": 48.0,
          "y": 48.0,
          "tip": "Central hamlet west of neck. Strongpoint for infantry + short AT."
        },
        {
          "x": 58.0,
          "y": 52.0,
          "tip": "Village near CP2. Hold buildings facing the open."
        },
        {
          "x": 38.0,
          "y": 42.0,
          "tip": "CP5 village on west shore. Dense cover for Mot.-Schutzen."
        },
        {
          "x": 55.0,
          "y": 72.0,
          "tip": "Southern village cluster. Anchor for PACT forward defense."
        },
        {
          "x": 70.0,
          "y": 68.0,
          "tip": "Buildings near CP1. Fight room to room, ATGM on the approaches."
        },
        {
          "x": 62.0,
          "y": 34.0,
          "tip": "CP4 area buildings. NATO forward infantry base."
        }
      ],
      "recon": [
        {
          "x": 45.0,
          "y": 38.0,
          "tip": "Forest/hedge perch watching the northern mid approaches."
        },
        {
          "x": 58.0,
          "y": 58.0,
          "tip": "Cover near the neck with LOS into both lake pinches."
        },
        {
          "x": 35.0,
          "y": 55.0,
          "tip": "West shore cover spotting movement along the water road."
        },
        {
          "x": 72.0,
          "y": 60.0,
          "tip": "East shore cover watching CP1/CP2 approaches."
        },
        {
          "x": 50.0,
          "y": 72.0,
          "tip": "Southern mid cover before PACT forward line."
        },
        {
          "x": 52.0,
          "y": 22.0,
          "tip": "Just south of NATO deploy: early warning on the main road."
        }
      ],
      "aa": [
        {
          "x": 52.0,
          "y": 18.0,
          "r": 14,
          "side": "NATO",
          "tip": "NATO AA behind first tree line south of deploy. Covers northern CPs."
        },
        {
          "x": 48.0,
          "y": 32.0,
          "r": 12,
          "side": "NATO",
          "tip": "Forward NATO AA covering CP4/CP6 approaches."
        },
        {
          "x": 54.0,
          "y": 82.0,
          "r": 14,
          "side": "PACT",
          "tip": "PACT AA north of deploy under cover. Covers southern CPs."
        },
        {
          "x": 50.0,
          "y": 68.0,
          "r": 12,
          "side": "PACT",
          "tip": "Forward PACT AA covering CP1/CP3 approaches."
        }
      ],
      "arty": [
        {
          "x": 53.0,
          "y": 12.0,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth near the northern buildings."
        },
        {
          "x": 55.0,
          "y": 88.0,
          "side": "PACT",
          "tip": "PACT arty/FOB in southern deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              53.0,
              15.0
            ],
            [
              55.0,
              35.0
            ],
            [
              58.0,
              50.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane down the eastern open fields. Only if PACT AA is spotted down."
        },
        {
          "path": [
            [
              55.0,
              85.0
            ],
            [
              52.0,
              70.0
            ],
            [
              48.0,
              55.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane up the western corridor. Nap-of-earth along shore trees."
        }
      ],
      "chokepoints": [
        {
          "x": 48.0,
          "y": 52.0,
          "tip": "Central land neck between west and east lakes. Main funnel for armor."
        },
        {
          "x": 35.0,
          "y": 48.0,
          "tip": "West lake shore pinch near CP5. Narrow approach along the water."
        },
        {
          "x": 68.0,
          "y": 55.0,
          "tip": "East lake bay pinch near CP2. Land squeezed against the water."
        },
        {
          "x": 42.0,
          "y": 62.0,
          "tip": "Southern neck south of the lakes pinch toward CP3."
        },
        {
          "x": 58.0,
          "y": 45.0,
          "tip": "Northern approach into the mid corridor from CP4/CP5."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              53.0,
              15.0
            ],
            [
              52.0,
              30.0
            ],
            [
              50.0,
              45.0
            ],
            [
              50.0,
              55.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis down the central road/open fields."
        },
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              48.0,
              18.0
            ],
            [
              40.0,
              22.0
            ],
            [
              32.0,
              24.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: NATO opening: covered swing west to CP6 via field edges."
        },
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              58.0,
              20.0
            ],
            [
              62.0,
              28.0
            ],
            [
              64.0,
              34.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: NATO opening: east road/hedges into CP4."
        },
        {
          "path": [
            [
              55.0,
              85.0
            ],
            [
              53.0,
              70.0
            ],
            [
              50.0,
              58.0
            ],
            [
              50.0,
              52.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis up the central corridor through the neck."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              62.0,
              80.0
            ],
            [
              70.0,
              74.0
            ],
            [
              75.0,
              71.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: PACT opening: east shore approach into CP1."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              48.0,
              80.0
            ],
            [
              42.0,
              74.0
            ],
            [
              37.0,
              68.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT opening: west fields into CP3."
        }
      ]
    },
    "terrain_source": "hand",
    "map_size": [
      1024,
      1536
    ]
  },
  "two_lakes_duel": {
    "source": "game_assets",
    "details_file": "_2x3_Two_lakes_1vs1_CONQ_DUEL_Details.dat",
    "map_image": "two_lakes_duel.jpg",
    "map_image_source": "game_preview",
    "transform": "xy_fy",
    "tf": {
      "mode": "xy_fy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      163.0,
      169.0,
      1310556.0,
      1965908.0
    ],
    "orientation": "ew",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            67.99,
            81.25
          ],
          [
            65.64,
            75.0
          ],
          [
            48.06,
            79.68
          ],
          [
            48.06,
            84.37
          ]
        ],
        "center": [
          58.01,
          80.0
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_1",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            17.58,
            28.11
          ],
          [
            17.58,
            24.21
          ],
          [
            10.55,
            24.99
          ],
          [
            10.55,
            27.33
          ]
        ],
        "center": [
          14.36,
          26.16
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_2",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            43.04,
            14.98
          ],
          [
            52.0,
            13.65
          ],
          [
            50.15,
            7.74
          ],
          [
            41.09,
            8.55
          ]
        ],
        "center": [
          46.51,
          11.24
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            32.19,
            74.24
          ],
          [
            34.95,
            69.96
          ],
          [
            24.21,
            68.96
          ],
          [
            24.34,
            68.3
          ],
          [
            22.61,
            68.13
          ],
          [
            21.73,
            73.26
          ]
        ],
        "center": [
          27.77,
          71.44
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            32.08,
            55.85
          ],
          [
            33.29,
            56.52
          ],
          [
            38.11,
            56.36
          ],
          [
            43.43,
            55.02
          ],
          [
            43.58,
            53.81
          ],
          [
            38.68,
            51.95
          ],
          [
            37.6,
            51.69
          ],
          [
            35.79,
            51.7
          ],
          [
            31.25,
            52.8
          ]
        ],
        "center": [
          36.94,
          54.17
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            80.67,
            64.27
          ],
          [
            82.1,
            66.31
          ],
          [
            86.93,
            66.31
          ],
          [
            89.59,
            61.91
          ],
          [
            84.51,
            61.29
          ],
          [
            80.42,
            61.45
          ]
        ],
        "center": [
          84.57,
          63.66
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            33.96,
            39.24
          ],
          [
            35.87,
            42.59
          ],
          [
            34.77,
            42.89
          ],
          [
            35.07,
            43.41
          ],
          [
            36.7,
            44.9
          ],
          [
            37.33,
            45.22
          ],
          [
            38.03,
            44.65
          ],
          [
            41.98,
            43.62
          ],
          [
            38.7,
            38.04
          ]
        ],
        "center": [
          37.82,
          41.62
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            64.08,
            46.76
          ],
          [
            64.79,
            46.93
          ],
          [
            72.04,
            46.97
          ],
          [
            72.97,
            46.31
          ],
          [
            71.92,
            41.82
          ],
          [
            70.78,
            41.42
          ],
          [
            64.98,
            41.06
          ],
          [
            64.05,
            41.73
          ]
        ],
        "center": [
          68.21,
          44.17
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            68.91,
            22.61
          ],
          [
            71.17,
            27.68
          ],
          [
            75.35,
            26.89
          ],
          [
            73.53,
            21.74
          ]
        ],
        "center": [
          72.22,
          24.69
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 18,
      "open_pct": 42,
      "water_pct": 28,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              48.0,
              18.0
            ],
            [
              40.0,
              22.0
            ],
            [
              32.0,
              24.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "NATO opening: covered swing west to CP6 via field edges."
        },
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              58.0,
              20.0
            ],
            [
              62.0,
              28.0
            ],
            [
              64.0,
              34.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "NATO opening: east road/hedges into CP4."
        },
        {
          "path": [
            [
              50.0,
              30.0
            ],
            [
              42.0,
              36.0
            ],
            [
              36.0,
              42.0
            ],
            [
              33.0,
              44.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO mid: push CP5 along west shore cover."
        },
        {
          "path": [
            [
              55.0,
              35.0
            ],
            [
              52.0,
              42.0
            ],
            [
              50.0,
              48.0
            ],
            [
              48.0,
              52.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV neck",
          "tip": "NATO mid: probe the central neck with recon leading."
        },
        {
          "path": [
            [
              48.0,
              52.0
            ],
            [
              45.0,
              58.0
            ],
            [
              40.0,
              64.0
            ],
            [
              37.0,
              67.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "ADV CP3",
          "tip": "NATO late: through neck cover into CP3."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              62.0,
              80.0
            ],
            [
              70.0,
              74.0
            ],
            [
              75.0,
              71.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "PACT opening: east shore approach into CP1."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              48.0,
              80.0
            ],
            [
              42.0,
              74.0
            ],
            [
              37.0,
              68.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT opening: west fields into CP3."
        },
        {
          "path": [
            [
              50.0,
              72.0
            ],
            [
              55.0,
              65.0
            ],
            [
              60.0,
              58.0
            ],
            [
              63.0,
              54.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "PACT mid: toward CP2 via central/east cover."
        },
        {
          "path": [
            [
              52.0,
              70.0
            ],
            [
              50.0,
              62.0
            ],
            [
              48.0,
              56.0
            ],
            [
              48.0,
              52.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV neck",
          "tip": "PACT mid: contest the central neck."
        },
        {
          "path": [
            [
              48.0,
              52.0
            ],
            [
              42.0,
              48.0
            ],
            [
              36.0,
              45.0
            ],
            [
              33.0,
              44.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "ADV CP5",
          "tip": "PACT late: through neck into CP5."
        }
      ],
      "flank": [
        {
          "path": [
            [
              45.0,
              25.0
            ],
            [
              32.0,
              35.0
            ],
            [
              28.0,
              48.0
            ],
            [
              32.0,
              55.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK W",
          "tip": "NATO west flank along lake shore cover toward CP5 rear."
        },
        {
          "path": [
            [
              65.0,
              80.0
            ],
            [
              75.0,
              70.0
            ],
            [
              78.0,
              60.0
            ],
            [
              70.0,
              52.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK E",
          "tip": "PACT east flank along east lake shore toward CP2/CP4."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              48.0,
              45.0
            ],
            [
              50.0,
              32.0
            ],
            [
              52.0,
              20.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback to secondary line then deploy depth."
        },
        {
          "path": [
            [
              50.0,
              55.0
            ],
            [
              52.0,
              68.0
            ],
            [
              54.0,
              82.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback to southern secondary line then deploy."
        }
      ],
      "defend": [
        {
          "x": 31.0,
          "y": 24.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6 buildings/treelines. Infantry + ATGM facing south."
        },
        {
          "x": 64.0,
          "y": 36.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4. Strongpoint for NATO opening."
        },
        {
          "x": 50.0,
          "y": 40.0,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line across the northern mid fields."
        },
        {
          "x": 75.0,
          "y": 70.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1 near east shore. Infantry in buildings."
        },
        {
          "x": 37.0,
          "y": 68.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3. Cover the southern neck."
        },
        {
          "x": 52.0,
          "y": 72.0,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line north of deploy."
        }
      ],
      "rally": [
        {
          "x": 50.0,
          "y": 20.0,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally behind the first hedgerow south of deploy."
        },
        {
          "x": 52.0,
          "y": 80.0,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally north of deploy under AA cover."
        }
      ],
      "atgm": [
        {
          "x": 42.0,
          "y": 50.0,
          "tip": "Tree line west of central neck, looking east across fields into CP2 approach."
        },
        {
          "x": 60.0,
          "y": 50.0,
          "tip": "Hedge/treeline east of neck covering open into CP5/CP2."
        },
        {
          "x": 38.0,
          "y": 40.0,
          "tip": "Cover facing CP5 village from the north-west fields."
        },
        {
          "x": 68.0,
          "y": 42.0,
          "tip": "Field edge covering CP4 approaches from the south."
        },
        {
          "x": 45.0,
          "y": 68.0,
          "tip": "Treeline north of CP3 covering the southern corridor."
        },
        {
          "x": 70.0,
          "y": 65.0,
          "tip": "Cover overlooking CP1 approaches along the east shore."
        },
        {
          "x": 50.0,
          "y": 30.0,
          "tip": "Treeline south of NATO deploy covering the first open fields."
        },
        {
          "x": 52.0,
          "y": 78.0,
          "tip": "Treeline north of PACT deploy covering the southern fields."
        }
      ],
      "tank": [
        {
          "x": 50.0,
          "y": 35.0,
          "tip": "Hull-down on northern field edge covering the central road."
        },
        {
          "x": 55.0,
          "y": 55.0,
          "tip": "Hull-down covering the neck crossing east-west."
        },
        {
          "x": 48.0,
          "y": 65.0,
          "tip": "Southern fields hull-down toward CP3/CP1."
        },
        {
          "x": 62.0,
          "y": 48.0,
          "tip": "Open lane toward CP2; stay on the near treeline, not mid-field."
        },
        {
          "x": 40.0,
          "y": 58.0,
          "tip": "West corridor lane toward CP5; hull-down off the road."
        }
      ],
      "infantry": [
        {
          "x": 48.0,
          "y": 48.0,
          "tip": "Central hamlet west of neck. Strongpoint for infantry + short AT."
        },
        {
          "x": 58.0,
          "y": 52.0,
          "tip": "Village near CP2. Hold buildings facing the open."
        },
        {
          "x": 38.0,
          "y": 42.0,
          "tip": "CP5 village on west shore. Dense cover for Mot.-Schutzen."
        },
        {
          "x": 55.0,
          "y": 72.0,
          "tip": "Southern village cluster. Anchor for PACT forward defense."
        },
        {
          "x": 70.0,
          "y": 68.0,
          "tip": "Buildings near CP1. Fight room to room, ATGM on the approaches."
        },
        {
          "x": 62.0,
          "y": 34.0,
          "tip": "CP4 area buildings. NATO forward infantry base."
        }
      ],
      "recon": [
        {
          "x": 45.0,
          "y": 38.0,
          "tip": "Forest/hedge perch watching the northern mid approaches."
        },
        {
          "x": 58.0,
          "y": 58.0,
          "tip": "Cover near the neck with LOS into both lake pinches."
        },
        {
          "x": 35.0,
          "y": 55.0,
          "tip": "West shore cover spotting movement along the water road."
        },
        {
          "x": 72.0,
          "y": 60.0,
          "tip": "East shore cover watching CP1/CP2 approaches."
        },
        {
          "x": 50.0,
          "y": 72.0,
          "tip": "Southern mid cover before PACT forward line."
        },
        {
          "x": 52.0,
          "y": 22.0,
          "tip": "Just south of NATO deploy: early warning on the main road."
        }
      ],
      "aa": [
        {
          "x": 52.0,
          "y": 18.0,
          "r": 14,
          "side": "NATO",
          "tip": "NATO AA behind first tree line south of deploy. Covers northern CPs."
        },
        {
          "x": 48.0,
          "y": 32.0,
          "r": 12,
          "side": "NATO",
          "tip": "Forward NATO AA covering CP4/CP6 approaches."
        },
        {
          "x": 54.0,
          "y": 82.0,
          "r": 14,
          "side": "PACT",
          "tip": "PACT AA north of deploy under cover. Covers southern CPs."
        },
        {
          "x": 50.0,
          "y": 68.0,
          "r": 12,
          "side": "PACT",
          "tip": "Forward PACT AA covering CP1/CP3 approaches."
        }
      ],
      "arty": [
        {
          "x": 53.0,
          "y": 12.0,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth near the northern buildings."
        },
        {
          "x": 55.0,
          "y": 88.0,
          "side": "PACT",
          "tip": "PACT arty/FOB in southern deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              53.0,
              15.0
            ],
            [
              55.0,
              35.0
            ],
            [
              58.0,
              50.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane down the eastern open fields. Only if PACT AA is spotted down."
        },
        {
          "path": [
            [
              55.0,
              85.0
            ],
            [
              52.0,
              70.0
            ],
            [
              48.0,
              55.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane up the western corridor. Nap-of-earth along shore trees."
        }
      ],
      "chokepoints": [
        {
          "x": 48.0,
          "y": 52.0,
          "tip": "Central land neck between west and east lakes. Main funnel for armor."
        },
        {
          "x": 35.0,
          "y": 48.0,
          "tip": "West lake shore pinch near CP5. Narrow approach along the water."
        },
        {
          "x": 68.0,
          "y": 55.0,
          "tip": "East lake bay pinch near CP2. Land squeezed against the water."
        },
        {
          "x": 42.0,
          "y": 62.0,
          "tip": "Southern neck south of the lakes pinch toward CP3."
        },
        {
          "x": 58.0,
          "y": 45.0,
          "tip": "Northern approach into the mid corridor from CP4/CP5."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              53.0,
              15.0
            ],
            [
              52.0,
              30.0
            ],
            [
              50.0,
              45.0
            ],
            [
              50.0,
              55.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis down the central road/open fields."
        },
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              48.0,
              18.0
            ],
            [
              40.0,
              22.0
            ],
            [
              32.0,
              24.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: NATO opening: covered swing west to CP6 via field edges."
        },
        {
          "path": [
            [
              53.0,
              12.0
            ],
            [
              58.0,
              20.0
            ],
            [
              62.0,
              28.0
            ],
            [
              64.0,
              34.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: NATO opening: east road/hedges into CP4."
        },
        {
          "path": [
            [
              55.0,
              85.0
            ],
            [
              53.0,
              70.0
            ],
            [
              50.0,
              58.0
            ],
            [
              50.0,
              52.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis up the central corridor through the neck."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              62.0,
              80.0
            ],
            [
              70.0,
              74.0
            ],
            [
              75.0,
              71.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: PACT opening: east shore approach into CP1."
        },
        {
          "path": [
            [
              55.0,
              88.0
            ],
            [
              48.0,
              80.0
            ],
            [
              42.0,
              74.0
            ],
            [
              37.0,
              68.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT opening: west fields into CP3."
        }
      ]
    },
    "terrain_source": "hand",
    "map_size": [
      1024,
      1536
    ]
  },
  "death_row": {
    "source": "game_assets",
    "details_file": "_2x3_Death_Row_2vs2_CONQ_Details.dat",
    "map_image": "death_row.jpg",
    "map_image_source": "game_preview",
    "transform": "xy_fxy",
    "tf": {
      "mode": "xy_fxy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      163.0,
      165.0,
      1310556.0,
      1965914.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            77.73,
            93.75
          ],
          [
            27.63,
            93.7
          ],
          [
            30.84,
            83.59
          ],
          [
            77.73,
            83.59
          ]
        ],
        "center": [
          53.49,
          88.72
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            77.73,
            17.17
          ],
          [
            30.84,
            17.17
          ],
          [
            32.51,
            12.47
          ],
          [
            34.55,
            10.67
          ],
          [
            40.22,
            5.45
          ],
          [
            77.73,
            5.45
          ]
        ],
        "center": [
          56.02,
          11.54
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            67.18,
            56.24
          ],
          [
            63.66,
            56.26
          ],
          [
            62.59,
            56.8
          ],
          [
            61.36,
            57.02
          ],
          [
            60.0,
            56.85
          ],
          [
            58.81,
            56.6
          ],
          [
            57.8,
            56.24
          ],
          [
            57.8,
            47.65
          ],
          [
            67.18,
            47.65
          ]
        ],
        "center": [
          62.44,
          52.1
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            60.15,
            70.31
          ],
          [
            44.91,
            70.31
          ],
          [
            44.91,
            63.28
          ],
          [
            49.6,
            62.49
          ],
          [
            60.15,
            62.49
          ]
        ],
        "center": [
          52.62,
          66.46
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            39.54,
            61.73
          ],
          [
            35.06,
            61.73
          ],
          [
            33.9,
            61.32
          ],
          [
            32.01,
            60.93
          ],
          [
            28.5,
            60.93
          ],
          [
            28.5,
            53.9
          ],
          [
            37.88,
            53.9
          ]
        ],
        "center": [
          33.75,
          57.73
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            58.97,
            37.49
          ],
          [
            50.77,
            37.49
          ],
          [
            50.77,
            30.46
          ],
          [
            58.97,
            30.46
          ]
        ],
        "center": [
          54.87,
          33.97
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            42.56,
            52.34
          ],
          [
            42.56,
            45.3
          ],
          [
            43.06,
            44.97
          ],
          [
            43.75,
            44.85
          ],
          [
            44.32,
            44.8
          ],
          [
            44.85,
            44.68
          ],
          [
            45.77,
            44.1
          ],
          [
            46.4,
            43.75
          ],
          [
            46.86,
            43.49
          ],
          [
            47.13,
            43.32
          ],
          [
            47.45,
            43.13
          ],
          [
            48.09,
            42.79
          ],
          [
            48.51,
            42.64
          ],
          [
            49.02,
            42.49
          ],
          [
            49.46,
            42.38
          ],
          [
            49.94,
            42.33
          ],
          [
            50.63,
            42.37
          ],
          [
            51.43,
            42.49
          ],
          [
            52.15,
            42.36
          ],
          [
            52.63,
            42.17
          ],
          [
            53.11,
            42.18
          ],
          [
            53.11,
            52.34
          ]
        ],
        "center": [
          48.18,
          47.78
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            37.88,
            46.47
          ],
          [
            28.43,
            46.47
          ],
          [
            28.43,
            39.53
          ],
          [
            32.01,
            39.53
          ],
          [
            34.36,
            39.05
          ],
          [
            37.88,
            39.05
          ]
        ],
        "center": [
          33.23,
          42.88
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 35,
      "open_pct": 40,
      "water_pct": 8,
      "town_pct": 12
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              53.0,
              89.0
            ],
            [
              52.0,
              80.0
            ],
            [
              50.0,
              72.0
            ],
            [
              52.0,
              67.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "NATO opening: up the road into CP2."
        },
        {
          "path": [
            [
              53.0,
              89.0
            ],
            [
              60.0,
              75.0
            ],
            [
              62.0,
              60.0
            ],
            [
              62.0,
              53.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "NATO opening: east lane to CP1."
        },
        {
          "path": [
            [
              52.0,
              65.0
            ],
            [
              50.0,
              55.0
            ],
            [
              48.0,
              50.0
            ],
            [
              48.0,
              48.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO mid: central to CP5."
        },
        {
          "path": [
            [
              50.0,
              65.0
            ],
            [
              42.0,
              60.0
            ],
            [
              35.0,
              58.0
            ],
            [
              34.0,
              58.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP3",
          "tip": "NATO mid: west to CP3."
        },
        {
          "path": [
            [
              50.0,
              50.0
            ],
            [
              52.0,
              42.0
            ],
            [
              54.0,
              36.0
            ],
            [
              55.0,
              34.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "ADV CP4",
          "tip": "NATO late: north to CP4."
        },
        {
          "path": [
            [
              56.0,
              12.0
            ],
            [
              55.0,
              20.0
            ],
            [
              55.0,
              28.0
            ],
            [
              55.0,
              34.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "PACT opening: south to CP4."
        },
        {
          "path": [
            [
              56.0,
              12.0
            ],
            [
              45.0,
              22.0
            ],
            [
              38.0,
              32.0
            ],
            [
              33.0,
              42.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "PACT opening: south-west to CP6."
        },
        {
          "path": [
            [
              55.0,
              35.0
            ],
            [
              52.0,
              42.0
            ],
            [
              50.0,
              46.0
            ],
            [
              48.0,
              48.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "PACT mid: to CP5."
        },
        {
          "path": [
            [
              55.0,
              35.0
            ],
            [
              60.0,
              42.0
            ],
            [
              62.0,
              48.0
            ],
            [
              62.0,
              52.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP1",
          "tip": "PACT mid: east to CP1."
        },
        {
          "path": [
            [
              50.0,
              50.0
            ],
            [
              51.0,
              58.0
            ],
            [
              52.0,
              64.0
            ],
            [
              53.0,
              66.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "ADV CP2",
          "tip": "PACT late: into CP2."
        }
      ],
      "flank": [
        {
          "path": [
            [
              45.0,
              80.0
            ],
            [
              35.0,
              70.0
            ],
            [
              30.0,
              55.0
            ],
            [
              35.0,
              45.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK W",
          "tip": "NATO west forest flank."
        },
        {
          "path": [
            [
              60.0,
              15.0
            ],
            [
              70.0,
              30.0
            ],
            [
              75.0,
              45.0
            ],
            [
              65.0,
              55.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK E",
          "tip": "PACT east forest flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              50.0,
              55.0
            ],
            [
              52.0,
              70.0
            ],
            [
              53.0,
              82.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback into southern town."
        },
        {
          "path": [
            [
              50.0,
              45.0
            ],
            [
              54.0,
              30.0
            ],
            [
              56.0,
              16.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback to northern deploy."
        }
      ],
      "defend": [
        {
          "x": 53.0,
          "y": 66.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2 village."
        },
        {
          "x": 62.0,
          "y": 52.0,
          "side": "NATO",
          "phase": "mid",
          "label": "DEF CP1",
          "tip": "Hold CP1 east mid."
        },
        {
          "x": 50.0,
          "y": 75.0,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary at southern funnel."
        },
        {
          "x": 55.0,
          "y": 34.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4."
        },
        {
          "x": 33.0,
          "y": 43.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6 west."
        },
        {
          "x": 52.0,
          "y": 25.0,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary northern valley."
        }
      ],
      "rally": [
        {
          "x": 52.0,
          "y": 80.0,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally at north edge of southern town."
        },
        {
          "x": 54.0,
          "y": 18.0,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally south of deploy."
        }
      ],
      "atgm": [
        {
          "x": 40.0,
          "y": 40.0,
          "tip": "West treeline covering central road."
        },
        {
          "x": 60.0,
          "y": 40.0,
          "tip": "East treeline covering central road."
        },
        {
          "x": 42.0,
          "y": 55.0,
          "tip": "Cover facing CP3/CP5 crossroads."
        },
        {
          "x": 62.0,
          "y": 55.0,
          "tip": "Cover facing CP1 approaches."
        },
        {
          "x": 45.0,
          "y": 68.0,
          "tip": "Treeline north of southern town."
        },
        {
          "x": 58.0,
          "y": 30.0,
          "tip": "Northern field edge ATGM."
        },
        {
          "x": 48.0,
          "y": 48.0,
          "tip": "Mid corridor ambush on the main N-S road."
        },
        {
          "x": 55.0,
          "y": 72.0,
          "tip": "Approaches into the southern town."
        }
      ],
      "tank": [
        {
          "x": 50.0,
          "y": 30.0,
          "tip": "Hull-down on northern open lane."
        },
        {
          "x": 52.0,
          "y": 50.0,
          "tip": "Mid corridor hull-down off the main road."
        },
        {
          "x": 50.0,
          "y": 65.0,
          "tip": "Southern fields hull-down toward the town."
        },
        {
          "x": 58.0,
          "y": 42.0,
          "tip": "East lane hull-down."
        }
      ],
      "infantry": [
        {
          "x": 53.0,
          "y": 88.0,
          "tip": "Southern town at NATO deploy. Major infantry anchor."
        },
        {
          "x": 48.0,
          "y": 65.0,
          "tip": "CP2 area village."
        },
        {
          "x": 55.0,
          "y": 48.0,
          "tip": "Central village/crossroads."
        },
        {
          "x": 40.0,
          "y": 55.0,
          "tip": "West mid buildings near CP3."
        },
        {
          "x": 65.0,
          "y": 52.0,
          "tip": "East mid buildings near CP1."
        }
      ],
      "recon": [
        {
          "x": 40.0,
          "y": 30.0,
          "tip": "West forest recon watching the valley."
        },
        {
          "x": 60.0,
          "y": 30.0,
          "tip": "East forest recon."
        },
        {
          "x": 45.0,
          "y": 50.0,
          "tip": "Mid cover recon."
        },
        {
          "x": 55.0,
          "y": 60.0,
          "tip": "South-mid recon."
        },
        {
          "x": 50.0,
          "y": 20.0,
          "tip": "Screen south of PACT deploy."
        },
        {
          "x": 52.0,
          "y": 80.0,
          "tip": "Screen north of NATO deploy."
        }
      ],
      "aa": [
        {
          "x": 53.0,
          "y": 82.0,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA north of southern town."
        },
        {
          "x": 50.0,
          "y": 70.0,
          "r": 11,
          "side": "NATO",
          "tip": "Forward NATO AA."
        },
        {
          "x": 55.0,
          "y": 16.0,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA south of northern deploy."
        },
        {
          "x": 52.0,
          "y": 30.0,
          "r": 11,
          "side": "PACT",
          "tip": "Forward PACT AA."
        }
      ],
      "arty": [
        {
          "x": 53.0,
          "y": 90.0,
          "side": "NATO",
          "tip": "NATO arty/FOB in southern deploy/town depth."
        },
        {
          "x": 56.0,
          "y": 10.0,
          "side": "PACT",
          "tip": "PACT arty/FOB in northern deploy."
        }
      ],
      "helo": [
        {
          "path": [
            [
              53.0,
              85.0
            ],
            [
              55.0,
              65.0
            ],
            [
              55.0,
              45.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo up the valley. Deadly if AA is up."
        },
        {
          "path": [
            [
              56.0,
              15.0
            ],
            [
              52.0,
              35.0
            ],
            [
              50.0,
              55.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo down the valley center."
        }
      ],
      "chokepoints": [
        {
          "x": 50.0,
          "y": 35.0,
          "tip": "Northern valley squeeze between west/east forest walls."
        },
        {
          "x": 50.0,
          "y": 55.0,
          "tip": "Central corridor pinch at the mid towns."
        },
        {
          "x": 52.0,
          "y": 75.0,
          "tip": "Southern funnel into the big town near NATO deploy."
        },
        {
          "x": 70.0,
          "y": 80.0,
          "tip": "SE approach near water restricting lateral movement."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              53.0,
              85.0
            ],
            [
              52.0,
              65.0
            ],
            [
              50.0,
              50.0
            ],
            [
              52.0,
              35.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor up the central valley road."
        },
        {
          "path": [
            [
              53.0,
              89.0
            ],
            [
              52.0,
              80.0
            ],
            [
              50.0,
              72.0
            ],
            [
              52.0,
              67.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: NATO opening: up the road into CP2."
        },
        {
          "path": [
            [
              53.0,
              89.0
            ],
            [
              60.0,
              75.0
            ],
            [
              62.0,
              60.0
            ],
            [
              62.0,
              53.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: NATO opening: east lane to CP1."
        },
        {
          "path": [
            [
              56.0,
              15.0
            ],
            [
              54.0,
              30.0
            ],
            [
              52.0,
              45.0
            ],
            [
              50.0,
              60.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor down the central valley."
        },
        {
          "path": [
            [
              56.0,
              12.0
            ],
            [
              55.0,
              20.0
            ],
            [
              55.0,
              28.0
            ],
            [
              55.0,
              34.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: PACT opening: south to CP4."
        },
        {
          "path": [
            [
              56.0,
              12.0
            ],
            [
              45.0,
              22.0
            ],
            [
              38.0,
              32.0
            ],
            [
              33.0,
              42.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: PACT opening: south-west to CP6."
        }
      ]
    },
    "terrain_source": "hand",
    "map_size": [
      1024,
      1536
    ]
  },
  "vertigo": {
    "source": "game_assets",
    "details_file": "_2x3_Vertigo_2vs2_CONQ_Details.dat",
    "map_image": "vertigo.jpg",
    "map_image_source": "game_preview",
    "transform": "xy_fy",
    "tf": {
      "mode": "xy_fy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      51.0,
      357.0,
      1310372.0,
      1966058.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            36.34,
            89.79
          ],
          [
            36.55,
            95.18
          ],
          [
            67.78,
            95.2
          ],
          [
            67.52,
            89.93
          ]
        ],
        "center": [
          51.99,
          92.52
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            37.9,
            4.89
          ],
          [
            38.06,
            11.98
          ],
          [
            74.44,
            11.95
          ],
          [
            74.51,
            4.93
          ]
        ],
        "center": [
          56.2,
          8.43
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            20.05,
            44.13
          ],
          [
            21.0,
            45.36
          ],
          [
            21.49,
            47.0
          ],
          [
            22.8,
            48.9
          ],
          [
            24.02,
            49.91
          ],
          [
            24.17,
            50.68
          ],
          [
            23.59,
            51.92
          ],
          [
            22.38,
            53.16
          ],
          [
            22.05,
            53.91
          ],
          [
            21.69,
            55.38
          ],
          [
            20.98,
            59.29
          ],
          [
            20.87,
            60.24
          ],
          [
            29.73,
            59.38
          ],
          [
            32.91,
            59.16
          ],
          [
            38.13,
            58.85
          ],
          [
            37.87,
            44.45
          ]
        ],
        "center": [
          29.83,
          51.93
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            31.66,
            66.88
          ],
          [
            31.84,
            68.96
          ],
          [
            32.57,
            69.17
          ],
          [
            33.01,
            69.7
          ],
          [
            33.19,
            70.35
          ],
          [
            32.96,
            71.13
          ],
          [
            32.63,
            71.61
          ],
          [
            32.44,
            72.57
          ],
          [
            32.37,
            73.42
          ],
          [
            32.7,
            74.32
          ],
          [
            32.89,
            74.76
          ],
          [
            33.7,
            75.21
          ],
          [
            34.6,
            75.77
          ],
          [
            40.82,
            74.92
          ],
          [
            40.23,
            66.96
          ]
        ],
        "center": [
          36.46,
          71.1
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            50.3,
            59.63
          ],
          [
            50.34,
            60.9
          ],
          [
            50.4,
            61.71
          ],
          [
            51.29,
            70.0
          ],
          [
            61.18,
            70.16
          ],
          [
            61.46,
            61.72
          ],
          [
            61.35,
            60.45
          ],
          [
            61.05,
            60.36
          ],
          [
            60.56,
            60.17
          ],
          [
            60.25,
            59.95
          ],
          [
            60.07,
            59.61
          ]
        ],
        "center": [
          56.02,
          64.78
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            58.28,
            54.54
          ],
          [
            76.66,
            54.5
          ],
          [
            77.71,
            46.6
          ],
          [
            60.49,
            43.86
          ]
        ],
        "center": [
          67.82,
          49.87
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            33.78,
            35.75
          ],
          [
            43.3,
            36.41
          ],
          [
            43.48,
            27.41
          ],
          [
            34.49,
            27.34
          ]
        ],
        "center": [
          38.81,
          31.77
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            58.9,
            30.1
          ],
          [
            59.74,
            39.42
          ],
          [
            65.94,
            39.09
          ],
          [
            65.78,
            30.95
          ],
          [
            65.69,
            28.85
          ],
          [
            59.0,
            28.7
          ]
        ],
        "center": [
          62.52,
          33.93
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              46.8,
              85.4
            ],
            [
              41.6,
              78.2
            ],
            [
              36.5,
              71.1
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "NATO advance to CP2."
        },
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              53.3,
              83.3
            ],
            [
              54.7,
              74.0
            ],
            [
              56.0,
              64.8
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              57.3,
              78.3
            ],
            [
              62.5,
              64.1
            ],
            [
              67.8,
              49.9
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP4",
          "tip": "NATO advance to CP4."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              58.3,
              16.9
            ],
            [
              60.4,
              25.4
            ],
            [
              62.5,
              33.9
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "PACT advance to CP6."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              50.4,
              16.2
            ],
            [
              44.6,
              24.0
            ],
            [
              38.8,
              31.8
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP5",
          "tip": "PACT advance to CP5."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              60.1,
              22.2
            ],
            [
              63.9,
              36.1
            ],
            [
              67.8,
              49.9
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP4",
          "tip": "PACT advance to CP4."
        }
      ],
      "flank": [
        {
          "path": [
            [
              52.4,
              84.1
            ],
            [
              44.1,
              50.5
            ],
            [
              54.9,
              33.7
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              55.8,
              16.8
            ],
            [
              64.1,
              50.5
            ],
            [
              53.3,
              67.3
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              53.9,
              54.7
            ],
            [
              52.8,
              75.7
            ],
            [
              52.0,
              92.5
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              54.3,
              46.3
            ],
            [
              55.4,
              25.2
            ],
            [
              56.2,
              8.4
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 36.5,
          "y": 71.1,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 56.0,
          "y": 64.8,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 53.0,
          "y": 71.5,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 62.5,
          "y": 33.9,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6."
        },
        {
          "x": 38.8,
          "y": 31.8,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP5",
          "tip": "Hold CP5."
        },
        {
          "x": 55.1,
          "y": 29.5,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 52.5,
          "y": 82.4,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 55.7,
          "y": 18.5,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 25.8,
          "y": 51.9,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 33.8,
          "y": 48.9,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 32.5,
          "y": 71.1,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 40.5,
          "y": 68.1,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 52.0,
          "y": 64.8,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 60.0,
          "y": 61.8,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 63.8,
          "y": 49.9,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 71.8,
          "y": 46.9,
          "tip": "Secondary ATGM arc on CP4."
        },
        {
          "x": 34.8,
          "y": 31.8,
          "tip": "ATGM cover facing CP5."
        },
        {
          "x": 42.8,
          "y": 28.8,
          "tip": "Secondary ATGM arc on CP5."
        }
      ],
      "tank": [
        {
          "x": 29.8,
          "y": 56.9,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 36.5,
          "y": 76.1,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 56.0,
          "y": 69.8,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 67.8,
          "y": 54.9,
          "tip": "Tank hull-down near CP4."
        },
        {
          "x": 38.8,
          "y": 36.8,
          "tip": "Tank hull-down near CP5."
        },
        {
          "x": 62.5,
          "y": 38.9,
          "tip": "Tank hull-down near CP6."
        }
      ],
      "infantry": [
        {
          "x": 29.8,
          "y": 51.9,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 36.5,
          "y": 71.1,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 56.0,
          "y": 64.8,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 67.8,
          "y": 49.9,
          "tip": "Infantry hold CP4 buildings/cover."
        },
        {
          "x": 38.8,
          "y": 31.8,
          "tip": "Infantry hold CP5 buildings/cover."
        },
        {
          "x": 62.5,
          "y": 33.9,
          "tip": "Infantry hold CP6 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 23.8,
          "y": 47.9,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 30.5,
          "y": 67.1,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 50.0,
          "y": 60.8,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 61.8,
          "y": 45.9,
          "tip": "Recon perch watching CP4."
        },
        {
          "x": 32.8,
          "y": 27.8,
          "tip": "Recon perch watching CP5."
        },
        {
          "x": 56.5,
          "y": 29.9,
          "tip": "Recon perch watching CP6."
        }
      ],
      "aa": [
        {
          "x": 52.6,
          "y": 79.9,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 53.2,
          "y": 69.0,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 55.6,
          "y": 21.0,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 55.0,
          "y": 32.0,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 52.0,
          "y": 92.5,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 56.2,
          "y": 8.4,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              53.0,
              71.5
            ],
            [
              54.1,
              50.5
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              55.1,
              29.5
            ],
            [
              54.1,
              50.5
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 54.1,
          "y": 50.5,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 46.1,
          "y": 50.5,
          "tip": "West of mid corridor."
        },
        {
          "x": 62.1,
          "y": 50.5,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              52.7,
              78.5
            ],
            [
              53.4,
              64.5
            ],
            [
              54.1,
              50.5
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              46.8,
              85.4
            ],
            [
              41.6,
              78.2
            ],
            [
              36.5,
              71.1
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: NATO advance to CP2."
        },
        {
          "path": [
            [
              52.0,
              92.5
            ],
            [
              53.3,
              83.3
            ],
            [
              54.7,
              74.0
            ],
            [
              56.0,
              64.8
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              55.5,
              22.4
            ],
            [
              54.8,
              36.5
            ],
            [
              54.1,
              50.5
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              58.3,
              16.9
            ],
            [
              60.4,
              25.4
            ],
            [
              62.5,
              33.9
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: PACT advance to CP6."
        },
        {
          "path": [
            [
              56.2,
              8.4
            ],
            [
              50.4,
              16.2
            ],
            [
              44.6,
              24.0
            ],
            [
              38.8,
              31.8
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP5",
          "tip": "Enemy opening: PACT advance to CP5."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1024,
      1536
    ]
  },
  "vertigo_duel": {
    "source": "game_assets",
    "details_file": "_2x3_Vertigo_1vs1_CONQ_DUEL_Details.dat",
    "map_image": "vertigo_duel.jpg",
    "map_image_source": "game_preview",
    "transform": "xy_fx",
    "tf": {
      "mode": "xy_fx",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      774.0,
      774.0,
      1309934.0,
      1965305.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            60.17,
            5.47
          ],
          [
            40.22,
            5.47
          ],
          [
            40.22,
            16.42
          ],
          [
            60.17,
            16.42
          ]
        ],
        "center": [
          50.2,
          10.95
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            69.49,
            83.66
          ],
          [
            40.16,
            83.66
          ],
          [
            40.16,
            94.61
          ],
          [
            69.49,
            94.61
          ]
        ],
        "center": [
          54.83,
          89.13
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            82.4,
            45.35
          ],
          [
            82.4,
            51.6
          ],
          [
            87.09,
            51.6
          ],
          [
            87.09,
            45.35
          ]
        ],
        "center": [
          84.75,
          48.48
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            74.19,
            50.04
          ],
          [
            70.67,
            47.69
          ],
          [
            64.8,
            47.69
          ],
          [
            64.8,
            50.82
          ],
          [
            67.15,
            53.95
          ],
          [
            74.19,
            53.95
          ]
        ],
        "center": [
          69.49,
          50.86
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            64.25,
            26.63
          ],
          [
            60.15,
            27.12
          ],
          [
            61.47,
            32.23
          ],
          [
            65.54,
            31.82
          ]
        ],
        "center": [
          62.86,
          29.44
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            40.16,
            32.84
          ],
          [
            40.16,
            36.75
          ],
          [
            44.86,
            36.75
          ],
          [
            44.86,
            32.84
          ]
        ],
        "center": [
          42.51,
          34.79
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            40.16,
            44.57
          ],
          [
            33.12,
            46.91
          ],
          [
            34.3,
            48.48
          ],
          [
            41.34,
            46.91
          ]
        ],
        "center": [
          37.43,
          46.65
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            64.06,
            65.25
          ],
          [
            59.42,
            65.0
          ],
          [
            58.56,
            71.55
          ],
          [
            63.22,
            71.88
          ]
        ],
        "center": [
          61.32,
          68.43
        ]
      },
      {
        "id": "z6",
        "label": "CP7",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            37.88,
            53.91
          ],
          [
            30.78,
            52.39
          ],
          [
            30.78,
            53.95
          ],
          [
            34.3,
            56.29
          ],
          [
            36.64,
            57.08
          ]
        ],
        "center": [
          34.41,
          54.56
        ]
      },
      {
        "id": "z7",
        "label": "CP8",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            37.82,
            60.99
          ],
          [
            33.12,
            60.99
          ],
          [
            33.12,
            64.11
          ],
          [
            37.82,
            64.11
          ]
        ],
        "center": [
          35.47,
          62.55
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              54.4,
              17.1
            ],
            [
              58.6,
              23.3
            ],
            [
              62.9,
              29.4
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              47.6,
              18.9
            ],
            [
              45.1,
              26.8
            ],
            [
              42.5,
              34.8
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "NATO advance to CP4."
        },
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              45.9,
              22.9
            ],
            [
              41.7,
              34.8
            ],
            [
              37.4,
              46.7
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO advance to CP5."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              57.0,
              82.2
            ],
            [
              59.2,
              75.3
            ],
            [
              61.3,
              68.4
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "PACT advance to CP6."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              48.4,
              80.3
            ],
            [
              41.9,
              71.4
            ],
            [
              35.5,
              62.5
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP8",
          "tip": "PACT advance to CP8."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              48.0,
              77.6
            ],
            [
              41.2,
              66.1
            ],
            [
              34.4,
              54.6
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP7",
          "tip": "PACT advance to CP7."
        }
      ],
      "flank": [
        {
          "path": [
            [
              50.7,
              18.8
            ],
            [
              42.5,
              50.0
            ],
            [
              53.4,
              65.7
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              54.4,
              81.3
            ],
            [
              62.5,
              50.0
            ],
            [
              51.6,
              34.4
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              52.3,
              46.1
            ],
            [
              51.1,
              26.6
            ],
            [
              50.2,
              10.9
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              52.7,
              53.9
            ],
            [
              53.9,
              73.5
            ],
            [
              54.8,
              89.1
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 62.9,
          "y": 29.4,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 42.5,
          "y": 34.8,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4."
        },
        {
          "x": 51.4,
          "y": 30.5,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 61.3,
          "y": 68.4,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6."
        },
        {
          "x": 35.5,
          "y": 62.5,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP8",
          "tip": "Hold CP8."
        },
        {
          "x": 53.7,
          "y": 69.6,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 50.8,
          "y": 20.3,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 54.3,
          "y": 79.7,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 80.8,
          "y": 48.5,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 88.8,
          "y": 45.5,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 65.5,
          "y": 50.9,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 73.5,
          "y": 47.9,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 58.9,
          "y": 29.4,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 66.9,
          "y": 26.4,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 38.5,
          "y": 34.8,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 46.5,
          "y": 31.8,
          "tip": "Secondary ATGM arc on CP4."
        },
        {
          "x": 33.4,
          "y": 46.6,
          "tip": "ATGM cover facing CP5."
        },
        {
          "x": 41.4,
          "y": 43.6,
          "tip": "Secondary ATGM arc on CP5."
        }
      ],
      "tank": [
        {
          "x": 84.8,
          "y": 53.5,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 69.5,
          "y": 55.9,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 62.9,
          "y": 34.4,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 42.5,
          "y": 39.8,
          "tip": "Tank hull-down near CP4."
        },
        {
          "x": 37.4,
          "y": 51.6,
          "tip": "Tank hull-down near CP5."
        },
        {
          "x": 61.3,
          "y": 73.4,
          "tip": "Tank hull-down near CP6."
        }
      ],
      "infantry": [
        {
          "x": 84.8,
          "y": 48.5,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 69.5,
          "y": 50.9,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 62.9,
          "y": 29.4,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 42.5,
          "y": 34.8,
          "tip": "Infantry hold CP4 buildings/cover."
        },
        {
          "x": 37.4,
          "y": 46.6,
          "tip": "Infantry hold CP5 buildings/cover."
        },
        {
          "x": 61.3,
          "y": 68.4,
          "tip": "Infantry hold CP6 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 78.8,
          "y": 44.5,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 63.5,
          "y": 46.9,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 56.9,
          "y": 25.4,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 36.5,
          "y": 30.8,
          "tip": "Recon perch watching CP4."
        },
        {
          "x": 31.4,
          "y": 42.6,
          "tip": "Recon perch watching CP5."
        },
        {
          "x": 55.3,
          "y": 64.4,
          "tip": "Recon perch watching CP6."
        },
        {
          "x": 28.4,
          "y": 50.6,
          "tip": "Recon perch watching CP7."
        },
        {
          "x": 29.5,
          "y": 58.5,
          "tip": "Recon perch watching CP8."
        }
      ],
      "aa": [
        {
          "x": 50.9,
          "y": 22.7,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 51.5,
          "y": 32.8,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 54.1,
          "y": 77.4,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 53.5,
          "y": 67.2,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 50.2,
          "y": 10.9,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 54.8,
          "y": 89.1,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              51.4,
              30.5
            ],
            [
              52.5,
              50.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              53.7,
              69.6
            ],
            [
              52.5,
              50.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 52.5,
          "y": 50.0,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 44.5,
          "y": 50.0,
          "tip": "West of mid corridor."
        },
        {
          "x": 60.5,
          "y": 50.0,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              51.0,
              24.0
            ],
            [
              51.7,
              37.0
            ],
            [
              52.5,
              50.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              54.4,
              17.1
            ],
            [
              58.6,
              23.3
            ],
            [
              62.9,
              29.4
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              50.2,
              10.9
            ],
            [
              47.6,
              18.9
            ],
            [
              45.1,
              26.8
            ],
            [
              42.5,
              34.8
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: NATO advance to CP4."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              54.1,
              76.1
            ],
            [
              53.3,
              63.1
            ],
            [
              52.5,
              50.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              57.0,
              82.2
            ],
            [
              59.2,
              75.3
            ],
            [
              61.3,
              68.4
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: PACT advance to CP6."
        },
        {
          "path": [
            [
              54.8,
              89.1
            ],
            [
              48.4,
              80.3
            ],
            [
              41.9,
              71.4
            ],
            [
              35.5,
              62.5
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP8",
          "tip": "Enemy opening: PACT advance to CP8."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1024,
      1536
    ]
  },
  "chemical": {
    "source": "game_assets",
    "details_file": "_4x2_Chemical_4vs4_CONQ_Details.dat",
    "map_image": "chemical.jpg",
    "map_image_source": "game_preview",
    "transform": "xy",
    "tf": {
      "mode": "xy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      320.0,
      320.0,
      2621120.0,
      1310400.0
    ],
    "orientation": "ew",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            5.45,
            10.69
          ],
          [
            9.25,
            3.2
          ],
          [
            12.94,
            6.15
          ],
          [
            10.04,
            18.48
          ]
        ],
        "center": [
          9.39,
          10.09
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            24.37,
            7.15
          ],
          [
            24.62,
            1.38
          ],
          [
            31.2,
            1.43
          ],
          [
            31.4,
            7.32
          ]
        ],
        "center": [
          27.91,
          4.35
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_2",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            47.6,
            14.65
          ],
          [
            47.87,
            2.14
          ],
          [
            58.19,
            2.26
          ],
          [
            58.18,
            14.64
          ]
        ],
        "center": [
          52.95,
          8.45
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_3",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            73.26,
            10.03
          ],
          [
            73.39,
            6.05
          ],
          [
            73.45,
            1.48
          ],
          [
            80.61,
            1.48
          ],
          [
            80.57,
            6.26
          ],
          [
            80.57,
            9.82
          ]
        ],
        "center": [
          76.96,
          5.72
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_4",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            20.03,
            85.92
          ],
          [
            31.54,
            86.33
          ],
          [
            31.27,
            97.92
          ],
          [
            20.05,
            97.46
          ]
        ],
        "center": [
          25.73,
          91.88
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_5",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            46.83,
            86.05
          ],
          [
            60.98,
            86.51
          ],
          [
            61.0,
            97.15
          ],
          [
            46.99,
            96.77
          ]
        ],
        "center": [
          53.94,
          91.61
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_6",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            67.45,
            89.39
          ],
          [
            73.85,
            89.56
          ],
          [
            73.73,
            98.78
          ],
          [
            67.5,
            98.57
          ]
        ],
        "center": [
          70.63,
          94.05
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_7",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            85.71,
            89.22
          ],
          [
            86.92,
            80.17
          ],
          [
            87.33,
            76.98
          ],
          [
            89.18,
            79.4
          ],
          [
            90.06,
            81.1
          ],
          [
            90.25,
            81.35
          ],
          [
            90.51,
            81.65
          ],
          [
            91.05,
            82.03
          ],
          [
            92.58,
            83.05
          ],
          [
            93.52,
            83.56
          ],
          [
            92.34,
            93.13
          ]
        ],
        "center": [
          89.53,
          85.87
        ],
        "side": "NATO"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            8.57,
            61.12
          ],
          [
            8.97,
            67.75
          ],
          [
            9.41,
            75.46
          ],
          [
            1.86,
            76.93
          ],
          [
            1.48,
            63.24
          ]
        ],
        "center": [
          5.37,
          69.24
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            32.27,
            38.9
          ],
          [
            32.32,
            38.47
          ],
          [
            32.44,
            38.09
          ],
          [
            32.56,
            37.61
          ],
          [
            32.67,
            36.75
          ],
          [
            32.78,
            36.35
          ],
          [
            33.02,
            36.06
          ],
          [
            33.64,
            35.58
          ],
          [
            34.71,
            34.66
          ],
          [
            36.01,
            32.87
          ],
          [
            37.25,
            31.33
          ],
          [
            38.36,
            30.09
          ],
          [
            38.96,
            29.81
          ],
          [
            39.45,
            29.83
          ],
          [
            40.33,
            30.03
          ],
          [
            42.2,
            30.84
          ],
          [
            43.56,
            31.51
          ],
          [
            46.49,
            33.68
          ],
          [
            48.29,
            34.27
          ],
          [
            50.0,
            34.43
          ],
          [
            51.36,
            44.0
          ],
          [
            39.58,
            50.64
          ],
          [
            37.9,
            51.5
          ],
          [
            36.58,
            47.07
          ],
          [
            35.8,
            44.79
          ],
          [
            34.89,
            42.91
          ],
          [
            33.58,
            41.15
          ],
          [
            32.81,
            40.17
          ],
          [
            32.33,
            39.5
          ]
        ],
        "center": [
          41.77,
          40.01
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            37.9,
            51.5
          ],
          [
            39.58,
            50.64
          ],
          [
            51.36,
            44.0
          ],
          [
            52.02,
            48.53
          ],
          [
            52.52,
            51.92
          ],
          [
            53.75,
            63.75
          ],
          [
            53.35,
            63.9
          ],
          [
            52.76,
            63.75
          ],
          [
            52.25,
            63.76
          ],
          [
            51.1,
            64.05
          ],
          [
            49.93,
            64.25
          ],
          [
            48.98,
            64.22
          ],
          [
            48.16,
            64.03
          ],
          [
            46.45,
            63.42
          ],
          [
            43.41,
            62.19
          ],
          [
            41.33,
            60.97
          ],
          [
            40.18,
            59.71
          ],
          [
            39.24,
            57.29
          ],
          [
            38.86,
            55.68
          ],
          [
            37.96,
            51.71
          ]
        ],
        "center": [
          46.71,
          55.14
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            50.0,
            34.43
          ],
          [
            50.32,
            34.46
          ],
          [
            51.42,
            34.35
          ],
          [
            52.76,
            34.01
          ],
          [
            55.41,
            32.51
          ],
          [
            56.2,
            31.95
          ],
          [
            57.81,
            31.07
          ],
          [
            58.31,
            30.84
          ],
          [
            58.98,
            30.69
          ],
          [
            59.55,
            30.67
          ],
          [
            60.29,
            30.82
          ],
          [
            60.93,
            31.18
          ],
          [
            61.76,
            32.19
          ],
          [
            62.28,
            33.16
          ],
          [
            62.57,
            34.2
          ],
          [
            62.72,
            35.46
          ],
          [
            62.99,
            36.72
          ],
          [
            63.42,
            38.01
          ],
          [
            64.26,
            39.73
          ],
          [
            64.65,
            40.81
          ],
          [
            64.77,
            41.24
          ],
          [
            60.08,
            44.0
          ],
          [
            52.02,
            48.53
          ],
          [
            51.35,
            43.98
          ]
        ],
        "center": [
          56.87,
          38.95
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            52.02,
            48.53
          ],
          [
            60.08,
            44.0
          ],
          [
            64.77,
            41.24
          ],
          [
            65.51,
            43.83
          ],
          [
            65.4,
            45.31
          ],
          [
            65.03,
            46.63
          ],
          [
            64.1,
            47.75
          ],
          [
            62.96,
            49.59
          ],
          [
            61.7,
            51.78
          ],
          [
            59.12,
            57.57
          ],
          [
            57.63,
            60.43
          ],
          [
            56.79,
            61.71
          ],
          [
            55.69,
            62.81
          ],
          [
            54.53,
            63.47
          ],
          [
            53.75,
            63.75
          ],
          [
            53.05,
            57.04
          ],
          [
            52.52,
            51.92
          ]
        ],
        "center": [
          57.96,
          51.62
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            83.86,
            40.02
          ],
          [
            85.63,
            29.01
          ],
          [
            86.19,
            24.81
          ],
          [
            98.74,
            28.26
          ],
          [
            97.99,
            33.09
          ],
          [
            95.41,
            47.92
          ]
        ],
        "center": [
          91.35,
          35.36
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              57.6,
              49.4
            ],
            [
              57.8,
              50.5
            ],
            [
              58.0,
              51.6
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP5",
          "tip": "NATO advance to CP5."
        },
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              57.3,
              45.2
            ],
            [
              57.1,
              42.1
            ],
            [
              56.9,
              39.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "NATO advance to CP4."
        },
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              53.9,
              50.6
            ],
            [
              50.3,
              52.9
            ],
            [
              46.7,
              55.1
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              45.1,
              51.5
            ],
            [
              45.9,
              53.3
            ],
            [
              46.7,
              55.1
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              43.5,
              46.5
            ],
            [
              42.6,
              43.2
            ],
            [
              41.8,
              40.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "PACT advance to CP2."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              48.9,
              50.3
            ],
            [
              53.4,
              51.0
            ],
            [
              58.0,
              51.6
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "PACT advance to CP5."
        }
      ],
      "flank": [
        {
          "path": [
            [
              56.1,
              48.5
            ],
            [
              40.9,
              49.0
            ],
            [
              48.2,
              49.3
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              45.6,
              49.5
            ],
            [
              60.9,
              49.0
            ],
            [
              53.5,
              48.7
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              51.5,
              48.9
            ],
            [
              54.8,
              48.6
            ],
            [
              57.5,
              48.3
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              50.2,
              49.1
            ],
            [
              46.9,
              49.4
            ],
            [
              44.3,
              49.7
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 58.0,
          "y": 51.6,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP5",
          "tip": "Hold CP5."
        },
        {
          "x": 56.9,
          "y": 39.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4."
        },
        {
          "x": 54.2,
          "y": 48.7,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 46.7,
          "y": 55.1,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 41.8,
          "y": 40.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 47.6,
          "y": 49.3,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 55.9,
          "y": 48.5,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 45.9,
          "y": 49.5,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 2,
          "y": 69.2,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 9.4,
          "y": 66.2,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 37.8,
          "y": 40.0,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 45.8,
          "y": 37.0,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 42.7,
          "y": 55.1,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 50.7,
          "y": 52.1,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 52.9,
          "y": 39.0,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 60.9,
          "y": 36.0,
          "tip": "Secondary ATGM arc on CP4."
        },
        {
          "x": 54.0,
          "y": 51.6,
          "tip": "ATGM cover facing CP5."
        },
        {
          "x": 62.0,
          "y": 48.6,
          "tip": "Secondary ATGM arc on CP5."
        }
      ],
      "tank": [
        {
          "x": 5.4,
          "y": 74.2,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 41.8,
          "y": 45.0,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 46.7,
          "y": 60.1,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 56.9,
          "y": 44.0,
          "tip": "Tank hull-down near CP4."
        },
        {
          "x": 58.0,
          "y": 56.6,
          "tip": "Tank hull-down near CP5."
        },
        {
          "x": 91.3,
          "y": 40.4,
          "tip": "Tank hull-down near CP6."
        }
      ],
      "infantry": [
        {
          "x": 5.4,
          "y": 69.2,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 41.8,
          "y": 40.0,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 46.7,
          "y": 55.1,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 56.9,
          "y": 39.0,
          "tip": "Infantry hold CP4 buildings/cover."
        },
        {
          "x": 58.0,
          "y": 51.6,
          "tip": "Infantry hold CP5 buildings/cover."
        },
        {
          "x": 91.3,
          "y": 35.4,
          "tip": "Infantry hold CP6 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 2,
          "y": 65.2,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 35.8,
          "y": 36.0,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 40.7,
          "y": 51.1,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 50.9,
          "y": 35.0,
          "tip": "Recon perch watching CP4."
        },
        {
          "x": 52.0,
          "y": 47.6,
          "tip": "Recon perch watching CP5."
        },
        {
          "x": 85.3,
          "y": 31.4,
          "tip": "Recon perch watching CP6."
        }
      ],
      "aa": [
        {
          "x": 55.5,
          "y": 48.5,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 53.8,
          "y": 48.7,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 46.3,
          "y": 49.5,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 48.0,
          "y": 49.3,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 57.5,
          "y": 48.3,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 44.3,
          "y": 49.7,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              54.2,
              48.7
            ],
            [
              50.9,
              49.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              47.6,
              49.3
            ],
            [
              50.9,
              49.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 50.9,
          "y": 49.0,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 42.9,
          "y": 49.0,
          "tip": "West of mid corridor."
        },
        {
          "x": 58.9,
          "y": 49.0,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              55.3,
              48.5
            ],
            [
              53.1,
              48.8
            ],
            [
              50.9,
              49.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              57.6,
              49.4
            ],
            [
              57.8,
              50.5
            ],
            [
              58.0,
              51.6
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP5",
          "tip": "Enemy opening: NATO advance to CP5."
        },
        {
          "path": [
            [
              57.5,
              48.3
            ],
            [
              57.3,
              45.2
            ],
            [
              57.1,
              42.1
            ],
            [
              56.9,
              39.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: NATO advance to CP4."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              46.5,
              49.5
            ],
            [
              48.7,
              49.2
            ],
            [
              50.9,
              49.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              45.1,
              51.5
            ],
            [
              45.9,
              53.3
            ],
            [
              46.7,
              55.1
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT advance to CP3."
        },
        {
          "path": [
            [
              44.3,
              49.7
            ],
            [
              43.5,
              46.5
            ],
            [
              42.6,
              43.2
            ],
            [
              41.8,
              40.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: PACT advance to CP2."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      2048,
      1024
    ]
  },
  "airport_duel": {
    "source": "game_assets",
    "details_file": "_3x3_Airport_1vs1_CONQ_DUEL_Details.dat",
    "map_image": "airport_duel.jpg",
    "map_image_source": "game_preview",
    "transform": "yx",
    "tf": {
      "mode": "yx",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      380426.0,
      2610.0,
      1639948.0,
      1965337.0
    ],
    "orientation": "ew",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            7.04,
            68.29
          ],
          [
            18.0,
            68.29
          ],
          [
            18.0,
            42.68
          ],
          [
            7.04,
            42.68
          ]
        ],
        "center": [
          12.52,
          55.49
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            81.39,
            45.12
          ],
          [
            92.35,
            45.12
          ],
          [
            92.35,
            17.07
          ],
          [
            81.39,
            17.07
          ]
        ],
        "center": [
          86.87,
          31.1
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            36.49,
            17.27
          ],
          [
            43.57,
            25.87
          ],
          [
            45.4,
            21.85
          ],
          [
            46.41,
            17.3
          ],
          [
            37.37,
            12.44
          ]
        ],
        "center": [
          41.53,
          18.63
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            38.97,
            34.16
          ],
          [
            30.28,
            39.42
          ],
          [
            31.38,
            43.88
          ],
          [
            40.08,
            38.5
          ]
        ],
        "center": [
          35.16,
          39.0
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            51.23,
            41.83
          ],
          [
            46.38,
            46.22
          ],
          [
            45.54,
            48.03
          ],
          [
            50.37,
            53.13
          ],
          [
            54.02,
            44.81
          ]
        ],
        "center": [
          49.96,
          47.17
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            64.39,
            9.08
          ],
          [
            57.42,
            18.82
          ],
          [
            59.2,
            23.76
          ],
          [
            67.47,
            18.35
          ]
        ],
        "center": [
          62.49,
          17.12
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            52.06,
            57.02
          ],
          [
            47.97,
            66.23
          ],
          [
            50.83,
            69.15
          ],
          [
            53.87,
            64.62
          ],
          [
            55.58,
            60.63
          ]
        ],
        "center": [
          51.77,
          63.18
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            62.64,
            71.65
          ],
          [
            59.15,
            74.3
          ],
          [
            60.59,
            80.56
          ],
          [
            62.73,
            81.75
          ],
          [
            67.26,
            77.96
          ],
          [
            65.97,
            74.2
          ]
        ],
        "center": [
          62.98,
          76.67
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              20.1,
              50.0
            ],
            [
              27.6,
              44.5
            ],
            [
              35.2,
              39.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "NATO advance to CP2."
        },
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              25.0,
              52.7
            ],
            [
              37.5,
              49.9
            ],
            [
              50.0,
              47.2
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              25.6,
              58.1
            ],
            [
              38.7,
              60.6
            ],
            [
              51.8,
              63.2
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO advance to CP5."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              78.7,
              26.4
            ],
            [
              70.6,
              21.8
            ],
            [
              62.5,
              17.1
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "PACT advance to CP4."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              74.6,
              36.5
            ],
            [
              62.3,
              41.8
            ],
            [
              50.0,
              47.2
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              71.8,
              26.9
            ],
            [
              56.6,
              22.8
            ],
            [
              41.5,
              18.6
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP1",
          "tip": "PACT advance to CP1."
        }
      ],
      "flank": [
        {
          "path": [
            [
              20.0,
              53.1
            ],
            [
              39.7,
              43.3
            ],
            [
              64.6,
              38.4
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              79.4,
              33.5
            ],
            [
              59.7,
              43.3
            ],
            [
              34.8,
              48.2
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              46.0,
              44.5
            ],
            [
              27.4,
              50.6
            ],
            [
              12.5,
              55.5
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              53.4,
              42.1
            ],
            [
              72.0,
              36.0
            ],
            [
              86.9,
              31.1
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 35.2,
          "y": 39.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 50.0,
          "y": 47.2,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 31.1,
          "y": 49.4,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 62.5,
          "y": 17.1,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4."
        },
        {
          "x": 50.0,
          "y": 47.2,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 68.3,
          "y": 37.2,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 21.4,
          "y": 52.6,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 77.9,
          "y": 34.0,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 37.5,
          "y": 18.6,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 45.5,
          "y": 15.6,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 31.2,
          "y": 39.0,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 39.2,
          "y": 36.0,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 46.0,
          "y": 47.2,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 54.0,
          "y": 44.2,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 58.5,
          "y": 17.1,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 66.5,
          "y": 14.1,
          "tip": "Secondary ATGM arc on CP4."
        },
        {
          "x": 47.8,
          "y": 63.2,
          "tip": "ATGM cover facing CP5."
        },
        {
          "x": 55.8,
          "y": 60.2,
          "tip": "Secondary ATGM arc on CP5."
        }
      ],
      "tank": [
        {
          "x": 41.5,
          "y": 23.6,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 35.2,
          "y": 44.0,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 50.0,
          "y": 52.2,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 62.5,
          "y": 22.1,
          "tip": "Tank hull-down near CP4."
        },
        {
          "x": 51.8,
          "y": 68.2,
          "tip": "Tank hull-down near CP5."
        },
        {
          "x": 63.0,
          "y": 81.7,
          "tip": "Tank hull-down near CP6."
        }
      ],
      "infantry": [
        {
          "x": 41.5,
          "y": 18.6,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 35.2,
          "y": 39.0,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 50.0,
          "y": 47.2,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 62.5,
          "y": 17.1,
          "tip": "Infantry hold CP4 buildings/cover."
        },
        {
          "x": 51.8,
          "y": 63.2,
          "tip": "Infantry hold CP5 buildings/cover."
        },
        {
          "x": 63.0,
          "y": 76.7,
          "tip": "Infantry hold CP6 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 35.5,
          "y": 14.6,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 29.2,
          "y": 35.0,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 44.0,
          "y": 43.2,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 56.5,
          "y": 13.1,
          "tip": "Recon perch watching CP4."
        },
        {
          "x": 45.8,
          "y": 59.2,
          "tip": "Recon perch watching CP5."
        },
        {
          "x": 57.0,
          "y": 72.7,
          "tip": "Recon perch watching CP6."
        }
      ],
      "aa": [
        {
          "x": 23.7,
          "y": 51.8,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 33.3,
          "y": 48.7,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 75.7,
          "y": 34.8,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 66.1,
          "y": 37.9,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 12.5,
          "y": 55.5,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 86.9,
          "y": 31.1,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              31.1,
              49.4
            ],
            [
              49.7,
              43.3
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              68.3,
              37.2
            ],
            [
              49.7,
              43.3
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 49.7,
          "y": 43.3,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 41.7,
          "y": 43.3,
          "tip": "West of mid corridor."
        },
        {
          "x": 57.7,
          "y": 43.3,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              24.9,
              51.4
            ],
            [
              37.3,
              47.4
            ],
            [
              49.7,
              43.3
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              20.1,
              50.0
            ],
            [
              27.6,
              44.5
            ],
            [
              35.2,
              39.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: NATO advance to CP2."
        },
        {
          "path": [
            [
              12.5,
              55.5
            ],
            [
              25.0,
              52.7
            ],
            [
              37.5,
              49.9
            ],
            [
              50.0,
              47.2
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              74.5,
              35.2
            ],
            [
              62.1,
              39.2
            ],
            [
              49.7,
              43.3
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              78.7,
              26.4
            ],
            [
              70.6,
              21.8
            ],
            [
              62.5,
              17.1
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: PACT advance to CP4."
        },
        {
          "path": [
            [
              86.9,
              31.1
            ],
            [
              74.6,
              36.5
            ],
            [
              62.3,
              41.8
            ],
            [
              50.0,
              47.2
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT advance to CP3."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1536,
      1536
    ]
  },
  "two_ways": {
    "source": "game_assets",
    "details_file": "_2x3_TwoWays_2vs2_CONQ_Details.dat",
    "map_image": "two_ways.jpg",
    "map_image_source": "game_preview",
    "transform": "xy",
    "tf": {
      "mode": "xy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      163.0,
      169.0,
      1310556.0,
      1965914.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            19.66,
            4.1
          ],
          [
            21.14,
            8.69
          ],
          [
            21.92,
            13.36
          ],
          [
            8.85,
            14.8
          ],
          [
            7.26,
            6.89
          ],
          [
            6.87,
            5.59
          ]
        ],
        "center": [
          14.45,
          9.47
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_1",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            70.33,
            3.48
          ],
          [
            82.33,
            3.83
          ],
          [
            82.61,
            7.99
          ],
          [
            69.55,
            7.89
          ]
        ],
        "center": [
          76.14,
          5.83
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_2",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            16.71,
            88.27
          ],
          [
            26.88,
            88.22
          ],
          [
            27.0,
            97.45
          ],
          [
            16.29,
            97.6
          ]
        ],
        "center": [
          21.71,
          92.92
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_3",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            78.36,
            96.92
          ],
          [
            79.22,
            86.98
          ],
          [
            90.21,
            86.92
          ],
          [
            88.09,
            97.56
          ]
        ],
        "center": [
          84.05,
          92.0
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            10.37,
            37.3
          ],
          [
            17.93,
            34.68
          ],
          [
            21.48,
            38.6
          ],
          [
            23.16,
            42.63
          ],
          [
            22.57,
            44.86
          ],
          [
            19.37,
            49.88
          ],
          [
            11.27,
            48.54
          ],
          [
            10.98,
            47.88
          ],
          [
            10.19,
            47.27
          ],
          [
            9.84,
            46.49
          ],
          [
            9.77,
            46.08
          ],
          [
            10.22,
            45.51
          ],
          [
            10.25,
            44.53
          ],
          [
            9.75,
            42.51
          ],
          [
            8.76,
            41.3
          ],
          [
            7.68,
            40.32
          ],
          [
            6.81,
            39.18
          ],
          [
            6.52,
            38.67
          ]
        ],
        "center": [
          15.67,
          42.37
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            40.95,
            22.2
          ],
          [
            44.72,
            21.18
          ],
          [
            48.01,
            19.51
          ],
          [
            49.31,
            20.64
          ],
          [
            52.24,
            26.17
          ],
          [
            53.32,
            28.61
          ],
          [
            44.83,
            30.37
          ],
          [
            44.53,
            29.19
          ],
          [
            43.88,
            27.2
          ],
          [
            42.38,
            24.43
          ]
        ],
        "center": [
          47.24,
          25.17
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            47.39,
            48.18
          ],
          [
            47.72,
            48.1
          ],
          [
            47.98,
            47.91
          ],
          [
            48.35,
            47.49
          ],
          [
            48.79,
            47.11
          ],
          [
            49.53,
            46.76
          ],
          [
            49.57,
            46.65
          ],
          [
            49.51,
            46.51
          ],
          [
            49.31,
            46.26
          ],
          [
            49.3,
            46.16
          ],
          [
            49.5,
            45.74
          ],
          [
            49.6,
            45.3
          ],
          [
            49.64,
            44.85
          ],
          [
            49.86,
            44.44
          ],
          [
            50.4,
            44.07
          ],
          [
            54.93,
            41.49
          ],
          [
            61.7,
            44.9
          ],
          [
            59.35,
            47.71
          ],
          [
            47.36,
            55.94
          ],
          [
            41.13,
            52.3
          ]
        ],
        "center": [
          51.76,
          48.59
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            73.32,
            25.95
          ],
          [
            83.37,
            25.86
          ],
          [
            84.54,
            32.84
          ],
          [
            85.85,
            37.76
          ],
          [
            73.42,
            38.59
          ]
        ],
        "center": [
          78.9,
          32.26
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            25.34,
            60.97
          ],
          [
            25.59,
            63.81
          ],
          [
            25.49,
            70.1
          ],
          [
            16.45,
            70.52
          ],
          [
            14.73,
            61.98
          ]
        ],
        "center": [
          20.58,
          65.76
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            51.31,
            77.4
          ],
          [
            56.98,
            76.39
          ],
          [
            61.4,
            76.23
          ],
          [
            61.15,
            77.08
          ],
          [
            60.7,
            78.06
          ],
          [
            60.89,
            78.37
          ],
          [
            61.3,
            78.68
          ],
          [
            61.94,
            78.82
          ],
          [
            62.66,
            78.91
          ],
          [
            63.19,
            78.97
          ],
          [
            63.82,
            78.98
          ],
          [
            64.73,
            78.88
          ],
          [
            65.57,
            81.55
          ],
          [
            62.53,
            81.94
          ],
          [
            54.99,
            83.08
          ],
          [
            54.76,
            82.59
          ],
          [
            54.39,
            82.12
          ],
          [
            53.82,
            81.73
          ],
          [
            53.27,
            81.63
          ]
        ],
        "center": [
          58.05,
          79.62
        ]
      },
      {
        "id": "z6",
        "label": "CP7",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            71.09,
            54.16
          ],
          [
            78.8,
            49.87
          ],
          [
            83.98,
            49.06
          ],
          [
            87.42,
            49.61
          ],
          [
            91.55,
            57.31
          ],
          [
            91.63,
            59.1
          ],
          [
            91.26,
            59.52
          ],
          [
            89.2,
            60.34
          ],
          [
            88.15,
            60.87
          ],
          [
            87.72,
            62.35
          ],
          [
            89.06,
            65.61
          ],
          [
            86.75,
            66.33
          ],
          [
            66.82,
            62.48
          ]
        ],
        "center": [
          80.32,
          57.84
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              49.9,
              49.1
            ],
            [
              50.8,
              48.9
            ],
            [
              51.8,
              48.6
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              48.4,
              41.3
            ],
            [
              47.8,
              33.2
            ],
            [
              47.2,
              25.2
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "NATO advance to CP2."
        },
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              52.0,
              59.5
            ],
            [
              55.0,
              69.5
            ],
            [
              58.0,
              79.6
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP6",
          "tip": "NATO advance to CP6."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              50.1,
              50.0
            ],
            [
              50.9,
              49.3
            ],
            [
              51.8,
              48.6
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              48.6,
              42.2
            ],
            [
              47.9,
              33.7
            ],
            [
              47.2,
              25.2
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "PACT advance to CP2."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              52.2,
              60.4
            ],
            [
              55.1,
              70.0
            ],
            [
              58.0,
              79.6
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP6",
          "tip": "PACT advance to CP6."
        }
      ],
      "flank": [
        {
          "path": [
            [
              49.0,
              49.5
            ],
            [
              39.1,
              50.1
            ],
            [
              49.2,
              50.3
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              49.2,
              50.6
            ],
            [
              59.1,
              50.1
            ],
            [
              49.0,
              49.8
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              49.1,
              50.0
            ],
            [
              49.0,
              49.6
            ],
            [
              48.9,
              49.4
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              49.1,
              50.1
            ],
            [
              49.2,
              50.5
            ],
            [
              49.2,
              50.7
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 51.8,
          "y": 48.6,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 47.2,
          "y": 25.2,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 49.0,
          "y": 49.7,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 51.8,
          "y": 48.6,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 47.2,
          "y": 25.2,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 49.2,
          "y": 50.4,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 49.0,
          "y": 49.5,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 49.2,
          "y": 50.6,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 11.7,
          "y": 42.4,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 19.7,
          "y": 39.4,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 43.2,
          "y": 25.2,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 51.2,
          "y": 22.2,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 47.8,
          "y": 48.6,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 55.8,
          "y": 45.6,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 74.9,
          "y": 32.3,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 82.9,
          "y": 29.3,
          "tip": "Secondary ATGM arc on CP4."
        },
        {
          "x": 16.6,
          "y": 65.8,
          "tip": "ATGM cover facing CP5."
        },
        {
          "x": 24.6,
          "y": 62.8,
          "tip": "Secondary ATGM arc on CP5."
        }
      ],
      "tank": [
        {
          "x": 15.7,
          "y": 47.4,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 47.2,
          "y": 30.2,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 51.8,
          "y": 53.6,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 78.9,
          "y": 37.3,
          "tip": "Tank hull-down near CP4."
        },
        {
          "x": 20.6,
          "y": 70.8,
          "tip": "Tank hull-down near CP5."
        },
        {
          "x": 58.0,
          "y": 84.6,
          "tip": "Tank hull-down near CP6."
        }
      ],
      "infantry": [
        {
          "x": 15.7,
          "y": 42.4,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 47.2,
          "y": 25.2,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 51.8,
          "y": 48.6,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 78.9,
          "y": 32.3,
          "tip": "Infantry hold CP4 buildings/cover."
        },
        {
          "x": 20.6,
          "y": 65.8,
          "tip": "Infantry hold CP5 buildings/cover."
        },
        {
          "x": 58.0,
          "y": 79.6,
          "tip": "Infantry hold CP6 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 9.7,
          "y": 38.4,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 41.2,
          "y": 21.2,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 45.8,
          "y": 44.6,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 72.9,
          "y": 28.3,
          "tip": "Recon perch watching CP4."
        },
        {
          "x": 14.6,
          "y": 61.8,
          "tip": "Recon perch watching CP5."
        },
        {
          "x": 52.0,
          "y": 75.6,
          "tip": "Recon perch watching CP6."
        },
        {
          "x": 74.3,
          "y": 53.8,
          "tip": "Recon perch watching CP7."
        }
      ],
      "aa": [
        {
          "x": 49.0,
          "y": 49.6,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 49.0,
          "y": 49.8,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 49.2,
          "y": 50.5,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 49.2,
          "y": 50.4,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 48.9,
          "y": 49.4,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 49.2,
          "y": 50.7,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              49.0,
              49.7
            ],
            [
              49.1,
              50.1
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              49.2,
              50.4
            ],
            [
              49.1,
              50.1
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 49.1,
          "y": 50.1,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 41.1,
          "y": 50.1,
          "tip": "West of mid corridor."
        },
        {
          "x": 57.1,
          "y": 50.1,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              49.0,
              49.6
            ],
            [
              49.0,
              49.8
            ],
            [
              49.1,
              50.1
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              49.9,
              49.1
            ],
            [
              50.8,
              48.9
            ],
            [
              51.8,
              48.6
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              48.9,
              49.4
            ],
            [
              48.4,
              41.3
            ],
            [
              47.8,
              33.2
            ],
            [
              47.2,
              25.2
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: NATO advance to CP2."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              49.2,
              50.5
            ],
            [
              49.1,
              50.3
            ],
            [
              49.1,
              50.1
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              50.1,
              50.0
            ],
            [
              50.9,
              49.3
            ],
            [
              51.8,
              48.6
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT advance to CP3."
        },
        {
          "path": [
            [
              49.2,
              50.7
            ],
            [
              48.6,
              42.2
            ],
            [
              47.9,
              33.7
            ],
            [
              47.2,
              25.2
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: PACT advance to CP2."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1024,
      1536
    ]
  },
  "black_forest": {
    "source": "game_assets",
    "details_file": "_2x3_BlackForestStorm_2vs2_CONQ_Details.dat",
    "map_image": "black_forest.jpg",
    "map_image_source": "game_preview",
    "transform": "xy",
    "tf": {
      "mode": "xy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      51.0,
      357.0,
      1310372.0,
      1966058.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            55.13,
            0.78
          ],
          [
            76.03,
            0.82
          ],
          [
            76.07,
            6.2
          ],
          [
            55.26,
            6.19
          ]
        ],
        "center": [
          65.61,
          3.5
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            32.0,
            92.18
          ],
          [
            32.04,
            93.78
          ],
          [
            32.11,
            94.38
          ],
          [
            32.4,
            95.29
          ],
          [
            32.41,
            95.85
          ],
          [
            32.36,
            96.89
          ],
          [
            32.35,
            97.29
          ],
          [
            32.8,
            98.47
          ],
          [
            33.05,
            99.19
          ],
          [
            0.78,
            99.19
          ],
          [
            0.73,
            92.21
          ]
        ],
        "center": [
          16.56,
          95.71
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            10.94,
            11.44
          ],
          [
            10.89,
            11.99
          ],
          [
            10.55,
            12.48
          ],
          [
            9.87,
            13.19
          ],
          [
            8.98,
            14.05
          ],
          [
            8.33,
            14.67
          ],
          [
            7.67,
            15.32
          ],
          [
            6.72,
            16.34
          ],
          [
            6.11,
            17.22
          ],
          [
            5.46,
            18.21
          ],
          [
            4.99,
            18.99
          ],
          [
            4.83,
            19.48
          ],
          [
            4.58,
            20.75
          ],
          [
            4.45,
            21.6
          ],
          [
            4.36,
            23.13
          ],
          [
            4.26,
            24.18
          ],
          [
            4.14,
            24.8
          ],
          [
            3.9,
            25.51
          ],
          [
            0.39,
            25.51
          ],
          [
            0.39,
            11.44
          ]
        ],
        "center": [
          3.78,
          17.03
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            26.64,
            36.48
          ],
          [
            28.43,
            36.9
          ],
          [
            31.83,
            37.51
          ],
          [
            33.74,
            37.83
          ],
          [
            35.18,
            38.16
          ],
          [
            35.94,
            38.53
          ],
          [
            35.94,
            46.34
          ],
          [
            29.69,
            46.34
          ],
          [
            29.26,
            46.39
          ],
          [
            28.92,
            46.47
          ],
          [
            28.42,
            46.64
          ],
          [
            28.09,
            46.79
          ],
          [
            27.82,
            47.01
          ],
          [
            27.74,
            47.39
          ],
          [
            27.74,
            50.51
          ],
          [
            25.0,
            50.5
          ],
          [
            25.0,
            35.93
          ]
        ],
        "center": [
          29.85,
          42.47
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            78.93,
            19.26
          ],
          [
            98.46,
            30.46
          ],
          [
            98.48,
            48.33
          ],
          [
            97.45,
            48.3
          ],
          [
            96.34,
            48.22
          ],
          [
            95.48,
            48.03
          ],
          [
            94.29,
            47.65
          ],
          [
            92.81,
            47.16
          ],
          [
            91.43,
            46.62
          ],
          [
            90.27,
            45.91
          ],
          [
            89.58,
            45.2
          ],
          [
            88.91,
            44.01
          ],
          [
            88.74,
            43.23
          ],
          [
            88.86,
            42.43
          ],
          [
            89.35,
            41.77
          ],
          [
            89.6,
            41.42
          ],
          [
            89.66,
            40.94
          ],
          [
            89.37,
            40.32
          ],
          [
            88.81,
            39.86
          ],
          [
            88.32,
            39.59
          ],
          [
            87.79,
            39.29
          ],
          [
            86.57,
            38.53
          ],
          [
            85.65,
            38.02
          ],
          [
            84.63,
            37.54
          ],
          [
            83.98,
            37.16
          ],
          [
            83.05,
            36.63
          ],
          [
            82.48,
            36.11
          ],
          [
            81.72,
            35.28
          ],
          [
            81.03,
            34.8
          ],
          [
            78.9,
            33.08
          ],
          [
            77.02,
            31.72
          ],
          [
            76.46,
            31.18
          ],
          [
            76.0,
            30.58
          ],
          [
            75.42,
            29.74
          ],
          [
            75.19,
            29.18
          ],
          [
            74.77,
            28.62
          ],
          [
            73.22,
            27.16
          ],
          [
            71.13,
            25.35
          ]
        ],
        "center": [
          87.54,
          32.8
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            1.17,
            62.23
          ],
          [
            16.02,
            62.23
          ],
          [
            19.53,
            62.23
          ],
          [
            20.31,
            66.4
          ],
          [
            20.31,
            75.78
          ],
          [
            9.76,
            75.78
          ],
          [
            1.17,
            71.87
          ]
        ],
        "center": [
          11.15,
          68.66
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            53.53,
            41.66
          ],
          [
            69.98,
            46.82
          ],
          [
            66.61,
            60.34
          ],
          [
            50.01,
            59.89
          ],
          [
            50.01,
            45.3
          ]
        ],
        "center": [
          58.92,
          51.77
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            83.22,
            68.75
          ],
          [
            91.43,
            68.75
          ],
          [
            92.52,
            69.03
          ],
          [
            94.4,
            69.42
          ],
          [
            96.08,
            69.74
          ],
          [
            97.34,
            69.92
          ],
          [
            99.25,
            70.05
          ],
          [
            99.25,
            94.27
          ],
          [
            83.22,
            94.27
          ]
        ],
        "center": [
          91.15,
          81.7
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 48,
      "open_pct": 32,
      "water_pct": 4,
      "town_pct": 10
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              40.0,
              10.0
            ],
            [
              20.0,
              14.0
            ],
            [
              5.0,
              17.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "NATO opening: west swing to CP1 via northern edge."
        },
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              75.0,
              15.0
            ],
            [
              82.0,
              25.0
            ],
            [
              87.0,
              32.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO opening: east open lane to CP3."
        },
        {
          "path": [
            [
              55.0,
              20.0
            ],
            [
              45.0,
              30.0
            ],
            [
              35.0,
              38.0
            ],
            [
              30.0,
              42.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "NATO mid: into CP2 through forest trails."
        },
        {
          "path": [
            [
              60.0,
              25.0
            ],
            [
              58.0,
              35.0
            ],
            [
              58.0,
              45.0
            ],
            [
              58.0,
              51.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO mid: central push to CP5 village."
        },
        {
          "path": [
            [
              45.0,
              40.0
            ],
            [
              30.0,
              50.0
            ],
            [
              18.0,
              60.0
            ],
            [
              12.0,
              68.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "ADV CP4",
          "tip": "NATO late: forest approach to CP4."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              15.0,
              85.0
            ],
            [
              12.0,
              75.0
            ],
            [
              11.0,
              69.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "PACT opening: short push to CP4."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              40.0,
              90.0
            ],
            [
              70.0,
              85.0
            ],
            [
              90.0,
              82.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "PACT opening: east to CP6 along south edge."
        },
        {
          "path": [
            [
              25.0,
              80.0
            ],
            [
              40.0,
              70.0
            ],
            [
              50.0,
              60.0
            ],
            [
              58.0,
              53.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "PACT mid: clearings toward CP5."
        },
        {
          "path": [
            [
              20.0,
              80.0
            ],
            [
              25.0,
              65.0
            ],
            [
              28.0,
              50.0
            ],
            [
              30.0,
              43.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "PACT mid: forest fight into CP2."
        },
        {
          "path": [
            [
              55.0,
              60.0
            ],
            [
              70.0,
              50.0
            ],
            [
              80.0,
              40.0
            ],
            [
              87.0,
              33.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "ADV CP3",
          "tip": "PACT late: east fields toward CP3."
        }
      ],
      "flank": [
        {
          "path": [
            [
              50.0,
              15.0
            ],
            [
              30.0,
              25.0
            ],
            [
              20.0,
              40.0
            ],
            [
              25.0,
              55.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK W",
          "tip": "NATO west forest flank."
        },
        {
          "path": [
            [
              30.0,
              90.0
            ],
            [
              55.0,
              85.0
            ],
            [
              75.0,
              70.0
            ],
            [
              80.0,
              50.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK E",
          "tip": "PACT east flank through south woods toward CP3 lane."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              55.0,
              40.0
            ],
            [
              58.0,
              25.0
            ],
            [
              62.0,
              12.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback to northern cover."
        },
        {
          "path": [
            [
              40.0,
              60.0
            ],
            [
              28.0,
              75.0
            ],
            [
              20.0,
              88.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback to southern forest."
        }
      ],
      "defend": [
        {
          "x": 4.0,
          "y": 17.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1 field/forest edge."
        },
        {
          "x": 88.0,
          "y": 33.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3 open lane with ATGM depth."
        },
        {
          "x": 50.0,
          "y": 30.0,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary across northern mid."
        },
        {
          "x": 11.0,
          "y": 69.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4 clearing."
        },
        {
          "x": 91.0,
          "y": 82.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6 south-east."
        },
        {
          "x": 40.0,
          "y": 75.0,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary north of deploy."
        }
      ],
      "rally": [
        {
          "x": 58.0,
          "y": 15.0,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally in cover south of deploy."
        },
        {
          "x": 25.0,
          "y": 85.0,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally north of deploy in forest edge."
        }
      ],
      "atgm": [
        {
          "x": 40.0,
          "y": 38.0,
          "tip": "Forest edge overlooking central fields toward CP5."
        },
        {
          "x": 50.0,
          "y": 48.0,
          "tip": "Treeline covering CP5 open approaches."
        },
        {
          "x": 75.0,
          "y": 38.0,
          "tip": "Cover facing CP3 long field lane."
        },
        {
          "x": 25.0,
          "y": 50.0,
          "tip": "Forest edge near CP2 covering the road."
        },
        {
          "x": 60.0,
          "y": 70.0,
          "tip": "Woods edge covering southern open toward CP6."
        },
        {
          "x": 20.0,
          "y": 65.0,
          "tip": "Forest face toward CP4 fields."
        },
        {
          "x": 80.0,
          "y": 55.0,
          "tip": "East field edge ATGM looking west."
        },
        {
          "x": 48.0,
          "y": 28.0,
          "tip": "Northern forest edge covering drop from NATO deploy."
        }
      ],
      "tank": [
        {
          "x": 72.0,
          "y": 30.0,
          "tip": "Hull-down on east open lane toward CP3."
        },
        {
          "x": 55.0,
          "y": 45.0,
          "tip": "Hull-down near CP5 covering the central clearing."
        },
        {
          "x": 30.0,
          "y": 60.0,
          "tip": "Clearing edge toward CP4; tanks only on roads through forest."
        },
        {
          "x": 65.0,
          "y": 55.0,
          "tip": "South-central field hull-down."
        }
      ],
      "infantry": [
        {
          "x": 30.0,
          "y": 42.0,
          "tip": "CP2 town/industrial edge. Primary infantry fight."
        },
        {
          "x": 58.0,
          "y": 52.0,
          "tip": "Central village at CP5. Hold buildings."
        },
        {
          "x": 70.0,
          "y": 35.0,
          "tip": "NE village. Infantry anchor toward CP3."
        },
        {
          "x": 15.0,
          "y": 68.0,
          "tip": "CP4 area buildings in the clearing."
        },
        {
          "x": 88.0,
          "y": 80.0,
          "tip": "CP6 edge buildings. Late-game infantry."
        }
      ],
      "recon": [
        {
          "x": 35.0,
          "y": 35.0,
          "tip": "Deep forest recon near CP2 with LOS to central fields."
        },
        {
          "x": 60.0,
          "y": 45.0,
          "tip": "Cover watching CP5."
        },
        {
          "x": 80.0,
          "y": 40.0,
          "tip": "East recon watching CP3 approaches."
        },
        {
          "x": 25.0,
          "y": 70.0,
          "tip": "South-west forest recon toward CP4."
        },
        {
          "x": 70.0,
          "y": 75.0,
          "tip": "South-east woods recon toward CP6."
        },
        {
          "x": 50.0,
          "y": 20.0,
          "tip": "Early screen south of NATO deploy."
        }
      ],
      "aa": [
        {
          "x": 62.0,
          "y": 12.0,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA south of deploy covering forest approaches."
        },
        {
          "x": 55.0,
          "y": 28.0,
          "r": 11,
          "side": "NATO",
          "tip": "Forward NATO AA toward mid."
        },
        {
          "x": 22.0,
          "y": 88.0,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA near deploy covering south forest."
        },
        {
          "x": 40.0,
          "y": 75.0,
          "r": 11,
          "side": "PACT",
          "tip": "Forward PACT AA toward CP4/CP5."
        }
      ],
      "arty": [
        {
          "x": 65.0,
          "y": 5.0,
          "side": "NATO",
          "tip": "NATO arty/FOB in northern deploy."
        },
        {
          "x": 18.0,
          "y": 94.0,
          "side": "PACT",
          "tip": "PACT arty/FOB in southern deploy."
        }
      ],
      "helo": [
        {
          "path": [
            [
              65.0,
              8.0
            ],
            [
              75.0,
              25.0
            ],
            [
              82.0,
              40.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo along east open fields toward CP3. Risky over forest."
        },
        {
          "path": [
            [
              18.0,
              92.0
            ],
            [
              30.0,
              75.0
            ],
            [
              45.0,
              60.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo via clearings toward mid. Avoid dense canopy."
        }
      ],
      "chokepoints": [
        {
          "x": 45.0,
          "y": 40.0,
          "tip": "Corridor between west forest mass and central fields."
        },
        {
          "x": 55.0,
          "y": 60.0,
          "tip": "Gap between central forest fingers and south-east woods."
        },
        {
          "x": 35.0,
          "y": 55.0,
          "tip": "Forest road pinch near CP2/CP4 approaches."
        },
        {
          "x": 70.0,
          "y": 45.0,
          "tip": "Open lane choke toward CP3 from the west."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              65.0,
              10.0
            ],
            [
              70.0,
              25.0
            ],
            [
              75.0,
              40.0
            ],
            [
              70.0,
              50.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor on the east open lane."
        },
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              40.0,
              10.0
            ],
            [
              20.0,
              14.0
            ],
            [
              5.0,
              17.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: NATO opening: west swing to CP1 via northern edge."
        },
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              75.0,
              15.0
            ],
            [
              82.0,
              25.0
            ],
            [
              87.0,
              32.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO opening: east open lane to CP3."
        },
        {
          "path": [
            [
              25.0,
              90.0
            ],
            [
              40.0,
              75.0
            ],
            [
              50.0,
              60.0
            ],
            [
              55.0,
              50.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor via central clearings toward CP5."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              15.0,
              85.0
            ],
            [
              12.0,
              75.0
            ],
            [
              11.0,
              69.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: PACT opening: short push to CP4."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              40.0,
              90.0
            ],
            [
              70.0,
              85.0
            ],
            [
              90.0,
              82.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: PACT opening: east to CP6 along south edge."
        }
      ]
    },
    "terrain_source": "hand",
    "map_size": [
      1024,
      1536
    ]
  },
  "black_forest_duel": {
    "source": "game_assets",
    "details_file": "SM_FO_2x3_BlackForestStorm_1_Details.dat",
    "map_image": "black_forest_duel.jpg",
    "map_image_source": "game_preview",
    "transform": "xy_fx",
    "tf": {
      "mode": "xy_fx",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      268.0,
      208.0,
      983248.0,
      1643729.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            98.46,
            1.88
          ],
          [
            1.56,
            1.87
          ],
          [
            1.56,
            10.28
          ],
          [
            98.46,
            10.29
          ]
        ],
        "center": [
          50.01,
          6.08
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_1",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            98.44,
            79.44
          ],
          [
            1.56,
            79.44
          ],
          [
            1.56,
            98.13
          ],
          [
            98.44,
            98.13
          ]
        ],
        "center": [
          50.0,
          88.79
        ],
        "side": "NATO"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            67.19,
            42.99
          ],
          [
            45.31,
            48.6
          ],
          [
            51.56,
            57.01
          ],
          [
            73.44,
            52.34
          ]
        ],
        "center": [
          59.52,
          50.18
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 4,
        "pts_est": true,
        "poly": [
          [
            82.81,
            79.44
          ],
          [
            78.12,
            79.44
          ],
          [
            76.56,
            79.44
          ],
          [
            73.44,
            79.44
          ],
          [
            71.87,
            80.37
          ],
          [
            68.75,
            82.24
          ],
          [
            65.62,
            84.11
          ],
          [
            62.5,
            85.98
          ],
          [
            60.94,
            86.92
          ],
          [
            57.81,
            88.79
          ],
          [
            57.81,
            91.59
          ],
          [
            92.19,
            91.59
          ],
          [
            92.19,
            83.18
          ],
          [
            92.19,
            79.44
          ]
        ],
        "center": [
          77.54,
          86.14
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            31.25,
            59.81
          ],
          [
            18.75,
            65.42
          ],
          [
            29.68,
            73.83
          ],
          [
            42.18,
            68.22
          ]
        ],
        "center": [
          30.46,
          66.82
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 48,
      "open_pct": 32,
      "water_pct": 4,
      "town_pct": 10
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              40.0,
              10.0
            ],
            [
              20.0,
              14.0
            ],
            [
              5.0,
              17.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "NATO opening: west swing to CP1 via northern edge."
        },
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              75.0,
              15.0
            ],
            [
              82.0,
              25.0
            ],
            [
              87.0,
              32.0
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO opening: east open lane to CP3."
        },
        {
          "path": [
            [
              55.0,
              20.0
            ],
            [
              45.0,
              30.0
            ],
            [
              35.0,
              38.0
            ],
            [
              30.0,
              42.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "NATO mid: into CP2 through forest trails."
        },
        {
          "path": [
            [
              60.0,
              25.0
            ],
            [
              58.0,
              35.0
            ],
            [
              58.0,
              45.0
            ],
            [
              58.0,
              51.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "NATO mid: central push to CP5 village."
        },
        {
          "path": [
            [
              45.0,
              40.0
            ],
            [
              30.0,
              50.0
            ],
            [
              18.0,
              60.0
            ],
            [
              12.0,
              68.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "ADV CP4",
          "tip": "NATO late: forest approach to CP4."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              15.0,
              85.0
            ],
            [
              12.0,
              75.0
            ],
            [
              11.0,
              69.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "PACT opening: short push to CP4."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              40.0,
              90.0
            ],
            [
              70.0,
              85.0
            ],
            [
              90.0,
              82.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP6",
          "tip": "PACT opening: east to CP6 along south edge."
        },
        {
          "path": [
            [
              25.0,
              80.0
            ],
            [
              40.0,
              70.0
            ],
            [
              50.0,
              60.0
            ],
            [
              58.0,
              53.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP5",
          "tip": "PACT mid: clearings toward CP5."
        },
        {
          "path": [
            [
              20.0,
              80.0
            ],
            [
              25.0,
              65.0
            ],
            [
              28.0,
              50.0
            ],
            [
              30.0,
              43.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "PACT mid: forest fight into CP2."
        },
        {
          "path": [
            [
              55.0,
              60.0
            ],
            [
              70.0,
              50.0
            ],
            [
              80.0,
              40.0
            ],
            [
              87.0,
              33.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "ADV CP3",
          "tip": "PACT late: east fields toward CP3."
        }
      ],
      "flank": [
        {
          "path": [
            [
              50.0,
              15.0
            ],
            [
              30.0,
              25.0
            ],
            [
              20.0,
              40.0
            ],
            [
              25.0,
              55.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK W",
          "tip": "NATO west forest flank."
        },
        {
          "path": [
            [
              30.0,
              90.0
            ],
            [
              55.0,
              85.0
            ],
            [
              75.0,
              70.0
            ],
            [
              80.0,
              50.0
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK E",
          "tip": "PACT east flank through south woods toward CP3 lane."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              55.0,
              40.0
            ],
            [
              58.0,
              25.0
            ],
            [
              62.0,
              12.0
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback to northern cover."
        },
        {
          "path": [
            [
              40.0,
              60.0
            ],
            [
              28.0,
              75.0
            ],
            [
              20.0,
              88.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback to southern forest."
        }
      ],
      "defend": [
        {
          "x": 4.0,
          "y": 17.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1 field/forest edge."
        },
        {
          "x": 88.0,
          "y": 33.0,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3 open lane with ATGM depth."
        },
        {
          "x": 50.0,
          "y": 30.0,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary across northern mid."
        },
        {
          "x": 11.0,
          "y": 69.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4 clearing."
        },
        {
          "x": 91.0,
          "y": 82.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP6",
          "tip": "Hold CP6 south-east."
        },
        {
          "x": 40.0,
          "y": 75.0,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary north of deploy."
        }
      ],
      "rally": [
        {
          "x": 58.0,
          "y": 15.0,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally in cover south of deploy."
        },
        {
          "x": 25.0,
          "y": 85.0,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally north of deploy in forest edge."
        }
      ],
      "atgm": [
        {
          "x": 40.0,
          "y": 38.0,
          "tip": "Forest edge overlooking central fields toward CP5."
        },
        {
          "x": 50.0,
          "y": 48.0,
          "tip": "Treeline covering CP5 open approaches."
        },
        {
          "x": 75.0,
          "y": 38.0,
          "tip": "Cover facing CP3 long field lane."
        },
        {
          "x": 25.0,
          "y": 50.0,
          "tip": "Forest edge near CP2 covering the road."
        },
        {
          "x": 60.0,
          "y": 70.0,
          "tip": "Woods edge covering southern open toward CP6."
        },
        {
          "x": 20.0,
          "y": 65.0,
          "tip": "Forest face toward CP4 fields."
        },
        {
          "x": 80.0,
          "y": 55.0,
          "tip": "East field edge ATGM looking west."
        },
        {
          "x": 48.0,
          "y": 28.0,
          "tip": "Northern forest edge covering drop from NATO deploy."
        }
      ],
      "tank": [
        {
          "x": 72.0,
          "y": 30.0,
          "tip": "Hull-down on east open lane toward CP3."
        },
        {
          "x": 55.0,
          "y": 45.0,
          "tip": "Hull-down near CP5 covering the central clearing."
        },
        {
          "x": 30.0,
          "y": 60.0,
          "tip": "Clearing edge toward CP4; tanks only on roads through forest."
        },
        {
          "x": 65.0,
          "y": 55.0,
          "tip": "South-central field hull-down."
        }
      ],
      "infantry": [
        {
          "x": 30.0,
          "y": 42.0,
          "tip": "CP2 town/industrial edge. Primary infantry fight."
        },
        {
          "x": 58.0,
          "y": 52.0,
          "tip": "Central village at CP5. Hold buildings."
        },
        {
          "x": 70.0,
          "y": 35.0,
          "tip": "NE village. Infantry anchor toward CP3."
        },
        {
          "x": 15.0,
          "y": 68.0,
          "tip": "CP4 area buildings in the clearing."
        },
        {
          "x": 88.0,
          "y": 80.0,
          "tip": "CP6 edge buildings. Late-game infantry."
        }
      ],
      "recon": [
        {
          "x": 35.0,
          "y": 35.0,
          "tip": "Deep forest recon near CP2 with LOS to central fields."
        },
        {
          "x": 60.0,
          "y": 45.0,
          "tip": "Cover watching CP5."
        },
        {
          "x": 80.0,
          "y": 40.0,
          "tip": "East recon watching CP3 approaches."
        },
        {
          "x": 25.0,
          "y": 70.0,
          "tip": "South-west forest recon toward CP4."
        },
        {
          "x": 70.0,
          "y": 75.0,
          "tip": "South-east woods recon toward CP6."
        },
        {
          "x": 50.0,
          "y": 20.0,
          "tip": "Early screen south of NATO deploy."
        }
      ],
      "aa": [
        {
          "x": 62.0,
          "y": 12.0,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA south of deploy covering forest approaches."
        },
        {
          "x": 55.0,
          "y": 28.0,
          "r": 11,
          "side": "NATO",
          "tip": "Forward NATO AA toward mid."
        },
        {
          "x": 22.0,
          "y": 88.0,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA near deploy covering south forest."
        },
        {
          "x": 40.0,
          "y": 75.0,
          "r": 11,
          "side": "PACT",
          "tip": "Forward PACT AA toward CP4/CP5."
        }
      ],
      "arty": [
        {
          "x": 65.0,
          "y": 5.0,
          "side": "NATO",
          "tip": "NATO arty/FOB in northern deploy."
        },
        {
          "x": 18.0,
          "y": 94.0,
          "side": "PACT",
          "tip": "PACT arty/FOB in southern deploy."
        }
      ],
      "helo": [
        {
          "path": [
            [
              65.0,
              8.0
            ],
            [
              75.0,
              25.0
            ],
            [
              82.0,
              40.0
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo along east open fields toward CP3. Risky over forest."
        },
        {
          "path": [
            [
              18.0,
              92.0
            ],
            [
              30.0,
              75.0
            ],
            [
              45.0,
              60.0
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo via clearings toward mid. Avoid dense canopy."
        }
      ],
      "chokepoints": [
        {
          "x": 45.0,
          "y": 40.0,
          "tip": "Corridor between west forest mass and central fields."
        },
        {
          "x": 55.0,
          "y": 60.0,
          "tip": "Gap between central forest fingers and south-east woods."
        },
        {
          "x": 35.0,
          "y": 55.0,
          "tip": "Forest road pinch near CP2/CP4 approaches."
        },
        {
          "x": 70.0,
          "y": 45.0,
          "tip": "Open lane choke toward CP3 from the west."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              65.0,
              10.0
            ],
            [
              70.0,
              25.0
            ],
            [
              75.0,
              40.0
            ],
            [
              70.0,
              50.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor on the east open lane."
        },
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              40.0,
              10.0
            ],
            [
              20.0,
              14.0
            ],
            [
              5.0,
              17.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: NATO opening: west swing to CP1 via northern edge."
        },
        {
          "path": [
            [
              65.0,
              5.0
            ],
            [
              75.0,
              15.0
            ],
            [
              82.0,
              25.0
            ],
            [
              87.0,
              32.0
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO opening: east open lane to CP3."
        },
        {
          "path": [
            [
              25.0,
              90.0
            ],
            [
              40.0,
              75.0
            ],
            [
              50.0,
              60.0
            ],
            [
              55.0,
              50.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor via central clearings toward CP5."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              15.0,
              85.0
            ],
            [
              12.0,
              75.0
            ],
            [
              11.0,
              69.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: PACT opening: short push to CP4."
        },
        {
          "path": [
            [
              17.0,
              96.0
            ],
            [
              40.0,
              90.0
            ],
            [
              70.0,
              85.0
            ],
            [
              90.0,
              82.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP6",
          "tip": "Enemy opening: PACT opening: east to CP6 along south edge."
        }
      ]
    },
    "terrain_source": "hand",
    "map_size": [
      1024,
      1536
    ]
  },
  "mount_river": {
    "source": "game_assets",
    "details_file": "_3x3_MountRiver_3vs3_CONQ_Details.dat",
    "map_image": "mount_river.jpg",
    "map_image_source": "game_preview",
    "transform": "yx_fx",
    "tf": {
      "mode": "yx_fx",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      158.0,
      250.0,
      1965800.0,
      1965950.0
    ],
    "orientation": "ew",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            86.86,
            24.57
          ],
          [
            87.3,
            24.68
          ],
          [
            87.78,
            24.76
          ],
          [
            88.11,
            24.79
          ],
          [
            88.52,
            24.79
          ],
          [
            88.99,
            24.83
          ],
          [
            89.25,
            24.88
          ],
          [
            89.83,
            25.07
          ],
          [
            90.03,
            25.12
          ],
          [
            90.52,
            25.12
          ],
          [
            91.1,
            25.19
          ],
          [
            91.65,
            25.35
          ],
          [
            92.47,
            25.37
          ],
          [
            92.93,
            25.27
          ],
          [
            93.38,
            25.25
          ],
          [
            93.75,
            25.21
          ],
          [
            94.13,
            25.32
          ],
          [
            94.48,
            25.52
          ],
          [
            94.82,
            25.75
          ],
          [
            95.32,
            25.83
          ],
          [
            95.72,
            25.85
          ],
          [
            95.94,
            25.79
          ],
          [
            96.44,
            25.78
          ],
          [
            97.41,
            25.68
          ],
          [
            97.44,
            48.31
          ],
          [
            96.45,
            48.31
          ],
          [
            96.16,
            48.28
          ],
          [
            95.66,
            48.18
          ],
          [
            95.33,
            48.02
          ],
          [
            94.94,
            47.69
          ],
          [
            94.53,
            47.22
          ],
          [
            94.03,
            46.88
          ],
          [
            93.39,
            46.7
          ],
          [
            92.74,
            46.74
          ],
          [
            92.31,
            47.01
          ],
          [
            91.84,
            47.6
          ],
          [
            91.25,
            48.5
          ],
          [
            90.96,
            49.1
          ],
          [
            90.63,
            49.34
          ],
          [
            89.73,
            49.68
          ],
          [
            88.33,
            49.88
          ],
          [
            86.86,
            49.9
          ]
        ],
        "center": [
          91.99,
          36.89
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            94.26,
            61.78
          ],
          [
            96.19,
            62.71
          ],
          [
            96.78,
            62.91
          ],
          [
            97.46,
            63.19
          ],
          [
            97.49,
            85.37
          ],
          [
            97.51,
            87.13
          ],
          [
            92.49,
            87.34
          ],
          [
            90.28,
            87.84
          ],
          [
            86.87,
            88.8
          ],
          [
            86.86,
            88.15
          ],
          [
            86.85,
            61.78
          ]
        ],
        "center": [
          92.07,
          74.84
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_2",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            6.96,
            29.77
          ],
          [
            7.57,
            29.85
          ],
          [
            8.22,
            30.03
          ],
          [
            9.17,
            30.17
          ],
          [
            9.88,
            30.22
          ],
          [
            10.57,
            30.41
          ],
          [
            11.47,
            30.56
          ],
          [
            12.44,
            30.79
          ],
          [
            13.19,
            30.85
          ],
          [
            13.19,
            54.37
          ],
          [
            2.62,
            54.4
          ],
          [
            2.61,
            29.96
          ],
          [
            3.25,
            29.92
          ],
          [
            3.89,
            29.96
          ],
          [
            4.92,
            29.87
          ],
          [
            5.63,
            29.7
          ],
          [
            6.44,
            29.65
          ]
        ],
        "center": [
          7.86,
          42.25
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_3",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            13.18,
            60.53
          ],
          [
            13.18,
            92.47
          ],
          [
            8.5,
            92.47
          ],
          [
            7.72,
            92.37
          ],
          [
            7.02,
            92.02
          ],
          [
            6.21,
            91.43
          ],
          [
            5.44,
            90.77
          ],
          [
            4.92,
            90.48
          ],
          [
            3.71,
            90.08
          ],
          [
            2.64,
            89.92
          ],
          [
            2.62,
            60.04
          ]
        ],
        "center": [
          7.98,
          76.0
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            46.77,
            28.69
          ],
          [
            46.86,
            28.93
          ],
          [
            46.71,
            30.28
          ],
          [
            46.81,
            30.7
          ],
          [
            47.07,
            30.95
          ],
          [
            47.51,
            31.06
          ],
          [
            48.14,
            31.14
          ],
          [
            48.69,
            31.15
          ],
          [
            49.15,
            31.04
          ],
          [
            49.74,
            30.8
          ],
          [
            50.2,
            30.7
          ],
          [
            50.64,
            30.67
          ],
          [
            51.37,
            30.77
          ],
          [
            52.46,
            30.84
          ],
          [
            53.26,
            30.98
          ],
          [
            54.03,
            30.9
          ],
          [
            54.92,
            30.47
          ],
          [
            55.73,
            29.65
          ],
          [
            56.33,
            29.36
          ],
          [
            56.33,
            50.93
          ],
          [
            55.97,
            51.19
          ],
          [
            55.57,
            51.4
          ],
          [
            55.41,
            51.52
          ],
          [
            55.32,
            51.68
          ],
          [
            55.29,
            52.15
          ],
          [
            55.33,
            52.49
          ],
          [
            55.44,
            52.69
          ],
          [
            55.61,
            52.91
          ],
          [
            55.92,
            53.24
          ],
          [
            56.0,
            53.42
          ],
          [
            56.0,
            53.63
          ],
          [
            55.9,
            53.88
          ],
          [
            48.84,
            53.88
          ],
          [
            48.53,
            53.02
          ],
          [
            48.15,
            52.65
          ],
          [
            48.03,
            52.46
          ],
          [
            47.96,
            52.1
          ],
          [
            47.76,
            51.68
          ],
          [
            47.76,
            51.5
          ],
          [
            47.95,
            50.78
          ],
          [
            47.97,
            50.55
          ],
          [
            47.93,
            50.31
          ],
          [
            47.8,
            50.04
          ],
          [
            47.51,
            49.67
          ],
          [
            47.2,
            49.42
          ],
          [
            46.82,
            49.19
          ],
          [
            46.44,
            49.12
          ],
          [
            45.95,
            49.18
          ],
          [
            45.57,
            49.33
          ],
          [
            45.29,
            49.51
          ],
          [
            45.06,
            49.58
          ],
          [
            44.66,
            49.49
          ],
          [
            44.47,
            49.41
          ],
          [
            44.47,
            29.57
          ],
          [
            44.63,
            29.42
          ],
          [
            45.18,
            29.22
          ],
          [
            46.03,
            28.76
          ],
          [
            46.45,
            28.65
          ]
        ],
        "center": [
          50.57,
          41.44
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            64.75,
            28.75
          ],
          [
            65.3,
            28.78
          ],
          [
            65.75,
            28.89
          ],
          [
            66.43,
            29.18
          ],
          [
            67.02,
            29.57
          ],
          [
            67.76,
            29.92
          ],
          [
            67.74,
            51.8
          ],
          [
            59.84,
            51.8
          ],
          [
            59.67,
            50.95
          ],
          [
            59.54,
            50.82
          ],
          [
            59.31,
            50.65
          ],
          [
            59.03,
            50.63
          ],
          [
            58.6,
            50.76
          ],
          [
            58.29,
            50.9
          ],
          [
            57.36,
            50.75
          ],
          [
            57.15,
            50.73
          ],
          [
            57.11,
            29.03
          ],
          [
            57.49,
            28.93
          ],
          [
            58.13,
            28.96
          ],
          [
            58.63,
            29.25
          ],
          [
            59.11,
            29.33
          ],
          [
            60.09,
            29.4
          ],
          [
            60.72,
            29.53
          ],
          [
            61.38,
            29.52
          ],
          [
            62.3,
            29.49
          ],
          [
            62.72,
            29.44
          ],
          [
            63.03,
            29.28
          ],
          [
            63.4,
            29.02
          ],
          [
            63.72,
            28.95
          ],
          [
            64.06,
            28.85
          ]
        ],
        "center": [
          62.48,
          40.38
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            63.74,
            60.13
          ],
          [
            67.73,
            60.14
          ],
          [
            67.78,
            79.87
          ],
          [
            63.72,
            79.86
          ],
          [
            63.38,
            79.85
          ],
          [
            63.09,
            79.82
          ],
          [
            62.71,
            79.63
          ],
          [
            62.31,
            79.23
          ],
          [
            61.95,
            78.68
          ],
          [
            61.58,
            77.44
          ],
          [
            61.24,
            76.97
          ],
          [
            60.74,
            76.59
          ],
          [
            60.74,
            60.09
          ],
          [
            60.84,
            60.08
          ]
        ],
        "center": [
          64.32,
          69.77
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            37.88,
            58.52
          ],
          [
            38.54,
            59.02
          ],
          [
            39.14,
            59.16
          ],
          [
            39.55,
            59.16
          ],
          [
            39.9,
            59.29
          ],
          [
            39.93,
            77.62
          ],
          [
            39.55,
            77.62
          ],
          [
            38.13,
            77.91
          ],
          [
            36.52,
            77.95
          ],
          [
            32.58,
            77.96
          ],
          [
            32.58,
            57.99
          ],
          [
            36.51,
            58.0
          ],
          [
            37.41,
            57.96
          ]
        ],
        "center": [
          36.2,
          68.1
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              82.8,
              60.5
            ],
            [
              73.6,
              65.1
            ],
            [
              64.3,
              69.8
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              82.2,
              50.7
            ],
            [
              72.3,
              45.5
            ],
            [
              62.5,
              40.4
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "NATO advance to CP2."
        },
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              78.2,
              51.1
            ],
            [
              64.4,
              46.2
            ],
            [
              50.6,
              41.4
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP1",
          "tip": "NATO advance to CP1."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              17.3,
              62.1
            ],
            [
              26.8,
              65.1
            ],
            [
              36.2,
              68.1
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "PACT advance to CP4."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              22.1,
              53.2
            ],
            [
              36.4,
              47.3
            ],
            [
              50.6,
              41.4
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "PACT advance to CP1."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              26.7,
              62.7
            ],
            [
              45.5,
              66.2
            ],
            [
              64.3,
              69.8
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        }
      ],
      "flank": [
        {
          "path": [
            [
              83.6,
              56.2
            ],
            [
              40.0,
              57.5
            ],
            [
              33.2,
              58.1
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              16.3,
              58.8
            ],
            [
              60.0,
              57.5
            ],
            [
              66.8,
              56.8
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              54.2,
              57.3
            ],
            [
              75.2,
              56.5
            ],
            [
              92.0,
              55.9
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              45.8,
              57.7
            ],
            [
              24.7,
              58.5
            ],
            [
              7.9,
              59.1
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 64.3,
          "y": 69.8,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 62.5,
          "y": 40.4,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 71.0,
          "y": 56.7,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 36.2,
          "y": 68.1,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4."
        },
        {
          "x": 50.6,
          "y": 41.4,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1."
        },
        {
          "x": 28.9,
          "y": 58.3,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 81.9,
          "y": 56.3,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 18.0,
          "y": 58.7,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 46.6,
          "y": 41.4,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 54.6,
          "y": 38.4,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 58.5,
          "y": 40.4,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 66.5,
          "y": 37.4,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 60.3,
          "y": 69.8,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 68.3,
          "y": 66.8,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 32.2,
          "y": 68.1,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 40.2,
          "y": 65.1,
          "tip": "Secondary ATGM arc on CP4."
        }
      ],
      "tank": [
        {
          "x": 50.6,
          "y": 46.4,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 62.5,
          "y": 45.4,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 64.3,
          "y": 74.8,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 36.2,
          "y": 73.1,
          "tip": "Tank hull-down near CP4."
        }
      ],
      "infantry": [
        {
          "x": 50.6,
          "y": 41.4,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 62.5,
          "y": 40.4,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 64.3,
          "y": 69.8,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 36.2,
          "y": 68.1,
          "tip": "Infantry hold CP4 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 44.6,
          "y": 37.4,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 56.5,
          "y": 36.4,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 58.3,
          "y": 65.8,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 30.2,
          "y": 64.1,
          "tip": "Recon perch watching CP4."
        }
      ],
      "aa": [
        {
          "x": 79.4,
          "y": 56.4,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 68.5,
          "y": 56.8,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 20.5,
          "y": 58.6,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 31.5,
          "y": 58.2,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 92.0,
          "y": 55.9,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 7.9,
          "y": 59.1,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              71.0,
              56.7
            ],
            [
              50.0,
              57.5
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              28.9,
              58.3
            ],
            [
              50.0,
              57.5
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 50.0,
          "y": 57.5,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 42.0,
          "y": 57.5,
          "tip": "West of mid corridor."
        },
        {
          "x": 58.0,
          "y": 57.5,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              78.0,
              56.4
            ],
            [
              64.0,
              57.0
            ],
            [
              50.0,
              57.5
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              82.8,
              60.5
            ],
            [
              73.6,
              65.1
            ],
            [
              64.3,
              69.8
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              92.0,
              55.9
            ],
            [
              82.2,
              50.7
            ],
            [
              72.3,
              45.5
            ],
            [
              62.5,
              40.4
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: NATO advance to CP2."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              21.9,
              58.6
            ],
            [
              36.0,
              58.0
            ],
            [
              50.0,
              57.5
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              17.3,
              62.1
            ],
            [
              26.8,
              65.1
            ],
            [
              36.2,
              68.1
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: PACT advance to CP4."
        },
        {
          "path": [
            [
              7.9,
              59.1
            ],
            [
              22.1,
              53.2
            ],
            [
              36.4,
              47.3
            ],
            [
              50.6,
              41.4
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: PACT advance to CP1."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1536,
      1536
    ]
  },
  "geisa": {
    "source": "game_assets",
    "details_file": "SM_FO_4x3_Geisa_01_Details.dat",
    "map_image": "geisa.jpg",
    "map_image_source": "game_preview",
    "transform": "yx_fxy",
    "tf": {
      "mode": "yx_fxy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      0.0,
      1269760.0,
      1965585.0,
      2620850.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            98.86,
            98.44
          ],
          [
            98.86,
            85.15
          ],
          [
            1.09,
            85.15
          ],
          [
            1.09,
            98.44
          ]
        ],
        "center": [
          49.98,
          91.79
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            98.86,
            1.54
          ],
          [
            1.09,
            1.54
          ],
          [
            1.09,
            21.86
          ],
          [
            98.86,
            21.86
          ]
        ],
        "center": [
          49.98,
          11.7
        ],
        "side": "PACT"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            76.13,
            62.49
          ],
          [
            82.95,
            49.99
          ],
          [
            63.62,
            44.52
          ],
          [
            54.53,
            57.8
          ]
        ],
        "center": [
          69.1,
          53.74
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 4,
        "pts_est": true,
        "poly": [
          [
            85.22,
            46.86
          ],
          [
            97.73,
            35.92
          ],
          [
            79.54,
            25.76
          ],
          [
            65.89,
            40.61
          ]
        ],
        "center": [
          81.84,
          37.01
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            46.57,
            37.48
          ],
          [
            52.25,
            24.98
          ],
          [
            31.79,
            24.98
          ],
          [
            27.24,
            32.01
          ],
          [
            38.61,
            37.48
          ]
        ],
        "center": [
          40.05,
          30.58
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              56.4,
              79.1
            ],
            [
              62.7,
              66.4
            ],
            [
              69.1,
              53.7
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "NATO advance to CP1."
        },
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              46.7,
              71.4
            ],
            [
              43.4,
              51.0
            ],
            [
              40.0,
              30.6
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              60.6,
              73.5
            ],
            [
              71.2,
              55.3
            ],
            [
              81.8,
              37.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "NATO advance to CP2."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              46.7,
              18.0
            ],
            [
              43.4,
              24.3
            ],
            [
              40.0,
              30.6
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              60.6,
              20.1
            ],
            [
              71.2,
              28.6
            ],
            [
              81.8,
              37.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "PACT advance to CP2."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              56.4,
              25.7
            ],
            [
              62.7,
              39.7
            ],
            [
              69.1,
              53.7
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP1",
          "tip": "PACT advance to CP1."
        }
      ],
      "flank": [
        {
          "path": [
            [
              50.0,
              83.8
            ],
            [
              40.0,
              51.7
            ],
            [
              50.0,
              35.7
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              50.0,
              19.7
            ],
            [
              60.0,
              51.7
            ],
            [
              50.0,
              67.8
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              50.0,
              55.7
            ],
            [
              50.0,
              75.8
            ],
            [
              50.0,
              91.8
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              50.0,
              47.7
            ],
            [
              50.0,
              27.7
            ],
            [
              50.0,
              11.7
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 69.1,
          "y": 53.7,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1."
        },
        {
          "x": 40.0,
          "y": 30.6,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 50.0,
          "y": 71.8,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 40.0,
          "y": 30.6,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 81.8,
          "y": 37.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 50.0,
          "y": 31.7,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 50.0,
          "y": 82.2,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 50.0,
          "y": 21.3,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 65.1,
          "y": 53.7,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 73.1,
          "y": 50.7,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 77.8,
          "y": 37.0,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 85.8,
          "y": 34.0,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 36.0,
          "y": 30.6,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 44.0,
          "y": 27.6,
          "tip": "Secondary ATGM arc on CP3."
        }
      ],
      "tank": [
        {
          "x": 69.1,
          "y": 58.7,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 81.8,
          "y": 42.0,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 40.0,
          "y": 35.6,
          "tip": "Tank hull-down near CP3."
        }
      ],
      "infantry": [
        {
          "x": 69.1,
          "y": 53.7,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 81.8,
          "y": 37.0,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 40.0,
          "y": 30.6,
          "tip": "Infantry hold CP3 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 63.1,
          "y": 49.7,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 75.8,
          "y": 33.0,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 34.0,
          "y": 26.6,
          "tip": "Recon perch watching CP3."
        }
      ],
      "aa": [
        {
          "x": 50.0,
          "y": 79.8,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 50.0,
          "y": 69.4,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 50.0,
          "y": 23.7,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 50.0,
          "y": 34.1,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 50.0,
          "y": 91.8,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 50.0,
          "y": 11.7,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              50.0,
              71.8
            ],
            [
              50.0,
              51.7
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              50.0,
              31.7
            ],
            [
              50.0,
              51.7
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 50.0,
          "y": 51.7,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 42.0,
          "y": 51.7,
          "tip": "West of mid corridor."
        },
        {
          "x": 58.0,
          "y": 51.7,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              50.0,
              78.4
            ],
            [
              50.0,
              65.1
            ],
            [
              50.0,
              51.7
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              56.4,
              79.1
            ],
            [
              62.7,
              66.4
            ],
            [
              69.1,
              53.7
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: NATO advance to CP1."
        },
        {
          "path": [
            [
              50.0,
              91.8
            ],
            [
              46.7,
              71.4
            ],
            [
              43.4,
              51.0
            ],
            [
              40.0,
              30.6
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              50.0,
              25.0
            ],
            [
              50.0,
              38.4
            ],
            [
              50.0,
              51.7
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              46.7,
              18.0
            ],
            [
              43.4,
              24.3
            ],
            [
              40.0,
              30.6
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT advance to CP3."
        },
        {
          "path": [
            [
              50.0,
              11.7
            ],
            [
              60.6,
              20.1
            ],
            [
              71.2,
              28.6
            ],
            [
              81.8,
              37.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: PACT advance to CP2."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1536,
      2048
    ]
  },
  "loop": {
    "source": "game_assets",
    "details_file": "SM_FO_5x2_Loop_01_Details.dat",
    "map_image": "loop.jpg",
    "map_image_source": "game_preview",
    "transform": "yx",
    "tf": {
      "mode": "yx",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      1661314.0,
      783.0,
      2690434.0,
      1309993.0
    ],
    "orientation": "ew",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            2.35,
            1.49
          ],
          [
            2.35,
            98.51
          ],
          [
            25.81,
            98.51
          ],
          [
            25.81,
            1.49
          ]
        ],
        "center": [
          14.08,
          50.0
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_1",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            89.17,
            2.99
          ],
          [
            89.17,
            98.51
          ],
          [
            97.38,
            98.51
          ],
          [
            97.38,
            2.99
          ]
        ],
        "center": [
          93.27,
          50.75
        ],
        "side": "NATO"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            39.89,
            8.96
          ],
          [
            39.89,
            19.4
          ],
          [
            48.1,
            25.37
          ],
          [
            52.8,
            19.4
          ],
          [
            50.45,
            8.96
          ]
        ],
        "center": [
          46.05,
          16.04
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 4,
        "pts_est": true,
        "poly": [
          [
            57.49,
            28.36
          ],
          [
            52.8,
            29.85
          ],
          [
            52.8,
            52.24
          ],
          [
            65.7,
            52.24
          ],
          [
            65.7,
            37.31
          ]
        ],
        "center": [
          58.8,
          41.68
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 3,
        "pts_est": true,
        "poly": [
          [
            53.97,
            64.18
          ],
          [
            51.62,
            70.15
          ],
          [
            51.62,
            79.1
          ],
          [
            63.35,
            79.1
          ],
          [
            64.53,
            73.13
          ],
          [
            64.53,
            64.18
          ]
        ],
        "center": [
          58.18,
          71.75
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              81.8,
              47.7
            ],
            [
              70.3,
              44.7
            ],
            [
              58.8,
              41.7
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "NATO advance to CP2."
        },
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              81.6,
              57.8
            ],
            [
              69.9,
              64.8
            ],
            [
              58.2,
              71.8
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "NATO advance to CP3."
        },
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              77.5,
              39.2
            ],
            [
              61.8,
              27.6
            ],
            [
              46.0,
              16.0
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP1",
          "tip": "NATO advance to CP1."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              29.0,
              47.2
            ],
            [
              43.9,
              44.5
            ],
            [
              58.8,
              41.7
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP2",
          "tip": "PACT advance to CP2."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              24.7,
              38.7
            ],
            [
              35.4,
              27.4
            ],
            [
              46.0,
              16.0
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP1",
          "tip": "PACT advance to CP1."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              28.8,
              57.2
            ],
            [
              43.5,
              64.5
            ],
            [
              58.2,
              71.8
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        }
      ],
      "flank": [
        {
          "path": [
            [
              85.4,
              50.7
            ],
            [
              43.7,
              50.4
            ],
            [
              37.8,
              50.2
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              22.0,
              50.1
            ],
            [
              63.7,
              50.4
            ],
            [
              69.5,
              50.5
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              57.6,
              50.4
            ],
            [
              77.4,
              50.6
            ],
            [
              93.3,
              50.8
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              49.7,
              50.3
            ],
            [
              29.9,
              50.1
            ],
            [
              14.1,
              50.0
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 58.8,
          "y": 41.7,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 58.2,
          "y": 71.8,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 73.5,
          "y": 50.6,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 58.8,
          "y": 41.7,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP2",
          "tip": "Hold CP2."
        },
        {
          "x": 46.0,
          "y": 16.0,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP1",
          "tip": "Hold CP1."
        },
        {
          "x": 33.9,
          "y": 50.2,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 83.8,
          "y": 50.7,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 23.6,
          "y": 50.1,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 42.0,
          "y": 16.0,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 50.0,
          "y": 13.0,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 54.8,
          "y": 41.7,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 62.8,
          "y": 38.7,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 54.2,
          "y": 71.8,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 62.2,
          "y": 68.8,
          "tip": "Secondary ATGM arc on CP3."
        }
      ],
      "tank": [
        {
          "x": 46.0,
          "y": 21.0,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 58.8,
          "y": 46.7,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 58.2,
          "y": 76.8,
          "tip": "Tank hull-down near CP3."
        }
      ],
      "infantry": [
        {
          "x": 46.0,
          "y": 16.0,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 58.8,
          "y": 41.7,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 58.2,
          "y": 71.8,
          "tip": "Infantry hold CP3 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 40.0,
          "y": 12.0,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 52.8,
          "y": 37.7,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 52.2,
          "y": 67.8,
          "tip": "Recon perch watching CP3."
        }
      ],
      "aa": [
        {
          "x": 81.4,
          "y": 50.6,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 71.1,
          "y": 50.5,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 26.0,
          "y": 50.1,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 36.3,
          "y": 50.2,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 93.3,
          "y": 50.8,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 14.1,
          "y": 50.0,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              73.5,
              50.6
            ],
            [
              53.7,
              50.4
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              33.9,
              50.2
            ],
            [
              53.7,
              50.4
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 53.7,
          "y": 50.4,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 45.7,
          "y": 50.4,
          "tip": "West of mid corridor."
        },
        {
          "x": 61.7,
          "y": 50.4,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              80.1,
              50.6
            ],
            [
              66.9,
              50.5
            ],
            [
              53.7,
              50.4
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              81.8,
              47.7
            ],
            [
              70.3,
              44.7
            ],
            [
              58.8,
              41.7
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: NATO advance to CP2."
        },
        {
          "path": [
            [
              93.3,
              50.8
            ],
            [
              81.6,
              57.8
            ],
            [
              69.9,
              64.8
            ],
            [
              58.2,
              71.8
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: NATO advance to CP3."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              27.3,
              50.1
            ],
            [
              40.5,
              50.2
            ],
            [
              53.7,
              50.4
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              29.0,
              47.2
            ],
            [
              43.9,
              44.5
            ],
            [
              58.8,
              41.7
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP2",
          "tip": "Enemy opening: PACT advance to CP2."
        },
        {
          "path": [
            [
              14.1,
              50.0
            ],
            [
              24.7,
              38.7
            ],
            [
              35.4,
              27.4
            ],
            [
              46.0,
              16.0
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP1",
          "tip": "Enemy opening: PACT advance to CP1."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      2560,
      1024
    ]
  },
  "ripple": {
    "source": "game_assets",
    "details_file": "_2x3_Ripple_2vs2_CONQ_Details.dat",
    "map_image": "ripple.jpg",
    "map_image_source": "game_preview",
    "transform": "xy",
    "tf": {
      "mode": "xy",
      "sx": 100,
      "sy": 100,
      "ox": 0,
      "oy": 0,
      "kind": "bounds"
    },
    "bbox_world": [
      51.0,
      357.0,
      1310372.0,
      1966058.0
    ],
    "orientation": "ns",
    "schematic": false,
    "deploy_polys": [
      {
        "id": "deploy_0",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            5.71,
            2.61
          ],
          [
            24.39,
            2.61
          ],
          [
            24.41,
            13.52
          ],
          [
            5.76,
            13.51
          ]
        ],
        "center": [
          15.07,
          8.06
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_1",
        "label": "PACT deploy",
        "alliance": 1,
        "poly": [
          [
            69.02,
            17.52
          ],
          [
            69.03,
            14.28
          ],
          [
            92.68,
            14.29
          ],
          [
            92.65,
            22.19
          ],
          [
            73.34,
            22.19
          ],
          [
            73.34,
            18.71
          ],
          [
            72.85,
            18.26
          ],
          [
            72.14,
            17.89
          ],
          [
            71.38,
            17.63
          ],
          [
            70.52,
            17.52
          ]
        ],
        "center": [
          81.95,
          18.04
        ],
        "side": "PACT"
      },
      {
        "id": "deploy_2",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            2.94,
            84.81
          ],
          [
            7.11,
            84.81
          ],
          [
            7.1,
            86.07
          ],
          [
            7.29,
            86.85
          ],
          [
            7.61,
            87.51
          ],
          [
            8.04,
            88.14
          ],
          [
            8.79,
            88.77
          ],
          [
            9.57,
            89.23
          ],
          [
            11.2,
            89.78
          ],
          [
            12.49,
            90.02
          ],
          [
            13.89,
            90.11
          ],
          [
            14.94,
            90.14
          ],
          [
            14.89,
            95.85
          ],
          [
            2.99,
            95.91
          ]
        ],
        "center": [
          8.03,
          91.5
        ],
        "side": "NATO"
      },
      {
        "id": "deploy_3",
        "label": "NATO deploy",
        "alliance": 0,
        "poly": [
          [
            72.39,
            87.71
          ],
          [
            75.37,
            87.69
          ],
          [
            75.76,
            87.73
          ],
          [
            76.2,
            87.74
          ],
          [
            77.32,
            87.64
          ],
          [
            78.12,
            87.51
          ],
          [
            88.74,
            87.51
          ],
          [
            88.76,
            95.23
          ],
          [
            72.4,
            95.23
          ]
        ],
        "center": [
          80.62,
          91.4
        ],
        "side": "NATO"
      }
    ],
    "zones": [
      {
        "id": "z0",
        "label": "CP1",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            3.7,
            45.06
          ],
          [
            9.4,
            45.11
          ],
          [
            9.39,
            56.6
          ],
          [
            3.74,
            56.6
          ]
        ],
        "center": [
          6.56,
          50.83
        ]
      },
      {
        "id": "z1",
        "label": "CP2",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            17.98,
            43.87
          ],
          [
            23.18,
            35.8
          ],
          [
            34.2,
            37.3
          ],
          [
            32.89,
            40.9
          ],
          [
            33.07,
            41.2
          ],
          [
            33.45,
            42.43
          ],
          [
            34.03,
            43.58
          ],
          [
            34.27,
            43.79
          ],
          [
            34.74,
            44.02
          ],
          [
            35.26,
            44.44
          ],
          [
            35.33,
            44.53
          ],
          [
            35.39,
            44.8
          ],
          [
            35.5,
            45.04
          ],
          [
            35.59,
            45.33
          ],
          [
            35.61,
            45.52
          ],
          [
            35.56,
            45.61
          ],
          [
            34.96,
            45.9
          ],
          [
            34.59,
            46.0
          ],
          [
            34.17,
            46.09
          ],
          [
            33.29,
            46.12
          ],
          [
            31.99,
            46.08
          ],
          [
            31.51,
            46.11
          ],
          [
            29.68,
            46.31
          ],
          [
            28.42,
            46.35
          ],
          [
            27.78,
            46.31
          ],
          [
            26.08,
            46.0
          ],
          [
            25.74,
            45.92
          ],
          [
            25.12,
            45.86
          ],
          [
            24.75,
            45.79
          ],
          [
            22.65,
            45.15
          ],
          [
            22.25,
            44.96
          ],
          [
            21.68,
            44.65
          ],
          [
            20.18,
            44.39
          ],
          [
            18.7,
            44.07
          ]
        ],
        "center": [
          27.16,
          41.44
        ]
      },
      {
        "id": "z2",
        "label": "CP3",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            23.64,
            21.06
          ],
          [
            44.76,
            21.04
          ],
          [
            44.84,
            26.78
          ],
          [
            23.77,
            26.81
          ]
        ],
        "center": [
          34.25,
          23.92
        ]
      },
      {
        "id": "z3",
        "label": "CP4",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            41.11,
            42.14
          ],
          [
            41.13,
            35.97
          ],
          [
            50.99,
            35.97
          ],
          [
            51.19,
            36.2
          ],
          [
            51.3,
            36.29
          ],
          [
            51.52,
            36.37
          ],
          [
            52.43,
            36.4
          ],
          [
            53.33,
            36.4
          ],
          [
            54.16,
            36.32
          ],
          [
            54.36,
            36.2
          ],
          [
            54.5,
            35.97
          ],
          [
            55.41,
            35.97
          ],
          [
            55.37,
            42.15
          ]
        ],
        "center": [
          48.19,
          39.1
        ]
      },
      {
        "id": "z4",
        "label": "CP5",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            28.2,
            72.19
          ],
          [
            28.24,
            72.03
          ],
          [
            28.43,
            71.74
          ],
          [
            28.48,
            71.56
          ],
          [
            28.46,
            71.11
          ],
          [
            28.54,
            70.89
          ],
          [
            28.69,
            70.6
          ],
          [
            28.78,
            70.48
          ],
          [
            29.47,
            70.05
          ],
          [
            30.04,
            69.64
          ],
          [
            30.16,
            69.51
          ],
          [
            30.24,
            69.37
          ],
          [
            30.29,
            69.23
          ],
          [
            30.28,
            69.07
          ],
          [
            30.25,
            68.92
          ],
          [
            30.24,
            67.63
          ],
          [
            39.79,
            67.64
          ],
          [
            39.77,
            76.0
          ],
          [
            31.53,
            75.97
          ],
          [
            31.07,
            75.81
          ],
          [
            29.8,
            75.13
          ],
          [
            29.1,
            74.65
          ],
          [
            28.66,
            74.4
          ],
          [
            28.44,
            74.15
          ],
          [
            28.27,
            73.62
          ],
          [
            28.23,
            73.32
          ],
          [
            28.32,
            72.96
          ],
          [
            28.32,
            72.79
          ],
          [
            28.22,
            72.54
          ]
        ],
        "center": [
          34.47,
          71.86
        ]
      },
      {
        "id": "z5",
        "label": "CP6",
        "pts": 1,
        "pts_est": true,
        "poly": [
          [
            29.54,
            56.05
          ],
          [
            29.55,
            51.85
          ],
          [
            46.66,
            51.85
          ],
          [
            46.65,
            53.88
          ],
          [
            46.26,
            54.01
          ],
          [
            46.16,
            54.33
          ],
          [
            46.32,
            54.91
          ],
          [
            46.43,
            55.23
          ],
          [
            46.5,
            55.71
          ],
          [
            46.65,
            56.01
          ]
        ],
        "center": [
          38.02,
          53.93
        ]
      },
      {
        "id": "z6",
        "label": "CP7",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            36.67,
            86.61
          ],
          [
            36.68,
            85.59
          ],
          [
            36.74,
            85.01
          ],
          [
            36.87,
            84.56
          ],
          [
            37.02,
            84.24
          ],
          [
            37.3,
            83.82
          ],
          [
            37.65,
            83.43
          ],
          [
            37.91,
            83.17
          ],
          [
            38.31,
            82.68
          ],
          [
            38.56,
            82.27
          ],
          [
            63.01,
            82.28
          ],
          [
            63.04,
            87.86
          ],
          [
            36.81,
            87.81
          ],
          [
            36.68,
            87.39
          ]
        ],
        "center": [
          50.07,
          85.09
        ]
      },
      {
        "id": "z7",
        "label": "CP8",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            46.07,
            62.07
          ],
          [
            53.82,
            62.07
          ],
          [
            54.59,
            62.32
          ],
          [
            55.76,
            62.58
          ],
          [
            60.85,
            62.59
          ],
          [
            60.98,
            67.11
          ],
          [
            61.06,
            67.64
          ],
          [
            61.17,
            68.07
          ],
          [
            61.2,
            68.34
          ],
          [
            61.18,
            68.55
          ],
          [
            61.06,
            68.76
          ],
          [
            60.89,
            68.91
          ],
          [
            60.7,
            69.13
          ],
          [
            60.51,
            69.42
          ],
          [
            60.27,
            70.21
          ],
          [
            60.15,
            70.46
          ],
          [
            59.81,
            70.88
          ],
          [
            46.08,
            70.89
          ]
        ],
        "center": [
          53.34,
          66.55
        ]
      },
      {
        "id": "z8",
        "label": "CP9",
        "pts": 2,
        "pts_est": true,
        "poly": [
          [
            83.75,
            55.13
          ],
          [
            83.77,
            48.15
          ],
          [
            94.36,
            47.36
          ],
          [
            94.37,
            60.94
          ],
          [
            87.4,
            60.95
          ],
          [
            87.39,
            55.73
          ],
          [
            87.36,
            55.56
          ],
          [
            87.3,
            55.43
          ],
          [
            87.21,
            55.3
          ],
          [
            86.98,
            55.2
          ],
          [
            86.73,
            55.14
          ],
          [
            86.51,
            55.12
          ]
        ],
        "center": [
          89.74,
          53.7
        ]
      }
    ],
    "terrain_stats": {
      "forest_pct": 25,
      "open_pct": 35,
      "water_pct": 10,
      "town_pct": 8
    },
    "tactics": {
      "advance": [
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              46.2,
              89.3
            ],
            [
              48.2,
              87.2
            ],
            [
              50.1,
              85.1
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP7",
          "tip": "NATO advance to CP7."
        },
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              41.0,
              84.9
            ],
            [
              37.8,
              78.4
            ],
            [
              34.5,
              71.9
            ]
          ],
          "side": "NATO",
          "phase": "opening",
          "label": "ADV CP5",
          "tip": "NATO advance to CP5."
        },
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              47.3,
              83.2
            ],
            [
              50.3,
              74.8
            ],
            [
              53.3,
              66.5
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "ADV CP8",
          "tip": "NATO advance to CP8."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              43.8,
              16.7
            ],
            [
              39.0,
              20.3
            ],
            [
              34.2,
              23.9
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP3",
          "tip": "PACT advance to CP3."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              48.4,
              21.7
            ],
            [
              48.3,
              30.4
            ],
            [
              48.2,
              39.1
            ]
          ],
          "side": "PACT",
          "phase": "opening",
          "label": "ADV CP4",
          "tip": "PACT advance to CP4."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              41.4,
              22.5
            ],
            [
              34.3,
              32.0
            ],
            [
              27.2,
              41.4
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "ADV CP2",
          "tip": "PACT advance to CP2."
        }
      ],
      "flank": [
        {
          "path": [
            [
              44.7,
              83.6
            ],
            [
              36.4,
              52.2
            ],
            [
              47.3,
              36.6
            ]
          ],
          "side": "NATO",
          "phase": "mid",
          "label": "FLANK",
          "tip": "NATO flank."
        },
        {
          "path": [
            [
              48.1,
              20.9
            ],
            [
              56.4,
              52.2
            ],
            [
              45.6,
              67.9
            ]
          ],
          "side": "PACT",
          "phase": "mid",
          "label": "FLANK",
          "tip": "PACT flank."
        }
      ],
      "retreat": [
        {
          "path": [
            [
              46.2,
              56.2
            ],
            [
              45.2,
              75.8
            ],
            [
              44.3,
              91.5
            ]
          ],
          "side": "NATO",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "NATO fallback."
        },
        {
          "path": [
            [
              46.6,
              48.3
            ],
            [
              47.7,
              28.7
            ],
            [
              48.5,
              13.1
            ]
          ],
          "side": "PACT",
          "phase": "late",
          "label": "FALLBACK",
          "tip": "PACT fallback."
        }
      ],
      "defend": [
        {
          "x": 50.1,
          "y": 85.1,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP7",
          "tip": "Hold CP7."
        },
        {
          "x": 34.5,
          "y": 71.9,
          "side": "NATO",
          "phase": "opening",
          "label": "DEF CP5",
          "tip": "Hold CP5."
        },
        {
          "x": 45.4,
          "y": 71.8,
          "side": "NATO",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "NATO secondary line."
        },
        {
          "x": 34.2,
          "y": 23.9,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP3",
          "tip": "Hold CP3."
        },
        {
          "x": 48.2,
          "y": 39.1,
          "side": "PACT",
          "phase": "opening",
          "label": "DEF CP4",
          "tip": "Hold CP4."
        },
        {
          "x": 47.5,
          "y": 32.7,
          "side": "PACT",
          "phase": "mid",
          "label": "2nd LINE",
          "tip": "PACT secondary line."
        }
      ],
      "rally": [
        {
          "x": 44.8,
          "y": 82.0,
          "side": "NATO",
          "label": "RALLY",
          "tip": "NATO rally."
        },
        {
          "x": 48.0,
          "y": 22.5,
          "side": "PACT",
          "label": "RALLY",
          "tip": "PACT rally."
        }
      ],
      "atgm": [
        {
          "x": 2.6,
          "y": 50.8,
          "tip": "ATGM cover facing CP1."
        },
        {
          "x": 10.6,
          "y": 47.8,
          "tip": "Secondary ATGM arc on CP1."
        },
        {
          "x": 23.2,
          "y": 41.4,
          "tip": "ATGM cover facing CP2."
        },
        {
          "x": 31.2,
          "y": 38.4,
          "tip": "Secondary ATGM arc on CP2."
        },
        {
          "x": 30.2,
          "y": 23.9,
          "tip": "ATGM cover facing CP3."
        },
        {
          "x": 38.2,
          "y": 20.9,
          "tip": "Secondary ATGM arc on CP3."
        },
        {
          "x": 44.2,
          "y": 39.1,
          "tip": "ATGM cover facing CP4."
        },
        {
          "x": 52.2,
          "y": 36.1,
          "tip": "Secondary ATGM arc on CP4."
        },
        {
          "x": 30.5,
          "y": 71.9,
          "tip": "ATGM cover facing CP5."
        },
        {
          "x": 38.5,
          "y": 68.9,
          "tip": "Secondary ATGM arc on CP5."
        }
      ],
      "tank": [
        {
          "x": 6.6,
          "y": 55.8,
          "tip": "Tank hull-down near CP1."
        },
        {
          "x": 27.2,
          "y": 46.4,
          "tip": "Tank hull-down near CP2."
        },
        {
          "x": 34.2,
          "y": 28.9,
          "tip": "Tank hull-down near CP3."
        },
        {
          "x": 48.2,
          "y": 44.1,
          "tip": "Tank hull-down near CP4."
        },
        {
          "x": 34.5,
          "y": 76.9,
          "tip": "Tank hull-down near CP5."
        },
        {
          "x": 38.0,
          "y": 58.9,
          "tip": "Tank hull-down near CP6."
        }
      ],
      "infantry": [
        {
          "x": 6.6,
          "y": 50.8,
          "tip": "Infantry hold CP1 buildings/cover."
        },
        {
          "x": 27.2,
          "y": 41.4,
          "tip": "Infantry hold CP2 buildings/cover."
        },
        {
          "x": 34.2,
          "y": 23.9,
          "tip": "Infantry hold CP3 buildings/cover."
        },
        {
          "x": 48.2,
          "y": 39.1,
          "tip": "Infantry hold CP4 buildings/cover."
        },
        {
          "x": 34.5,
          "y": 71.9,
          "tip": "Infantry hold CP5 buildings/cover."
        },
        {
          "x": 38.0,
          "y": 53.9,
          "tip": "Infantry hold CP6 buildings/cover."
        }
      ],
      "recon": [
        {
          "x": 2,
          "y": 46.8,
          "tip": "Recon perch watching CP1."
        },
        {
          "x": 21.2,
          "y": 37.4,
          "tip": "Recon perch watching CP2."
        },
        {
          "x": 28.2,
          "y": 19.9,
          "tip": "Recon perch watching CP3."
        },
        {
          "x": 42.2,
          "y": 35.1,
          "tip": "Recon perch watching CP4."
        },
        {
          "x": 28.5,
          "y": 67.9,
          "tip": "Recon perch watching CP5."
        },
        {
          "x": 32.0,
          "y": 49.9,
          "tip": "Recon perch watching CP6."
        },
        {
          "x": 44.1,
          "y": 81.1,
          "tip": "Recon perch watching CP7."
        },
        {
          "x": 47.3,
          "y": 62.5,
          "tip": "Recon perch watching CP8."
        }
      ],
      "aa": [
        {
          "x": 45.0,
          "y": 79.7,
          "r": 13,
          "side": "NATO",
          "tip": "NATO AA umbrella."
        },
        {
          "x": 45.5,
          "y": 69.5,
          "r": 11,
          "side": "NATO",
          "tip": "NATO forward AA."
        },
        {
          "x": 47.9,
          "y": 24.8,
          "r": 13,
          "side": "PACT",
          "tip": "PACT AA umbrella."
        },
        {
          "x": 47.3,
          "y": 35.0,
          "r": 11,
          "side": "PACT",
          "tip": "PACT forward AA."
        }
      ],
      "arty": [
        {
          "x": 44.3,
          "y": 91.5,
          "side": "NATO",
          "tip": "NATO arty/FOB in deploy depth."
        },
        {
          "x": 48.5,
          "y": 13.1,
          "side": "PACT",
          "tip": "PACT arty/FOB in deploy depth."
        }
      ],
      "helo": [
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              45.4,
              71.8
            ],
            [
              46.4,
              52.2
            ]
          ],
          "side": "NATO",
          "tip": "NATO helo lane toward mid."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              47.5,
              32.7
            ],
            [
              46.4,
              52.2
            ]
          ],
          "side": "PACT",
          "tip": "PACT helo lane toward mid."
        }
      ],
      "chokepoints": [
        {
          "x": 46.4,
          "y": 52.2,
          "tip": "Central approach corridor between deploys."
        },
        {
          "x": 38.4,
          "y": 52.2,
          "tip": "West of mid corridor."
        },
        {
          "x": 54.4,
          "y": 52.2,
          "tip": "East of mid corridor."
        }
      ],
      "enemy_plan": [
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              45.0,
              78.4
            ],
            [
              45.7,
              65.3
            ],
            [
              46.4,
              52.2
            ]
          ],
          "side": "PACT",
          "label": "ENEMY ARMOR",
          "tip": "Likely NATO armor axis."
        },
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              46.2,
              89.3
            ],
            [
              48.2,
              87.2
            ],
            [
              50.1,
              85.1
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP7",
          "tip": "Enemy opening: NATO advance to CP7."
        },
        {
          "path": [
            [
              44.3,
              91.5
            ],
            [
              41.0,
              84.9
            ],
            [
              37.8,
              78.4
            ],
            [
              34.5,
              71.9
            ]
          ],
          "side": "PACT",
          "label": "ENEMY->ADV CP5",
          "tip": "Enemy opening: NATO advance to CP5."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              47.8,
              26.1
            ],
            [
              47.1,
              39.2
            ],
            [
              46.4,
              52.2
            ]
          ],
          "side": "NATO",
          "label": "ENEMY ARMOR",
          "tip": "Likely PACT armor axis."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              43.8,
              16.7
            ],
            [
              39.0,
              20.3
            ],
            [
              34.2,
              23.9
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP3",
          "tip": "Enemy opening: PACT advance to CP3."
        },
        {
          "path": [
            [
              48.5,
              13.1
            ],
            [
              48.4,
              21.7
            ],
            [
              48.3,
              30.4
            ],
            [
              48.2,
              39.1
            ]
          ],
          "side": "NATO",
          "label": "ENEMY->ADV CP4",
          "tip": "Enemy opening: PACT advance to CP4."
        }
      ]
    },
    "terrain_source": "derived",
    "map_size": [
      1024,
      1536
    ]
  }
};
