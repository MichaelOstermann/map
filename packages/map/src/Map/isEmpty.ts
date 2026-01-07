import { dfdlT } from "@monstermann/dfdl"

/**
 * # isEmpty
 *
 * ```ts
 * function Map.isEmpty<T, U>(target: ReadonlyMap<T, U>): boolean
 * ```
 *
 * Checks whether the map is empty (contains no entries).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.isEmpty(new Map()); // true
 * Map.isEmpty(new Map([["a", 1]])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(new Map(), Map.isEmpty()); // true
 * pipe(new Map([["a", 1]]), Map.isEmpty()); // false
 * ```
 *
 */
export const isEmpty: {
    (): <T, U>(target: ReadonlyMap<T, U>) => boolean
    <T, U>(target: ReadonlyMap<T, U>): boolean
} = dfdlT(<T, U>(target: ReadonlyMap<T, U>): boolean => {
    return target.size === 0
}, 1)
