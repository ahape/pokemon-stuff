define(["require", "exports", "../data/moves", "../data/pokemon", "../data/typeEffectMap", "../data/types", "./pokemon"], function (require, exports, moves_1, pokemon_1, typeEffectMap_1, types_1, pokemon_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // TODO
    // [x] Break things into neat files
    // [x] Who will go first? (determine)
    //  Whatever pokemon with the best speed will go first.
    // [x] Correctly acct for DV
    //  This is impossible to extrapolate without knowing the opponent
    //  Pokemon's stats. So we will just have to assume 15 to cover
    //  the highest possible edge-case.
    // [x] Determine *rough* enemey statistics
    //  This IS approximable, since we can assume a DV of 15 for all stats,
    //  and assume that the effort value is nil.
    // [x] What is DV and IV?
    //  DV is a "tier" of ranges that your Pokemon's stats can vary
    //  from the base stats
    //
    //  IV is the actual value of the stat, e.g. Attack IV.
    // What are EVs?
    //  Effort Value (EV), otherwise known as "Stat Experience." This is an
    //  internal value used in the equation that determines your Pokemon's
    //  stat value (e.g. Attack: 80). Your EVs aren't applied until your
    //  Pokemon level's up.
    //
    // What are IVs?
    //  And Individual Values (IV) is an inherent value a Pokemon is given to
    //  diversify it a little bit from the rest of it's litter. It's a
    //  primitive value that is use in determining a Pokemon's stat. This number
    //  can range from 0 to 15.
    // [ ] Check that your damage calculation matches the one from the
    //  smogon project:
    //  https://github.com/smogon/damage-calc/blob/master/calc/src/mechanics/gen12.ts
    //
    // [ ] Change Nidoran names (nidoran-f, nidoran-m)
    // [ ] Add list of learned moves that map to each Pokemon, and what level they
    //  learn the moves.
    //
    //  You can achieve this! You will need to write a script that scrapes
    //  this page's table at the bottom:
    //  https://bulbapedia.bulbagarden.net/wiki/Tackle_(move)#Generations_I_to_IV
    //  You'll need to do this for every move though...
    //
    // [ ] Add moves to opponent's box, and then list out the KO probabtys.
    // [ ] Add other pokemon (4).
    // [ ] Save to localStorage data for all input.
    // [ ] Add input for pokemon stats
    // [ ] Add input for stat modifier, add same for opponent
    ko.bindingHandlers.numberinput = {
        init: function (element, valueAccessor, x, y, z) {
            var _a, _b;
            var observable = valueAccessor();
            var proxy = ko.observable(observable.peek() + "");
            (_b = (_a = ko.bindingHandlers.textInput).init) === null || _b === void 0 ? void 0 : _b.call(_a, element, function () { return proxy; }, x, y, z);
            proxy.subscribe(function (update) { return observable(Number(update)); });
        },
    };
    var App = /** @class */ (function () {
        function App() {
            this.pokemon = pokemon_1.pokemon;
            this.moves = moves_1.moves;
            this.typeEffectMap = typeEffectMap_1.typeEffectMap;
            this.types = types_1.types;
            this.opponent = new pokemon_2.Pokemon();
            this.player = new pokemon_2.Pokemon(this.opponent);
        }
        return App;
    }());
    ko.applyBindings(new App());
    // For Console access/debugging.
    window.app = ko.contextFor(document.body).$root;
});
