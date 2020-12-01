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
define(["require", "exports", "../constants", "../data/moves", "../functions"], function (require, exports, Constants, moves_1, Functions) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Move = void 0;
    Constants = __importStar(Constants);
    Functions = __importStar(Functions);
    var Move = /** @class */ (function () {
        function Move(player, opponent) {
            var _this = this;
            this.name = ko.observable(moves_1.moves[0].name);
            this.move = ko.pureComputed(function () {
                return Functions.find(moves_1.moves, function (m) { return m.name === _this.name(); });
            });
            this.effectiveness = ko.pureComputed(function () {
                return Functions.getEffectModifier(_this.move().type, opponent.pokemon().type);
            });
            this.damageMin = ko.pureComputed(function () {
                return Functions.getDamage(player.pokemonJson(), opponent.pokemonJson(), _this.move(), Constants.damageRangeMin);
            });
            this.damageMax = ko.pureComputed(function () {
                return Functions.getDamage(player.pokemonJson(), opponent.pokemonJson(), _this.move(), Constants.damageRangeMax);
            });
            this.damageAvg = ko.pureComputed(function () {
                return (_this.damageMax() + _this.damageMin()) / 2;
            });
            this.opponentHp = ko.pureComputed(function () {
                return Functions.getHpFromOpponentPokemon(opponent.pokemon(), opponent.level());
            });
            this.hitsUntilKo = ko.pureComputed(function () {
                return Math.ceil(_this.opponentHp() / _this.damageAvg());
            });
        }
        return Move;
    }());
    exports.Move = Move;
});
