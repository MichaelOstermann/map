import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.is(target)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.is(Map.create()); // true
 * Map.is({}); // false
 * Map.is([]); // false
 * ```
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * pipe(Map.create(), Map.is()); // true
 * pipe({}, Map.is()); // false
 * pipe([], Map.is()); // false
 * ```
 */
export const is: {
    (): (target: unknown) => target is Map<unknown, unknown>
    (target: unknown): target is Map<unknown, unknown>
} = dfdlT((target: unknown): target is Map<unknown, unknown> => {
    return target instanceof Map
}, 1)
