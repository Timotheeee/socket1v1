//https://pvpoke.com/data/gamemaster.json
var masterdata = {
    "settings": {
        "partySize": 3,
        "maxBuffStages": 4,
        "buffDivisor": 4
    },
    "cups": {
        "all": [],
        "custom": [],
        "boulder": [
            "rock",
            "steel",
            "fighting",
            "ground"
        ],
        "twilight": [
            "dark",
            "poison",
            "fairy",
            "ghost"
        ],
        "tempest": [
            "electric",
            "ice",
            "flying",
            "ground"
        ],
        "kingdom": [
            "fire",
            "ice",
            "dragon",
            "steel"
        ],
        "nightmare": [
            "psychic",
            "dark",
            "fighting"
        ],
        "regionals-1": [
            "rock",
            "steel",
            "fighting",
            "ground",
            "dark",
            "poison",
            "fairy",
            "ghost",
            "electric",
            "ice",
            "flying",
            "fire",
            "dragon"
        ],
        "rainbow": [
            "fire",
            "water",
            "grass",
            "electric",
            "bug"
        ],
        "championships-1": [],
        "jungle": [
            "normal",
            "grass",
            "electric",
            "bug"
        ]
    },
    "pokemon": [
        {
            "dex": 460,
            "speciesName": "Abomasnow",
            "speciesId": "abomasnow",
            "baseStats": {
                "atk": 178,
                "def": 158,
                "hp": 207
            },
            "types": [
                "grass",
                "ice"
            ],
            "fastMoves": [
                "POWDER_SNOW",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ENERGY_BALL",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    5,
                    15,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 63,
            "speciesName": "Abra",
            "speciesId": "abra",
            "baseStats": {
                "atk": 195,
                "def": 82,
                "hp": 93
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "SHADOW_BALL",
                "SIGNAL_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 359,
            "speciesName": "Absol",
            "speciesId": "absol",
            "baseStats": {
                "atk": 246,
                "def": 120,
                "hp": 163
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "PSYCHO_CUT",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "MEGAHORN",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    23,
                    0,
                    11,
                    4
                ],
                "cp2500": [
                    40,
                    10,
                    14,
                    7
                ]
            }
        },
        {
            "dex": 142,
            "speciesName": "Aerodactyl",
            "speciesId": "aerodactyl",
            "baseStats": {
                "atk": 221,
                "def": 159,
                "hp": 190
            },
            "types": [
                "rock",
                "flying"
            ],
            "fastMoves": [
                "BITE",
                "STEEL_WING",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HYPER_BEAM",
                "IRON_HEAD",
                "ROCK_SLIDE",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    12,
                    9,
                    14
                ],
                "cp2500": [
                    39,
                    3,
                    3,
                    13
                ]
            }
        },
        {
            "dex": 306,
            "speciesName": "Aggron",
            "speciesId": "aggron",
            "baseStats": {
                "atk": 198,
                "def": 257,
                "hp": 172
            },
            "types": [
                "steel",
                "rock"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "HEAVY_SLAM",
                "STONE_EDGE",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    0,
                    9,
                    3
                ],
                "cp2500": [
                    31.5,
                    5,
                    12,
                    13
                ]
            }
        },
        {
            "dex": 190,
            "speciesName": "Aipom",
            "speciesId": "aipom",
            "baseStats": {
                "atk": 136,
                "def": 112,
                "hp": 146
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "LOW_SWEEP",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 65,
            "speciesName": "Alakazam",
            "speciesId": "alakazam",
            "baseStats": {
                "atk": 271,
                "def": 167,
                "hp": 146
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "FIRE_PUNCH",
                "FOCUS_BLAST",
                "FUTURE_SIGHT",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "legacyMoves": [
                "DAZZLING_GLEAM",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    2,
                    4,
                    14
                ],
                "cp2500": [
                    30,
                    4,
                    13,
                    12
                ]
            }
        },
        {
            "dex": 334,
            "speciesName": "Altaria",
            "speciesId": "altaria",
            "baseStats": {
                "atk": 141,
                "def": 201,
                "hp": 181
            },
            "types": [
                "dragon",
                "flying"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "PECK"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "DRAGON_PULSE",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    28.5,
                    2,
                    14,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 424,
            "speciesName": "Ambipom",
            "speciesId": "ambipom",
            "baseStats": {
                "atk": 205,
                "def": 143,
                "hp": 181
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "HYPER_BEAM",
                "LOW_SWEEP"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    3,
                    9,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 181,
            "speciesName": "Ampharos",
            "speciesId": "ampharos",
            "baseStats": {
                "atk": 211,
                "def": 169,
                "hp": 207
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "FOCUS_BLAST",
                "POWER_GEM",
                "THUNDER",
                "ZAP_CANNON"
            ],
            "legacyMoves": [
                "DRAGON_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    3,
                    10,
                    15
                ],
                "cp2500": [
                    35,
                    6,
                    9,
                    14
                ]
            }
        },
        {
            "dex": 347,
            "speciesName": "Anorith",
            "speciesId": "anorith",
            "baseStats": {
                "atk": 176,
                "def": 100,
                "hp": 128
            },
            "types": [
                "rock",
                "bug"
            ],
            "fastMoves": [
                "SCRATCH",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "AQUA_JET",
                "CROSS_POISON"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    11,
                    14,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 24,
            "speciesName": "Arbok",
            "speciesId": "arbok",
            "baseStats": {
                "atk": 167,
                "def": 153,
                "hp": 155
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "BITE",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GUNK_SHOT",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    31.5,
                    2,
                    6,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 59,
            "speciesName": "Arcanine",
            "speciesId": "arcanine",
            "baseStats": {
                "atk": 227,
                "def": 166,
                "hp": 207
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "FIRE_FANG",
                "SNARL"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "CRUNCH",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "WILD_CHARGE"
            ],
            "legacyMoves": [
                "BITE",
                "BULLDOZE",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    4,
                    8,
                    4
                ],
                "cp2500": [
                    33,
                    3,
                    12,
                    3
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus",
            "speciesId": "arceus",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Bug)",
            "speciesId": "arceus_bug",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Dark)",
            "speciesId": "arceus_dark",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Dragon)",
            "speciesId": "arceus_dragon",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "dragon",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Electric)",
            "speciesId": "arceus_electric",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Fairy)",
            "speciesId": "arceus_fairy",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Fighting)",
            "speciesId": "arceus_fighting",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Fire)",
            "speciesId": "arceus_fire",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Flying)",
            "speciesId": "arceus_flying",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "flying",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Ghost)",
            "speciesId": "arceus_ghost",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Grass)",
            "speciesId": "arceus_grass",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Ground)",
            "speciesId": "arceus_ground",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Ice)",
            "speciesId": "arceus_ice",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Poison)",
            "speciesId": "arceus_poison",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Psychic)",
            "speciesId": "arceus_psychic",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Rock)",
            "speciesId": "arceus_rock",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Steel)",
            "speciesId": "arceus_steel",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "steel",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 493,
            "speciesName": "Arceus (Water)",
            "speciesId": "arceus_water",
            "baseStats": {
                "atk": 238,
                "def": 238,
                "hp": 237
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    23,
                    4,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 168,
            "speciesName": "Ariados",
            "speciesId": "ariados",
            "baseStats": {
                "atk": 161,
                "def": 124,
                "hp": 172
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "INFESTATION",
                "POISON_STING"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "MEGAHORN",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    9,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 348,
            "speciesName": "Armaldo",
            "speciesId": "armaldo",
            "baseStats": {
                "atk": 222,
                "def": 174,
                "hp": 181
            },
            "types": [
                "rock",
                "bug"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "ROCK_BLAST",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    20,
                    0,
                    10,
                    9
                ],
                "cp2500": [
                    37.5,
                    1,
                    11,
                    5
                ]
            }
        },
        {
            "dex": 304,
            "speciesName": "Aron",
            "speciesId": "aron",
            "baseStats": {
                "atk": 121,
                "def": 141,
                "hp": 137
            },
            "types": [
                "steel",
                "rock"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "IRON_HEAD",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 144,
            "speciesName": "Articuno",
            "speciesId": "articuno",
            "baseStats": {
                "atk": 192,
                "def": 236,
                "hp": 207
            },
            "types": [
                "ice",
                "flying"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HURRICANE",
                "ICE_BEAM",
                "ICY_WIND",
                "ANCIENT_POWER"
            ],
            "legacyMoves": [
                "HURRICANE"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    1,
                    12,
                    1
                ],
                "cp2500": [
                    33.5,
                    1,
                    2,
                    11
                ]
            }
        },
        {
            "dex": 482,
            "speciesName": "Azelf",
            "speciesId": "azelf",
            "baseStats": {
                "atk": 270,
                "def": 151,
                "hp": 181
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FUTURE_SIGHT",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    17,
                    3,
                    15,
                    11
                ],
                "cp2500": [
                    30,
                    1,
                    4,
                    10
                ]
            }
        },
        {
            "dex": 184,
            "speciesName": "Azumarill",
            "speciesId": "azumarill",
            "baseStats": {
                "atk": 112,
                "def": 152,
                "hp": 225
            },
            "types": [
                "water",
                "fairy"
            ],
            "fastMoves": [
                "BUBBLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "ICE_BEAM",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    37,
                    15,
                    12,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 298,
            "speciesName": "Azurill",
            "speciesId": "azurill",
            "baseStats": {
                "atk": 36,
                "def": 71,
                "hp": 137
            },
            "types": [
                "normal",
                "fairy"
            ],
            "fastMoves": [
                "BUBBLE",
                "SPLASH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BUBBLE_BEAM",
                "ICE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 371,
            "speciesName": "Bagon",
            "speciesId": "bagon",
            "baseStats": {
                "atk": 134,
                "def": 93,
                "hp": 128
            },
            "types": [
                "dragon",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 343,
            "speciesName": "Baltoy",
            "speciesId": "baltoy",
            "baseStats": {
                "atk": 77,
                "def": 124,
                "hp": 120
            },
            "types": [
                "ground",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "DIG",
                "GYRO_BALL",
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 354,
            "speciesName": "Banette",
            "speciesId": "banette",
            "baseStats": {
                "atk": 218,
                "def": 126,
                "hp": 162
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "HEX",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "SHADOW_BALL",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    25.5,
                    0,
                    7,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 339,
            "speciesName": "Barboach",
            "speciesId": "barboach",
            "baseStats": {
                "atk": 93,
                "def": 82,
                "hp": 137
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "MUD_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 411,
            "speciesName": "Bastiodon",
            "speciesId": "bastiodon",
            "baseStats": {
                "atk": 94,
                "def": 286,
                "hp": 155
            },
            "types": [
                "rock",
                "steel"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FLASH_CANNON",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    7,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 153,
            "speciesName": "Bayleef",
            "speciesId": "bayleef",
            "baseStats": {
                "atk": 122,
                "def": 155,
                "hp": 155
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 267,
            "speciesName": "Beautifly",
            "speciesId": "beautifly",
            "baseStats": {
                "atk": 189,
                "def": 98,
                "hp": 155
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "INFESTATION",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "BUG_BUZZ",
                "SILVER_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    35.5,
                    3,
                    12,
                    6
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 15,
            "speciesName": "Beedrill",
            "speciesId": "beedrill",
            "baseStats": {
                "atk": 169,
                "def": 130,
                "hp": 163
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "BUG_BITE",
                "INFESTATION",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "SLUDGE_BOMB",
                "X_SCISSOR"
            ],
            "legacyMoves": [
                "BUG_BITE"
            ],
            "defaultIVs": {
                "cp1500": [
                    33.5,
                    3,
                    11,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 374,
            "speciesName": "Beldum",
            "speciesId": "beldum",
            "baseStats": {
                "atk": 96,
                "def": 132,
                "hp": 120
            },
            "types": [
                "steel",
                "psychic"
            ],
            "fastMoves": [
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 182,
            "speciesName": "Bellossom",
            "speciesId": "bellossom",
            "baseStats": {
                "atk": 169,
                "def": 186,
                "hp": 181
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "LEAF_BLADE",
                "PETAL_BLIZZARD"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    5,
                    7,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 69,
            "speciesName": "Bellsprout",
            "speciesId": "bellsprout",
            "baseStats": {
                "atk": 139,
                "def": 61,
                "hp": 137
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SLUDGE_BOMB",
                "WRAP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 400,
            "speciesName": "Bibarel",
            "speciesId": "bibarel",
            "baseStats": {
                "atk": 162,
                "def": 119,
                "hp": 188
            },
            "types": [
                "normal",
                "water"
            ],
            "fastMoves": [
                "TAKE_DOWN",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "HYPER_FANG",
                "SURF"
            ],
            "defaultIVs": {
                "cp1500": [
                    35,
                    1,
                    5,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 399,
            "speciesName": "Bidoof",
            "speciesId": "bidoof",
            "baseStats": {
                "atk": 80,
                "def": 73,
                "hp": 153
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "GRASS_KNOT",
                "HYPER_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 9,
            "speciesName": "Blastoise",
            "speciesId": "blastoise",
            "baseStats": {
                "atk": 171,
                "def": 207,
                "hp": 188
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HYDRO_CANNON",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "SKULL_BASH"
            ],
            "legacyMoves": [
                "HYDRO_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    3,
                    11,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 257,
            "speciesName": "Blaziken",
            "speciesId": "blaziken",
            "baseStats": {
                "atk": 240,
                "def": 141,
                "hp": 190
            },
            "types": [
                "fire",
                "fighting"
            ],
            "fastMoves": [
                "COUNTER",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FOCUS_BLAST",
                "OVERHEAT",
                "STONE_EDGE",
                "BLAST_BURN",
                "BLAZE_KICK"
            ],
            "legacyMoves": [
                "STONE_EDGE",
                "BLAST_BURN"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    6,
                    14,
                    6
                ],
                "cp2500": [
                    35.5,
                    4,
                    9,
                    13
                ]
            }
        },
        {
            "dex": 242,
            "speciesName": "Blissey",
            "speciesId": "blissey",
            "baseStats": {
                "atk": 129,
                "def": 169,
                "hp": 496
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    0,
                    7,
                    12
                ],
                "cp2500": [
                    38,
                    7,
                    14,
                    4
                ]
            }
        },
        {
            "dex": 438,
            "speciesName": "Bonsly",
            "speciesId": "bonsly",
            "baseStats": {
                "atk": 124,
                "def": 133,
                "hp": 137
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 286,
            "speciesName": "Breloom",
            "speciesId": "breloom",
            "baseStats": {
                "atk": 241,
                "def": 144,
                "hp": 155
            },
            "types": [
                "grass",
                "fighting"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "COUNTER"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "GRASS_KNOT",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    0,
                    15,
                    0
                ],
                "cp2500": [
                    40,
                    8,
                    6,
                    15
                ]
            }
        },
        {
            "dex": 437,
            "speciesName": "Bronzong",
            "speciesId": "bronzong",
            "baseStats": {
                "atk": 161,
                "def": 213,
                "hp": 167
            },
            "types": [
                "steel",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HEAVY_SLAM",
                "PSYCHIC",
                "BULLDOZE",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    1,
                    0,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 436,
            "speciesName": "Bronzor",
            "speciesId": "bronzor",
            "baseStats": {
                "atk": 43,
                "def": 154,
                "hp": 149
            },
            "types": [
                "steel",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "TACKLE"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "HEAVY_SLAM",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 406,
            "speciesName": "Budew",
            "speciesId": "budew",
            "baseStats": {
                "atk": 91,
                "def": 109,
                "hp": 120
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 418,
            "speciesName": "Buizel",
            "speciesId": "buizel",
            "baseStats": {
                "atk": 132,
                "def": 67,
                "hp": 146
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "SWIFT",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 1,
            "speciesName": "Bulbasaur",
            "speciesId": "bulbasaur",
            "baseStats": {
                "atk": 118,
                "def": 111,
                "hp": 128
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 427,
            "speciesName": "Buneary",
            "speciesId": "buneary",
            "baseStats": {
                "atk": 130,
                "def": 105,
                "hp": 146
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 412,
            "speciesName": "Burmy (Plant)",
            "speciesId": "burmy_plant",
            "baseStats": {
                "atk": 53,
                "def": 83,
                "hp": 120
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 412,
            "speciesName": "Burmy (Sandy)",
            "speciesId": "burmy_sandy",
            "baseStats": {
                "atk": 53,
                "def": 83,
                "hp": 120
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 412,
            "speciesName": "Burmy (Trash)",
            "speciesId": "burmy_trash",
            "baseStats": {
                "atk": 53,
                "def": 83,
                "hp": 120
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 12,
            "speciesName": "Butterfree",
            "speciesId": "butterfree",
            "baseStats": {
                "atk": 167,
                "def": 137,
                "hp": 155
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "PSYCHIC",
                "SIGNAL_BEAM"
            ],
            "legacyMoves": [
                "BUG_BITE"
            ],
            "defaultIVs": {
                "cp1500": [
                    36,
                    1,
                    5,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 331,
            "speciesName": "Cacnea",
            "speciesId": "cacnea",
            "baseStats": {
                "atk": 156,
                "def": 74,
                "hp": 137
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "POISON_STING",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "GRASS_KNOT",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 332,
            "speciesName": "Cacturne",
            "speciesId": "cacturne",
            "baseStats": {
                "atk": 221,
                "def": 115,
                "hp": 172
            },
            "types": [
                "grass",
                "dark"
            ],
            "fastMoves": [
                "POISON_JAB",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DYNAMIC_PUNCH",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    13,
                    10,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 323,
            "speciesName": "Camerupt",
            "speciesId": "camerupt",
            "baseStats": {
                "atk": 194,
                "def": 136,
                "hp": 172
            },
            "types": [
                "fire",
                "ground"
            ],
            "fastMoves": [
                "EMBER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "OVERHEAT",
                "SOLAR_BEAM",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    2,
                    6,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 455,
            "speciesName": "Carnivine",
            "speciesId": "carnivine",
            "baseStats": {
                "atk": 187,
                "def": 136,
                "hp": 179
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ENERGY_BALL",
                "POWER_WHIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    3,
                    10,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 318,
            "speciesName": "Carvanha",
            "speciesId": "carvanha",
            "baseStats": {
                "atk": 171,
                "def": 39,
                "hp": 128
            },
            "types": [
                "water",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "SNARL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CRUNCH",
                "POISON_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 268,
            "speciesName": "Cascoon",
            "speciesId": "cascoon",
            "baseStats": {
                "atk": 60,
                "def": 77,
                "hp": 137
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 351,
            "speciesName": "Castform",
            "speciesId": "castform",
            "baseStats": {
                "atk": 139,
                "def": 139,
                "hp": 172
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "HEX",
                "TACKLE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "HURRICANE",
                "WEATHER_BALL_ROCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    1,
                    13,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 351,
            "speciesName": "Castform (Rainy)",
            "speciesId": "castform_rainy",
            "baseStats": {
                "atk": 139,
                "def": 139,
                "hp": 172
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "WEATHER_BALL_WATER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    1,
                    13,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 351,
            "speciesName": "Castform (Snowy)",
            "speciesId": "castform_snowy",
            "baseStats": {
                "atk": 139,
                "def": 139,
                "hp": 172
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "POWDER_SNOW",
                "TACKLE"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ICE_BEAM",
                "WEATHER_BALL_ICE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    1,
                    13,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 351,
            "speciesName": "Castform (Sunny)",
            "speciesId": "castform_sunny",
            "baseStats": {
                "atk": 139,
                "def": 139,
                "hp": 172
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "WEATHER_BALL_FIRE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    1,
                    13,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 10,
            "speciesName": "Caterpie",
            "speciesId": "caterpie",
            "baseStats": {
                "atk": 55,
                "def": 55,
                "hp": 128
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 251,
            "speciesName": "Celebi",
            "speciesId": "celebi",
            "baseStats": {
                "atk": 210,
                "def": 210,
                "hp": 225
            },
            "types": [
                "psychic",
                "grass"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    13,
                    11,
                    11
                ],
                "cp2500": [
                    27.5,
                    12,
                    14,
                    10
                ]
            }
        },
        {
            "dex": 113,
            "speciesName": "Chansey",
            "speciesId": "chansey",
            "baseStats": {
                "atk": 60,
                "def": 128,
                "hp": 487
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYBEAM",
                "PSYCHIC"
            ],
            "legacyMoves": [
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 6,
            "speciesName": "Charizard",
            "speciesId": "charizard",
            "baseStats": {
                "atk": 223,
                "def": 173,
                "hp": 186
            },
            "types": [
                "fire",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "EMBER",
                "FIRE_SPIN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "BLAST_BURN",
                "DRAGON_CLAW",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "OVERHEAT"
            ],
            "legacyMoves": [
                "BLAST_BURN",
                "EMBER",
                "FLAMETHROWER",
                "WING_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    4,
                    12,
                    14
                ],
                "cp2500": [
                    35.5,
                    4,
                    11,
                    7
                ]
            }
        },
        {
            "dex": 4,
            "speciesName": "Charmander",
            "speciesId": "charmander",
            "baseStats": {
                "atk": 116,
                "def": 93,
                "hp": 118
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 5,
            "speciesName": "Charmeleon",
            "speciesId": "charmeleon",
            "baseStats": {
                "atk": 158,
                "def": 126,
                "hp": 151
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "FIRE_FANG",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FLAME_BURST",
                "FLAMETHROWER"
            ],
            "legacyMoves": [
                "SCRATCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    35,
                    10,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 441,
            "speciesName": "Chatot",
            "speciesId": "chatot",
            "baseStats": {
                "atk": 183,
                "def": 91,
                "hp": 183
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "NIGHT_SHADE",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    36.5,
                    0,
                    10,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 421,
            "speciesName": "Cherrim (Overcast)",
            "speciesId": "cherrim_overcast",
            "baseStats": {
                "atk": 170,
                "def": 153,
                "hp": 172
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "POWER_WHIP"
            ],
            "legacyMoves": [
                "POWER_WHIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    4,
                    11,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 421,
            "speciesName": "Cherrim (Sunny)",
            "speciesId": "cherrim_sunny",
            "baseStats": {
                "atk": 170,
                "def": 153,
                "hp": 172
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "POWER_WHIP"
            ],
            "legacyMoves": [
                "POWER_WHIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    4,
                    11,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 420,
            "speciesName": "Cherubi",
            "speciesId": "cherubi",
            "baseStats": {
                "atk": 108,
                "def": 92,
                "hp": 128
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PETAL_BLIZZARD",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 152,
            "speciesName": "Chikorita",
            "speciesId": "chikorita",
            "baseStats": {
                "atk": 92,
                "def": 122,
                "hp": 128
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 390,
            "speciesName": "Chimchar",
            "speciesId": "chimchar",
            "baseStats": {
                "atk": 113,
                "def": 86,
                "hp": 127
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAME_WHEEL",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 358,
            "speciesName": "Chimecho",
            "speciesId": "chimecho",
            "baseStats": {
                "atk": 175,
                "def": 170,
                "hp": 181
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "PSYSHOCK",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    6,
                    10,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 170,
            "speciesName": "Chinchou",
            "speciesId": "chinchou",
            "baseStats": {
                "atk": 106,
                "def": 97,
                "hp": 181
            },
            "types": [
                "water",
                "electric"
            ],
            "fastMoves": [
                "BUBBLE",
                "SPARK"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "THUNDERBOLT",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 433,
            "speciesName": "Chingling",
            "speciesId": "chingling",
            "baseStats": {
                "atk": 114,
                "def": 94,
                "hp": 128
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "SHADOW_BALL",
                "WRAP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 366,
            "speciesName": "Clamperl",
            "speciesId": "clamperl",
            "baseStats": {
                "atk": 133,
                "def": 135,
                "hp": 111
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ICE_BEAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 344,
            "speciesName": "Claydol",
            "speciesId": "claydol",
            "baseStats": {
                "atk": 140,
                "def": 229,
                "hp": 155
            },
            "types": [
                "ground",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "GYRO_BALL",
                "PSYCHIC",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    3,
                    14,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 36,
            "speciesName": "Clefable",
            "speciesId": "clefable",
            "baseStats": {
                "atk": 178,
                "def": 162,
                "hp": 216
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "POUND",
                "ZEN_HEADBUTT",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "METEOR_MASH",
                "MOONBLAST",
                "PSYCHIC"
            ],
            "legacyMoves": [
                "POUND"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    5,
                    10,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 35,
            "speciesName": "Clefairy",
            "speciesId": "clefairy",
            "baseStats": {
                "atk": 107,
                "def": 108,
                "hp": 172
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISARMING_VOICE",
                "MOONBLAST"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 173,
            "speciesName": "Cleffa",
            "speciesId": "cleffa",
            "baseStats": {
                "atk": 75,
                "def": 79,
                "hp": 137
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "GRASS_KNOT",
                "PSYCHIC",
                "PSYSHOCK",
                "SIGNAL_BEAM"
            ],
            "legacyMoves": [
                "BODY_SLAM",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 91,
            "speciesName": "Cloyster",
            "speciesId": "cloyster",
            "baseStats": {
                "atk": 186,
                "def": 256,
                "hp": 137
            },
            "types": [
                "water",
                "ice"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "AVALANCHE",
                "BLIZZARD",
                "HYDRO_PUMP",
                "ICY_WIND"
            ],
            "legacyMoves": [
                "BLIZZARD",
                "ICY_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    4,
                    7,
                    9
                ],
                "cp2500": [
                    40,
                    5,
                    15,
                    13
                ]
            }
        },
        {
            "dex": 415,
            "speciesName": "Combee",
            "speciesId": "combee",
            "baseStats": {
                "atk": 59,
                "def": 83,
                "hp": 102
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "BUG_BITE"
            ],
            "chargedMoves": [
                "BUG_BUZZ"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 256,
            "speciesName": "Combusken",
            "speciesId": "combusken",
            "baseStats": {
                "atk": 163,
                "def": 115,
                "hp": 155
            },
            "types": [
                "fire",
                "fighting"
            ],
            "fastMoves": [
                "EMBER",
                "PECK"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    39.5,
                    5,
                    10,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 341,
            "speciesName": "Corphish",
            "speciesId": "corphish",
            "baseStats": {
                "atk": 141,
                "def": 99,
                "hp": 125
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "BUBBLE_BEAM",
                "VICE_GRIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 222,
            "speciesName": "Corsola",
            "speciesId": "corsola",
            "baseStats": {
                "atk": 118,
                "def": 156,
                "hp": 146
            },
            "types": [
                "water",
                "rock"
            ],
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "POWER_GEM",
                "ROCK_BLAST"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 346,
            "speciesName": "Cradily",
            "speciesId": "cradily",
            "baseStats": {
                "atk": 152,
                "def": 194,
                "hp": 200
            },
            "types": [
                "rock",
                "grass"
            ],
            "fastMoves": [
                "ACID",
                "INFESTATION"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "GRASS_KNOT",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    0,
                    0,
                    1
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 408,
            "speciesName": "Cranidos",
            "speciesId": "cranidos",
            "baseStats": {
                "atk": 218,
                "def": 71,
                "hp": 167
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "TAKE_DOWN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "BULLDOZE",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    33,
                    4,
                    13,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 342,
            "speciesName": "Crawdaunt",
            "speciesId": "crawdaunt",
            "baseStats": {
                "atk": 224,
                "def": 142,
                "hp": 160
            },
            "types": [
                "water",
                "dark"
            ],
            "fastMoves": [
                "SNARL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "NIGHT_SLASH",
                "VICE_GRIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    0,
                    13,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 488,
            "speciesName": "Cresselia",
            "speciesId": "cresselia",
            "baseStats": {
                "atk": 152,
                "def": 258,
                "hp": 260
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "FUTURE_SIGHT",
                "MOONBLAST"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    2,
                    3,
                    8
                ],
                "cp2500": [
                    38,
                    2,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 453,
            "speciesName": "Croagunk",
            "speciesId": "croagunk",
            "baseStats": {
                "atk": 116,
                "def": 76,
                "hp": 134
            },
            "types": [
                "poison",
                "fighting"
            ],
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 169,
            "speciesName": "Crobat",
            "speciesId": "crobat",
            "baseStats": {
                "atk": 194,
                "def": 178,
                "hp": 198
            },
            "types": [
                "poison",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "BITE"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "SHADOW_BALL",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    6,
                    2,
                    14
                ],
                "cp2500": [
                    40,
                    9,
                    15,
                    3
                ]
            }
        },
        {
            "dex": 159,
            "speciesName": "Croconaw",
            "speciesId": "croconaw",
            "baseStats": {
                "atk": 150,
                "def": 142,
                "hp": 163
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "SCRATCH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ICE_PUNCH",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    38,
                    3,
                    11,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 104,
            "speciesName": "Cubone",
            "speciesId": "cubone",
            "baseStats": {
                "atk": 90,
                "def": 144,
                "hp": 137
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "BULLDOZE",
                "DIG"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 155,
            "speciesName": "Cyndaquil",
            "speciesId": "cyndaquil",
            "baseStats": {
                "atk": 116,
                "def": 93,
                "hp": 118
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 491,
            "speciesName": "Darkrai",
            "speciesId": "darkrai",
            "baseStats": {
                "atk": 285,
                "def": 198,
                "hp": 172
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOCUS_BLAST",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    2,
                    14,
                    14
                ],
                "cp2500": [
                    24,
                    9,
                    12,
                    13
                ]
            }
        },
        {
            "dex": 301,
            "speciesName": "Delcatty",
            "speciesId": "delcatty",
            "baseStats": {
                "atk": 132,
                "def": 127,
                "hp": 172
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "CHARM",
                "FEINT_ATTACK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PLAY_ROUGH",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 225,
            "speciesName": "Delibird",
            "speciesId": "delibird",
            "baseStats": {
                "atk": 128,
                "def": 90,
                "hp": 128
            },
            "types": [
                "ice",
                "flying"
            ],
            "fastMoves": [
                "ICE_SHARD",
                "PRESENT",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_PUNCH",
                "ICY_WIND"
            ],
            "legacyMoves": [
                "ICE_SHARD",
                "QUICK_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 386,
            "speciesName": "Deoxys",
            "speciesId": "deoxys",
            "baseStats": {
                "atk": 345,
                "def": 115,
                "hp": 137
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "PSYCHO_BOOST",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    17,
                    10,
                    13,
                    13
                ],
                "cp2500": [
                    28,
                    13,
                    15,
                    12
                ]
            }
        },
        {
            "dex": 386,
            "speciesName": "Deoxys (Attack)",
            "speciesId": "deoxys_attack",
            "baseStats": {
                "atk": 414,
                "def": 46,
                "hp": 137
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "POISON_JAB",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "PSYCHO_BOOST",
                "ZAP_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    11,
                    13,
                    13
                ],
                "cp2500": [
                    38,
                    14,
                    15,
                    14
                ]
            }
        },
        {
            "dex": 386,
            "speciesName": "Deoxys (Defense)",
            "speciesId": "deoxys_defense",
            "baseStats": {
                "atk": 144,
                "def": 330,
                "hp": 137
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHO_BOOST",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    13,
                    14,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 386,
            "speciesName": "Deoxys (Speed)",
            "speciesId": "deoxys_speed",
            "baseStats": {
                "atk": 230,
                "def": 218,
                "hp": 137
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHO_BOOST",
                "SWIFT",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    12,
                    14,
                    14
                ],
                "cp2500": [
                    31,
                    15,
                    13,
                    15
                ]
            }
        },
        {
            "dex": 87,
            "speciesName": "Dewgong",
            "speciesId": "dewgong",
            "baseStats": {
                "atk": 139,
                "def": 177,
                "hp": 207
            },
            "types": [
                "water",
                "ice"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AURORA_BEAM",
                "BLIZZARD",
                "ICY_WIND",
                "WATER_PULSE"
            ],
            "legacyMoves": [
                "AQUA_JET",
                "ICE_SHARD",
                "ICY_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    31,
                    0,
                    4,
                    8
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 483,
            "speciesName": "Dialga",
            "speciesId": "dialga",
            "baseStats": {
                "atk": 275,
                "def": 211,
                "hp": 205
            },
            "types": [
                "steel",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "IRON_HEAD",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    14,
                    2,
                    2,
                    13
                ],
                "cp2500": [
                    24,
                    0,
                    1,
                    7
                ]
            }
        },
        {
            "dex": 50,
            "speciesName": "Diglett",
            "speciesId": "diglett",
            "baseStats": {
                "atk": 109,
                "def": 78,
                "hp": 67
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DIG",
                "MUD_BOMB",
                "ROCK_TOMB"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 50,
            "speciesName": "Diglett (Alolan)",
            "speciesId": "diglett_alolan",
            "baseStats": {
                "atk": 108,
                "def": 81,
                "hp": 67
            },
            "types": [
                "ground",
                "steel"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "DIG",
                "MUD_BOMB",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 132,
            "speciesName": "Ditto",
            "speciesId": "ditto",
            "baseStats": {
                "atk": 91,
                "def": 91,
                "hp": 134
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "TRANSFORM"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 85,
            "speciesName": "Dodrio",
            "speciesId": "dodrio",
            "baseStats": {
                "atk": 218,
                "def": 140,
                "hp": 155
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "BRAVE_BIRD",
                "DRILL_PECK"
            ],
            "legacyMoves": [
                "AIR_CUTTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    1,
                    10,
                    1
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 84,
            "speciesName": "Doduo",
            "speciesId": "doduo",
            "baseStats": {
                "atk": 158,
                "def": 83,
                "hp": 111
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "DRILL_PECK",
                "SWIFT"
            ],
            "legacyMoves": [
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 232,
            "speciesName": "Donphan",
            "speciesId": "donphan",
            "baseStats": {
                "atk": 214,
                "def": 185,
                "hp": 207
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "MUD_SLAP",
                "TACKLE",
                "CHARM"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    6,
                    10,
                    9
                ],
                "cp2500": [
                    34.5,
                    1,
                    9,
                    3
                ]
            }
        },
        {
            "dex": 148,
            "speciesName": "Dragonair",
            "speciesId": "dragonair",
            "baseStats": {
                "atk": 163,
                "def": 135,
                "hp": 156
            },
            "types": [
                "dragon",
                "none"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "DRAGON_PULSE",
                "WRAP"
            ],
            "defaultIVs": {
                "cp1500": [
                    37,
                    0,
                    5,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 149,
            "speciesName": "Dragonite",
            "speciesId": "dragonite",
            "baseStats": {
                "atk": 263,
                "def": 198,
                "hp": 209
            },
            "types": [
                "dragon",
                "flying"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "DRAGON_TAIL",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "DRAGON_CLAW",
                "DRAGON_PULSE",
                "HURRICANE",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "legacyMoves": [
                "DRACO_METEOR",
                "DRAGON_BREATH",
                "DRAGON_CLAW",
                "DRAGON_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    9,
                    12,
                    6
                ],
                "cp2500": [
                    24,
                    7,
                    10,
                    13
                ]
            }
        },
        {
            "dex": 452,
            "speciesName": "Drapion",
            "speciesId": "drapion",
            "baseStats": {
                "atk": 180,
                "def": 202,
                "hp": 172
            },
            "types": [
                "poison",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "INFESTATION",
                "POISON_STING"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CRUNCH",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    0,
                    11,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 147,
            "speciesName": "Dratini",
            "speciesId": "dratini",
            "baseStats": {
                "atk": 119,
                "def": 91,
                "hp": 121
            },
            "types": [
                "dragon",
                "none"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "TWISTER",
                "WRAP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 426,
            "speciesName": "Drifblim",
            "speciesId": "drifblim",
            "baseStats": {
                "atk": 180,
                "def": 102,
                "hp": 312
            },
            "types": [
                "ghost",
                "flying"
            ],
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "OMINOUS_WIND",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    0,
                    12,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 425,
            "speciesName": "Drifloon",
            "speciesId": "drifloon",
            "baseStats": {
                "atk": 117,
                "def": 80,
                "hp": 207
            },
            "types": [
                "ghost",
                "flying"
            ],
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "OMINOUS_WIND",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 96,
            "speciesName": "Drowzee",
            "speciesId": "drowzee",
            "baseStats": {
                "atk": 89,
                "def": 136,
                "hp": 155
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "POUND"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 51,
            "speciesName": "Dugtrio",
            "speciesId": "dugtrio",
            "baseStats": {
                "atk": 167,
                "def": 136,
                "hp": 111
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MUD_BOMB",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    39,
                    15,
                    10,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 51,
            "speciesName": "Dugtrio (Alolan)",
            "speciesId": "dugtrio_alolan",
            "baseStats": {
                "atk": 201,
                "def": 142,
                "hp": 111
            },
            "types": [
                "ground",
                "steel"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "IRON_HEAD",
                "MUD_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    31.5,
                    1,
                    15,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 206,
            "speciesName": "Dunsparce",
            "speciesId": "dunsparce",
            "baseStats": {
                "atk": 131,
                "def": 128,
                "hp": 225
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "DIG",
                "DRILL_RUN",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    39,
                    4,
                    8,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 356,
            "speciesName": "Dusclops",
            "speciesId": "dusclops",
            "baseStats": {
                "atk": 124,
                "def": 234,
                "hp": 120
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "HEX"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "SHADOW_PUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    5,
                    12,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 477,
            "speciesName": "Dusknoir",
            "speciesId": "dusknoir",
            "baseStats": {
                "atk": 180,
                "def": 254,
                "hp": 128
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    5,
                    7,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 355,
            "speciesName": "Duskull",
            "speciesId": "duskull",
            "baseStats": {
                "atk": 70,
                "def": 162,
                "hp": 85
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 269,
            "speciesName": "Dustox",
            "speciesId": "dustox",
            "baseStats": {
                "atk": 98,
                "def": 162,
                "hp": 155
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "CONFUSION",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "SILVER_WIND",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 133,
            "speciesName": "Eevee",
            "speciesId": "eevee",
            "baseStats": {
                "atk": 104,
                "def": 114,
                "hp": 146
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "LAST_RESORT",
                "SWIFT"
            ],
            "legacyMoves": [
                "BODY_SLAM",
                "LAST_RESORT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 23,
            "speciesName": "Ekans",
            "speciesId": "ekans",
            "baseStats": {
                "atk": 110,
                "def": 97,
                "hp": 111
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "POISON_STING"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "POISON_FANG",
                "SLUDGE_BOMB",
                "WRAP"
            ],
            "legacyMoves": [
                "GUNK_SHOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 125,
            "speciesName": "Electabuzz",
            "speciesId": "electabuzz",
            "baseStats": {
                "atk": 198,
                "def": 158,
                "hp": 163
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "LOW_KICK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    3,
                    2,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 466,
            "speciesName": "Electivire",
            "speciesId": "electivire",
            "baseStats": {
                "atk": 249,
                "def": 163,
                "hp": 181
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "LOW_KICK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDER_PUNCH",
                "WILD_CHARGE",
                "ICE_PUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    6,
                    15,
                    6
                ],
                "cp2500": [
                    29.5,
                    10,
                    15,
                    8
                ]
            }
        },
        {
            "dex": 309,
            "speciesName": "Electrike",
            "speciesId": "electrike",
            "baseStats": {
                "atk": 123,
                "def": 78,
                "hp": 120
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 101,
            "speciesName": "Electrode",
            "speciesId": "electrode",
            "baseStats": {
                "atk": 173,
                "def": 173,
                "hp": 155
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "SPARK",
                "TACKLE",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "HYPER_BEAM",
                "THUNDERBOLT",
                "FOUL_PLAY"
            ],
            "legacyMoves": [
                "TACKLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    2,
                    9,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 239,
            "speciesName": "Elekid",
            "speciesId": "elekid",
            "baseStats": {
                "atk": 135,
                "def": 101,
                "hp": 128
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "LOW_KICK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DISCHARGE",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 395,
            "speciesName": "Empoleon",
            "speciesId": "empoleon",
            "baseStats": {
                "atk": 210,
                "def": 186,
                "hp": 197
            },
            "types": [
                "water",
                "steel"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FLASH_CANNON",
                "HYDRO_PUMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    8,
                    7,
                    15
                ],
                "cp2500": [
                    34.5,
                    4,
                    15,
                    6
                ]
            }
        },
        {
            "dex": 244,
            "speciesName": "Entei",
            "speciesId": "entei",
            "baseStats": {
                "atk": 235,
                "def": 171,
                "hp": 251
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "FIRE_FANG",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAMETHROWER",
                "IRON_HEAD",
                "OVERHEAT"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    4,
                    9,
                    0
                ],
                "cp2500": [
                    27,
                    5,
                    9,
                    7
                ]
            }
        },
        {
            "dex": 196,
            "speciesName": "Espeon",
            "speciesId": "espeon",
            "baseStats": {
                "atk": 261,
                "def": 175,
                "hp": 163
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "LAST_RESORT",
                "PSYBEAM",
                "PSYCHIC"
            ],
            "legacyMoves": [
                "LAST_RESORT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    6,
                    9,
                    3
                ],
                "cp2500": [
                    30.5,
                    0,
                    15,
                    1
                ]
            }
        },
        {
            "dex": 102,
            "speciesName": "Exeggcute",
            "speciesId": "exeggcute",
            "baseStats": {
                "atk": 107,
                "def": 125,
                "hp": 155
            },
            "types": [
                "grass",
                "psychic"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "CONFUSION"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "PSYCHIC",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 103,
            "speciesName": "Exeggutor",
            "speciesId": "exeggutor",
            "baseStats": {
                "atk": 233,
                "def": 149,
                "hp": 216
            },
            "types": [
                "grass",
                "psychic"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "CONFUSION",
                "EXTRASENSORY",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "SEED_BOMB",
                "SOLAR_BEAM"
            ],
            "legacyMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    5,
                    15,
                    12
                ],
                "cp2500": [
                    33,
                    1,
                    10,
                    9
                ]
            }
        },
        {
            "dex": 103,
            "speciesName": "Exeggutor (Alolan)",
            "speciesId": "exeggutor_alolan",
            "baseStats": {
                "atk": 230,
                "def": 153,
                "hp": 216
            },
            "types": [
                "grass",
                "dragon"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "SEED_BOMB",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    0,
                    2,
                    9
                ],
                "cp2500": [
                    30.5,
                    5,
                    13,
                    15
                ]
            }
        },
        {
            "dex": 295,
            "speciesName": "Exploud",
            "speciesId": "exploud",
            "baseStats": {
                "atk": 179,
                "def": 137,
                "hp": 232
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DISARMING_VOICE",
                "FIRE_BLAST"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    1,
                    14,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 83,
            "speciesName": "Farfetch'd",
            "speciesId": "farfetchd",
            "baseStats": {
                "atk": 124,
                "def": 115,
                "hp": 141
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "CUT",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "LEAF_BLADE"
            ],
            "legacyMoves": [
                "CUT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 22,
            "speciesName": "Fearow",
            "speciesId": "fearow",
            "baseStats": {
                "atk": 182,
                "def": 133,
                "hp": 163
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DRILL_RUN",
                "SKY_ATTACK",
                "TWISTER"
            ],
            "legacyMoves": [
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    31,
                    0,
                    4,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 349,
            "speciesName": "Feebas",
            "speciesId": "feebas",
            "baseStats": {
                "atk": 29,
                "def": 85,
                "hp": 85
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "SPLASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 160,
            "speciesName": "Feraligatr",
            "speciesId": "feraligatr",
            "baseStats": {
                "atk": 205,
                "def": 188,
                "hp": 198
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYDRO_CANNON",
                "HYDRO_PUMP",
                "ICE_BEAM"
            ],
            "legacyMoves": [
                "HYDRO_CANNON",
                "WATER_GUN"
            ],
            "defaultIVs": {
                "cp1500": [
                    20,
                    2,
                    5,
                    12
                ],
                "cp2500": [
                    37.5,
                    2,
                    5,
                    10
                ]
            }
        },
        {
            "dex": 456,
            "speciesName": "Finneon",
            "speciesId": "finneon",
            "baseStats": {
                "atk": 96,
                "def": 116,
                "hp": 135
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "SILVER_WIND",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 180,
            "speciesName": "Flaaffy",
            "speciesId": "flaaffy",
            "baseStats": {
                "atk": 145,
                "def": 109,
                "hp": 172
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "POWER_GEM",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    12,
                    8,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 136,
            "speciesName": "Flareon",
            "speciesId": "flareon",
            "baseStats": {
                "atk": 246,
                "def": 179,
                "hp": 163
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAMETHROWER",
                "HEAT_WAVE",
                "LAST_RESORT",
                "OVERHEAT"
            ],
            "legacyMoves": [
                "HEAT_WAVE",
                "LAST_RESORT"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    1,
                    12,
                    2
                ],
                "cp2500": [
                    32.5,
                    2,
                    8,
                    11
                ]
            }
        },
        {
            "dex": 419,
            "speciesName": "Floatzel",
            "speciesId": "floatzel",
            "baseStats": {
                "atk": 221,
                "def": 114,
                "hp": 198
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "HYDRO_PUMP",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    8,
                    15,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 330,
            "speciesName": "Flygon",
            "speciesId": "flygon",
            "baseStats": {
                "atk": 205,
                "def": 168,
                "hp": 190
            },
            "types": [
                "ground",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "EARTHQUAKE",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    5,
                    14,
                    14
                ],
                "cp2500": [
                    37,
                    10,
                    15,
                    14
                ]
            }
        },
        {
            "dex": 205,
            "speciesName": "Forretress",
            "speciesId": "forretress",
            "baseStats": {
                "atk": 161,
                "def": 205,
                "hp": 181
            },
            "types": [
                "bug",
                "steel"
            ],
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    2,
                    11,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 478,
            "speciesName": "Froslass",
            "speciesId": "froslass",
            "baseStats": {
                "atk": 171,
                "def": 150,
                "hp": 172
            },
            "types": [
                "ice",
                "ghost"
            ],
            "fastMoves": [
                "HEX",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "CRUNCH",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    29.5,
                    1,
                    0,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 162,
            "speciesName": "Furret",
            "speciesId": "furret",
            "baseStats": {
                "atk": 148,
                "def": 125,
                "hp": 198
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DIG",
                "HYPER_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    39.5,
                    0,
                    10,
                    0
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 444,
            "speciesName": "Gabite",
            "speciesId": "gabite",
            "baseStats": {
                "atk": 172,
                "def": 125,
                "hp": 169
            },
            "types": [
                "dragon",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DIG",
                "FLAMETHROWER",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    2,
                    6,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 475,
            "speciesName": "Gallade",
            "speciesId": "gallade",
            "baseStats": {
                "atk": 237,
                "def": 195,
                "hp": 169
            },
            "types": [
                "psychic",
                "fighting"
            ],
            "fastMoves": [
                "CONFUSION",
                "LOW_KICK",
                "CHARM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "LEAF_BLADE",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    0,
                    15,
                    2
                ],
                "cp2500": [
                    32.5,
                    1,
                    3,
                    10
                ]
            }
        },
        {
            "dex": 445,
            "speciesName": "Garchomp",
            "speciesId": "garchomp",
            "baseStats": {
                "atk": 261,
                "def": 193,
                "hp": 239
            },
            "types": [
                "dragon",
                "ground"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    14,
                    0,
                    9,
                    15
                ],
                "cp2500": [
                    23,
                    8,
                    13,
                    9
                ]
            }
        },
        {
            "dex": 282,
            "speciesName": "Gardevoir",
            "speciesId": "gardevoir",
            "baseStats": {
                "atk": 237,
                "def": 195,
                "hp": 169
            },
            "types": [
                "psychic",
                "fairy"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    0,
                    15,
                    2
                ],
                "cp2500": [
                    32.5,
                    1,
                    3,
                    10
                ]
            }
        },
        {
            "dex": 92,
            "speciesName": "Gastly",
            "speciesId": "gastly",
            "baseStats": {
                "atk": 186,
                "def": 67,
                "hp": 102
            },
            "types": [
                "ghost",
                "poison"
            ],
            "fastMoves": [
                "ASTONISH",
                "LICK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "NIGHT_SHADE",
                "OMINOUS_WIND",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "OMINOUS_WIND",
                "SUCKER_PUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 423,
            "speciesName": "Gastrodon (East)",
            "speciesId": "gastrodon_east_sea",
            "baseStats": {
                "atk": 169,
                "def": 143,
                "hp": 244
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "WATER_PULSE",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    2,
                    14,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 423,
            "speciesName": "Gastrodon (West)",
            "speciesId": "gastrodon_west_sea",
            "baseStats": {
                "atk": 169,
                "def": 143,
                "hp": 244
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "WATER_PULSE",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    2,
                    14,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 94,
            "speciesName": "Gengar",
            "speciesId": "gengar",
            "baseStats": {
                "atk": 261,
                "def": 149,
                "hp": 155
            },
            "types": [
                "ghost",
                "poison"
            ],
            "fastMoves": [
                "HEX",
                "LICK",
                "SHADOW_CLAW",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOCUS_BLAST",
                "PSYCHIC",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "SLUDGE_WAVE"
            ],
            "legacyMoves": [
                "DARK_PULSE",
                "LICK",
                "PSYCHIC",
                "SHADOW_CLAW",
                "SLUDGE_WAVE"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    0,
                    5,
                    4
                ],
                "cp2500": [
                    36,
                    1,
                    14,
                    4
                ]
            }
        },
        {
            "dex": 74,
            "speciesName": "Geodude",
            "speciesId": "geodude",
            "baseStats": {
                "atk": 132,
                "def": 132,
                "hp": 120
            },
            "types": [
                "rock",
                "ground"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 74,
            "speciesName": "Geodude (Alolan)",
            "speciesId": "geodude_alolan",
            "baseStats": {
                "atk": 132,
                "def": 132,
                "hp": 120
            },
            "types": [
                "rock",
                "electric"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "ROCK_TOMB",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 443,
            "speciesName": "Gible",
            "speciesId": "gible",
            "baseStats": {
                "atk": 124,
                "def": 84,
                "hp": 151
            },
            "types": [
                "dragon",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 203,
            "speciesName": "Girafarig",
            "speciesId": "girafarig",
            "baseStats": {
                "atk": 182,
                "def": 133,
                "hp": 172
            },
            "types": [
                "normal",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "TACKLE"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYCHIC",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    0,
                    10,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 487,
            "speciesName": "Giratina (Altered)",
            "speciesId": "giratina_altered",
            "baseStats": {
                "atk": 187,
                "def": 225,
                "hp": 284
            },
            "types": [
                "ghost",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "DRAGON_CLAW",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    17,
                    3,
                    8,
                    4
                ],
                "cp2500": [
                    27,
                    8,
                    11,
                    15
                ]
            }
        },
        {
            "dex": 487,
            "speciesName": "Giratina (Origin)",
            "speciesId": "giratina_origin",
            "baseStats": {
                "atk": 225,
                "def": 187,
                "hp": 284
            },
            "types": [
                "ghost",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "DRAGON_PULSE",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    15,
                    3,
                    14,
                    8
                ],
                "cp2500": [
                    25,
                    4,
                    11,
                    13
                ]
            }
        },
        {
            "dex": 471,
            "speciesName": "Glaceon",
            "speciesId": "glaceon",
            "baseStats": {
                "atk": 238,
                "def": 205,
                "hp": 163
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "ICE_BEAM",
                "ICY_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    6,
                    13,
                    11
                ],
                "cp2500": [
                    30.5,
                    3,
                    5,
                    12
                ]
            }
        },
        {
            "dex": 362,
            "speciesName": "Glalie",
            "speciesId": "glalie",
            "baseStats": {
                "atk": 162,
                "def": 162,
                "hp": 190
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "GYRO_BALL",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    1,
                    7,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 431,
            "speciesName": "Glameow",
            "speciesId": "glameow",
            "baseStats": {
                "atk": 109,
                "def": 82,
                "hp": 135
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "PLAY_ROUGH",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 207,
            "speciesName": "Gligar",
            "speciesId": "gligar",
            "baseStats": {
                "atk": 143,
                "def": 184,
                "hp": 163
            },
            "types": [
                "ground",
                "flying"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DIG",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    4,
                    12,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 472,
            "speciesName": "Gliscor",
            "speciesId": "gliscor",
            "baseStats": {
                "atk": 185,
                "def": 222,
                "hp": 181
            },
            "types": [
                "ground",
                "flying"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "EARTHQUAKE",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    9,
                    12,
                    10
                ],
                "cp2500": [
                    40,
                    7,
                    8,
                    8
                ]
            }
        },
        {
            "dex": 44,
            "speciesName": "Gloom",
            "speciesId": "gloom",
            "baseStats": {
                "atk": 153,
                "def": 136,
                "hp": 155
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    35.5,
                    7,
                    14,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 42,
            "speciesName": "Golbat",
            "speciesId": "golbat",
            "baseStats": {
                "atk": 161,
                "def": 150,
                "hp": 181
            },
            "types": [
                "poison",
                "flying"
            ],
            "fastMoves": [
                "BITE",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "OMINOUS_WIND",
                "POISON_FANG",
                "SHADOW_BALL"
            ],
            "legacyMoves": [
                "OMINOUS_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    5,
                    14,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 118,
            "speciesName": "Goldeen",
            "speciesId": "goldeen",
            "baseStats": {
                "atk": 123,
                "def": 110,
                "hp": 128
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "PECK"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "HORN_ATTACK",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 55,
            "speciesName": "Golduck",
            "speciesId": "golduck",
            "baseStats": {
                "atk": 191,
                "def": 162,
                "hp": 190
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "ICE_BEAM",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    5,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 76,
            "speciesName": "Golem",
            "speciesId": "golem",
            "baseStats": {
                "atk": 211,
                "def": 198,
                "hp": 190
            },
            "types": [
                "rock",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "EARTHQUAKE",
                "ROCK_BLAST",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "ANCIENT_POWER",
                "MUD_SHOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    7,
                    13,
                    13
                ],
                "cp2500": [
                    35.5,
                    2,
                    14,
                    0
                ]
            }
        },
        {
            "dex": 76,
            "speciesName": "Golem (Alolan)",
            "speciesId": "golem_alolan",
            "baseStats": {
                "atk": 211,
                "def": 198,
                "hp": 190
            },
            "types": [
                "rock",
                "electric"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "STONE_EDGE",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    7,
                    13,
                    13
                ],
                "cp2500": [
                    35.5,
                    2,
                    14,
                    0
                ]
            }
        },
        {
            "dex": 368,
            "speciesName": "Gorebyss",
            "speciesId": "gorebyss",
            "baseStats": {
                "atk": 211,
                "def": 179,
                "hp": 146
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "DRAINING_KISS",
                "PSYCHIC",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    23,
                    2,
                    6,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 210,
            "speciesName": "Granbull",
            "speciesId": "granbull",
            "baseStats": {
                "atk": 212,
                "def": 131,
                "hp": 207
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "SNARL",
                "CHARM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "CRUNCH",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    0,
                    12,
                    13
                ],
                "cp2500": [
                    40,
                    3,
                    13,
                    15
                ]
            }
        },
        {
            "dex": 75,
            "speciesName": "Graveler",
            "speciesId": "graveler",
            "baseStats": {
                "atk": 164,
                "def": 164,
                "hp": 146
            },
            "types": [
                "rock",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_BLAST",
                "ROCK_SLIDE",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "MUD_SHOT",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    29.5,
                    5,
                    11,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 75,
            "speciesName": "Graveler (Alolan)",
            "speciesId": "graveler_alolan",
            "baseStats": {
                "atk": 164,
                "def": 164,
                "hp": 146
            },
            "types": [
                "rock",
                "electric"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "STONE_EDGE",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    29.5,
                    5,
                    11,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 88,
            "speciesName": "Grimer",
            "speciesId": "grimer",
            "baseStats": {
                "atk": 135,
                "def": 90,
                "hp": 190
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "MUD_SLAP",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "MUD_BOMB",
                "SLUDGE",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "ACID"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 88,
            "speciesName": "Grimer (Alolan)",
            "speciesId": "grimer_alolan",
            "baseStats": {
                "atk": 135,
                "def": 90,
                "hp": 190
            },
            "types": [
                "poison",
                "dark"
            ],
            "fastMoves": [
                "ACID",
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "GUNK_SHOT",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "ACID"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 388,
            "speciesName": "Grotle",
            "speciesId": "grotle",
            "baseStats": {
                "atk": 157,
                "def": 143,
                "hp": 181
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    33.5,
                    1,
                    1,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 383,
            "speciesName": "Groudon",
            "speciesId": "groudon",
            "baseStats": {
                "atk": 270,
                "def": 228,
                "hp": 205
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    2,
                    10,
                    9
                ],
                "cp2500": [
                    23,
                    4,
                    7,
                    5
                ]
            }
        },
        {
            "dex": 253,
            "speciesName": "Grovyle",
            "speciesId": "grovyle",
            "baseStats": {
                "atk": 172,
                "def": 120,
                "hp": 137
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "GRASS_KNOT",
                "LEAF_BLADE"
            ],
            "defaultIVs": {
                "cp1500": [
                    38.5,
                    6,
                    10,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 58,
            "speciesName": "Growlithe",
            "speciesId": "growlithe",
            "baseStats": {
                "atk": 136,
                "def": 93,
                "hp": 146
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "FLAME_WHEEL",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 326,
            "speciesName": "Grumpig",
            "speciesId": "grumpig",
            "baseStats": {
                "atk": 171,
                "def": 188,
                "hp": 190
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    0,
                    12,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 316,
            "speciesName": "Gulpin",
            "speciesId": "gulpin",
            "baseStats": {
                "atk": 80,
                "def": 99,
                "hp": 172
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "ICE_BEAM",
                "SLUDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 130,
            "speciesName": "Gyarados",
            "speciesId": "gyarados",
            "baseStats": {
                "atk": 237,
                "def": 186,
                "hp": 216
            },
            "types": [
                "water",
                "flying"
            ],
            "fastMoves": [
                "BITE",
                "DRAGON_BREATH",
                "DRAGON_TAIL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DRAGON_PULSE",
                "HYDRO_PUMP",
                "OUTRAGE",
                "TWISTER"
            ],
            "legacyMoves": [
                "DRAGON_BREATH",
                "DRAGON_PULSE",
                "DRAGON_TAIL",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    5,
                    5,
                    14
                ],
                "cp2500": [
                    27.5,
                    6,
                    9,
                    9
                ]
            }
        },
        {
            "dex": 440,
            "speciesName": "Happiny",
            "speciesId": "happiny",
            "baseStats": {
                "atk": 25,
                "def": 77,
                "hp": 225
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 297,
            "speciesName": "Hariyama",
            "speciesId": "hariyama",
            "baseStats": {
                "atk": 209,
                "def": 114,
                "hp": 302
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "DYNAMIC_PUNCH",
                "HEAVY_SLAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    8,
                    12,
                    9
                ],
                "cp2500": [
                    35.5,
                    6,
                    12,
                    11
                ]
            }
        },
        {
            "dex": 93,
            "speciesName": "Haunter",
            "speciesId": "haunter",
            "baseStats": {
                "atk": 223,
                "def": 107,
                "hp": 128
            },
            "types": [
                "ghost",
                "poison"
            ],
            "fastMoves": [
                "ASTONISH",
                "LICK",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SHADOW_BALL",
                "SHADOW_PUNCH",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "LICK",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    30,
                    0,
                    9,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 485,
            "speciesName": "Heatran",
            "speciesId": "heatran",
            "baseStats": {
                "atk": 251,
                "def": 213,
                "hp": 209
            },
            "types": [
                "fire",
                "steel"
            ],
            "fastMoves": [
                "BUG_BITE",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "IRON_HEAD",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    4,
                    12,
                    15
                ],
                "cp2500": [
                    24.5,
                    2,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 214,
            "speciesName": "Heracross",
            "speciesId": "heracross",
            "baseStats": {
                "atk": 234,
                "def": 179,
                "hp": 190
            },
            "types": [
                "bug",
                "fighting"
            ],
            "fastMoves": [
                "COUNTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "EARTHQUAKE",
                "MEGAHORN"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    4,
                    10,
                    3
                ],
                "cp2500": [
                    31,
                    3,
                    3,
                    15
                ]
            }
        },
        {
            "dex": 449,
            "speciesName": "Hippopotas",
            "speciesId": "hippopotas",
            "baseStats": {
                "atk": 124,
                "def": 118,
                "hp": 169
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 450,
            "speciesName": "Hippowdon",
            "speciesId": "hippowdon",
            "baseStats": {
                "atk": 201,
                "def": 191,
                "hp": 239
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    6,
                    12,
                    9
                ],
                "cp2500": [
                    31.5,
                    3,
                    15,
                    2
                ]
            }
        },
        {
            "dex": 107,
            "speciesName": "Hitmonchan",
            "speciesId": "hitmonchan",
            "baseStats": {
                "atk": 193,
                "def": 197,
                "hp": 137
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "THUNDER_PUNCH",
                "POWER_UP_PUNCH"
            ],
            "legacyMoves": [
                "BRICK_BREAK",
                "ROCK_SMASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    3,
                    8,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 106,
            "speciesName": "Hitmonlee",
            "speciesId": "hitmonlee",
            "baseStats": {
                "atk": 224,
                "def": 181,
                "hp": 137
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "LOW_KICK",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "LOW_SWEEP",
                "STOMP",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "BRICK_BREAK",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    1,
                    14,
                    2
                ],
                "cp2500": [
                    40,
                    13,
                    3,
                    15
                ]
            }
        },
        {
            "dex": 237,
            "speciesName": "Hitmontop",
            "speciesId": "hitmontop",
            "baseStats": {
                "atk": 173,
                "def": 207,
                "hp": 137
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "GYRO_BALL",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    4,
                    15,
                    6
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 250,
            "speciesName": "Ho-Oh",
            "speciesId": "ho_oh",
            "baseStats": {
                "atk": 239,
                "def": 244,
                "hp": 214
            },
            "types": [
                "fire",
                "flying"
            ],
            "fastMoves": [
                "EXTRASENSORY",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FIRE_BLAST",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    14,
                    5,
                    15,
                    14
                ],
                "cp2500": [
                    25,
                    1,
                    5,
                    4
                ]
            }
        },
        {
            "dex": 430,
            "speciesName": "Honchkrow",
            "speciesId": "honchkrow",
            "baseStats": {
                "atk": 243,
                "def": 103,
                "hp": 225
            },
            "types": [
                "dark",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "SNARL"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "DARK_PULSE",
                "PSYCHIC",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    20,
                    5,
                    14,
                    14
                ],
                "cp2500": [
                    38.5,
                    4,
                    15,
                    5
                ]
            }
        },
        {
            "dex": 163,
            "speciesName": "Hoothoot",
            "speciesId": "hoothoot",
            "baseStats": {
                "atk": 67,
                "def": 88,
                "hp": 155
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "PECK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "NIGHT_SHADE",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 187,
            "speciesName": "Hoppip",
            "speciesId": "hoppip",
            "baseStats": {
                "atk": 67,
                "def": 94,
                "hp": 111
            },
            "types": [
                "grass",
                "flying"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "GRASS_KNOT",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 116,
            "speciesName": "Horsea",
            "speciesId": "horsea",
            "baseStats": {
                "atk": 129,
                "def": 103,
                "hp": 102
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "DRAGON_PULSE",
                "FLASH_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 229,
            "speciesName": "Houndoom",
            "speciesId": "houndoom",
            "baseStats": {
                "atk": 224,
                "def": 144,
                "hp": 181
            },
            "types": [
                "dark",
                "fire"
            ],
            "fastMoves": [
                "FIRE_FANG",
                "SNARL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "FOUL_PLAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    11,
                    12,
                    14
                ],
                "cp2500": [
                    39.5,
                    11,
                    14,
                    5
                ]
            }
        },
        {
            "dex": 228,
            "speciesName": "Houndour",
            "speciesId": "houndour",
            "baseStats": {
                "atk": 152,
                "def": 83,
                "hp": 128
            },
            "types": [
                "dark",
                "fire"
            ],
            "fastMoves": [
                "EMBER",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DARK_PULSE",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 367,
            "speciesName": "Huntail",
            "speciesId": "huntail",
            "baseStats": {
                "atk": 197,
                "def": 179,
                "hp": 146
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CRUNCH",
                "ICE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    8,
                    8,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 97,
            "speciesName": "Hypno",
            "speciesId": "hypno",
            "baseStats": {
                "atk": 144,
                "def": 193,
                "hp": 198
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "FUTURE_SIGHT",
                "PSYCHIC",
                "PSYSHOCK",
                "SHADOW_BALL",
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "THUNDER_PUNCH"
            ],
            "legacyMoves": [
                "PSYSHOCK",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    4,
                    5,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 174,
            "speciesName": "Igglybuff",
            "speciesId": "igglybuff",
            "baseStats": {
                "atk": 69,
                "def": 32,
                "hp": 207
            },
            "types": [
                "normal",
                "fairy"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "WILD_CHARGE"
            ],
            "legacyMoves": [
                "BODY_SLAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 314,
            "speciesName": "Illumise",
            "speciesId": "illumise",
            "baseStats": {
                "atk": 143,
                "def": 166,
                "hp": 163
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "STRUGGLE_BUG",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "DAZZLING_GLEAM",
                "SILVER_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    36.5,
                    1,
                    8,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 392,
            "speciesName": "Infernape",
            "speciesId": "infernape",
            "baseStats": {
                "atk": 222,
                "def": 151,
                "hp": 183
            },
            "types": [
                "fire",
                "fighting"
            ],
            "fastMoves": [
                "FIRE_SPIN",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FLAMETHROWER",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    1,
                    5,
                    5
                ],
                "cp2500": [
                    37,
                    11,
                    14,
                    12
                ]
            }
        },
        {
            "dex": 2,
            "speciesName": "Ivysaur",
            "speciesId": "ivysaur",
            "baseStats": {
                "atk": 151,
                "def": 143,
                "hp": 155
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    36,
                    6,
                    13,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 39,
            "speciesName": "Jigglypuff",
            "speciesId": "jigglypuff",
            "baseStats": {
                "atk": 80,
                "def": 41,
                "hp": 251
            },
            "types": [
                "normal",
                "fairy"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DAZZLING_GLEAM",
                "DISARMING_VOICE",
                "GYRO_BALL",
                "PLAY_ROUGH"
            ],
            "legacyMoves": [
                "BODY_SLAM",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 385,
            "speciesName": "Jirachi",
            "speciesId": "jirachi",
            "baseStats": {
                "atk": 210,
                "def": 210,
                "hp": 225
            },
            "types": [
                "steel",
                "psychic"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "DOOM_DESIRE",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    13,
                    11,
                    11
                ],
                "cp2500": [
                    27.5,
                    12,
                    14,
                    10
                ]
            }
        },
        {
            "dex": 135,
            "speciesName": "Jolteon",
            "speciesId": "jolteon",
            "baseStats": {
                "atk": 232,
                "def": 182,
                "hp": 163
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "THUNDER_SHOCK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "LAST_RESORT",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "LAST_RESORT"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    0,
                    9,
                    13
                ],
                "cp2500": [
                    36.5,
                    1,
                    10,
                    7
                ]
            }
        },
        {
            "dex": 189,
            "speciesName": "Jumpluff",
            "speciesId": "jumpluff",
            "baseStats": {
                "atk": 118,
                "def": 183,
                "hp": 181
            },
            "types": [
                "grass",
                "flying"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "INFESTATION"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "ENERGY_BALL",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    38,
                    10,
                    12,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 124,
            "speciesName": "Jynx",
            "speciesId": "jynx",
            "baseStats": {
                "atk": 223,
                "def": 151,
                "hp": 163
            },
            "types": [
                "ice",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "FROST_BREATH",
                "POUND"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "DRAINING_KISS",
                "FOCUS_BLAST",
                "ICE_PUNCH",
                "PSYSHOCK"
            ],
            "legacyMoves": [
                "ICE_PUNCH",
                "POUND"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    0,
                    7,
                    0
                ],
                "cp2500": [
                    40,
                    1,
                    15,
                    14
                ]
            }
        },
        {
            "dex": 140,
            "speciesName": "Kabuto",
            "speciesId": "kabuto",
            "baseStats": {
                "atk": 148,
                "def": 140,
                "hp": 102
            },
            "types": [
                "rock",
                "water"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "SCRATCH"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "AQUA_JET",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 141,
            "speciesName": "Kabutops",
            "speciesId": "kabutops",
            "baseStats": {
                "atk": 220,
                "def": 186,
                "hp": 155
            },
            "types": [
                "rock",
                "water"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "MUD_SHOT",
                "ROCK_SMASH",
                "WATERFALL"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "STONE_EDGE",
                "WATER_PULSE"
            ],
            "legacyMoves": [
                "FURY_CUTTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    6,
                    8,
                    13
                ],
                "cp2500": [
                    39.5,
                    5,
                    3,
                    15
                ]
            }
        },
        {
            "dex": 64,
            "speciesName": "Kadabra",
            "speciesId": "kadabra",
            "baseStats": {
                "atk": 232,
                "def": 117,
                "hp": 120
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYBEAM",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    8,
                    15,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 14,
            "speciesName": "Kakuna",
            "speciesId": "kakuna",
            "baseStats": {
                "atk": 46,
                "def": 75,
                "hp": 128
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 115,
            "speciesName": "Kangaskhan",
            "speciesId": "kangaskhan",
            "baseStats": {
                "atk": 181,
                "def": 165,
                "hp": 233
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LOW_KICK",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CRUNCH",
                "EARTHQUAKE",
                "OUTRAGE",
                "STOMP",
                "POWER_UP_PUNCH"
            ],
            "legacyMoves": [
                "BRICK_BREAK",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    6,
                    14,
                    9
                ],
                "cp2500": [
                    40,
                    9,
                    10,
                    13
                ]
            }
        },
        {
            "dex": 352,
            "speciesName": "Kecleon",
            "speciesId": "kecleon",
            "baseStats": {
                "atk": 161,
                "def": 189,
                "hp": 155
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LICK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "FLAMETHROWER",
                "FOUL_PLAY",
                "ICE_BEAM",
                "SHADOW_SNEAK",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    5,
                    14,
                    6
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 230,
            "speciesName": "Kingdra",
            "speciesId": "kingdra",
            "baseStats": {
                "atk": 194,
                "def": 194,
                "hp": 181
            },
            "types": [
                "water",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "OUTRAGE"
            ],
            "legacyMoves": [
                "WATER_GUN"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    2,
                    15,
                    6
                ],
                "cp2500": [
                    38.5,
                    11,
                    10,
                    13
                ]
            }
        },
        {
            "dex": 99,
            "speciesName": "Kingler",
            "speciesId": "kingler",
            "baseStats": {
                "atk": 240,
                "def": 181,
                "hp": 146
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "METAL_CLAW",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "VICE_GRIP",
                "WATER_PULSE",
                "X_SCISSOR"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    11,
                    13,
                    12
                ],
                "cp2500": [
                    34.5,
                    6,
                    15,
                    12
                ]
            }
        },
        {
            "dex": 281,
            "speciesName": "Kirlia",
            "speciesId": "kirlia",
            "baseStats": {
                "atk": 117,
                "def": 90,
                "hp": 116
            },
            "types": [
                "psychic",
                "fairy"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PSYCHIC",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 109,
            "speciesName": "Koffing",
            "speciesId": "koffing",
            "baseStats": {
                "atk": 119,
                "def": 141,
                "hp": 120
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "TACKLE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SLUDGE",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "ACID"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 98,
            "speciesName": "Krabby",
            "speciesId": "krabby",
            "baseStats": {
                "atk": 181,
                "def": 124,
                "hp": 102
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "VICE_GRIP",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    6,
                    12,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 401,
            "speciesName": "Kricketot",
            "speciesId": "kricketot",
            "baseStats": {
                "atk": 45,
                "def": 74,
                "hp": 114
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 402,
            "speciesName": "Kricketune",
            "speciesId": "kricketune",
            "baseStats": {
                "atk": 160,
                "def": 100,
                "hp": 184
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "X_SCISSOR"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    0,
                    15,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 382,
            "speciesName": "Kyogre",
            "speciesId": "kyogre",
            "baseStats": {
                "atk": 270,
                "def": 228,
                "hp": 205
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    2,
                    10,
                    9
                ],
                "cp2500": [
                    23,
                    4,
                    7,
                    5
                ]
            }
        },
        {
            "dex": 305,
            "speciesName": "Lairon",
            "speciesId": "lairon",
            "baseStats": {
                "atk": 158,
                "def": 198,
                "hp": 155
            },
            "types": [
                "steel",
                "rock"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HEAVY_SLAM",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    1,
                    9,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 171,
            "speciesName": "Lanturn",
            "speciesId": "lanturn",
            "baseStats": {
                "atk": 146,
                "def": 137,
                "hp": 268
            },
            "types": [
                "water",
                "electric"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    0,
                    10,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 131,
            "speciesName": "Lapras",
            "speciesId": "lapras",
            "baseStats": {
                "atk": 165,
                "def": 174,
                "hp": 277
            },
            "types": [
                "water",
                "ice"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "DRAGON_PULSE",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "SURF",
                "SKULL_BASH"
            ],
            "legacyMoves": [
                "DRAGON_PULSE",
                "ICE_BEAM",
                "ICE_SHARD"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    4,
                    2,
                    13
                ],
                "cp2500": [
                    38.5,
                    12,
                    13,
                    7
                ]
            }
        },
        {
            "dex": 246,
            "speciesName": "Larvitar",
            "speciesId": "larvitar",
            "baseStats": {
                "atk": 115,
                "def": 93,
                "hp": 137
            },
            "types": [
                "rock",
                "ground"
            ],
            "fastMoves": [
                "BITE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "CRUNCH",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 380,
            "speciesName": "Latias",
            "speciesId": "latias",
            "baseStats": {
                "atk": 228,
                "def": 246,
                "hp": 190
            },
            "types": [
                "dragon",
                "psychic"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "ZEN_HEADBUTT",
                "CHARM"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "PSYCHIC",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    16,
                    6,
                    8,
                    7
                ],
                "cp2500": [
                    27.5,
                    2,
                    7,
                    3
                ]
            }
        },
        {
            "dex": 381,
            "speciesName": "Latios",
            "speciesId": "latios",
            "baseStats": {
                "atk": 268,
                "def": 212,
                "hp": 190
            },
            "types": [
                "dragon",
                "psychic"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "PSYCHIC",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    14,
                    11,
                    11,
                    15
                ],
                "cp2500": [
                    25,
                    3,
                    3,
                    8
                ]
            }
        },
        {
            "dex": 470,
            "speciesName": "Leafeon",
            "speciesId": "leafeon",
            "baseStats": {
                "atk": 216,
                "def": 219,
                "hp": 163
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "LEAF_BLADE",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    11,
                    15,
                    8
                ],
                "cp2500": [
                    35,
                    1,
                    11,
                    7
                ]
            }
        },
        {
            "dex": 166,
            "speciesName": "Ledian",
            "speciesId": "ledian",
            "baseStats": {
                "atk": 107,
                "def": 179,
                "hp": 146
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "SILVER_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 165,
            "speciesName": "Ledyba",
            "speciesId": "ledyba",
            "baseStats": {
                "atk": 72,
                "def": 118,
                "hp": 120
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "SILVER_WIND",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 463,
            "speciesName": "Lickilicky",
            "speciesId": "lickilicky",
            "baseStats": {
                "atk": 161,
                "def": 181,
                "hp": 242
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HYPER_BEAM",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    23,
                    5,
                    11,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 108,
            "speciesName": "Lickitung",
            "speciesId": "lickitung",
            "baseStats": {
                "atk": 108,
                "def": 137,
                "hp": 207
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "POWER_WHIP",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 345,
            "speciesName": "Lileep",
            "speciesId": "lileep",
            "baseStats": {
                "atk": 105,
                "def": 150,
                "hp": 165
            },
            "types": [
                "rock",
                "grass"
            ],
            "fastMoves": [
                "ACID",
                "INFESTATION"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "GRASS_KNOT",
                "MIRROR_COAT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 264,
            "speciesName": "Linoone",
            "speciesId": "linoone",
            "baseStats": {
                "atk": 142,
                "def": 128,
                "hp": 186
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "SHADOW_CLAW",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "GRASS_KNOT",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    5,
                    8,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 271,
            "speciesName": "Lombre",
            "speciesId": "lombre",
            "baseStats": {
                "atk": 112,
                "def": 119,
                "hp": 155
            },
            "types": [
                "water",
                "grass"
            ],
            "fastMoves": [
                "BUBBLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "GRASS_KNOT",
                "ICE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 428,
            "speciesName": "Lopunny",
            "speciesId": "lopunny",
            "baseStats": {
                "atk": 156,
                "def": 194,
                "hp": 163
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LOW_KICK",
                "POUND"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FOCUS_BLAST",
                "HYPER_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    3,
                    11,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 270,
            "speciesName": "Lotad",
            "speciesId": "lotad",
            "baseStats": {
                "atk": 71,
                "def": 77,
                "hp": 120
            },
            "types": [
                "water",
                "grass"
            ],
            "fastMoves": [
                "RAZOR_LEAF",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ENERGY_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 294,
            "speciesName": "Loudred",
            "speciesId": "loudred",
            "baseStats": {
                "atk": 134,
                "def": 81,
                "hp": 197
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DISARMING_VOICE",
                "FLAMETHROWER",
                "STOMP"
            ],
            "legacyMoves": [
                "CRUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 448,
            "speciesName": "Lucario",
            "speciesId": "lucario",
            "baseStats": {
                "atk": 236,
                "def": 144,
                "hp": 172
            },
            "types": [
                "fighting",
                "steel"
            ],
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FLASH_CANNON",
                "SHADOW_BALL",
                "POWER_UP_PUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    4,
                    11,
                    13
                ],
                "cp2500": [
                    39.5,
                    5,
                    9,
                    10
                ]
            }
        },
        {
            "dex": 272,
            "speciesName": "Ludicolo",
            "speciesId": "ludicolo",
            "baseStats": {
                "atk": 173,
                "def": 176,
                "hp": 190
            },
            "types": [
                "water",
                "grass"
            ],
            "fastMoves": [
                "BUBBLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    26,
                    0,
                    4,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 249,
            "speciesName": "Lugia",
            "speciesId": "lugia",
            "baseStats": {
                "atk": 193,
                "def": 310,
                "hp": 235
            },
            "types": [
                "psychic",
                "flying"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYDRO_PUMP",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    15.5,
                    0,
                    5,
                    10
                ],
                "cp2500": [
                    25.5,
                    2,
                    8,
                    11
                ]
            }
        },
        {
            "dex": 457,
            "speciesName": "Lumineon",
            "speciesId": "lumineon",
            "baseStats": {
                "atk": 142,
                "def": 170,
                "hp": 170
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "SILVER_WIND",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    34.5,
                    2,
                    5,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 337,
            "speciesName": "Lunatone",
            "speciesId": "lunatone",
            "baseStats": {
                "atk": 178,
                "def": 153,
                "hp": 207
            },
            "types": [
                "rock",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PSYCHIC",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    2,
                    11,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 370,
            "speciesName": "Luvdisc",
            "speciesId": "luvdisc",
            "baseStats": {
                "atk": 81,
                "def": 128,
                "hp": 125
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "SPLASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "DRAINING_KISS",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 404,
            "speciesName": "Luxio",
            "speciesId": "luxio",
            "baseStats": {
                "atk": 159,
                "def": 95,
                "hp": 155
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "SPARK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 405,
            "speciesName": "Luxray",
            "speciesId": "luxray",
            "baseStats": {
                "atk": 232,
                "def": 156,
                "hp": 190
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "SNARL",
                "SPARK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_BEAM",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    3,
                    13,
                    14
                ],
                "cp2500": [
                    36,
                    2,
                    11,
                    6
                ]
            }
        },
        {
            "dex": 68,
            "speciesName": "Machamp",
            "speciesId": "machamp",
            "baseStats": {
                "atk": 234,
                "def": 159,
                "hp": 207
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "CROSS_CHOP",
                "DYNAMIC_PUNCH",
                "HEAVY_SLAM",
                "ROCK_SLIDE",
                "STONE_EDGE",
                "SUBMISSION"
            ],
            "legacyMoves": [
                "CROSS_CHOP",
                "KARATE_CHOP",
                "STONE_EDGE",
                "SUBMISSION"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    4,
                    12,
                    13
                ],
                "cp2500": [
                    33.5,
                    0,
                    3,
                    11
                ]
            }
        },
        {
            "dex": 67,
            "speciesName": "Machoke",
            "speciesId": "machoke",
            "baseStats": {
                "atk": 177,
                "def": 125,
                "hp": 190
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "KARATE_CHOP",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "DYNAMIC_PUNCH",
                "SUBMISSION"
            ],
            "legacyMoves": [
                "CROSS_CHOP"
            ],
            "defaultIVs": {
                "cp1500": [
                    28.5,
                    3,
                    14,
                    2
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 66,
            "speciesName": "Machop",
            "speciesId": "machop",
            "baseStats": {
                "atk": 137,
                "def": 82,
                "hp": 172
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "KARATE_CHOP",
                "LOW_KICK",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP"
            ],
            "legacyMoves": [
                "LOW_KICK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 240,
            "speciesName": "Magby",
            "speciesId": "magby",
            "baseStats": {
                "atk": 151,
                "def": 99,
                "hp": 128
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "FIRE_PUNCH",
                "FLAME_BURST",
                "FLAMETHROWER"
            ],
            "legacyMoves": [
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 219,
            "speciesName": "Magcargo",
            "speciesId": "magcargo",
            "baseStats": {
                "atk": 139,
                "def": 191,
                "hp": 137
            },
            "types": [
                "fire",
                "rock"
            ],
            "fastMoves": [
                "EMBER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "OVERHEAT",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    39.5,
                    4,
                    12,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 129,
            "speciesName": "Magikarp",
            "speciesId": "magikarp",
            "baseStats": {
                "atk": 29,
                "def": 85,
                "hp": 85
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "SPLASH"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 126,
            "speciesName": "Magmar",
            "speciesId": "magmar",
            "baseStats": {
                "atk": 206,
                "def": 154,
                "hp": 163
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FIRE_PUNCH",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    0,
                    4,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 467,
            "speciesName": "Magmortar",
            "speciesId": "magmortar",
            "baseStats": {
                "atk": 247,
                "def": 172,
                "hp": 181
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "FIRE_SPIN",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "FIRE_BLAST",
                "FIRE_PUNCH",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    1,
                    14,
                    13
                ],
                "cp2500": [
                    31,
                    2,
                    6,
                    10
                ]
            }
        },
        {
            "dex": 81,
            "speciesName": "Magnemite",
            "speciesId": "magnemite",
            "baseStats": {
                "atk": 165,
                "def": 121,
                "hp": 93
            },
            "types": [
                "electric",
                "steel"
            ],
            "fastMoves": [
                "SPARK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "MAGNET_BOMB",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 82,
            "speciesName": "Magneton",
            "speciesId": "magneton",
            "baseStats": {
                "atk": 223,
                "def": 169,
                "hp": 137
            },
            "types": [
                "electric",
                "steel"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "FLASH_CANNON",
                "MAGNET_BOMB",
                "ZAP_CANNON"
            ],
            "legacyMoves": [
                "DISCHARGE",
                "THUNDER_SHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    2,
                    13,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 462,
            "speciesName": "Magnezone",
            "speciesId": "magnezone",
            "baseStats": {
                "atk": 238,
                "def": 205,
                "hp": 172
            },
            "types": [
                "electric",
                "steel"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "WILD_CHARGE",
                "ZAP_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    8,
                    14,
                    2
                ],
                "cp2500": [
                    29.5,
                    4,
                    10,
                    6
                ]
            }
        },
        {
            "dex": 296,
            "speciesName": "Makuhita",
            "speciesId": "makuhita",
            "baseStats": {
                "atk": 99,
                "def": 54,
                "hp": 176
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "HEAVY_SLAM",
                "LOW_SWEEP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 473,
            "speciesName": "Mamoswine",
            "speciesId": "mamoswine",
            "baseStats": {
                "atk": 247,
                "def": 146,
                "hp": 242
            },
            "types": [
                "ice",
                "ground"
            ],
            "fastMoves": [
                "MUD_SLAP",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE",
                "ANCIENT_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    8,
                    9,
                    13
                ],
                "cp2500": [
                    29,
                    0,
                    5,
                    9
                ]
            }
        },
        {
            "dex": 490,
            "speciesName": "Manaphy",
            "speciesId": "manaphy",
            "baseStats": {
                "atk": 210,
                "def": 210,
                "hp": 225
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "PSYCHIC",
                "SURF"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    0,
                    2,
                    15
                ],
                "cp2500": [
                    28.5,
                    0,
                    12,
                    14
                ]
            }
        },
        {
            "dex": 310,
            "speciesName": "Manectric",
            "speciesId": "manectric",
            "baseStats": {
                "atk": 215,
                "def": 127,
                "hp": 172
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "SNARL"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "THUNDER",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    2,
                    11,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 56,
            "speciesName": "Mankey",
            "speciesId": "mankey",
            "baseStats": {
                "atk": 148,
                "def": 82,
                "hp": 120
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "KARATE_CHOP",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 226,
            "speciesName": "Mantine",
            "speciesId": "mantine",
            "baseStats": {
                "atk": 148,
                "def": 226,
                "hp": 163
            },
            "types": [
                "water",
                "flying"
            ],
            "fastMoves": [
                "BUBBLE",
                "BULLET_SEED",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_BEAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    2,
                    11,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 458,
            "speciesName": "Mantyke",
            "speciesId": "mantyke",
            "baseStats": {
                "atk": 105,
                "def": 179,
                "hp": 128
            },
            "types": [
                "water",
                "flying"
            ],
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_BEAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 179,
            "speciesName": "Mareep",
            "speciesId": "mareep",
            "baseStats": {
                "atk": 114,
                "def": 79,
                "hp": 146
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISCHARGE",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 183,
            "speciesName": "Marill",
            "speciesId": "marill",
            "baseStats": {
                "atk": 37,
                "def": 93,
                "hp": 172
            },
            "types": [
                "water",
                "fairy"
            ],
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "BODY_SLAM",
                "BUBBLE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 105,
            "speciesName": "Marowak",
            "speciesId": "marowak",
            "baseStats": {
                "atk": 144,
                "def": 186,
                "hp": 155
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "DIG",
                "EARTHQUAKE"
            ],
            "defaultIVs": {
                "cp1500": [
                    36,
                    0,
                    4,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 105,
            "speciesName": "Marowak (Alolan)",
            "speciesId": "marowak_alolan",
            "baseStats": {
                "atk": 144,
                "def": 186,
                "hp": 155
            },
            "types": [
                "fire",
                "ghost"
            ],
            "fastMoves": [
                "HEX",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "FIRE_BLAST",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    36,
                    0,
                    4,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 259,
            "speciesName": "Marshtomp",
            "speciesId": "marshtomp",
            "baseStats": {
                "atk": 156,
                "def": 133,
                "hp": 172
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "MUD_BOMB",
                "SLUDGE",
                "SURF"
            ],
            "defaultIVs": {
                "cp1500": [
                    33,
                    5,
                    14,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 284,
            "speciesName": "Masquerain",
            "speciesId": "masquerain",
            "baseStats": {
                "atk": 192,
                "def": 150,
                "hp": 172
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "INFESTATION"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "OMINOUS_WIND",
                "SILVER_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    3,
                    14,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 303,
            "speciesName": "Mawile",
            "speciesId": "mawile",
            "baseStats": {
                "atk": 155,
                "def": 141,
                "hp": 137
            },
            "types": [
                "steel",
                "fairy"
            ],
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "PLAY_ROUGH",
                "VICE_GRIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    39.5,
                    7,
                    14,
                    6
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 308,
            "speciesName": "Medicham",
            "speciesId": "medicham",
            "baseStats": {
                "atk": 121,
                "def": 152,
                "hp": 155
            },
            "types": [
                "fighting",
                "psychic"
            ],
            "fastMoves": [
                "COUNTER",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "ICE_PUNCH",
                "PSYCHIC",
                "POWER_UP_PUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 307,
            "speciesName": "Meditite",
            "speciesId": "meditite",
            "baseStats": {
                "atk": 78,
                "def": 107,
                "hp": 102
            },
            "types": [
                "fighting",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ICE_PUNCH",
                "LOW_SWEEP",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 154,
            "speciesName": "Meganium",
            "speciesId": "meganium",
            "baseStats": {
                "atk": 168,
                "def": 202,
                "hp": 190
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FRENZY_PLANT",
                "PETAL_BLIZZARD",
                "SOLAR_BEAM"
            ],
            "legacyMoves": [
                "FRENZY_PLANT"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    0,
                    0,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 809,
            "speciesName": "Melmetal",
            "speciesId": "melmetal",
            "baseStats": {
                "atk": 226,
                "def": 190,
                "hp": 264
            },
            "types": [
                "steel",
                "none"
            ],
            "fastMoves": [
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HYPER_BEAM",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    15.5,
                    1,
                    13,
                    8
                ],
                "cp2500": [
                    25.5,
                    7,
                    11,
                    11
                ]
            }
        },
        {
            "dex": 808,
            "speciesName": "Meltan",
            "speciesId": "meltan",
            "baseStats": {
                "atk": 118,
                "def": 99,
                "hp": 130
            },
            "types": [
                "steel",
                "none"
            ],
            "fastMoves": [
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 52,
            "speciesName": "Meowth",
            "speciesId": "meowth",
            "baseStats": {
                "atk": 92,
                "def": 78,
                "hp": 120
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DARK_PULSE",
                "FOUL_PLAY",
                "NIGHT_SLASH"
            ],
            "legacyMoves": [
                "BODY_SLAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 52,
            "speciesName": "Meowth (Alolan)",
            "speciesId": "meowth_alolan",
            "baseStats": {
                "atk": 99,
                "def": 78,
                "hp": 120
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 481,
            "speciesName": "Mesprit",
            "speciesId": "mesprit",
            "baseStats": {
                "atk": 212,
                "def": 212,
                "hp": 190
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FUTURE_SIGHT",
                "SWIFT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    6,
                    2,
                    13
                ],
                "cp2500": [
                    31,
                    3,
                    9,
                    14
                ]
            }
        },
        {
            "dex": 376,
            "speciesName": "Metagross",
            "speciesId": "metagross",
            "baseStats": {
                "atk": 257,
                "def": 228,
                "hp": 190
            },
            "types": [
                "steel",
                "psychic"
            ],
            "fastMoves": [
                "BULLET_PUNCH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FLASH_CANNON",
                "METEOR_MASH",
                "PSYCHIC"
            ],
            "legacyMoves": [
                "METEOR_MASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    6,
                    7,
                    14
                ],
                "cp2500": [
                    23.5,
                    10,
                    15,
                    13
                ]
            }
        },
        {
            "dex": 375,
            "speciesName": "Metang",
            "speciesId": "metang",
            "baseStats": {
                "atk": 138,
                "def": 176,
                "hp": 155
            },
            "types": [
                "steel",
                "psychic"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "PSYCHIC",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    38,
                    3,
                    5,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 11,
            "speciesName": "Metapod",
            "speciesId": "metapod",
            "baseStats": {
                "atk": 45,
                "def": 80,
                "hp": 137
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 151,
            "speciesName": "Mew",
            "speciesId": "mew",
            "baseStats": {
                "atk": 210,
                "def": 210,
                "hp": 225
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "CUT",
                "DRAGON_TAIL",
                "FROST_BREATH",
                "INFESTATION",
                "POISON_JAB",
                "POUND",
                "ROCK_SMASH",
                "SHADOW_CLAW",
                "SNARL",
                "STEEL_WING",
                "STRUGGLE_BUG",
                "VOLT_SWITCH",
                "WATERFALL"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "BLIZZARD",
                "BULLDOZE",
                "DARK_PULSE",
                "DAZZLING_GLEAM",
                "DRAGON_CLAW",
                "ENERGY_BALL",
                "FLAME_CHARGE",
                "FLASH_CANNON",
                "FOCUS_BLAST",
                "GRASS_KNOT",
                "GYRO_BALL",
                "HYPER_BEAM",
                "ICE_BEAM",
                "LOW_SWEEP",
                "OVERHEAT",
                "PSYCHIC",
                "PSYSHOCK",
                "ROCK_SLIDE",
                "SOLAR_BEAM",
                "STONE_EDGE",
                "SURF",
                "THUNDER",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    13,
                    11,
                    11
                ],
                "cp2500": [
                    27.5,
                    12,
                    14,
                    10
                ]
            }
        },
        {
            "dex": 150,
            "speciesName": "Mewtwo",
            "speciesId": "mewtwo",
            "baseStats": {
                "atk": 300,
                "def": 182,
                "hp": 214
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "ICE_BEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "HYPER_BEAM",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    13.5,
                    3,
                    12,
                    0
                ],
                "cp2500": [
                    22,
                    5,
                    10,
                    10
                ]
            }
        },
        {
            "dex": 150,
            "speciesName": "Mewtwo (Armored)",
            "speciesId": "mewtwo_armored",
            "baseStats": {
                "atk": 182,
                "def": 278,
                "hp": 214
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "ROCK_SLIDE",
                "EARTHQUAKE",
                "FUTURE_SIGHT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    1,
                    11,
                    5
                ],
                "cp2500": [
                    30.5,
                    1,
                    11,
                    5
                ]
            }
        },
        {
            "dex": 262,
            "speciesName": "Mightyena",
            "speciesId": "mightyena",
            "baseStats": {
                "atk": 171,
                "def": 132,
                "hp": 172
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "PLAY_ROUGH",
                "POISON_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    31.5,
                    0,
                    9,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 350,
            "speciesName": "Milotic",
            "speciesId": "milotic",
            "baseStats": {
                "atk": 192,
                "def": 219,
                "hp": 216
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SURF"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    0,
                    14,
                    14
                ],
                "cp2500": [
                    32.5,
                    2,
                    10,
                    14
                ]
            }
        },
        {
            "dex": 241,
            "speciesName": "Miltank",
            "speciesId": "miltank",
            "baseStats": {
                "atk": 157,
                "def": 193,
                "hp": 216
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "GYRO_BALL",
                "ICE_BEAM",
                "STOMP",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    0,
                    9,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 439,
            "speciesName": "Mime (Jr)",
            "speciesId": "mime_jr",
            "baseStats": {
                "atk": 125,
                "def": 142,
                "hp": 85
            },
            "types": [
                "psychic",
                "fairy"
            ],
            "fastMoves": [
                "CONFUSION",
                "POUND"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 312,
            "speciesName": "Minun",
            "speciesId": "minun",
            "baseStats": {
                "atk": 147,
                "def": 150,
                "hp": 155
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    39,
                    4,
                    4,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 200,
            "speciesName": "Misdreavus",
            "speciesId": "misdreavus",
            "baseStats": {
                "atk": 167,
                "def": 154,
                "hp": 155
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    29.5,
                    2,
                    12,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 429,
            "speciesName": "Mismagius",
            "speciesId": "mismagius",
            "baseStats": {
                "atk": 211,
                "def": 187,
                "hp": 155
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "HEX",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DAZZLING_GLEAM",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    1,
                    7,
                    15
                ],
                "cp2500": [
                    40,
                    3,
                    13,
                    13
                ]
            }
        },
        {
            "dex": 146,
            "speciesName": "Moltres",
            "speciesId": "moltres",
            "baseStats": {
                "atk": 251,
                "def": 181,
                "hp": 207
            },
            "types": [
                "fire",
                "flying"
            ],
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "HEAT_WAVE",
                "OVERHEAT",
                "SKY_ATTACK",
                "ANCIENT_POWER"
            ],
            "legacyMoves": [
                "EMBER",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    16,
                    8,
                    12,
                    6
                ],
                "cp2500": [
                    26,
                    10,
                    15,
                    10
                ]
            }
        },
        {
            "dex": 391,
            "speciesName": "Monferno",
            "speciesId": "monferno",
            "baseStats": {
                "atk": 158,
                "def": 105,
                "hp": 162
            },
            "types": [
                "fire",
                "fighting"
            ],
            "fastMoves": [
                "EMBER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "FLAME_WHEEL",
                "FLAMETHROWER",
                "LOW_SWEEP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    3,
                    13,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 414,
            "speciesName": "Mothim",
            "speciesId": "mothim",
            "baseStats": {
                "atk": 185,
                "def": 98,
                "hp": 172
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    34,
                    2,
                    8,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 122,
            "speciesName": "Mr. Mime",
            "speciesId": "mr_mime",
            "baseStats": {
                "atk": 192,
                "def": 205,
                "hp": 120
            },
            "types": [
                "psychic",
                "fairy"
            ],
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    26,
                    0,
                    6,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 258,
            "speciesName": "Mudkip",
            "speciesId": "mudkip",
            "baseStats": {
                "atk": 126,
                "def": 93,
                "hp": 137
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "DIG",
                "SLUDGE",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 89,
            "speciesName": "Muk",
            "speciesId": "muk",
            "baseStats": {
                "atk": 190,
                "def": 172,
                "hp": 233
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "LICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GUNK_SHOT",
                "SLUDGE_WAVE",
                "THUNDER_PUNCH",
                "ACID_SPRAY"
            ],
            "legacyMoves": [
                "ACID",
                "LICK"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    12,
                    13,
                    13
                ],
                "cp2500": [
                    39,
                    3,
                    14,
                    4
                ]
            }
        },
        {
            "dex": 89,
            "speciesName": "Muk (Alolan)",
            "speciesId": "muk_alolan",
            "baseStats": {
                "atk": 190,
                "def": 172,
                "hp": 233
            },
            "types": [
                "poison",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "POISON_JAB",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GUNK_SHOT",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    12,
                    13,
                    13
                ],
                "cp2500": [
                    39,
                    3,
                    14,
                    4
                ]
            }
        },
        {
            "dex": 446,
            "speciesName": "Munchlax",
            "speciesId": "munchlax",
            "baseStats": {
                "atk": 137,
                "def": 117,
                "hp": 286
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LICK",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BULLDOZE",
                "GUNK_SHOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    31.5,
                    4,
                    8,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 198,
            "speciesName": "Murkrow",
            "speciesId": "murkrow",
            "baseStats": {
                "atk": 175,
                "def": 87,
                "hp": 155
            },
            "types": [
                "dark",
                "flying"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "PECK"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DRILL_PECK",
                "FOUL_PLAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    39.5,
                    15,
                    9,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 177,
            "speciesName": "Natu",
            "speciesId": "natu",
            "baseStats": {
                "atk": 134,
                "def": 89,
                "hp": 120
            },
            "types": [
                "psychic",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "NIGHT_SHADE",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 34,
            "speciesName": "Nidoking",
            "speciesId": "nidoking",
            "baseStats": {
                "atk": 204,
                "def": 156,
                "hp": 191
            },
            "types": [
                "poison",
                "ground"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "IRON_TAIL",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MEGAHORN",
                "SLUDGE_WAVE",
                "EARTH_POWER"
            ],
            "legacyMoves": [
                "FURY_CUTTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    8,
                    15,
                    7
                ],
                "cp2500": [
                    40,
                    9,
                    13,
                    10
                ]
            }
        },
        {
            "dex": 31,
            "speciesName": "Nidoqueen",
            "speciesId": "nidoqueen",
            "baseStats": {
                "atk": 180,
                "def": 173,
                "hp": 207
            },
            "types": [
                "poison",
                "ground"
            ],
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_WAVE",
                "STONE_EDGE",
                "EARTH_POWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    23,
                    5,
                    2,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 29,
            "speciesName": "Nidoran♀",
            "speciesId": "nidoran_female",
            "baseStats": {
                "atk": 86,
                "def": 89,
                "hp": 146
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "POISON_FANG",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 32,
            "speciesName": "Nidoran♂",
            "speciesId": "nidoran_male",
            "baseStats": {
                "atk": 105,
                "def": 76,
                "hp": 130
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "PECK",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HORN_ATTACK",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 30,
            "speciesName": "Nidorina",
            "speciesId": "nidorina",
            "baseStats": {
                "atk": 117,
                "def": 120,
                "hp": 172
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "POISON_FANG",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 33,
            "speciesName": "Nidorino",
            "speciesId": "nidorino",
            "baseStats": {
                "atk": 137,
                "def": 111,
                "hp": 156
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "HORN_ATTACK",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 290,
            "speciesName": "Nincada",
            "speciesId": "nincada",
            "baseStats": {
                "atk": 80,
                "def": 126,
                "hp": 104
            },
            "types": [
                "bug",
                "ground"
            ],
            "fastMoves": [
                "BUG_BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 38,
            "speciesName": "Ninetales",
            "speciesId": "ninetales",
            "baseStats": {
                "atk": 169,
                "def": 190,
                "hp": 177
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "FEINT_ATTACK",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAMETHROWER",
                "HEAT_WAVE",
                "OVERHEAT",
                "PSYSHOCK",
                "SOLAR_BEAM"
            ],
            "legacyMoves": [
                "EMBER",
                "FIRE_BLAST",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    5,
                    6,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 38,
            "speciesName": "Ninetales (Alolan)",
            "speciesId": "ninetales_alolan",
            "baseStats": {
                "atk": 170,
                "def": 193,
                "hp": 177
            },
            "types": [
                "ice",
                "fairy"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "DAZZLING_GLEAM",
                "ICE_BEAM",
                "PSYSHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    25.5,
                    2,
                    0,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 291,
            "speciesName": "Ninjask",
            "speciesId": "ninjask",
            "baseStats": {
                "atk": 199,
                "def": 112,
                "hp": 156
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    31.5,
                    0,
                    5,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 164,
            "speciesName": "Noctowl",
            "speciesId": "noctowl",
            "baseStats": {
                "atk": 145,
                "def": 156,
                "hp": 225
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "EXTRASENSORY",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "PSYCHIC",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    1,
                    11,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 299,
            "speciesName": "Nosepass",
            "speciesId": "nosepass",
            "baseStats": {
                "atk": 82,
                "def": 215,
                "hp": 102
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "SPARK"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 322,
            "speciesName": "Numel",
            "speciesId": "numel",
            "baseStats": {
                "atk": 119,
                "def": 79,
                "hp": 155
            },
            "types": [
                "fire",
                "ground"
            ],
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "HEAT_WAVE",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 274,
            "speciesName": "Nuzleaf",
            "speciesId": "nuzleaf",
            "baseStats": {
                "atk": 134,
                "def": 78,
                "hp": 172
            },
            "types": [
                "grass",
                "dark"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "GRASS_KNOT",
                "LEAF_BLADE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 224,
            "speciesName": "Octillery",
            "speciesId": "octillery",
            "baseStats": {
                "atk": 197,
                "def": 141,
                "hp": 181
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "GUNK_SHOT",
                "WATER_PULSE",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    1,
                    4,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 43,
            "speciesName": "Oddish",
            "speciesId": "oddish",
            "baseStats": {
                "atk": 131,
                "def": 112,
                "hp": 128
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 138,
            "speciesName": "Omanyte",
            "speciesId": "omanyte",
            "baseStats": {
                "atk": 155,
                "def": 153,
                "hp": 111
            },
            "types": [
                "rock",
                "water"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "BRINE",
                "BUBBLE_BEAM",
                "ROCK_BLAST",
                "ROCK_TOMB"
            ],
            "legacyMoves": [
                "BRINE",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    8,
                    11,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 139,
            "speciesName": "Omastar",
            "speciesId": "omastar",
            "baseStats": {
                "atk": 207,
                "def": 201,
                "hp": 172
            },
            "types": [
                "rock",
                "water"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "ROCK_THROW",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HYDRO_PUMP",
                "ROCK_BLAST",
                "ROCK_SLIDE"
            ],
            "legacyMoves": [
                "ROCK_SLIDE",
                "ROCK_THROW"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    6,
                    8,
                    5
                ],
                "cp2500": [
                    39,
                    2,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 95,
            "speciesName": "Onix",
            "speciesId": "onix",
            "baseStats": {
                "atk": 85,
                "def": 232,
                "hp": 111
            },
            "types": [
                "rock",
                "ground"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "TACKLE"
            ],
            "chargedMoves": [
                "HEAVY_SLAM",
                "IRON_HEAD",
                "ROCK_SLIDE",
                "SAND_TOMB",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "IRON_HEAD",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 417,
            "speciesName": "Pachirisu",
            "speciesId": "pachirisu",
            "baseStats": {
                "atk": 94,
                "def": 172,
                "hp": 155
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "SPARK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 484,
            "speciesName": "Palkia",
            "speciesId": "palkia",
            "baseStats": {
                "atk": 280,
                "def": 215,
                "hp": 189
            },
            "types": [
                "water",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "FIRE_BLAST",
                "HYDRO_PUMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    14,
                    5,
                    1,
                    15
                ],
                "cp2500": [
                    23.5,
                    1,
                    8,
                    10
                ]
            }
        },
        {
            "dex": 46,
            "speciesName": "Paras",
            "speciesId": "paras",
            "baseStats": {
                "atk": 121,
                "def": 99,
                "hp": 111
            },
            "types": [
                "bug",
                "grass"
            ],
            "fastMoves": [
                "BUG_BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "SEED_BOMB",
                "X_SCISSOR"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 47,
            "speciesName": "Parasect",
            "speciesId": "parasect",
            "baseStats": {
                "atk": 165,
                "def": 146,
                "hp": 155
            },
            "types": [
                "bug",
                "grass"
            ],
            "fastMoves": [
                "BUG_BITE",
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "SOLAR_BEAM",
                "X_SCISSOR"
            ],
            "legacyMoves": [
                "BUG_BITE"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    2,
                    13,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 279,
            "speciesName": "Pelipper",
            "speciesId": "pelipper",
            "baseStats": {
                "atk": 175,
                "def": 174,
                "hp": 155
            },
            "types": [
                "water",
                "flying"
            ],
            "fastMoves": [
                "WATER_GUN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HURRICANE",
                "HYDRO_PUMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    3,
                    14,
                    1
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 53,
            "speciesName": "Persian",
            "speciesId": "persian",
            "baseStats": {
                "atk": 150,
                "def": 136,
                "hp": 163
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "NIGHT_SLASH",
                "PLAY_ROUGH",
                "POWER_GEM"
            ],
            "legacyMoves": [
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    39,
                    3,
                    14,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 53,
            "speciesName": "Persian (Alolan)",
            "speciesId": "persian_alolan",
            "baseStats": {
                "atk": 158,
                "def": 136,
                "hp": 163
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    37.5,
                    0,
                    7,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 231,
            "speciesName": "Phanpy",
            "speciesId": "phanpy",
            "baseStats": {
                "atk": 107,
                "def": 98,
                "hp": 207
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BULLDOZE",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 489,
            "speciesName": "Phione",
            "speciesId": "phione",
            "baseStats": {
                "atk": 162,
                "def": 162,
                "hp": 190
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "SURF",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    1,
                    7,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 172,
            "speciesName": "Pichu",
            "speciesId": "pichu",
            "baseStats": {
                "atk": 77,
                "def": 53,
                "hp": 85
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "QUICK_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 18,
            "speciesName": "Pidgeot",
            "speciesId": "pidgeot",
            "baseStats": {
                "atk": 166,
                "def": 154,
                "hp": 195
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "BRAVE_BIRD",
                "HURRICANE"
            ],
            "legacyMoves": [
                "AIR_CUTTER",
                "WING_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    5,
                    15,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 17,
            "speciesName": "Pidgeotto",
            "speciesId": "pidgeotto",
            "baseStats": {
                "atk": 117,
                "def": 105,
                "hp": 160
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "STEEL_WING",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 16,
            "speciesName": "Pidgey",
            "speciesId": "pidgey",
            "baseStats": {
                "atk": 85,
                "def": 73,
                "hp": 120
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 25,
            "speciesName": "Pikachu",
            "speciesId": "pikachu",
            "baseStats": {
                "atk": 112,
                "def": 96,
                "hp": 111
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "PRESENT",
                "QUICK_ATTACK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SURF",
                "THUNDER",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ],
            "legacyMoves": [
                "PRESENT",
                "SURF",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 221,
            "speciesName": "Piloswine",
            "speciesId": "piloswine",
            "baseStats": {
                "atk": 181,
                "def": 138,
                "hp": 225
            },
            "types": [
                "ice",
                "ground"
            ],
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    2,
                    12,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 204,
            "speciesName": "Pineco",
            "speciesId": "pineco",
            "baseStats": {
                "atk": 108,
                "def": 122,
                "hp": 137
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "ROCK_TOMB",
                "SAND_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 127,
            "speciesName": "Pinsir",
            "speciesId": "pinsir",
            "baseStats": {
                "atk": 238,
                "def": 182,
                "hp": 163
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "FURY_CUTTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "SUBMISSION",
                "VICE_GRIP",
                "X_SCISSOR"
            ],
            "legacyMoves": [
                "FURY_CUTTER",
                "SUBMISSION"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    8,
                    11,
                    12
                ],
                "cp2500": [
                    35,
                    1,
                    13,
                    3
                ]
            }
        },
        {
            "dex": 393,
            "speciesName": "Piplup",
            "speciesId": "piplup",
            "baseStats": {
                "atk": 112,
                "def": 102,
                "hp": 142
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "POUND"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "DRILL_PECK",
                "ICY_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 311,
            "speciesName": "Plusle",
            "speciesId": "plusle",
            "baseStats": {
                "atk": 167,
                "def": 129,
                "hp": 155
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    36.5,
                    2,
                    7,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 186,
            "speciesName": "Politoed",
            "speciesId": "politoed",
            "baseStats": {
                "atk": 174,
                "def": 179,
                "hp": 207
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "EARTHQUAKE",
                "HYDRO_PUMP",
                "SURF"
            ],
            "legacyMoves": [
                "EARTHQUAKE"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    0,
                    9,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 60,
            "speciesName": "Poliwag",
            "speciesId": "poliwag",
            "baseStats": {
                "atk": 101,
                "def": 82,
                "hp": 120
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BUBBLE_BEAM",
                "MUD_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 61,
            "speciesName": "Poliwhirl",
            "speciesId": "poliwhirl",
            "baseStats": {
                "atk": 130,
                "def": 123,
                "hp": 163
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "MUD_BOMB",
                "SCALD",
                "WATER_PULSE"
            ],
            "legacyMoves": [
                "SCALD"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 62,
            "speciesName": "Poliwrath",
            "speciesId": "poliwrath",
            "baseStats": {
                "atk": 182,
                "def": 184,
                "hp": 207
            },
            "types": [
                "water",
                "fighting"
            ],
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "HYDRO_PUMP",
                "ICE_PUNCH",
                "SUBMISSION",
                "POWER_UP_PUNCH"
            ],
            "legacyMoves": [
                "MUD_SHOT",
                "SUBMISSION"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    8,
                    14,
                    15
                ],
                "cp2500": [
                    40,
                    10,
                    9,
                    12
                ]
            }
        },
        {
            "dex": 77,
            "speciesName": "Ponyta",
            "speciesId": "ponyta",
            "baseStats": {
                "atk": 170,
                "def": 127,
                "hp": 137
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAME_CHARGE",
                "FLAME_WHEEL",
                "STOMP"
            ],
            "legacyMoves": [
                "FIRE_BLAST"
            ],
            "defaultIVs": {
                "cp1500": [
                    35,
                    7,
                    15,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 261,
            "speciesName": "Poochyena",
            "speciesId": "poochyena",
            "baseStats": {
                "atk": 96,
                "def": 61,
                "hp": 111
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "SNARL",
                "TACKLE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DIG",
                "POISON_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 137,
            "speciesName": "Porygon",
            "speciesId": "porygon",
            "baseStats": {
                "atk": 153,
                "def": 136,
                "hp": 163
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "QUICK_ATTACK",
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "HYPER_BEAM",
                "PSYBEAM",
                "SIGNAL_BEAM",
                "SOLAR_BEAM",
                "ZAP_CANNON"
            ],
            "legacyMoves": [
                "DISCHARGE",
                "PSYBEAM",
                "QUICK_ATTACK",
                "SIGNAL_BEAM",
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "defaultIVs": {
                "cp1500": [
                    38,
                    2,
                    11,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 474,
            "speciesName": "Porygon-Z",
            "speciesId": "porygon_z",
            "baseStats": {
                "atk": 264,
                "def": 150,
                "hp": 198
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "ZAP_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    6,
                    13,
                    14
                ],
                "cp2500": [
                    27.5,
                    12,
                    13,
                    11
                ]
            }
        },
        {
            "dex": 233,
            "speciesName": "Porygon2",
            "speciesId": "porygon2",
            "baseStats": {
                "atk": 198,
                "def": 180,
                "hp": 198
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "ZAP_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    20,
                    10,
                    12,
                    14
                ],
                "cp2500": [
                    37,
                    7,
                    13,
                    15
                ]
            }
        },
        {
            "dex": 57,
            "speciesName": "Primeape",
            "speciesId": "primeape",
            "baseStats": {
                "atk": 207,
                "def": 138,
                "hp": 163
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "KARATE_CHOP",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "CROSS_CHOP",
                "LOW_SWEEP",
                "NIGHT_SLASH"
            ],
            "legacyMoves": [
                "CROSS_CHOP",
                "KARATE_CHOP"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    8,
                    8,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 394,
            "speciesName": "Prinplup",
            "speciesId": "prinplup",
            "baseStats": {
                "atk": 150,
                "def": 139,
                "hp": 162
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "HYDRO_PUMP",
                "ICY_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    39,
                    2,
                    5,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 476,
            "speciesName": "Probopass",
            "speciesId": "probopass",
            "baseStats": {
                "atk": 135,
                "def": 275,
                "hp": 155
            },
            "types": [
                "rock",
                "steel"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "SPARK"
            ],
            "chargedMoves": [
                "MAGNET_BOMB",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    4,
                    2,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 54,
            "speciesName": "Psyduck",
            "speciesId": "psyduck",
            "baseStats": {
                "atk": 122,
                "def": 95,
                "hp": 137
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CROSS_CHOP",
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 247,
            "speciesName": "Pupitar",
            "speciesId": "pupitar",
            "baseStats": {
                "atk": 155,
                "def": 133,
                "hp": 172
            },
            "types": [
                "rock",
                "ground"
            ],
            "fastMoves": [
                "BITE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "CRUNCH",
                "DIG"
            ],
            "defaultIVs": {
                "cp1500": [
                    37.5,
                    1,
                    9,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 432,
            "speciesName": "Purugly",
            "speciesId": "purugly",
            "baseStats": {
                "atk": 172,
                "def": 133,
                "hp": 174
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "SCRATCH",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "PLAY_ROUGH",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    0,
                    3,
                    8
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 195,
            "speciesName": "Quagsire",
            "speciesId": "quagsire",
            "baseStats": {
                "atk": 152,
                "def": 143,
                "hp": 216
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_BOMB",
                "STONE_EDGE",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    30.5,
                    2,
                    1,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 156,
            "speciesName": "Quilava",
            "speciesId": "quilava",
            "baseStats": {
                "atk": 158,
                "def": 126,
                "hp": 151
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    35,
                    10,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 211,
            "speciesName": "Qwilfish",
            "speciesId": "qwilfish",
            "baseStats": {
                "atk": 184,
                "def": 138,
                "hp": 163
            },
            "types": [
                "water",
                "poison"
            ],
            "fastMoves": [
                "POISON_STING",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    11,
                    12,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 26,
            "speciesName": "Raichu",
            "speciesId": "raichu",
            "baseStats": {
                "atk": 193,
                "def": 151,
                "hp": 155
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "SPARK",
                "THUNDER_SHOCK",
                "VOLT_SWITCH",
                "CHARM"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "THUNDER",
                "THUNDER_PUNCH",
                "WILD_CHARGE",
                "SKULL_BASH"
            ],
            "legacyMoves": [
                "THUNDER",
                "THUNDER_SHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    4,
                    7,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 26,
            "speciesName": "Raichu (Alolan)",
            "speciesId": "raichu_alolan",
            "baseStats": {
                "atk": 201,
                "def": 154,
                "hp": 155
            },
            "types": [
                "electric",
                "psychic"
            ],
            "fastMoves": [
                "SPARK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "THUNDER_PUNCH",
                "WILD_CHARGE",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    0,
                    12,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 243,
            "speciesName": "Raikou",
            "speciesId": "raikou",
            "baseStats": {
                "atk": 241,
                "def": 195,
                "hp": 207
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "THUNDER_SHOCK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "THUNDER",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    15.5,
                    10,
                    13,
                    15
                ],
                "cp2500": [
                    26.5,
                    3,
                    13,
                    13
                ]
            }
        },
        {
            "dex": 280,
            "speciesName": "Ralts",
            "speciesId": "ralts",
            "baseStats": {
                "atk": 79,
                "def": 59,
                "hp": 99
            },
            "types": [
                "psychic",
                "fairy"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PSYSHOCK",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 409,
            "speciesName": "Rampardos",
            "speciesId": "rampardos",
            "baseStats": {
                "atk": 295,
                "def": 109,
                "hp": 219
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "SMACK_DOWN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "OUTRAGE",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    16.5,
                    9,
                    10,
                    14
                ],
                "cp2500": [
                    28,
                    9,
                    12,
                    5
                ]
            }
        },
        {
            "dex": 78,
            "speciesName": "Rapidash",
            "speciesId": "rapidash",
            "baseStats": {
                "atk": 207,
                "def": 162,
                "hp": 163
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "DRILL_RUN",
                "FIRE_BLAST",
                "HEAT_WAVE"
            ],
            "legacyMoves": [
                "EMBER"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    3,
                    15,
                    0
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 20,
            "speciesName": "Raticate",
            "speciesId": "raticate",
            "baseStats": {
                "atk": 161,
                "def": 139,
                "hp": 146
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "HYPER_BEAM",
                "HYPER_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    38.5,
                    1,
                    10,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 20,
            "speciesName": "Raticate (Alolan)",
            "speciesId": "raticate_alolan",
            "baseStats": {
                "atk": 135,
                "def": 154,
                "hp": 181
            },
            "types": [
                "dark",
                "normal"
            ],
            "fastMoves": [
                "BITE",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_BEAM",
                "HYPER_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    38.5,
                    4,
                    13,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 19,
            "speciesName": "Rattata",
            "speciesId": "rattata",
            "baseStats": {
                "atk": 103,
                "def": 70,
                "hp": 102
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "HYPER_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 19,
            "speciesName": "Rattata (Alolan)",
            "speciesId": "rattata_alolan",
            "baseStats": {
                "atk": 103,
                "def": 70,
                "hp": 102
            },
            "types": [
                "dark",
                "normal"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_FANG",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 384,
            "speciesName": "Rayquaza",
            "speciesId": "rayquaza",
            "baseStats": {
                "atk": 284,
                "def": 170,
                "hp": 213
            },
            "types": [
                "dragon",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    8,
                    14,
                    0
                ],
                "cp2500": [
                    24.5,
                    5,
                    4,
                    11
                ]
            }
        },
        {
            "dex": 378,
            "speciesName": "Regice",
            "speciesId": "regice",
            "baseStats": {
                "atk": 179,
                "def": 309,
                "hp": 190
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "EARTHQUAKE",
                "FOCUS_BLAST"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    8,
                    13,
                    13
                ],
                "cp2500": [
                    30,
                    3,
                    9,
                    14
                ]
            }
        },
        {
            "dex": 486,
            "speciesName": "Regigigas",
            "speciesId": "regigigas",
            "baseStats": {
                "atk": 287,
                "def": 210,
                "hp": 221
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "HEAVY_SLAM",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    12.5,
                    4,
                    14,
                    10
                ],
                "cp2500": [
                    22,
                    0,
                    9,
                    2
                ]
            }
        },
        {
            "dex": 377,
            "speciesName": "Regirock",
            "speciesId": "regirock",
            "baseStats": {
                "atk": 179,
                "def": 309,
                "hp": 190
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "STONE_EDGE",
                "ZAP_CANNON"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    8,
                    13,
                    13
                ],
                "cp2500": [
                    30,
                    3,
                    9,
                    14
                ]
            }
        },
        {
            "dex": 379,
            "speciesName": "Registeel",
            "speciesId": "registeel",
            "baseStats": {
                "atk": 143,
                "def": 285,
                "hp": 190
            },
            "types": [
                "steel",
                "none"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "FOCUS_BLAST",
                "HYPER_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    23,
                    6,
                    13,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 369,
            "speciesName": "Relicanth",
            "speciesId": "relicanth",
            "baseStats": {
                "atk": 162,
                "def": 203,
                "hp": 225
            },
            "types": [
                "water",
                "rock"
            ],
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "AQUA_TAIL",
                "HYDRO_PUMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    1,
                    13,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    3,
                    13
                ]
            }
        },
        {
            "dex": 223,
            "speciesName": "Remoraid",
            "speciesId": "remoraid",
            "baseStats": {
                "atk": 127,
                "def": 69,
                "hp": 111
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "ROCK_BLAST",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 112,
            "speciesName": "Rhydon",
            "speciesId": "rhydon",
            "baseStats": {
                "atk": 222,
                "def": 171,
                "hp": 233
            },
            "types": [
                "ground",
                "rock"
            ],
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MEGAHORN",
                "STONE_EDGE",
                "SURF"
            ],
            "legacyMoves": [
                "MEGAHORN"
            ],
            "defaultIVs": {
                "cp1500": [
                    18,
                    2,
                    7,
                    8
                ],
                "cp2500": [
                    30.5,
                    0,
                    11,
                    3
                ]
            }
        },
        {
            "dex": 111,
            "speciesName": "Rhyhorn",
            "speciesId": "rhyhorn",
            "baseStats": {
                "atk": 140,
                "def": 127,
                "hp": 190
            },
            "types": [
                "ground",
                "rock"
            ],
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "HORN_ATTACK",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    39.5,
                    5,
                    12,
                    8
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 464,
            "speciesName": "Rhyperior",
            "speciesId": "rhyperior",
            "baseStats": {
                "atk": 241,
                "def": 190,
                "hp": 251
            },
            "types": [
                "ground",
                "rock"
            ],
            "fastMoves": [
                "MUD_SLAP",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "STONE_EDGE",
                "SURF",
                "SKULL_BASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    15,
                    2,
                    10,
                    8
                ],
                "cp2500": [
                    24.5,
                    5,
                    15,
                    9
                ]
            }
        },
        {
            "dex": 447,
            "speciesName": "Riolu",
            "speciesId": "riolu",
            "baseStats": {
                "atk": 127,
                "def": 78,
                "hp": 120
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 315,
            "speciesName": "Roselia",
            "speciesId": "roselia",
            "baseStats": {
                "atk": 186,
                "def": 131,
                "hp": 137
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "POISON_JAB",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    30.5,
                    3,
                    13,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 407,
            "speciesName": "Roserade",
            "speciesId": "roserade",
            "baseStats": {
                "atk": 243,
                "def": 185,
                "hp": 155
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "POISON_JAB",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "GRASS_KNOT",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    6,
                    8,
                    14
                ],
                "cp2500": [
                    34.5,
                    1,
                    7,
                    9
                ]
            }
        },
        {
            "dex": 479,
            "speciesName": "Rotom",
            "speciesId": "rotom",
            "baseStats": {
                "atk": 185,
                "def": 159,
                "hp": 137
            },
            "types": [
                "electric",
                "ghost"
            ],
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    27,
                    6,
                    14,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 479,
            "speciesName": "Rotom (Fan)",
            "speciesId": "rotom_fan",
            "baseStats": {
                "atk": 204,
                "def": 219,
                "hp": 137
            },
            "types": [
                "electric",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "ASTONISH"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    7,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    14,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 479,
            "speciesName": "Rotom (Frost)",
            "speciesId": "rotom_frost",
            "baseStats": {
                "atk": 204,
                "def": 219,
                "hp": 137
            },
            "types": [
                "electric",
                "ice"
            ],
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    7,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    14,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 479,
            "speciesName": "Rotom (Heat)",
            "speciesId": "rotom_heat",
            "baseStats": {
                "atk": 204,
                "def": 219,
                "hp": 137
            },
            "types": [
                "electric",
                "fire"
            ],
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    7,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    14,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 479,
            "speciesName": "Rotom (Mow)",
            "speciesId": "rotom_mow",
            "baseStats": {
                "atk": 204,
                "def": 219,
                "hp": 137
            },
            "types": [
                "electric",
                "grass"
            ],
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    7,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    14,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 479,
            "speciesName": "Rotom (Wash)",
            "speciesId": "rotom_wash",
            "baseStats": {
                "atk": 204,
                "def": 219,
                "hp": 137
            },
            "types": [
                "electric",
                "water"
            ],
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    7,
                    12,
                    15
                ],
                "cp2500": [
                    40,
                    14,
                    2,
                    14
                ]
            }
        },
        {
            "dex": 302,
            "speciesName": "Sableye",
            "speciesId": "sableye",
            "baseStats": {
                "atk": 141,
                "def": 136,
                "hp": 137
            },
            "types": [
                "dark",
                "ghost"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "POWER_GEM",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 373,
            "speciesName": "Salamence",
            "speciesId": "salamence",
            "baseStats": {
                "atk": 277,
                "def": 168,
                "hp": 216
            },
            "types": [
                "dragon",
                "flying"
            ],
            "fastMoves": [
                "BITE",
                "DRAGON_TAIL",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "FIRE_BLAST",
                "HYDRO_PUMP",
                "OUTRAGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    12,
                    6,
                    15
                ],
                "cp2500": [
                    25.5,
                    3,
                    0,
                    13
                ]
            }
        },
        {
            "dex": 27,
            "speciesName": "Sandshrew",
            "speciesId": "sandshrew",
            "baseStats": {
                "atk": 126,
                "def": 120,
                "hp": 137
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "ROCK_TOMB",
                "SAND_TOMB"
            ],
            "legacyMoves": [
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 27,
            "speciesName": "Sandshrew (Alolan)",
            "speciesId": "sandshrew_alolan",
            "baseStats": {
                "atk": 125,
                "def": 129,
                "hp": 137
            },
            "types": [
                "ice",
                "steel"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "GYRO_BALL",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 28,
            "speciesName": "Sandslash",
            "speciesId": "sandslash",
            "baseStats": {
                "atk": 182,
                "def": 175,
                "hp": 181
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "EARTHQUAKE",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    6,
                    12,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 28,
            "speciesName": "Sandslash (Alolan)",
            "speciesId": "sandslash_alolan",
            "baseStats": {
                "atk": 177,
                "def": 195,
                "hp": 181
            },
            "types": [
                "ice",
                "steel"
            ],
            "fastMoves": [
                "METAL_CLAW",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "BULLDOZE",
                "GYRO_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    2,
                    11,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 254,
            "speciesName": "Sceptile",
            "speciesId": "sceptile",
            "baseStats": {
                "atk": 223,
                "def": 169,
                "hp": 172
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "EARTHQUAKE",
                "LEAF_BLADE",
                "FRENZY_PLANT",
                "DRAGON_CLAW"
            ],
            "defaultIVs": {
                "cp1500": [
                    20,
                    7,
                    8,
                    15
                ],
                "cp2500": [
                    40,
                    1,
                    6,
                    10
                ]
            }
        },
        {
            "dex": 212,
            "speciesName": "Scizor",
            "speciesId": "scizor",
            "baseStats": {
                "atk": 236,
                "def": 181,
                "hp": 172
            },
            "types": [
                "bug",
                "steel"
            ],
            "fastMoves": [
                "BULLET_PUNCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "NIGHT_SLASH",
                "X_SCISSOR"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    8,
                    9,
                    10
                ],
                "cp2500": [
                    33,
                    3,
                    7,
                    11
                ]
            }
        },
        {
            "dex": 123,
            "speciesName": "Scyther",
            "speciesId": "scyther",
            "baseStats": {
                "atk": 218,
                "def": 170,
                "hp": 172
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "FURY_CUTTER",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "NIGHT_SLASH",
                "X_SCISSOR"
            ],
            "legacyMoves": [
                "BUG_BUZZ",
                "STEEL_WING"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    5,
                    11,
                    5
                ],
                "cp2500": [
                    38.5,
                    8,
                    14,
                    6
                ]
            }
        },
        {
            "dex": 117,
            "speciesName": "Seadra",
            "speciesId": "seadra",
            "baseStats": {
                "atk": 187,
                "def": 156,
                "hp": 146
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "BLIZZARD",
                "DRAGON_PULSE",
                "HYDRO_PUMP"
            ],
            "legacyMoves": [
                "BLIZZARD"
            ],
            "defaultIVs": {
                "cp1500": [
                    27,
                    5,
                    9,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 119,
            "speciesName": "Seaking",
            "speciesId": "seaking",
            "baseStats": {
                "atk": 175,
                "def": 147,
                "hp": 190
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "PECK",
                "POISON_JAB",
                "WATERFALL"
            ],
            "chargedMoves": [
                "DRILL_RUN",
                "ICE_BEAM",
                "ICY_WIND",
                "MEGAHORN",
                "WATER_PULSE"
            ],
            "legacyMoves": [
                "DRILL_RUN",
                "ICY_WIND",
                "POISON_JAB"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    1,
                    9,
                    2
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 364,
            "speciesName": "Sealeo",
            "speciesId": "sealeo",
            "baseStats": {
                "atk": 137,
                "def": 132,
                "hp": 207
            },
            "types": [
                "ice",
                "water"
            ],
            "fastMoves": [
                "POWDER_SNOW",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "BODY_SLAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    38,
                    4,
                    9,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 273,
            "speciesName": "Seedot",
            "speciesId": "seedot",
            "baseStats": {
                "atk": 71,
                "def": 77,
                "hp": 120
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "FOUL_PLAY",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 86,
            "speciesName": "Seel",
            "speciesId": "seel",
            "baseStats": {
                "atk": 85,
                "def": 121,
                "hp": 163
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "ICE_SHARD",
                "LICK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AQUA_TAIL",
                "AURORA_BEAM",
                "ICY_WIND"
            ],
            "legacyMoves": [
                "AQUA_JET",
                "WATER_GUN"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 161,
            "speciesName": "Sentret",
            "speciesId": "sentret",
            "baseStats": {
                "atk": 79,
                "def": 73,
                "hp": 111
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DIG",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 336,
            "speciesName": "Seviper",
            "speciesId": "seviper",
            "baseStats": {
                "atk": 196,
                "def": 118,
                "hp": 177
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "POISON_FANG",
                "WRAP"
            ],
            "defaultIVs": {
                "cp1500": [
                    27,
                    3,
                    11,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 319,
            "speciesName": "Sharpedo",
            "speciesId": "sharpedo",
            "baseStats": {
                "atk": 243,
                "def": 83,
                "hp": 172
            },
            "types": [
                "water",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYDRO_PUMP",
                "POISON_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    8,
                    15,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 492,
            "speciesName": "Shaymin (Land)",
            "speciesId": "shaymin_land",
            "baseStats": {
                "atk": 210,
                "def": 210,
                "hp": 225
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    0,
                    2,
                    15
                ],
                "cp2500": [
                    28.5,
                    0,
                    12,
                    14
                ]
            }
        },
        {
            "dex": 492,
            "speciesName": "Shaymin (Sky)",
            "speciesId": "shaymin_sky",
            "baseStats": {
                "atk": 261,
                "def": 166,
                "hp": 225
            },
            "types": [
                "grass",
                "flying"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    15.5,
                    6,
                    4,
                    15
                ],
                "cp2500": [
                    25,
                    10,
                    13,
                    12
                ]
            }
        },
        {
            "dex": 292,
            "speciesName": "Shedinja",
            "speciesId": "shedinja",
            "baseStats": {
                "atk": 153,
                "def": 73,
                "hp": 1
            },
            "types": [
                "bug",
                "ghost"
            ],
            "fastMoves": [
                "BUG_BITE",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DIG",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 372,
            "speciesName": "Shelgon",
            "speciesId": "shelgon",
            "baseStats": {
                "atk": 172,
                "def": 155,
                "hp": 163
            },
            "types": [
                "dragon",
                "none"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "EMBER"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "FLAMETHROWER",
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    3,
                    9,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 90,
            "speciesName": "Shellder",
            "speciesId": "shellder",
            "baseStats": {
                "atk": 116,
                "def": 134,
                "hp": 102
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "ICE_SHARD",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ICY_WIND",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 422,
            "speciesName": "Shellos (East)",
            "speciesId": "shellos_east_sea",
            "baseStats": {
                "atk": 103,
                "def": 105,
                "hp": 183
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "MUD_BOMB",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 422,
            "speciesName": "Shellos (West)",
            "speciesId": "shellos_west_sea",
            "baseStats": {
                "atk": 103,
                "def": 105,
                "hp": 183
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "MUD_BOMB",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 410,
            "speciesName": "Shieldon",
            "speciesId": "shieldon",
            "baseStats": {
                "atk": 76,
                "def": 195,
                "hp": 102
            },
            "types": [
                "rock",
                "steel"
            ],
            "fastMoves": [
                "IRON_TAIL",
                "TACKLE"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HEAVY_SLAM",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 275,
            "speciesName": "Shiftry",
            "speciesId": "shiftry",
            "baseStats": {
                "atk": 200,
                "def": 121,
                "hp": 207
            },
            "types": [
                "grass",
                "dark"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "HURRICANE",
                "LEAF_BLADE",
                "LEAF_TORNADO"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    3,
                    8,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 403,
            "speciesName": "Shinx",
            "speciesId": "shinx",
            "baseStats": {
                "atk": 117,
                "def": 64,
                "hp": 128
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "SPARK",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 285,
            "speciesName": "Shroomish",
            "speciesId": "shroomish",
            "baseStats": {
                "atk": 74,
                "def": 110,
                "hp": 155
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 213,
            "speciesName": "Shuckle",
            "speciesId": "shuckle",
            "baseStats": {
                "atk": 17,
                "def": 396,
                "hp": 85
            },
            "types": [
                "bug",
                "rock"
            ],
            "fastMoves": [
                "ROCK_THROW",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "ROCK_BLAST",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 353,
            "speciesName": "Shuppet",
            "speciesId": "shuppet",
            "baseStats": {
                "atk": 138,
                "def": 65,
                "hp": 127
            },
            "types": [
                "ghost",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 266,
            "speciesName": "Silcoon",
            "speciesId": "silcoon",
            "baseStats": {
                "atk": 60,
                "def": 77,
                "hp": 137
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 227,
            "speciesName": "Skarmory",
            "speciesId": "skarmory",
            "baseStats": {
                "atk": 148,
                "def": 226,
                "hp": 163
            },
            "types": [
                "steel",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FLASH_CANNON",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    2,
                    11,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 188,
            "speciesName": "Skiploom",
            "speciesId": "skiploom",
            "baseStats": {
                "atk": 91,
                "def": 120,
                "hp": 146
            },
            "types": [
                "grass",
                "flying"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 300,
            "speciesName": "Skitty",
            "speciesId": "skitty",
            "baseStats": {
                "atk": 84,
                "def": 79,
                "hp": 137
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "DISARMING_VOICE",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 451,
            "speciesName": "Skorupi",
            "speciesId": "skorupi",
            "baseStats": {
                "atk": 93,
                "def": 151,
                "hp": 120
            },
            "types": [
                "poison",
                "bug"
            ],
            "fastMoves": [
                "INFESTATION",
                "POISON_STING"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CROSS_POISON",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 435,
            "speciesName": "Skuntank",
            "speciesId": "skuntank",
            "baseStats": {
                "atk": 184,
                "def": 132,
                "hp": 230
            },
            "types": [
                "poison",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    24,
                    6,
                    7,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 289,
            "speciesName": "Slaking",
            "speciesId": "slaking",
            "baseStats": {
                "atk": 290,
                "def": 166,
                "hp": 284
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "YAWN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HYPER_BEAM",
                "PLAY_ROUGH",
                "BODY_SLAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    12.5,
                    9,
                    5,
                    12
                ],
                "cp2500": [
                    20,
                    10,
                    14,
                    14
                ]
            }
        },
        {
            "dex": 287,
            "speciesName": "Slakoth",
            "speciesId": "slakoth",
            "baseStats": {
                "atk": 104,
                "def": 92,
                "hp": 155
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "YAWN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BRICK_BREAK",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 80,
            "speciesName": "Slowbro",
            "speciesId": "slowbro",
            "baseStats": {
                "atk": 177,
                "def": 180,
                "hp": 216
            },
            "types": [
                "water",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "PSYCHIC",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    5,
                    11,
                    4
                ],
                "cp2500": [
                    40,
                    13,
                    9,
                    10
                ]
            }
        },
        {
            "dex": 199,
            "speciesName": "Slowking",
            "speciesId": "slowking",
            "baseStats": {
                "atk": 177,
                "def": 180,
                "hp": 216
            },
            "types": [
                "water",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FIRE_BLAST",
                "PSYCHIC"
            ],
            "defaultIVs": {
                "cp1500": [
                    22.5,
                    5,
                    11,
                    4
                ],
                "cp2500": [
                    40,
                    13,
                    9,
                    10
                ]
            }
        },
        {
            "dex": 79,
            "speciesName": "Slowpoke",
            "speciesId": "slowpoke",
            "baseStats": {
                "atk": 109,
                "def": 98,
                "hp": 207
            },
            "types": [
                "water",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "PSYSHOCK",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 218,
            "speciesName": "Slugma",
            "speciesId": "slugma",
            "baseStats": {
                "atk": 118,
                "def": 71,
                "hp": 120
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "FLAME_CHARGE",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 235,
            "speciesName": "Smeargle",
            "speciesId": "smeargle",
            "baseStats": {
                "atk": 40,
                "def": 83,
                "hp": 146
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "FURY_CUTTER",
                "BUG_BITE",
                "BITE",
                "SUCKER_PUNCH",
                "DRAGON_BREATH",
                "THUNDER_SHOCK",
                "SPARK",
                "LOW_KICK",
                "KARATE_CHOP",
                "EMBER",
                "WING_ATTACK",
                "PECK",
                "LICK",
                "SHADOW_CLAW",
                "VINE_WHIP",
                "RAZOR_LEAF",
                "MUD_SHOT",
                "ICE_SHARD",
                "FROST_BREATH",
                "QUICK_ATTACK",
                "SCRATCH",
                "POUND",
                "CUT",
                "POISON_JAB",
                "ACID",
                "PSYCHO_CUT",
                "ROCK_THROW",
                "METAL_CLAW",
                "BULLET_PUNCH",
                "WATER_GUN",
                "SPLASH",
                "MUD_SLAP",
                "ZEN_HEADBUTT",
                "CONFUSION",
                "POISON_STING",
                "BUBBLE",
                "FEINT_ATTACK",
                "STEEL_WING",
                "FIRE_FANG",
                "ROCK_SMASH",
                "COUNTER",
                "POWDER_SNOW",
                "CHARGE_BEAM",
                "VOLT_SWITCH",
                "DRAGON_TAIL",
                "AIR_SLASH",
                "INFESTATION",
                "STRUGGLE_BUG",
                "ASTONISH",
                "HEX",
                "IRON_TAIL",
                "FIRE_SPIN",
                "BULLET_SEED",
                "EXTRASENSORY",
                "SNARL",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "TAKE_DOWN",
                "WATERFALL",
                "YAWN",
                "PRESENT"
            ],
            "chargedMoves": [
                "STRUGGLE",
                "WRAP",
                "HYPER_BEAM",
                "DARK_PULSE",
                "SLUDGE",
                "VICE_GRIP",
                "FLAME_WHEEL",
                "MEGAHORN",
                "FLAMETHROWER",
                "DIG",
                "CROSS_CHOP",
                "PSYBEAM",
                "EARTHQUAKE",
                "STONE_EDGE",
                "ICE_PUNCH",
                "DISCHARGE",
                "FLASH_CANNON",
                "DRILL_PECK",
                "ICE_BEAM",
                "BLIZZARD",
                "HEAT_WAVE",
                "AERIAL_ACE",
                "DRILL_RUN",
                "PETAL_BLIZZARD",
                "BUG_BUZZ",
                "POISON_FANG",
                "NIGHT_SLASH",
                "BUBBLE_BEAM",
                "SUBMISSION",
                "LOW_SWEEP",
                "AQUA_JET",
                "AQUA_TAIL",
                "SEED_BOMB",
                "PSYSHOCK",
                "ANCIENT_POWER",
                "ROCK_TOMB",
                "ROCK_SLIDE",
                "POWER_GEM",
                "SHADOW_SNEAK",
                "SHADOW_PUNCH",
                "OMINOUS_WIND",
                "SHADOW_BALL",
                "MAGNET_BOMB",
                "IRON_HEAD",
                "THUNDER_PUNCH",
                "THUNDER",
                "THUNDERBOLT",
                "TWISTER",
                "DRAGON_PULSE",
                "DRAGON_CLAW",
                "DISARMING_VOICE",
                "DRAINING_KISS",
                "DAZZLING_GLEAM",
                "MOONBLAST",
                "PLAY_ROUGH",
                "CROSS_POISON",
                "SLUDGE_BOMB",
                "SLUDGE_WAVE",
                "GUNK_SHOT",
                "BONE_CLUB",
                "BULLDOZE",
                "MUD_BOMB",
                "SIGNAL_BEAM",
                "X_SCISSOR",
                "FLAME_CHARGE",
                "FLAME_BURST",
                "FIRE_BLAST",
                "WATER_PULSE",
                "HYDRO_PUMP",
                "PSYCHIC",
                "ICY_WIND",
                "FIRE_PUNCH",
                "SOLAR_BEAM",
                "LEAF_BLADE",
                "POWER_WHIP",
                "AIR_CUTTER",
                "HURRICANE",
                "BRICK_BREAK",
                "SWIFT",
                "HORN_ATTACK",
                "STOMP",
                "HYPER_FANG",
                "BODY_SLAM",
                "CLOSE_COMBAT",
                "DYNAMIC_PUNCH",
                "FOCUS_BLAST",
                "AURORA_BEAM",
                "WILD_CHARGE",
                "ZAP_CANNON",
                "AVALANCHE",
                "BRAVE_BIRD",
                "SKY_ATTACK",
                "SAND_TOMB",
                "ROCK_BLAST",
                "SILVER_WIND",
                "NIGHT_SHADE",
                "GYRO_BALL",
                "HEAVY_SLAM",
                "OVERHEAT",
                "GRASS_KNOT",
                "ENERGY_BALL",
                "FUTURE_SIGHT",
                "MIRROR_COAT",
                "OUTRAGE",
                "CRUNCH",
                "FOUL_PLAY",
                "SURF",
                "DRACO_METEOR",
                "PSYCHO_BOOST",
                "FRENZY_PLANT",
                "BLAST_BURN",
                "HYDRO_CANNON",
                "LAST_RESORT",
                "METEOR_MASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 238,
            "speciesName": "Smoochum",
            "speciesId": "smoochum",
            "baseStats": {
                "atk": 153,
                "def": 91,
                "hp": 128
            },
            "types": [
                "ice",
                "psychic"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "POUND",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "ICE_PUNCH",
                "PSYSHOCK"
            ],
            "legacyMoves": [
                "FROST_BREATH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 215,
            "speciesName": "Sneasel",
            "speciesId": "sneasel",
            "baseStats": {
                "atk": 189,
                "def": 146,
                "hp": 146
            },
            "types": [
                "dark",
                "ice"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOUL_PLAY",
                "ICE_PUNCH"
            ],
            "defaultIVs": {
                "cp1500": [
                    28,
                    4,
                    15,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 143,
            "speciesName": "Snorlax",
            "speciesId": "snorlax",
            "baseStats": {
                "atk": 190,
                "def": 169,
                "hp": 330
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LICK",
                "ZEN_HEADBUTT",
                "YAWN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "HYPER_BEAM",
                "OUTRAGE",
                "SKULL_BASH"
            ],
            "legacyMoves": [
                "BODY_SLAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    17.5,
                    3,
                    15,
                    1
                ],
                "cp2500": [
                    29,
                    0,
                    13,
                    14
                ]
            }
        },
        {
            "dex": 361,
            "speciesName": "Snorunt",
            "speciesId": "snorunt",
            "baseStats": {
                "atk": 95,
                "def": 95,
                "hp": 137
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "HEX",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "ICY_WIND",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 459,
            "speciesName": "Snover",
            "speciesId": "snover",
            "baseStats": {
                "atk": 115,
                "def": 105,
                "hp": 155
            },
            "types": [
                "grass",
                "ice"
            ],
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "ICE_BEAM",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 209,
            "speciesName": "Snubbull",
            "speciesId": "snubbull",
            "baseStats": {
                "atk": 137,
                "def": 85,
                "hp": 155
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CRUNCH",
                "DAZZLING_GLEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 338,
            "speciesName": "Solrock",
            "speciesId": "solrock",
            "baseStats": {
                "atk": 178,
                "def": 153,
                "hp": 207
            },
            "types": [
                "rock",
                "psychic"
            ],
            "fastMoves": [
                "CONFUSION",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "ROCK_SLIDE",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    2,
                    11,
                    4
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 21,
            "speciesName": "Spearow",
            "speciesId": "spearow",
            "baseStats": {
                "atk": 112,
                "def": 60,
                "hp": 120
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DRILL_PECK",
                "SKY_ATTACK",
                "TWISTER"
            ],
            "legacyMoves": [
                "TWISTER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 363,
            "speciesName": "Spheal",
            "speciesId": "spheal",
            "baseStats": {
                "atk": 95,
                "def": 90,
                "hp": 172
            },
            "types": [
                "ice",
                "water"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "BODY_SLAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 167,
            "speciesName": "Spinarak",
            "speciesId": "spinarak",
            "baseStats": {
                "atk": 105,
                "def": 73,
                "hp": 120
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "NIGHT_SLASH",
                "SIGNAL_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 327,
            "speciesName": "Spinda",
            "speciesId": "spinda",
            "baseStats": {
                "atk": 116,
                "def": 116,
                "hp": 155
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "PSYCHO_CUT",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DIG",
                "ICY_WIND",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 442,
            "speciesName": "Spiritomb",
            "speciesId": "spiritomb",
            "baseStats": {
                "atk": 169,
                "def": 199,
                "hp": 137
            },
            "types": [
                "ghost",
                "dark"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "SHADOW_BALL",
                "SHADOW_SNEAK"
            ],
            "defaultIVs": {
                "cp1500": [
                    28.5,
                    1,
                    4,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 325,
            "speciesName": "Spoink",
            "speciesId": "spoink",
            "baseStats": {
                "atk": 125,
                "def": 122,
                "hp": 155
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "SPLASH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYBEAM",
                "SHADOW_BALL"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 7,
            "speciesName": "Squirtle",
            "speciesId": "squirtle",
            "baseStats": {
                "atk": 94,
                "def": 121,
                "hp": 127
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AQUA_TAIL",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 234,
            "speciesName": "Stantler",
            "speciesId": "stantler",
            "baseStats": {
                "atk": 192,
                "def": 131,
                "hp": 177
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "STOMP",
                "WILD_CHARGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    4,
                    6,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 398,
            "speciesName": "Staraptor",
            "speciesId": "staraptor",
            "baseStats": {
                "atk": 234,
                "def": 140,
                "hp": 198
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "CLOSE_COMBAT",
                "HEAT_WAVE"
            ],
            "defaultIVs": {
                "cp1500": [
                    20,
                    5,
                    11,
                    6
                ],
                "cp2500": [
                    35.5,
                    6,
                    9,
                    14
                ]
            }
        },
        {
            "dex": 397,
            "speciesName": "Staravia",
            "speciesId": "staravia",
            "baseStats": {
                "atk": 142,
                "def": 94,
                "hp": 146
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "HEAT_WAVE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 396,
            "speciesName": "Starly",
            "speciesId": "starly",
            "baseStats": {
                "atk": 101,
                "def": 58,
                "hp": 120
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 121,
            "speciesName": "Starmie",
            "speciesId": "starmie",
            "baseStats": {
                "atk": 210,
                "def": 184,
                "hp": 155
            },
            "types": [
                "water",
                "psychic"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "QUICK_ATTACK",
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "ICE_BEAM",
                "POWER_GEM",
                "PSYBEAM",
                "PSYCHIC",
                "THUNDER"
            ],
            "legacyMoves": [
                "PSYBEAM",
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    11,
                    10,
                    14
                ],
                "cp2500": [
                    40,
                    9,
                    11,
                    11
                ]
            }
        },
        {
            "dex": 120,
            "speciesName": "Staryu",
            "speciesId": "staryu",
            "baseStats": {
                "atk": 137,
                "def": 112,
                "hp": 102
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "POWER_GEM",
                "SWIFT"
            ],
            "legacyMoves": [
                "QUICK_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 208,
            "speciesName": "Steelix",
            "speciesId": "steelix",
            "baseStats": {
                "atk": 148,
                "def": 272,
                "hp": 181
            },
            "types": [
                "steel",
                "ground"
            ],
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "EARTHQUAKE",
                "HEAVY_SLAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    7,
                    13,
                    6
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 434,
            "speciesName": "Stunky",
            "speciesId": "stunky",
            "baseStats": {
                "atk": 121,
                "def": 90,
                "hp": 160
            },
            "types": [
                "poison",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 185,
            "speciesName": "Sudowoodo",
            "speciesId": "sudowoodo",
            "baseStats": {
                "atk": 167,
                "def": 176,
                "hp": 172
            },
            "types": [
                "rock",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    27,
                    1,
                    10,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 245,
            "speciesName": "Suicune",
            "speciesId": "suicune",
            "baseStats": {
                "atk": 180,
                "def": 235,
                "hp": 225
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "EXTRASENSORY",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "SNARL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "WATER_PULSE"
            ],
            "legacyMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    8,
                    10,
                    12
                ],
                "cp2500": [
                    31.5,
                    5,
                    15,
                    14
                ]
            }
        },
        {
            "dex": 192,
            "speciesName": "Sunflora",
            "speciesId": "sunflora",
            "baseStats": {
                "atk": 185,
                "def": 135,
                "hp": 181
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    26.5,
                    7,
                    5,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 191,
            "speciesName": "Sunkern",
            "speciesId": "sunkern",
            "baseStats": {
                "atk": 55,
                "def": 55,
                "hp": 102
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "CUT",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 283,
            "speciesName": "Surskit",
            "speciesId": "surskit",
            "baseStats": {
                "atk": 93,
                "def": 87,
                "hp": 120
            },
            "types": [
                "bug",
                "water"
            ],
            "fastMoves": [
                "BUBBLE",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "BUBBLE_BEAM",
                "SIGNAL_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 333,
            "speciesName": "Swablu",
            "speciesId": "swablu",
            "baseStats": {
                "atk": 76,
                "def": 132,
                "hp": 128
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "ASTONISH",
                "PECK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DISARMING_VOICE",
                "ICE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 317,
            "speciesName": "Swalot",
            "speciesId": "swalot",
            "baseStats": {
                "atk": 140,
                "def": 159,
                "hp": 225
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "INFESTATION",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "ICE_BEAM",
                "SLUDGE_BOMB",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    1,
                    15,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 260,
            "speciesName": "Swampert",
            "speciesId": "swampert",
            "baseStats": {
                "atk": 208,
                "def": 175,
                "hp": 225
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_WAVE",
                "SURF"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    3,
                    15,
                    2
                ],
                "cp2500": [
                    36,
                    0,
                    9,
                    1
                ]
            }
        },
        {
            "dex": 277,
            "speciesName": "Swellow",
            "speciesId": "swellow",
            "baseStats": {
                "atk": 185,
                "def": 124,
                "hp": 155
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "STEEL_WING",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "SKY_ATTACK"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    0,
                    12,
                    1
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 220,
            "speciesName": "Swinub",
            "speciesId": "swinub",
            "baseStats": {
                "atk": 90,
                "def": 69,
                "hp": 137
            },
            "types": [
                "ice",
                "ground"
            ],
            "fastMoves": [
                "POWDER_SNOW",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ICY_WIND",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 276,
            "speciesName": "Taillow",
            "speciesId": "taillow",
            "baseStats": {
                "atk": 106,
                "def": 61,
                "hp": 120
            },
            "types": [
                "normal",
                "flying"
            ],
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 114,
            "speciesName": "Tangela",
            "speciesId": "tangela",
            "baseStats": {
                "atk": 183,
                "def": 169,
                "hp": 163
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "INFESTATION",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "POWER_WHIP",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "legacyMoves": [
                "POWER_WHIP"
            ],
            "defaultIVs": {
                "cp1500": [
                    25,
                    7,
                    13,
                    8
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 465,
            "speciesName": "Tangrowth",
            "speciesId": "tangrowth",
            "baseStats": {
                "atk": 207,
                "def": 184,
                "hp": 225
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "INFESTATION",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    0,
                    11,
                    4
                ],
                "cp2500": [
                    34,
                    1,
                    2,
                    13
                ]
            }
        },
        {
            "dex": 128,
            "speciesName": "Tauros",
            "speciesId": "tauros",
            "baseStats": {
                "atk": 198,
                "def": 183,
                "hp": 181
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HORN_ATTACK",
                "IRON_HEAD"
            ],
            "defaultIVs": {
                "cp1500": [
                    21.5,
                    6,
                    13,
                    6
                ],
                "cp2500": [
                    39.5,
                    12,
                    8,
                    11
                ]
            }
        },
        {
            "dex": 216,
            "speciesName": "Teddiursa",
            "speciesId": "teddiursa",
            "baseStats": {
                "atk": 142,
                "def": 93,
                "hp": 155
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "LICK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "CRUNCH",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 72,
            "speciesName": "Tentacool",
            "speciesId": "tentacool",
            "baseStats": {
                "atk": 97,
                "def": 149,
                "hp": 120
            },
            "types": [
                "water",
                "poison"
            ],
            "fastMoves": [
                "BUBBLE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "WATER_PULSE",
                "WRAP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 73,
            "speciesName": "Tentacruel",
            "speciesId": "tentacruel",
            "baseStats": {
                "atk": 166,
                "def": 209,
                "hp": 190
            },
            "types": [
                "water",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    3,
                    11,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 468,
            "speciesName": "Togekiss",
            "speciesId": "togekiss",
            "baseStats": {
                "atk": 225,
                "def": 217,
                "hp": 198
            },
            "types": [
                "fairy",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "CHARM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "DAZZLING_GLEAM",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    16,
                    12,
                    13,
                    14
                ],
                "cp2500": [
                    28.5,
                    0,
                    14,
                    4
                ]
            }
        },
        {
            "dex": 175,
            "speciesName": "Togepi",
            "speciesId": "togepi",
            "baseStats": {
                "atk": 67,
                "def": 116,
                "hp": 111
            },
            "types": [
                "fairy",
                "none"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "PECK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "DAZZLING_GLEAM",
                "PSYSHOCK"
            ],
            "legacyMoves": [
                "ZEN_HEADBUTT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 176,
            "speciesName": "Togetic",
            "speciesId": "togetic",
            "baseStats": {
                "atk": 139,
                "def": 181,
                "hp": 146
            },
            "types": [
                "fairy",
                "flying"
            ],
            "fastMoves": [
                "EXTRASENSORY",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "STEEL_WING",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "DAZZLING_GLEAM"
            ],
            "legacyMoves": [
                "STEEL_WING",
                "ZEN_HEADBUTT"
            ],
            "defaultIVs": {
                "cp1500": [
                    37.5,
                    3,
                    8,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 255,
            "speciesName": "Torchic",
            "speciesId": "torchic",
            "baseStats": {
                "atk": 130,
                "def": 87,
                "hp": 128
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "ROCK_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 324,
            "speciesName": "Torkoal",
            "speciesId": "torkoal",
            "baseStats": {
                "atk": 151,
                "def": 203,
                "hp": 172
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "OVERHEAT",
                "SOLAR_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    28.5,
                    0,
                    12,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 389,
            "speciesName": "Torterra",
            "speciesId": "torterra",
            "baseStats": {
                "atk": 202,
                "def": 188,
                "hp": 216
            },
            "types": [
                "grass",
                "ground"
            ],
            "fastMoves": [
                "BITE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SOLAR_BEAM",
                "STONE_EDGE"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    9,
                    13,
                    13
                ],
                "cp2500": [
                    34.5,
                    3,
                    13,
                    6
                ]
            }
        },
        {
            "dex": 158,
            "speciesName": "Totodile",
            "speciesId": "totodile",
            "baseStats": {
                "atk": 117,
                "def": 109,
                "hp": 137
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "SCRATCH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CRUNCH",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 454,
            "speciesName": "Toxicroak",
            "speciesId": "toxicroak",
            "baseStats": {
                "atk": 211,
                "def": 133,
                "hp": 195
            },
            "types": [
                "poison",
                "fighting"
            ],
            "fastMoves": [
                "COUNTER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "MUD_BOMB",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    23,
                    2,
                    5,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 328,
            "speciesName": "Trapinch",
            "speciesId": "trapinch",
            "baseStats": {
                "atk": 162,
                "def": 78,
                "hp": 128
            },
            "types": [
                "ground",
                "none"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DIG",
                "SAND_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 252,
            "speciesName": "Treecko",
            "speciesId": "treecko",
            "baseStats": {
                "atk": 124,
                "def": 94,
                "hp": 120
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "BULLET_SEED",
                "POUND"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 357,
            "speciesName": "Tropius",
            "speciesId": "tropius",
            "baseStats": {
                "atk": 136,
                "def": 163,
                "hp": 223
            },
            "types": [
                "grass",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "LEAF_BLADE",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    32,
                    1,
                    3,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 387,
            "speciesName": "Turtwig",
            "speciesId": "turtwig",
            "baseStats": {
                "atk": 119,
                "def": 110,
                "hp": 146
            },
            "types": [
                "grass",
                "none"
            ],
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "SEED_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 157,
            "speciesName": "Typhlosion",
            "speciesId": "typhlosion",
            "baseStats": {
                "atk": 223,
                "def": 173,
                "hp": 186
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "BLAST_BURN",
                "FIRE_BLAST",
                "OVERHEAT",
                "SOLAR_BEAM"
            ],
            "legacyMoves": [
                "BLAST_BURN"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    4,
                    12,
                    14
                ],
                "cp2500": [
                    35.5,
                    4,
                    11,
                    7
                ]
            }
        },
        {
            "dex": 248,
            "speciesName": "Tyranitar",
            "speciesId": "tyranitar",
            "baseStats": {
                "atk": 251,
                "def": 207,
                "hp": 225
            },
            "types": [
                "rock",
                "dark"
            ],
            "fastMoves": [
                "BITE",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "SMACK_DOWN"
            ],
            "defaultIVs": {
                "cp1500": [
                    14.5,
                    5,
                    14,
                    4
                ],
                "cp2500": [
                    24,
                    4,
                    10,
                    12
                ]
            }
        },
        {
            "dex": 236,
            "speciesName": "Tyrogue",
            "speciesId": "tyrogue",
            "baseStats": {
                "atk": 64,
                "def": 64,
                "hp": 111
            },
            "types": [
                "fighting",
                "none"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
                "ROCK_SLIDE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 197,
            "speciesName": "Umbreon",
            "speciesId": "umbreon",
            "baseStats": {
                "atk": 126,
                "def": 240,
                "hp": 216
            },
            "types": [
                "dark",
                "none"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "LAST_RESORT"
            ],
            "legacyMoves": [
                "LAST_RESORT"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    0,
                    2,
                    2
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 201,
            "speciesName": "Unown",
            "speciesId": "unown",
            "baseStats": {
                "atk": 136,
                "def": 91,
                "hp": 134
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 217,
            "speciesName": "Ursaring",
            "speciesId": "ursaring",
            "baseStats": {
                "atk": 236,
                "def": 144,
                "hp": 207
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "METAL_CLAW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "HYPER_BEAM",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    19.5,
                    5,
                    9,
                    2
                ],
                "cp2500": [
                    33.5,
                    5,
                    11,
                    9
                ]
            }
        },
        {
            "dex": 480,
            "speciesName": "Uxie",
            "speciesId": "uxie",
            "baseStats": {
                "atk": 156,
                "def": 270,
                "hp": 181
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "SWIFT",
                "THUNDER"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    6,
                    11,
                    15
                ],
                "cp2500": [
                    40,
                    10,
                    14,
                    9
                ]
            }
        },
        {
            "dex": 134,
            "speciesName": "Vaporeon",
            "speciesId": "vaporeon",
            "baseStats": {
                "atk": 205,
                "def": 161,
                "hp": 277
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "HYDRO_PUMP",
                "LAST_RESORT",
                "WATER_PULSE"
            ],
            "legacyMoves": [
                "LAST_RESORT"
            ],
            "defaultIVs": {
                "cp1500": [
                    18.5,
                    0,
                    10,
                    4
                ],
                "cp2500": [
                    33.5,
                    0,
                    1,
                    9
                ]
            }
        },
        {
            "dex": 49,
            "speciesName": "Venomoth",
            "speciesId": "venomoth",
            "baseStats": {
                "atk": 179,
                "def": 143,
                "hp": 172
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION",
                "INFESTATION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "POISON_FANG",
                "PSYCHIC",
                "SILVER_WIND"
            ],
            "legacyMoves": [
                "BUG_BITE",
                "POISON_FANG"
            ],
            "defaultIVs": {
                "cp1500": [
                    27.5,
                    3,
                    11,
                    9
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 48,
            "speciesName": "Venonat",
            "speciesId": "venonat",
            "baseStats": {
                "atk": 100,
                "def": 100,
                "hp": 155
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "POISON_FANG",
                "PSYBEAM",
                "SIGNAL_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 3,
            "speciesName": "Venusaur",
            "speciesId": "venusaur",
            "baseStats": {
                "atk": 198,
                "def": 189,
                "hp": 190
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "FRENZY_PLANT",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "legacyMoves": [
                "FRENZY_PLANT"
            ],
            "defaultIVs": {
                "cp1500": [
                    20.5,
                    7,
                    6,
                    15
                ],
                "cp2500": [
                    39.5,
                    4,
                    4,
                    15
                ]
            }
        },
        {
            "dex": 416,
            "speciesName": "Vespiquen",
            "speciesId": "vespiquen",
            "baseStats": {
                "atk": 149,
                "def": 190,
                "hp": 172
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "POWER_GEM",
                "X_SCISSOR"
            ],
            "defaultIVs": {
                "cp1500": [
                    29,
                    0,
                    8,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 329,
            "speciesName": "Vibrava",
            "speciesId": "vibrava",
            "baseStats": {
                "atk": 134,
                "def": 99,
                "hp": 137
            },
            "types": [
                "ground",
                "dragon"
            ],
            "fastMoves": [
                "DRAGON_BREATH",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BULLDOZE",
                "SAND_TOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 71,
            "speciesName": "Victreebel",
            "speciesId": "victreebel",
            "baseStats": {
                "atk": 207,
                "def": 135,
                "hp": 190
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "ACID_SPRAY",
                "LEAF_TORNADO"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    3,
                    14,
                    3
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 288,
            "speciesName": "Vigoroth",
            "speciesId": "vigoroth",
            "baseStats": {
                "atk": 159,
                "def": 145,
                "hp": 190
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BRICK_BREAK",
                "BULLDOZE"
            ],
            "defaultIVs": {
                "cp1500": [
                    30.5,
                    0,
                    4,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 45,
            "speciesName": "Vileplume",
            "speciesId": "vileplume",
            "baseStats": {
                "atk": 202,
                "def": 167,
                "hp": 181
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PETAL_BLIZZARD",
                "SOLAR_BEAM",
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    22,
                    8,
                    15,
                    1
                ],
                "cp2500": [
                    40,
                    11,
                    8,
                    13
                ]
            }
        },
        {
            "dex": 313,
            "speciesName": "Volbeat",
            "speciesId": "volbeat",
            "baseStats": {
                "atk": 143,
                "def": 166,
                "hp": 163
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "STRUGGLE_BUG",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "SIGNAL_BEAM",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    36.5,
                    1,
                    8,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 100,
            "speciesName": "Voltorb",
            "speciesId": "voltorb",
            "baseStats": {
                "atk": 109,
                "def": 111,
                "hp": 120
            },
            "types": [
                "electric",
                "none"
            ],
            "fastMoves": [
                "SPARK",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "GYRO_BALL",
                "SIGNAL_BEAM",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "SIGNAL_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 37,
            "speciesName": "Vulpix",
            "speciesId": "vulpix",
            "baseStats": {
                "atk": 96,
                "def": 109,
                "hp": 116
            },
            "types": [
                "fire",
                "none"
            ],
            "fastMoves": [
                "EMBER",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 37,
            "speciesName": "Vulpix (Alolan)",
            "speciesId": "vulpix_alolan",
            "baseStats": {
                "atk": 96,
                "def": 109,
                "hp": 116
            },
            "types": [
                "ice",
                "none"
            ],
            "fastMoves": [
                "POWDER_SNOW",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "DARK_PULSE",
                "ICE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 320,
            "speciesName": "Wailmer",
            "speciesId": "wailmer",
            "baseStats": {
                "atk": 136,
                "def": 68,
                "hp": 277
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "SPLASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HEAVY_SLAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 321,
            "speciesName": "Wailord",
            "speciesId": "wailord",
            "baseStats": {
                "atk": 175,
                "def": 87,
                "hp": 347
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SURF"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    6,
                    14,
                    5
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 365,
            "speciesName": "Walrein",
            "speciesId": "walrein",
            "baseStats": {
                "atk": 182,
                "def": 176,
                "hp": 242
            },
            "types": [
                "ice",
                "water"
            ],
            "fastMoves": [
                "FROST_BREATH",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "EARTHQUAKE",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    21,
                    4,
                    5,
                    12
                ],
                "cp2500": [
                    38,
                    8,
                    10,
                    11
                ]
            }
        },
        {
            "dex": 8,
            "speciesName": "Wartortle",
            "speciesId": "wartortle",
            "baseStats": {
                "atk": 126,
                "def": 155,
                "hp": 153
            },
            "types": [
                "water",
                "none"
            ],
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "HYDRO_PUMP",
                "ICE_BEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 461,
            "speciesName": "Weavile",
            "speciesId": "weavile",
            "baseStats": {
                "atk": 243,
                "def": 171,
                "hp": 172
            },
            "types": [
                "dark",
                "ice"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOCUS_BLAST",
                "FOUL_PLAY"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    4,
                    12,
                    3
                ],
                "cp2500": [
                    33.5,
                    1,
                    8,
                    10
                ]
            }
        },
        {
            "dex": 13,
            "speciesName": "Weedle",
            "speciesId": "weedle",
            "baseStats": {
                "atk": 63,
                "def": 50,
                "hp": 120
            },
            "types": [
                "bug",
                "poison"
            ],
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 70,
            "speciesName": "Weepinbell",
            "speciesId": "weepinbell",
            "baseStats": {
                "atk": 172,
                "def": 92,
                "hp": 163
            },
            "types": [
                "grass",
                "poison"
            ],
            "fastMoves": [
                "ACID",
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "RAZOR_LEAF"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    8,
                    8,
                    13
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 110,
            "speciesName": "Weezing",
            "speciesId": "weezing",
            "baseStats": {
                "atk": 174,
                "def": 197,
                "hp": 163
            },
            "types": [
                "poison",
                "none"
            ],
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "TACKLE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "ACID"
            ],
            "defaultIVs": {
                "cp1500": [
                    24.5,
                    7,
                    14,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 340,
            "speciesName": "Whiscash",
            "speciesId": "whiscash",
            "baseStats": {
                "atk": 151,
                "def": 141,
                "hp": 242
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "MUD_BOMB",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    27,
                    6,
                    14,
                    10
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 293,
            "speciesName": "Whismur",
            "speciesId": "whismur",
            "baseStats": {
                "atk": 92,
                "def": 42,
                "hp": 162
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ASTONISH",
                "POUND"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "FLAMETHROWER",
                "STOMP"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 40,
            "speciesName": "Wigglytuff",
            "speciesId": "wigglytuff",
            "baseStats": {
                "atk": 156,
                "def": 90,
                "hp": 295
            },
            "types": [
                "normal",
                "fairy"
            ],
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "ICE_BEAM",
                "PLAY_ROUGH"
            ],
            "defaultIVs": {
                "cp1500": [
                    30,
                    5,
                    8,
                    14
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 278,
            "speciesName": "Wingull",
            "speciesId": "wingull",
            "baseStats": {
                "atk": 106,
                "def": 61,
                "hp": 120
            },
            "types": [
                "water",
                "flying"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "ICE_BEAM",
                "WATER_PULSE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 202,
            "speciesName": "Wobbuffet",
            "speciesId": "wobbuffet",
            "baseStats": {
                "atk": 60,
                "def": 106,
                "hp": 382
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "SPLASH",
                "CHARM"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 194,
            "speciesName": "Wooper",
            "speciesId": "wooper",
            "baseStats": {
                "atk": 75,
                "def": 66,
                "hp": 146
            },
            "types": [
                "water",
                "ground"
            ],
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "MUD_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 413,
            "speciesName": "Wormadam (Plant)",
            "speciesId": "wormadam_plant",
            "baseStats": {
                "atk": 141,
                "def": 180,
                "hp": 155
            },
            "types": [
                "bug",
                "grass"
            ],
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "ENERGY_BALL",
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    37,
                    2,
                    9,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 413,
            "speciesName": "Wormadam (Sandy)",
            "speciesId": "wormadam_sandy",
            "baseStats": {
                "atk": 141,
                "def": 180,
                "hp": 155
            },
            "types": [
                "bug",
                "ground"
            ],
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BULLDOZE",
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    37,
                    2,
                    9,
                    7
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 413,
            "speciesName": "Wormadam (Trash)",
            "speciesId": "wormadam_trash",
            "baseStats": {
                "atk": 127,
                "def": 175,
                "hp": 155
            },
            "types": [
                "bug",
                "steel"
            ],
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "IRON_HEAD",
                "PSYBEAM"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    10,
                    3,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 265,
            "speciesName": "Wurmple",
            "speciesId": "wurmple",
            "baseStats": {
                "atk": 75,
                "def": 59,
                "hp": 128
            },
            "types": [
                "bug",
                "none"
            ],
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 360,
            "speciesName": "Wynaut",
            "speciesId": "wynaut",
            "baseStats": {
                "atk": 41,
                "def": 86,
                "hp": 216
            },
            "types": [
                "psychic",
                "none"
            ],
            "fastMoves": [
                "COUNTER",
                "SPLASH"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 178,
            "speciesName": "Xatu",
            "speciesId": "xatu",
            "baseStats": {
                "atk": 192,
                "def": 146,
                "hp": 163
            },
            "types": [
                "psychic",
                "flying"
            ],
            "fastMoves": [
                "AIR_SLASH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "FUTURE_SIGHT",
                "OMINOUS_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    27,
                    2,
                    2,
                    11
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 193,
            "speciesName": "Yanma",
            "speciesId": "yanma",
            "baseStats": {
                "atk": 154,
                "def": 94,
                "hp": 163
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "SILVER_WIND"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 469,
            "speciesName": "Yanmega",
            "speciesId": "yanmega",
            "baseStats": {
                "atk": 231,
                "def": 156,
                "hp": 200
            },
            "types": [
                "bug",
                "flying"
            ],
            "fastMoves": [
                "BUG_BITE",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "BUG_BUZZ"
            ],
            "defaultIVs": {
                "cp1500": [
                    19,
                    2,
                    14,
                    7
                ],
                "cp2500": [
                    35,
                    2,
                    3,
                    15
                ]
            }
        },
        {
            "dex": 335,
            "speciesName": "Zangoose",
            "speciesId": "zangoose",
            "baseStats": {
                "atk": 222,
                "def": 124,
                "hp": 177
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "FURY_CUTTER",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "DIG",
                "NIGHT_SLASH"
            ],
            "defaultIVs": {
                "cp1500": [
                    23.5,
                    6,
                    6,
                    12
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 145,
            "speciesName": "Zapdos",
            "speciesId": "zapdos",
            "baseStats": {
                "atk": 253,
                "def": 185,
                "hp": 207
            },
            "types": [
                "electric",
                "flying"
            ],
            "fastMoves": [
                "CHARGE_BEAM",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDERBOLT",
                "ZAP_CANNON",
                "ANCIENT_POWER",
                "DRILL_PECK"
            ],
            "legacyMoves": [
                "THUNDER_SHOCK"
            ],
            "defaultIVs": {
                "cp1500": [
                    16,
                    2,
                    13,
                    4
                ],
                "cp2500": [
                    26.5,
                    6,
                    9,
                    7
                ]
            }
        },
        {
            "dex": 263,
            "speciesName": "Zigzagoon",
            "speciesId": "zigzagoon",
            "baseStats": {
                "atk": 58,
                "def": 80,
                "hp": 116
            },
            "types": [
                "normal",
                "none"
            ],
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "GRASS_KNOT",
                "THUNDERBOLT"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        },
        {
            "dex": 41,
            "speciesName": "Zubat",
            "speciesId": "zubat",
            "baseStats": {
                "atk": 83,
                "def": 73,
                "hp": 120
            },
            "types": [
                "poison",
                "flying"
            ],
            "fastMoves": [
                "BITE",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "POISON_FANG",
                "SLUDGE_BOMB",
                "SWIFT"
            ],
            "legacyMoves": [
                "SLUDGE_BOMB"
            ],
            "defaultIVs": {
                "cp1500": [
                    40,
                    15,
                    15,
                    15
                ],
                "cp2500": [
                    40,
                    15,
                    15,
                    15
                ]
            }
        }
    ],
    "moves": [
        {
            "moveId": "ACID",
            "name": "Acid",
            "type": "poison",
            "power": 6,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "ACID_SPRAY",
            "name": "Acid Spray",
            "type": "poison",
            "power": 20,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                0,
                -2
            ],
            "buffTarget": "opponent",
            "buffApplyChance": "1"
        },
        {
            "moveId": "AERIAL_ACE",
            "name": "Aerial Ace",
            "type": "flying",
            "power": 55,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "AIR_CUTTER",
            "name": "Air Cutter",
            "type": "flying",
            "power": 60,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "AIR_SLASH",
            "name": "Air Slash",
            "type": "flying",
            "power": 9,
            "energy": 0,
            "energyGain": 9,
            "cooldown": 1500
        },
        {
            "moveId": "ANCIENT_POWER",
            "name": "Ancient Power",
            "type": "rock",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                2,
                2
            ],
            "buffTarget": "self",
            "buffApplyChance": ".1"
        },
        {
            "moveId": "AQUA_JET",
            "name": "Aqua Jet",
            "type": "water",
            "power": 45,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "AQUA_TAIL",
            "name": "Aqua Tail",
            "type": "water",
            "power": 50,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ASTONISH",
            "name": "Astonish",
            "type": "ghost",
            "power": 5,
            "energy": 0,
            "energyGain": 9,
            "cooldown": 1500
        },
        {
            "moveId": "AURORA_BEAM",
            "name": "Aurora Beam",
            "type": "ice",
            "power": 80,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "AVALANCHE",
            "name": "Avalanche",
            "type": "ice",
            "power": 90,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BITE",
            "name": "Bite",
            "type": "dark",
            "power": 4,
            "energy": 0,
            "energyGain": 2,
            "cooldown": 500
        },
        {
            "moveId": "BLAST_BURN",
            "name": "Blast Burn",
            "type": "fire",
            "power": 110,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BLIZZARD",
            "name": "Blizzard",
            "type": "ice",
            "power": 130,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BODY_SLAM",
            "name": "Body Slam",
            "type": "normal",
            "power": 60,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BONE_CLUB",
            "name": "Bone Club",
            "type": "ground",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BRAVE_BIRD",
            "name": "Brave Bird",
            "type": "flying",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BRICK_BREAK",
            "name": "Brick Break",
            "type": "fighting",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BRINE",
            "name": "Brine",
            "type": "water",
            "power": 60,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BUBBLE",
            "name": "Bubble",
            "type": "water",
            "power": 8,
            "energy": 0,
            "energyGain": 11,
            "cooldown": 1500
        },
        {
            "moveId": "BUBBLE_BEAM",
            "name": "Bubble Beam",
            "type": "water",
            "power": 45,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BUG_BITE",
            "name": "Bug Bite",
            "type": "bug",
            "power": 3,
            "energy": 0,
            "energyGain": 3,
            "cooldown": 500
        },
        {
            "moveId": "BUG_BUZZ",
            "name": "Bug Buzz",
            "type": "bug",
            "power": 90,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BULLDOZE",
            "name": "Bulldoze",
            "type": "ground",
            "power": 80,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BULLET_PUNCH",
            "name": "Bullet Punch",
            "type": "steel",
            "power": 6,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "BULLET_SEED",
            "name": "Bullet Seed",
            "type": "grass",
            "power": 5,
            "energy": 0,
            "energyGain": 11,
            "cooldown": 1500
        },
        {
            "moveId": "CHARGE_BEAM",
            "name": "Charge Beam",
            "type": "electric",
            "power": 5,
            "energy": 0,
            "energyGain": 11,
            "cooldown": 1500
        },
        {
            "moveId": "CHARM",
            "name": "Charm",
            "type": "fairy",
            "power": 16,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1500
        },
        {
            "moveId": "CLOSE_COMBAT",
            "name": "Close Combat",
            "type": "fighting",
            "power": 100,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "CONFUSION",
            "name": "Confusion",
            "type": "psychic",
            "power": 16,
            "energy": 0,
            "energyGain": 12,
            "cooldown": 2000
        },
        {
            "moveId": "COUNTER",
            "name": "Counter",
            "type": "fighting",
            "power": 8,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "CROSS_CHOP",
            "name": "Cross Chop",
            "type": "fighting",
            "power": 50,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "CROSS_POISON",
            "name": "Cross Poison",
            "type": "poison",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "CRUNCH",
            "name": "Crunch",
            "type": "dark",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "CUT",
            "name": "Cut",
            "type": "normal",
            "power": 3,
            "energy": 0,
            "energyGain": 2,
            "cooldown": 500
        },
        {
            "moveId": "DARK_PULSE",
            "name": "Dark Pulse",
            "type": "dark",
            "power": 80,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DAZZLING_GLEAM",
            "name": "Dazzling Gleam",
            "type": "fairy",
            "power": 110,
            "energy": 70,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DIG",
            "name": "Dig",
            "type": "ground",
            "power": 100,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DISARMING_VOICE",
            "name": "Disarming Voice",
            "type": "fairy",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DISCHARGE",
            "name": "Discharge",
            "type": "electric",
            "power": 65,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DOOM_DESIRE",
            "name": "Doom Desire",
            "type": "steel",
            "power": 70,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DRACO_METEOR",
            "name": "Draco Meteor",
            "type": "dragon",
            "power": 150,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DRAGON_BREATH",
            "name": "Dragon Breath",
            "type": "dragon",
            "power": 4,
            "energy": 0,
            "energyGain": 3,
            "cooldown": 500
        },
        {
            "moveId": "DRAGON_CLAW",
            "name": "Dragon Claw",
            "type": "dragon",
            "power": 50,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DRAGON_PULSE",
            "name": "Dragon Pulse",
            "type": "dragon",
            "power": 90,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DRAGON_TAIL",
            "name": "Dragon Tail",
            "type": "dragon",
            "power": 9,
            "energy": 0,
            "energyGain": 10,
            "cooldown": 1500
        },
        {
            "moveId": "DRAINING_KISS",
            "name": "Draining Kiss",
            "type": "fairy",
            "power": 60,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DRILL_PECK",
            "name": "Drill Peck",
            "type": "flying",
            "power": 60,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DRILL_RUN",
            "name": "Drill Run",
            "type": "ground",
            "power": 80,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "DYNAMIC_PUNCH",
            "name": "Dynamic Punch",
            "type": "fighting",
            "power": 90,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "EARTHQUAKE",
            "name": "Earthquake",
            "type": "ground",
            "power": 120,
            "energy": 65,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "EARTH_POWER",
            "name": "Earth Power",
            "type": "ground",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                0,
                -1
            ],
            "buffTarget": "opponent",
            "buffApplyChance": ".1"
        },
        {
            "moveId": "EMBER",
            "name": "Ember",
            "type": "fire",
            "power": 6,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1000
        },
        {
            "moveId": "ENERGY_BALL",
            "name": "Energy Ball",
            "type": "grass",
            "power": 90,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "EXTRASENSORY",
            "name": "Extrasensory",
            "type": "psychic",
            "power": 8,
            "energy": 0,
            "energyGain": 10,
            "cooldown": 1500
        },
        {
            "moveId": "FEINT_ATTACK",
            "name": "Feint Attack",
            "type": "dark",
            "power": 6,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1000
        },
        {
            "moveId": "FIRE_BLAST",
            "name": "Fire Blast",
            "type": "fire",
            "power": 140,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FIRE_FANG",
            "name": "Fire Fang",
            "type": "fire",
            "power": 7,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "FIRE_PUNCH",
            "name": "Fire Punch",
            "type": "fire",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "BLAZE_KICK",
            "name": "Blaze Kick",
            "type": "fire",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FIRE_SPIN",
            "name": "Fire Spin",
            "type": "fire",
            "power": 9,
            "energy": 0,
            "energyGain": 10,
            "cooldown": 1500
        },
        {
            "moveId": "FLAME_BURST",
            "name": "Flame Burst",
            "type": "fire",
            "power": 70,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FLAME_CHARGE",
            "name": "Flame Charge",
            "type": "fire",
            "power": 70,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FLAME_WHEEL",
            "name": "Flame Wheel",
            "type": "fire",
            "power": 60,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FLAMETHROWER",
            "name": "Flamethrower",
            "type": "fire",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FLASH_CANNON",
            "name": "Flash Cannon",
            "type": "steel",
            "power": 110,
            "energy": 65,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FOCUS_BLAST",
            "name": "Focus Blast",
            "type": "fighting",
            "power": 150,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FOUL_PLAY",
            "name": "Foul Play",
            "type": "dark",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FRENZY_PLANT",
            "name": "Frenzy Plant",
            "type": "grass",
            "power": 100,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "FROST_BREATH",
            "name": "Frost Breath",
            "type": "ice",
            "power": 7,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "FURY_CUTTER",
            "name": "Fury Cutter",
            "type": "bug",
            "power": 2,
            "energy": 0,
            "energyGain": 4,
            "cooldown": 500
        },
        {
            "moveId": "FUTURE_SIGHT",
            "name": "Future Sight",
            "type": "psychic",
            "power": 120,
            "energy": 65,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "GIGA_DRAIN",
            "name": "Giga Drain",
            "type": "grass",
            "power": 50,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "GRASS_KNOT",
            "name": "Grass Knot",
            "type": "grass",
            "power": 90,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "GUNK_SHOT",
            "name": "Gunk Shot",
            "type": "poison",
            "power": 130,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "GYRO_BALL",
            "name": "Gyro Ball",
            "type": "steel",
            "power": 80,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HEART_STAMP",
            "name": "Heart Stamp",
            "type": "psychic",
            "power": 40,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HEAT_WAVE",
            "name": "Heat Wave",
            "type": "fire",
            "power": 95,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HEAVY_SLAM",
            "name": "Heavy Slam",
            "type": "steel",
            "power": 70,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HEX",
            "name": "Hex",
            "type": "ghost",
            "power": 6,
            "energy": 0,
            "energyGain": 11,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_BUG",
            "name": "Hidden Power (Bug)",
            "type": "bug",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_DARK",
            "name": "Hidden Power (Dark)",
            "type": "dark",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_DRAGON",
            "name": "Hidden Power (Dragon)",
            "type": "dragon",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_ELECTRIC",
            "name": "Hidden Power (Electric)",
            "type": "electric",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_FIGHTING",
            "name": "Hidden Power (Fighting)",
            "type": "fighting",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_FIRE",
            "name": "Hidden Power (Fire)",
            "type": "fire",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_FLYING",
            "name": "Hidden Power (Flying)",
            "type": "flying",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_GHOST",
            "name": "Hidden Power (Ghost)",
            "type": "ghost",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_GRASS",
            "name": "Hidden Power (Grass)",
            "type": "grass",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_GROUND",
            "name": "Hidden Power (Ground)",
            "type": "ground",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_ICE",
            "name": "Hidden Power (Ice)",
            "type": "ice",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_POISON",
            "name": "Hidden Power (Poison)",
            "type": "poison",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_PSYCHIC",
            "name": "Hidden Power (Psychic)",
            "type": "psychic",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_ROCK",
            "name": "Hidden Power (Rock)",
            "type": "rock",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_STEEL",
            "name": "Hidden Power (Steel)",
            "type": "steel",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HIDDEN_POWER_WATER",
            "name": "Hidden Power (Water)",
            "type": "water",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "HORN_ATTACK",
            "name": "Horn Attack",
            "type": "normal",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HURRICANE",
            "name": "Hurricane",
            "type": "flying",
            "power": 110,
            "energy": 65,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HYDRO_CANNON",
            "name": "Hydro Cannon",
            "type": "water",
            "power": 90,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HYDRO_PUMP",
            "name": "Hydro Pump",
            "type": "water",
            "power": 130,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HYDRO_PUMP_BLASTOISE",
            "name": "Hydro Pump Blastoise",
            "type": "water",
            "power": 90,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HYPER_BEAM",
            "name": "Hyper Beam",
            "type": "normal",
            "power": 150,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "HYPER_FANG",
            "name": "Hyper Fang",
            "type": "normal",
            "power": 80,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ICE_BEAM",
            "name": "Ice Beam",
            "type": "ice",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ICE_PUNCH",
            "name": "Ice Punch",
            "type": "ice",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ICE_SHARD",
            "name": "Ice Shard",
            "type": "ice",
            "power": 9,
            "energy": 0,
            "energyGain": 10,
            "cooldown": 1500
        },
        {
            "moveId": "ICY_WIND",
            "name": "Icy Wind",
            "type": "ice",
            "power": 60,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "INFESTATION",
            "name": "Infestation",
            "type": "bug",
            "power": 6,
            "energy": 0,
            "energyGain": 11,
            "cooldown": 1500
        },
        {
            "moveId": "IRON_HEAD",
            "name": "Iron Head",
            "type": "steel",
            "power": 70,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "IRON_TAIL",
            "name": "Iron Tail",
            "type": "steel",
            "power": 9,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1500
        },
        {
            "moveId": "KARATE_CHOP",
            "name": "Karate Chop",
            "type": "fighting",
            "power": 5,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "LAST_RESORT",
            "name": "Last Resort",
            "type": "normal",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "LEAF_BLADE",
            "name": "Leaf Blade",
            "type": "grass",
            "power": 70,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "LEAF_TORNADO",
            "name": "Leaf Tornado",
            "type": "grass",
            "power": 45,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                -1,
                0
            ],
            "buffTarget": "opponent",
            "buffApplyChance": ".5"
        },
        {
            "moveId": "LICK",
            "name": "Lick",
            "type": "ghost",
            "power": 3,
            "energy": 0,
            "energyGain": 3,
            "cooldown": 500
        },
        {
            "moveId": "LOW_KICK",
            "name": "Low Kick",
            "type": "fighting",
            "power": 4,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "LOW_SWEEP",
            "name": "Low Sweep",
            "type": "fighting",
            "power": 40,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MAGNET_BOMB",
            "name": "Magnet Bomb",
            "type": "steel",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MEGA_DRAIN",
            "name": "Mega Drain",
            "type": "grass",
            "power": 25,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MEGAHORN",
            "name": "Megahorn",
            "type": "bug",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "METAL_CLAW",
            "name": "Metal Claw",
            "type": "steel",
            "power": 5,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1000
        },
        {
            "moveId": "METEOR_MASH",
            "name": "Meteor Mash",
            "type": "steel",
            "power": 100,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MIRROR_COAT",
            "name": "Mirror Coat",
            "type": "psychic",
            "power": 60,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MOONBLAST",
            "name": "Moonblast",
            "type": "fairy",
            "power": 130,
            "energy": 70,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MUD_BOMB",
            "name": "Mud Bomb",
            "type": "ground",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "MUD_SHOT",
            "name": "Mud Shot",
            "type": "ground",
            "power": 3,
            "energy": 0,
            "energyGain": 9,
            "cooldown": 1000
        },
        {
            "moveId": "MUD_SLAP",
            "name": "Mud Slap",
            "type": "ground",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "NIGHT_SHADE",
            "name": "Night Shade",
            "type": "ghost",
            "power": 60,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "NIGHT_SLASH",
            "name": "Night Slash",
            "type": "dark",
            "power": 50,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "OMINOUS_WIND",
            "name": "Ominous Wind",
            "type": "ghost",
            "power": 50,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                2,
                2
            ],
            "buffTarget": "self",
            "buffApplyChance": ".1"
        },
        {
            "moveId": "ORIGIN_PULSE",
            "name": "Origin Pulse",
            "type": "water",
            "power": 130,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "OUTRAGE",
            "name": "Outrage",
            "type": "dragon",
            "power": 110,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "OVERHEAT",
            "name": "Overheat",
            "type": "fire",
            "power": 150,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PARABOLIC_CHARGE",
            "name": "Parabolic Charge",
            "type": "electric",
            "power": 25,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PECK",
            "name": "Peck",
            "type": "flying",
            "power": 6,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "PETAL_BLIZZARD",
            "name": "Petal Blizzard",
            "type": "grass",
            "power": 110,
            "energy": 65,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PLAY_ROUGH",
            "name": "Play Rough",
            "type": "fairy",
            "power": 90,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "POISON_FANG",
            "name": "Poison Fang",
            "type": "poison",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "POISON_JAB",
            "name": "Poison Jab",
            "type": "poison",
            "power": 6,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "POISON_STING",
            "name": "Poison Sting",
            "type": "poison",
            "power": 3,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1000
        },
        {
            "moveId": "POUND",
            "name": "Pound",
            "type": "normal",
            "power": 5,
            "energy": 0,
            "energyGain": 4,
            "cooldown": 1000
        },
        {
            "moveId": "POWDER_SNOW",
            "name": "Powder Snow",
            "type": "ice",
            "power": 4,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1000
        },
        {
            "moveId": "POWER_GEM",
            "name": "Power Gem",
            "type": "rock",
            "power": 80,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "POWER_UP_PUNCH",
            "name": "Power-Up Punch",
            "type": "fighting",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                1,
                0
            ],
            "buffTarget": "self",
            "buffApplyChance": "1"
        },
        {
            "moveId": "POWER_WHIP",
            "name": "Power Whip",
            "type": "grass",
            "power": 90,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PRECIPICE_BLADES",
            "name": "Precipice Blades",
            "type": "ground",
            "power": 130,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PRESENT",
            "name": "Present",
            "type": "normal",
            "power": 3,
            "energy": 0,
            "energyGain": 12,
            "cooldown": 1500
        },
        {
            "moveId": "PSYBEAM",
            "name": "Psybeam",
            "type": "psychic",
            "power": 70,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PSYCHIC",
            "name": "Psychic",
            "type": "psychic",
            "power": 100,
            "energy": 70,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PSYCHO_BOOST",
            "name": "Psycho Boost",
            "type": "psychic",
            "power": 70,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PSYCHO_CUT",
            "name": "Psycho Cut",
            "type": "psychic",
            "power": 3,
            "energy": 0,
            "energyGain": 9,
            "cooldown": 1000
        },
        {
            "moveId": "PSYSHOCK",
            "name": "Psyshock",
            "type": "psychic",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "PSYSTRIKE",
            "name": "Psystrike",
            "type": "psychic",
            "power": 100,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "QUICK_ATTACK",
            "name": "Quick Attack",
            "type": "normal",
            "power": 5,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "RAZOR_LEAF",
            "name": "Razor Leaf",
            "type": "grass",
            "power": 11,
            "energy": 0,
            "energyGain": 4,
            "cooldown": 1000
        },
        {
            "moveId": "REST",
            "name": "Rest",
            "type": "normal",
            "power": 50,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ROCK_BLAST",
            "name": "Rock Blast",
            "type": "rock",
            "power": 50,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ROCK_SLIDE",
            "name": "Rock Slide",
            "type": "rock",
            "power": 80,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ROCK_SMASH",
            "name": "Rock Smash",
            "type": "fighting",
            "power": 9,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1500
        },
        {
            "moveId": "ROCK_THROW",
            "name": "Rock Throw",
            "type": "rock",
            "power": 8,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "ROCK_TOMB",
            "name": "Rock Tomb",
            "type": "rock",
            "power": 70,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SAND_TOMB",
            "name": "Sand Tomb",
            "type": "ground",
            "power": 80,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SCALD",
            "name": "Scald",
            "type": "water",
            "power": 80,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SCALD_BLASTOISE",
            "name": "Scald Blastoise",
            "type": "water",
            "power": 50,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SCRATCH",
            "name": "Scratch",
            "type": "normal",
            "power": 4,
            "energy": 0,
            "energyGain": 2,
            "cooldown": 500
        },
        {
            "moveId": "SEED_BOMB",
            "name": "Seed Bomb",
            "type": "grass",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SHADOW_BALL",
            "name": "Shadow Ball",
            "type": "ghost",
            "power": 100,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SHADOW_CLAW",
            "name": "Shadow Claw",
            "type": "ghost",
            "power": 6,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1000
        },
        {
            "moveId": "SHADOW_PUNCH",
            "name": "Shadow Punch",
            "type": "ghost",
            "power": 40,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SHADOW_SNEAK",
            "name": "Shadow Sneak",
            "type": "ghost",
            "power": 50,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SIGNAL_BEAM",
            "name": "Signal Beam",
            "type": "bug",
            "power": 75,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SILVER_WIND",
            "name": "Silver Wind",
            "type": "bug",
            "power": 70,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                2,
                2
            ],
            "buffTarget": "self",
            "buffApplyChance": ".1"
        },
        {
            "moveId": "SKULL_BASH",
            "name": "Skull Bash",
            "type": "normal",
            "power": 130,
            "energy": 75,
            "energyGain": 0,
            "cooldown": 500,
            "buffs": [
                0,
                1
            ],
            "buffTarget": "self",
            "buffApplyChance": "1"
        },
        {
            "moveId": "SKY_ATTACK",
            "name": "Sky Attack",
            "type": "flying",
            "power": 80,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SLUDGE",
            "name": "Sludge",
            "type": "poison",
            "power": 50,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SLUDGE_BOMB",
            "name": "Sludge Bomb",
            "type": "poison",
            "power": 80,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SLUDGE_WAVE",
            "name": "Sludge Wave",
            "type": "poison",
            "power": 110,
            "energy": 65,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SMACK_DOWN",
            "name": "Smack Down",
            "type": "rock",
            "power": 12,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "SNARL",
            "name": "Snarl",
            "type": "dark",
            "power": 8,
            "energy": 0,
            "energyGain": 10,
            "cooldown": 1500
        },
        {
            "moveId": "SOLAR_BEAM",
            "name": "Solar Beam",
            "type": "grass",
            "power": 150,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SPARK",
            "name": "Spark",
            "type": "electric",
            "power": 4,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1000
        },
        {
            "moveId": "SPLASH",
            "name": "Splash",
            "type": "water",
            "power": 0,
            "energy": 0,
            "energyGain": 12,
            "cooldown": 2000
        },
        {
            "moveId": "STEEL_WING",
            "name": "Steel Wing",
            "type": "steel",
            "power": 7,
            "energy": 0,
            "energyGain": 5,
            "cooldown": 1000
        },
        {
            "moveId": "STOMP",
            "name": "Stomp",
            "type": "normal",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "STONE_EDGE",
            "name": "Stone Edge",
            "type": "rock",
            "power": 100,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "STRUGGLE",
            "name": "Struggle",
            "type": "normal",
            "power": 35,
            "energy": 100,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "STRUGGLE_BUG",
            "name": "Struggle Bug",
            "type": "bug",
            "power": 9,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "SUBMISSION",
            "name": "Submission",
            "type": "fighting",
            "power": 60,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SUCKER_PUNCH",
            "name": "Sucker Punch",
            "type": "dark",
            "power": 5,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "SURF",
            "name": "Surf",
            "type": "water",
            "power": 65,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "SWIFT",
            "name": "Swift",
            "type": "normal",
            "power": 60,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "TACKLE",
            "name": "Tackle",
            "type": "normal",
            "power": 3,
            "energy": 0,
            "energyGain": 2,
            "cooldown": 500
        },
        {
            "moveId": "TAKE_DOWN",
            "name": "Take Down",
            "type": "normal",
            "power": 5,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "THUNDER",
            "name": "Thunder",
            "type": "electric",
            "power": 100,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "THUNDER_PUNCH",
            "name": "Thunder Punch",
            "type": "electric",
            "power": 55,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "THUNDER_SHOCK",
            "name": "Thunder Shock",
            "type": "electric",
            "power": 3,
            "energy": 0,
            "energyGain": 9,
            "cooldown": 1000
        },
        {
            "moveId": "THUNDERBOLT",
            "name": "Thunderbolt",
            "type": "electric",
            "power": 90,
            "energy": 55,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "TRANSFORM",
            "name": "Transform",
            "type": "normal",
            "power": 0,
            "energy": 0,
            "energyGain": 0,
            "cooldown": 1500
        },
        {
            "moveId": "TWISTER",
            "name": "Twister",
            "type": "dragon",
            "power": 45,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "VICE_GRIP",
            "name": "Vice Grip",
            "type": "normal",
            "power": 40,
            "energy": 40,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "VINE_WHIP",
            "name": "Vine Whip",
            "type": "grass",
            "power": 5,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1000
        },
        {
            "moveId": "VOLT_SWITCH",
            "name": "Volt Switch",
            "type": "electric",
            "power": 12,
            "energy": 0,
            "energyGain": 10,
            "cooldown": 2500
        },
        {
            "moveId": "WATER_GUN",
            "name": "Water Gun",
            "type": "water",
            "power": 3,
            "energy": 0,
            "energyGain": 3,
            "cooldown": 500
        },
        {
            "moveId": "WATER_GUN_FAST_BLASTOISE",
            "name": "Water Gun Fast Blastoise",
            "type": "water",
            "power": 6,
            "energy": 0,
            "energyGain": 4,
            "cooldown": 1000
        },
        {
            "moveId": "WATER_PULSE",
            "name": "Water Pulse",
            "type": "water",
            "power": 70,
            "energy": 60,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WATERFALL",
            "name": "Waterfall",
            "type": "water",
            "power": 12,
            "energy": 0,
            "energyGain": 8,
            "cooldown": 1500
        },
        {
            "moveId": "WEATHER_BALL_FIRE",
            "name": "Weather Ball (Fire)",
            "type": "fire",
            "power": 60,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WEATHER_BALL_ICE",
            "name": "Weather Ball (Ice)",
            "type": "ice",
            "power": 60,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WEATHER_BALL_ROCK",
            "name": "Weather Ball (Normal)",
            "type": "normal",
            "power": 60,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WEATHER_BALL_WATER",
            "name": "Weather Ball (Water)",
            "type": "water",
            "power": 60,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WILD_CHARGE",
            "name": "Wild Charge",
            "type": "electric",
            "power": 90,
            "energy": 50,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WING_ATTACK",
            "name": "Wing Attack",
            "type": "flying",
            "power": 5,
            "energy": 0,
            "energyGain": 7,
            "cooldown": 1000
        },
        {
            "moveId": "WRAP",
            "name": "Wrap",
            "type": "normal",
            "power": 60,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WRAP_GREEN",
            "name": "Wrap Green",
            "type": "normal",
            "power": 25,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "WRAP_PINK",
            "name": "Wrap Pink",
            "type": "normal",
            "power": 25,
            "energy": 45,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "X_SCISSOR",
            "name": "X-Scissor",
            "type": "bug",
            "power": 45,
            "energy": 35,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "YAWN",
            "name": "Yawn",
            "type": "normal",
            "power": 0,
            "energy": 0,
            "energyGain": 12,
            "cooldown": 2000
        },
        {
            "moveId": "ZAP_CANNON",
            "name": "Zap Cannon",
            "type": "electric",
            "power": 150,
            "energy": 80,
            "energyGain": 0,
            "cooldown": 500
        },
        {
            "moveId": "ZEN_HEADBUTT",
            "name": "Zen Headbutt",
            "type": "psychic",
            "power": 8,
            "energy": 0,
            "energyGain": 6,
            "cooldown": 1500
        }
    ]
}