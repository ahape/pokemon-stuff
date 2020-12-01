define(["require", "exports", "../data/moves", "../data/pokemon", "../data/typeEffectMap", "./pokemon"], function (require, exports, moves_1, pokemon_1, typeEffectMap_1, pokemon_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ko.bindingHandlers.numberinput = {
        init: function (element, valueAccessor, x, y, z) {
            var _a, _b;
            var observable = valueAccessor();
            var proxy = ko.observable(observable.peek() + "");
            (_b = (_a = ko.bindingHandlers.textInput).init) === null || _b === void 0 ? void 0 : _b.call(_a, element, function () { return proxy; }, x, y, z);
            proxy.subscribe(function (update) { return observable(Number(update) || 0); });
        },
    };
    var App = /** @class */ (function () {
        function App() {
            this.pokemon = pokemon_1.pokemon;
            this.moves = moves_1.moves;
            this.typeEffectMap = typeEffectMap_1.typeEffectMap;
            this.opponent = new pokemon_2.Pokemon();
            this.player = new pokemon_2.Pokemon(this.opponent);
        }
        return App;
    }());
    ko.applyBindings(new App());
    // For Console access/debugging.
    window.app = ko.contextFor(document.body).$root;
});
