var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "../data/pokemon", "../functions", "./move"], function (require, exports, pokemon_1, Functions, move_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Functions = __importStar(Functions);
    var Pokemon = /** @class */ (function () {
        function Pokemon(opponent) {
            var _this = this;
            this.id = ko.observable(1);
            this.level = ko.observable(15);
            var getPokemon = function () {
                return Functions.find(pokemon_1.pokemon, function (x) { return x.id === _this.id(); });
            };
            this.moves = opponent ? [0, 0, 0, 0].map(function (i) {
                return new move_1.Move(_this, opponent);
            }) : [];
            this.pokemon = ko.pureComputed(getPokemon);
            this.pokemonTypes = ko.pureComputed(function () {
                return _this.pokemon().type.join("/");
            });
            var pok = ko.ignoreDependencies(getPokemon);
            var level = this.level.peek();
            this.hp = ko.observable(Functions.getHpFromOpponentPokemon(pok, level));
            this.attack = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "attack"));
            this.defense = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "defense"));
            this.speed = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "speed"));
            this.special = ko.observable(Functions.getStatFromOpponentPokemon(pok, level, "special"));
        }
        return Pokemon;
    }());
    exports.Pokemon = Pokemon;
});
