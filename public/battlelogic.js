function convertToDamage(move, attacking) {
    var user = attacking ? team[currentpoke] : enemyteam[currentenemypoke];
    var receiver = !attacking ? team[currentpoke] : enemyteam[currentenemypoke];
    var pokedata = gm.getPokemonById(user.name);
    var movedata = gm.getMoveById(move);

    var bonusMultiplier = 1.3;
    var power = movedata.power;
    var effectiveness = getEffectiveness(movedata.type, gm.getPokemonById(receiver.name).types);
    let stab = moveGetsSTAB(movedata, pokedata);
    var atk = user.atk;
    var def = receiver.def;

    var atkboosts = boostMultiplier(user.atkboosts);
    var defboosts = boostMultiplier(receiver.defboosts);
    var totalboosts = atkboosts / defboosts;


    var damage = Math.floor(totalboosts * power * stab * (atk / def) * effectiveness * 0.5 * bonusMultiplier) + 1;
    if(damage > 5){
        //console.log(damage);
        //console.log(atkboosts);
    }
    return damage;
}
function boostMultiplier(boosts) {

    var temp = 1 + 0.25 * Math.abs(boosts);
    return boosts >= 0 ? temp : 1 / temp;
}
function limit(stat) {
    if (stat > 4)
        stat = 4;
    if (stat < -4)
        stat = -4;
    return stat;
}
function limitboosts() {
    team[currentpoke].atkboosts = limit(team[currentpoke].atkboosts);
    team[currentpoke].defboosts = limit(team[currentpoke].defboosts);
    enemyteam[currentenemypoke].atkboosts = limit(enemyteam[currentenemypoke].atkboosts);
    enemyteam[currentenemypoke].defboosts = limit(enemyteam[currentenemypoke].defboosts);
}
function getEffectiveness(moveType, targetTypes) {
    var effectiveness = 1;

    var moveType = moveType.toLowerCase();

    for (var i = 0; i < targetTypes.length; i++) {
        var type = targetTypes[i].toLowerCase();
        var traits = getTypeTraits(type);

        if (traits.weaknesses.indexOf(moveType) > -1) {
            effectiveness *= 1.6;
        } else if (traits.resistances.indexOf(moveType) > -1) {
            effectiveness *= .625;
        } else if (traits.immunities.indexOf(moveType) > -1) {
            effectiveness *= .390625;
        }
    }

    return effectiveness;
}
function moveGetsSTAB(move, user) {
    let stab = 1;
    for (var t in user.types) {
        if (user.types[t] === move.type && stab === 1)
            stab = 1.2;
    }

    return stab;
}
function convertToEnergy(move) {
    var m = gm.getMoveById(move);
    return m.energyGain - m.energy;
}

function getTypeTraits(type) {
    var traits = {
        weaknesses: [],
        resistances: [],
        immunities: []
    };

    switch (type) {
        case "normal":
            traits = {resistances: [],
                weaknesses: ["fighting"],
                immunities: ["ghost"]};
            break;

        case "fighting":
            traits = {resistances: ["rock", "bug", "dark"],
                weaknesses: ["flying", "psychic", "fairy"],
                immunities: []};
            break;

        case "flying":
            traits = {resistances: ["fighting", "bug", "grass"],
                weaknesses: ["rock", "electric", "ice"],
                immunities: ["ground"]};
            break;

        case "poison":
            traits = {resistances: ["fighting", "poison", "bug", "fairy", "grass"],
                weaknesses: ["ground", "psychic"],
                immunities: []};
            break;

        case "ground":
            traits = {resistances: ["poison", "rock"],
                weaknesses: ["water", "grass", "ice"],
                immunities: ["electric"]};
            break;

        case "rock":
            traits = {resistances: ["normal", "flying", "poison", "fire"],
                weaknesses: ["fighting", "ground", "steel", "water", "grass"],
                immunities: []};
            break;

        case "bug":
            traits = {resistances: ["fighting", "ground", "grass"],
                weaknesses: ["flying", "rock", "fire"],
                immunities: []};
            break;

        case "ghost":
            traits = {resistances: ["poison", "bug"],
                weaknesses: ["ghost", "dark"],
                immunities: ["normal", "fighting"]};
            break;

        case "steel":
            traits = {resistances: ["normal", "flying", "rock", "bug", "steel", "grass", "psychic", "ice", "dragon", "fairy"],
                weaknesses: ["fighting", "ground", "fire"],
                immunities: ["poison"]};
            break;

        case "fire":
            traits = {resistances: ["bug", "steel", "fire", "grass", "ice", "fairy"],
                weaknesses: ["ground", "rock", "water"],
                immunities: []};
            break;

        case "water":
            traits = {resistances: ["steel", "fire", "water", "ice"],
                weaknesses: ["grass", "electric"],
                immunities: []};
            break;

        case "grass":
            traits = {resistances: ["ground", "water", "grass", "electric"],
                weaknesses: ["flying", "poison", "bug", "fire", "ice"],
                immunities: []};
            break;

        case "electric":
            traits = {resistances: ["flying", "steel", "electric"],
                weaknesses: ["ground"],
                immunities: []};
            break;

        case "psychic":
            traits = {resistances: ["fighting", "psychic"],
                weaknesses: ["bug", "ghost", "dark"],
                immunities: []};
            break;

        case "ice":
            traits = {resistances: ["ice"],
                weaknesses: ["fighting", "fire", "steel", "rock"],
                immunities: []};
            break;

        case "dragon":
            traits = {resistances: ["fire", "water", "grass", "electric"],
                weaknesses: ["dragon", "ice", "fairy"],
                immunities: []};
            break;

        case "dark":
            traits = {resistances: ["ghost", "dark"],
                weaknesses: ["fighting", "fairy", "bug"],
                immunities: ["psychic"]};
            break;

        case "fairy":
            traits = {resistances: ["fighting", "bug", "dark"],
                weaknesses: ["poison", "steel"],
                immunities: ["dragon"]};
            break;
    }

    return traits;
}

var cpms = [0.094, 0.135137432, 0.16639787, 0.192650919, 0.21573247, 0.236572661, 0.25572005, 0.273530381, 0.29024988, 0.306057378, 0.3210876, 0.335445036, 0.34921268, 0.362457751, 0.3752356, 0.387592416, 0.39956728, 0.411193551, 0.4225, 0.432926409, 0.44310755, 0.453059959, 0.4627984, 0.472336093, 0.48168495, 0.4908558, 0.49985844, 0.508701765, 0.51739395, 0.525942511, 0.5343543, 0.542635738, 0.5507927, 0.558830586, 0.5667545, 0.574569133, 0.5822789, 0.589887907, 0.5974, 0.604823665, 0.6121573, 0.619404122, 0.6265671, 0.633649143, 0.64065295, 0.647580967, 0.65443563, 0.661219252, 0.667934, 0.674581896, 0.6811649, 0.687684904, 0.69414365, 0.70054287, 0.7068842, 0.713169109, 0.7193991, 0.725575614, 0.7317, 0.734741009, 0.7377695, 0.740785594, 0.74378943, 0.746781211, 0.74976104, 0.752729087, 0.7556855, 0.758630368, 0.76156384, 0.764486065, 0.76739717, 0.770297266, 0.7731865, 0.776064962, 0.77893275, 0.781790055, 0.784637, 0.787473608, 0.7903];


//ruah ignore this
function maxTradeLevel(poke) {
    var p = gm.getPokemonById(poke);
    if (p === undefined) {
        masterdata.pokemon.sort(function (a, b) {
            return (a.dex > b.dex) ? 1 : -1;
        });
        var n = "";
        masterdata.pokemon.forEach(function (item, index) {
            if (item.speciesId.startsWith(poke)) {
                p = gm.getPokemonById(item.speciesId);
                n = item.speciesId;

            }

        });
        console.log(n);
    }

    var bs = p.baseStats;
    var prev;
    for (var level = 1; level <= 40; level += 0.5) {
        var cpm = cpms[(level - 1) * 2];
        var cp = (bs.atk + 15) * Math.sqrt(bs.def + 15) * Math.sqrt(bs.hp + 15) * cpm * cpm * 0.1;
        if (cp > 1500) {
            console.log(prev);
            break;
        }
        prev = level;
    }
    for (var level = 1; level <= 40; level += 0.5) {
        var cpm = cpms[(level - 1) * 2];
        var cp = (bs.atk + 15) * Math.sqrt(bs.def + 15) * Math.sqrt(bs.hp + 15) * cpm * cpm * 0.1;
        if (cp > 2500) {
            console.log(prev);
            break;
        }
        prev = level;
    }
}