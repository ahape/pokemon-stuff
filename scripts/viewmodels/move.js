var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "../constants", "../data/moves", "../functions"], function (require, exports, Constants, moves_1, Functions) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                return Functions.getEffectModifier(_this.move().type, opponent.pokemon());
            });
            this.damageMin = ko.pureComputed(function () {
                return Functions.getDamage(player, opponent, _this.move(), Constants.damageRangeMin);
            });
            this.damageMax = ko.pureComputed(function () {
                return Functions.getDamage(player, opponent, _this.move(), Constants.damageRangeMax);
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
