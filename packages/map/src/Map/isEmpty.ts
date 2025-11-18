import { dfdlT } from "@monstermann/dfdl"

/**
 * `Map.isEmpty(map)`
 *
 * Checks if `map` is empty (has no entries).
 *
 * ## Example
 *
 * ```ts
 * Map.isEmpty(Map.create()); // true
 * Map.isEmpty(Map.create([["a", 1]])); // false
 * ```
 *
 * ```ts
 * pipe(Map.create(), Map.isEmpty()); // true
 * pipe(Map.create([["a", 1]]), Map.isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): <T, U>(target: ReadonlyMap<T, U>) => boolean
    <T, U>(target: ReadonlyMap<T, U>): boolean
} = dfdlT(<T, U>(target: ReadonlyMap<T, U>): boolean => {
    return target.size === 0
}, 1)
