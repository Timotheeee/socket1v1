//stuff from pvpoke

var GameMaster = (function () {
    var instance;

    function createInstance(interface) {
        var object = new Object();

        object.data = {};
        object.rankings = [];
        object.groups = [];
        object.loadedData = 0;

        object.data = masterdata;

        // Return a Pokemon object given species ID

        object.getPokemonById = function (id) {
            var pokemon;
            var id2 = id.toLowerCase();
            if(id2 === "gastrodon")
                id2= "gastrodon_east_sea";

            $.each(object.data.pokemon, function (index, poke) {

                if (poke.speciesId === id2) {
                    pokemon = poke;
                    return;
                }
            });

            return pokemon;
        }

        object.generateDefaultIVs = function () {

            $.each(object.data.pokemon, function (index, poke) {
                var leagues = [1500, 2500];
                var battle = new Battle();

                var pokemon = new Pokemon(poke.speciesId, 0, battle);
                var entry = object.getPokemonById(poke.speciesId);
                battle.setNewPokemon(pokemon, 0, false);

                var defaultIVs = {
                    cp1500: [],
                    cp2500: []
                };

                for (var i = 0; i < leagues.length; i++) {
                    battle.setCP(leagues[i]);

                    var cp = pokemon.calculateCP(.79030001, 15, 15, 15);

                    if (cp > leagues[i]) {
                        var combinations = pokemon.generateIVCombinations("overall", 1, 4096);
                        var defaultIndex = Math.floor(combinations.length * .12207);

                        var level = combinations[defaultIndex].level;
                        var ivs = combinations[defaultIndex].ivs;
                        var combination = [level, ivs.atk, ivs.def, ivs.hp];

                        defaultIVs["cp" + leagues[i]] = combination;
                    } else {
                        defaultIVs["cp" + leagues[i]] = [40, 15, 15, 15];
                    }
                }

                entry.defaultIVs = defaultIVs;
            });

            var json = JSON.stringify(object.data);

            console.log(json);
        }

        // Return a move object from the GameMaster file given move ID

        object.getMoveById = function (id) {
            var move;

            $.each(object.data.moves, function (index, m) {

                if (m.moveId == id) {

                    // Generate move abbreviation

                    var arr = m.moveId.split('_');
                    var abbreviation = '';

                    for (var i = 0; i < arr.length; i++) {
                        abbreviation += arr[i].charAt(0);
                    }

                    move = {
                        moveId: m.moveId,
                        name: m.name,
                        abbreviation: abbreviation,
                        type: m.type,
                        power: m.power,
                        energy: m.energy,
                        energyGain: m.energyGain,
                        cooldown: m.cooldown
                    };

                    if (m.buffs) {
                        move.buffs = m.buffs;
                        move.buffApplyChance = parseFloat(m.buffApplyChance);
                        move.buffTarget = m.buffTarget;
                    }

                    return;
                }
            });

            if (!move) {
                console.log(id + " missing");
            }

            return move;
        }

        // Load and return ranking data JSON

        object.loadRankingData = function (caller, category, league, cup) {

            var key = cup + "" + category + "" + league;

            if (!object.rankings[key]) {
                var file = webRoot + "data/" + cup + "/" + category + "/" + "rankings-" + league + ".json?v=115";

                $.getJSON(file, function (data) {
                    object.rankings[key] = data;
                    object.loadedData++;

                    caller.displayRankingData(data);
                });
            } else {
                caller.displayRankingData(object.rankings[key]);
            }
        }

        // Load quick fill group JSON

        object.loadGroupData = function (caller, group) {

            var key = group;

            if (!object.groups[key]) {
                var file = webRoot + "data/groups/" + group + ".json?v=115";

                $.getJSON(file, function (data) {

                    // Sort alphabetically

                    data.sort((a, b) => (a.speciesId > b.speciesId) ? 1 : ((b.speciesId > a.speciesId) ? -1 : 0));

                    object.groups[key] = data;
                    caller.quickFillGroup(data);
                });
            } else {
                caller.quickFillGroup(object.groups[key]);
            }
        }

        // Modify a Pokemon data entry

        object.modifyPokemonEntry = function (id, type, props) {
            $.each(object.data.pokemon, function (index, poke) {

                if (poke.speciesId == id) {

                    switch (type) {
                        case "movepool":

                            var movepool = (props.moveType == "fast") ? poke.fastMoves : poke.chargedMoves;
                            movepool.push(props.moveId);

                            break;
                    }
                }
            });
        }


        return object;
    }

    return {
        getInstance: function (interface) {
            if (!instance) {
                instance = createInstance(interface);
            }
            return instance;
        }
    };
})();
