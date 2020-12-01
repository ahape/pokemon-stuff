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
define(["require", "exports", "../constants", "../data/pokemon", "../functions", "./move"], function (require, exports, Constants, pokemon_1, Functions, move_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    Constants = __importStar(Constants);
    Functions = __importStar(Functions);
    var Pokemon = /** @class */ (function () {
        function Pokemon(opponent) {
            var _this = this;
            this.id = ko.observable(1);
            this.level = ko.observable(Constants.defaultLevel);
            var getPokemon = function () {
                return Functions.find(pokemon_1.pokemon, function (x) { return x.id === _this.id(); });
            };
            this.moves = opponent ? [0, 0, 0, 0].map(function (i) { return new move_1.Move(_this, opponent); }) : [];
            this.pokemon = ko.pureComputed(getPokemon);
            var pok = ko.ignoreDependencies(getPokemon);
            var level = this.level.peek();
            this.hp = ko.observable(Functions.getHpFromOpponentPokemon(pok, level));
            this.attack = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "attack"));
            this.defense = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "defense"));
            this.speed = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "speed"));
            this.special = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "special"));
            this.pokemonJson = ko.pureComputed(function () {
                return {
                    attack: _this.attack(),
                    defense: _this.defense(),
                    ev: Constants.defaultEv,
                    hp: _this.hp(),
                    id: pok.id,
                    iv: Constants.defaultIv,
                    level: _this.level(),
                    name: pok.name,
                    special: _this.special(),
                    speed: _this.speed(),
                    type: pok.type,
                };
            });
            this.pokemonTypes = ko.pureComputed(function () {
                return _this.pokemon().type.join("/");
            });
        }
        return Pokemon;
    }());
    exports.Pokemon = Pokemon;
});
