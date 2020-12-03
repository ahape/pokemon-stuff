import { moves } from "../data/moves";
import { pokemon } from "../data/pokemon";
import { typeEffectMap } from "../data/typeeffectmap";
import { Pokemon } from "./pokemon";

ko.bindingHandlers.numberinput = {
    init(element: HTMLElement, valueAccessor: () => KnockoutObservable<number>, x: any, y: any, z: any) {
        const observable = valueAccessor();
        const proxy = ko.observable(observable.peek() + "");

        ko.bindingHandlers.textInput.init?.(element, () => proxy, x, y, z);

        proxy.subscribe((update) => observable(Number(update) || 0));
    },
};

class App {
    public pokemon = pokemon;
    public moves = moves;
    public typeEffectMap = typeEffectMap;
    public opponent = new Pokemon();
    public player = new Pokemon(this.opponent);
}

ko.applyBindings(new App());

// For Console access/debugging.
(window as any).app = ko.contextFor(document.body).$root;
