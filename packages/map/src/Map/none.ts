import { dfdlT } from "@monstermann/dfdl"

/**
 * # none
 *
 * ```ts
 * function Map.none<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 * ): boolean
 * ```
 *
 * Returns `true` if no entries in the map satisfy the provided `predicate` function, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.none(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 * ); // true
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Map.none((value) => value > 10),
 * ); // true
 * ```
 *
 */
export const none: {
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: Map<K, V>) => target is Map<K, Exclude<V, U>>
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: ReadonlyMap<K, V>) => target is ReadonlyMap<K, Exclude<V, U>>

    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: Map<K, V>) => boolean
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: ReadonlyMap<K, V>) => boolean

    <K, V, U extends V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): target is Map<K, Exclude<V, U>>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): target is ReadonlyMap<K, Exclude<V, U>>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): boolean
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): boolean
} = dfdlT((<K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): target is ReadonlyMap<K, Exclude<V, U>> => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            return false
        }
    }
    return true
}) as any, 2)
