var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define(["require", "exports", "./constants", "./data/typeEffectMap"], function (require, exports, Constants, typeEffectMap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStatFromOpponentPokemon = exports.getHpFromOpponentPokemon = exports.getDamage = exports.damageRng = exports.getEffectModifier = exports.find = void 0;
    Constants = __importStar(Constants);
    function find(arr, cb) {
        return arr.filter(cb)[0];
    }
    exports.find = find;
    function getEffectModifier(moveType, defendingPokemonType) {
        var modifiers = defendingPokemonType.map(function (typeName) { var _a; return (_a = (typeEffectMap_1.typeEffectMap[typeName] && typeEffectMap_1.typeEffectMap[typeName][moveType])) !== null && _a !== void 0 ? _a : 1; });
        return modifiers.reduce(function (p, c) { return p * c; }, 1);
    }
    exports.getEffectModifier = getEffectModifier;
    function damageRng() {
        return Math.floor(Math.random() *
            (Constants.damageRangeMax - Constants.damageRangeMin)) +
            Constants.damageRangeMin;
    }
    exports.damageRng = damageRng;
    function getDamage(a, d, m, random) {
        if (random === void 0) { random = damageRng(); }
        if (m.category === "status") {
            return 0;
        }
        var attackOrSpec = m.category === "special" ? a.special : a.attack;
        var defenseOrSpec = m.category === "special" ? d.special : d.defense;
        var stab = a.type.indexOf(m.type) !== -1 ? 1.5 : 1;
        var modifier = getEffectModifier(m.type, d.type) * 10;
        // Shoutout to https://www.math.miami.edu/~jam/azure/compendium/battdam.htm
        // for the helpful formula:
        // ((((((((((2*A)/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255);
        return Math.floor((((((((((2 * a.level) / 5 + 2) * attackOrSpec * m.power) / defenseOrSpec) /
            50) + 2) * stab) * modifier / 10) * random) / 255);
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
