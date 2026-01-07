import { dfdlT } from "@monstermann/dfdl"

/**
 * # is
 *
 * ```ts
 * function Map.is(
 *     target: unknown,
 * ): target is Map<unknown, unknown>
 * ```
 *
 * Type guard that checks whether a value is a Map instance.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.is(new Map()); // true
 * Map.is({}); // false
 * Map.is([]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(new Map(), Map.is()); // true
 * pipe({}, Map.is()); // false
 * pipe([], Map.is()); // false
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is Map<unknown, unknown>
    (target: unknown): target is Map<unknown, unknown>
} = dfdlT((target: unknown): target is Map<unknown, unknown> => {
    return target instanceof Map
}, 1)
