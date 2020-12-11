import * as Constants from "../constants";
import { calcDamage } from "../functions";

interface IDamageResult {
    min: number;
    max: number;
    avg: number;
    cmin: number;
    cmax: number;
    cavg: number;
}

/**
 * Extracted from https://www.math.miami.edu/~jam/azure/compendium/battdam.htm
 * circa 2004.
 * @param a Level
 * @param b Attack or Special
 * @param c Power of move
 * @param d Defense or Special
 * @param e STAB (1 or 1.5)
 * @param f Type Modifiers (4, 2, 1, 0.5, 0.25)
 */
function calcDamage_AzureHeights(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number)
    : IDamageResult {
    let x = Math.floor((2 * a) / 5) + 2;
    x = x * b * c;
    x = Math.floor(x / d);
    x = Math.floor(x / 50) + 2;
    x = Math.floor(x * e);
    x = Math.floor(x * f);

    let y = x * 217;
    y = Math.floor(y / 255);

    const res = {} as IDamageResult;

    res.max = x;
    res.min = y;
    res.avg = Math.round((x + y) / 2);

    x = Math.floor((4 * a) / 5) + 2;
    x = x * b * c;
    x = Math.floor(x / d);
    x = Math.floor(x / 50) + 2;
    x = Math.floor(x * e);
    x = Math.floor(x * f);

    y = x * 217;
    y = Math.floor(y / 255);

    res.cmax = x;
    res.cmin = y;
    res.cavg = Math.round((x + y) / 2);

    return res;
}

function* stats() {
    yield 5;
    yield 10;
    yield 15;
    yield 20;
    yield 25;
    yield 30;
    yield 40;
    yield 50;
    yield 75;
    yield 100;
}

function* stabs() {
    yield 1;
    yield 1.5;
    yield 1;
    yield 1.5;
    yield 1;
    yield 1.5;
    yield 1;
    yield 1.5;
    yield 1;
    yield 1.5;
}

function* modifs() {
    yield 0.25;
    yield 0.5;
    yield 1;
    yield 2;
    yield 4;
    yield 0.25;
    yield 0.5;
    yield 1;
    yield 2;
    yield 4;
}

// ---
// Pokemon with unique level
// Pokemon with unique attack
// Pokemon with unique defense
// Pokemon with unique special
// ---
// Pokemon utilizing STAB
// Pokemon not utilizing STAB
// --
// Pokemon using physical attack
// Pokemon using special attack
// --
// Attack type modifier 0.25
// Attack type modifier 0.5
// Attack type modifier 1
// Attack type modifier 2
// Attack type modifier 4

let statsg: Generator<number>;
let result: IteratorResult<number>;
let stabg: Generator<number>;
let modifg: Generator<number>;

statsg = stats();
stabg = stabs();
modifg = modifs();
do /* Level tests */ {
    result = statsg.next();

    if (!result.value) { break; }

    const stab = stabg.next().value;
    const modif = modifg.next().value;

    test("Damage calc comparison - level - " + result.value, () => {
        const a = calcDamage(result.value, 1, 10, 1, 35, 10, 1, stab, modif, 217);
        const b = calcDamage_AzureHeights(result.value, 10, 35, 10, stab, modif).min;
        expect(a).toBe(b);
    });
} while (!result.done);

statsg = stats();
stabg = stabs();
modifg = modifs();
do /* Attack tests */ {
    result = statsg.next();

    if (!result.value) { break; }

    const stab = stabg.next().value;
    const modif = modifg.next().value;

    test("Damage calc comparison - attack - " + result.value, () => {
        const a = calcDamage(10, 1, result.value, 1, 35, 10, 1, stab, modif, 217);
        const b = calcDamage_AzureHeights(10, result.value, 35, 10, stab, modif).min;
        expect(a).toBe(b);
    });
} while (!result.done);

statsg = stats();
stabg = stabs();
modifg = modifs();
do /* Power tests */ {
    result = statsg.next();

    if (!result.value) { break; }

    const stab = stabg.next().value;
    const modif = modifg.next().value;

    test("Damage calc comparison - power - " + result.value, () => {
        const a = calcDamage(10, 1, 10, 1, result.value, 10, 1, stab, modif, 217);
        const b = calcDamage_AzureHeights(10, 10, result.value, 10, stab, modif).min;
        expect(a).toBe(b);
    });
} while (!result.done);

statsg = stats();
stabg = stabs();
modifg = modifs();
do /* Defense tests */ {
    result = statsg.next();

    if (!result.value) { break; }

    const stab = stabg.next().value;
    const modif = modifg.next().value;

    test("Damage calc comparison - defense - " + result.value, () => {
        const a = calcDamage(10, 1, 10, 1, 35, result.value, 1, stab, modif, 217);
        const b = calcDamage_AzureHeights(10, 10, 35, result.value, stab, modif).min;
        expect(a).toBe(b);
    });
} while (!result.done);
