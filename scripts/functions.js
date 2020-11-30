var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./constants", "./data/typeEffectMap", "./data/types"], function (require, exports, Constants, typeEffectMap_1, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Constants = __importStar(Constants);
    function find(arr, cb) {
        return arr.filter(cb)[0];
    }
    exports.find = find;
    function getEffectModifier(a, b) {
        var ta = types_1.types[a];
        var tbs = b.type.map(function (typeName) {
            var typeValue = types_1.types[typeName];
            var o = find(typeEffectMap_1.typeEffectMap[ta], function (m) { return m[typeValue] != null; });
            return o ? o[typeValue] : 1;
        });
        return tbs.reduce(function (p, c) { return p * c; }, 1);
    }
    exports.getEffectModifier = getEffectModifier;
    function damageRng() {
        return Math.floor(Math.random() *
            (Constants.damageRangeMax - Constants.damageRangeMin)) +
            Constants.damageRangeMin;
    }
    exports.damageRng = damageRng;
    /*
    let baseDamage = Math.floor(
        Math.floor((Math.floor((2 * lv) / 5 + 2) * Math.max(1, at) * move.bp) / Math.max(1, df)) / 50
      );
    
    if (move.hasType(...attacker.types)) {
        baseDamage = Math.floor(baseDamage * 1.5);
      }
    
      baseDamage = Math.floor(baseDamage * typeEffectiveness);
    
      A = attacker's Level
    B = attacker's Attack or Special
    C = attack Power
    D = defender's Defense or Special
    X = same-Type attack bonus (1 or 1.5)
    Y = Type modifiers (40, 20, 10, 5, 2.5, or 0)
    Z = a random number between 217 and 255
        // ((((((((((2*A)/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255);
    
      */
    function getDamage(a, d, m, random) {
        if (random === void 0) { random = damageRng(); }
        var aBase = a.pokemon();
        var dBase = d.pokemon();
        if (m.category === "status") {
            return 0;
        }
        var attackOrSpec = m.category === "special" ?
            a.special() :
            a.attack();
        var attackPower = m.power;
        var defenseOrSpec = m.category === "special" ?
            d.special() :
            d.defense();
        var STAB = aBase.type.indexOf(m.type) !== -1 ? 1.5 : 1;
        var modifier = getEffectModifier(m.type, dBase) * 10;
        // console.log(attackerLevel, attackOrSpec, attackPower, defenseOrSpec, STAB, modifier, random);
        // Shoutout to https://www.math.miami.edu/~jam/azure/compendium/battdam.htm
        // for the helpful formula:
        // ((((((((((2*A)/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255);
        return Math.floor((((((((((2 * a.level()) / 5 + 2) * attackOrSpec * attackPower) / defenseOrSpec) /
            50) + 2) * STAB) * modifier / 10) * random) / 255);
    }
    exports.getDamage = getDamage;
    // Lifted logic from https://www.serebii.net/rb/evtraining.shtml
    // floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ Level + 10
    function getHpFromOpponentPokemon(pokemon, level) {
        return Math.floor(((pokemon.hp + Constants.defaultIv) * 2 +
            (Math.sqrt(Constants.defaultEv) / 4) * level) / 100) + level + 10;
    }
    exports.getHpFromOpponentPokemon = getHpFromOpponentPokemon;
    // Lifted logic from https://www.serebii.net/rb/evtraining.shtml
    // floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ 5
    function getStatFromOpponentPokemon(pokemon, level, stat) {
        return Math.floor((((pokemon[stat] + Constants.defaultIv) * 2 +
            (Math.sqrt(Constants.defaultEv) / 4)) * level) / 100) + 5;
    }
    exports.getStatFromOpponentPokemon = getStatFromOpponentPokemon;
});
