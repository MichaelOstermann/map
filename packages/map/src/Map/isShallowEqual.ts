import { dfdlT } from "@monstermann/dfdl"

/**
 * # isShallowEqual
 *
 * ```ts
 * function Map.isShallowEqual<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     source: ReadonlyMap<NoInfer<K>, NoInfer<V>>,
 * ): boolean
 * ```
 *
 * Checks whether two maps are shallowly equal (same keys and values using strict equality).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.isShallowEqual(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 * ); // true
 *
 * Map.isShallowEqual(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     new Map([
 *         ["a", 1],
 *         ["b", 3],
 *     ]),
 * ); // false
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.isShallowEqual(
 *         new Map([
 *             ["a", 1],
 *             ["b", 2],
 *         ]),
 *     ),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.isShallowEqual(
 *         new Map([
 *             ["a", 1],
 *             ["b", 3],
 *         ]),
 *     ),
 * ); // false
 * ```
 *
 */
export const isShallowEqual: {
    <K, V>(source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): boolean => {
    if (target.size !== source.size) return false
    const seen = new Set()
    for (const k of target.keys()) {
        seen.add(k)
        if (!source.has(k)) return false
        if (target.get(k) !== source.get(k)) return false
    }
    for (const k of source.keys()) {
        if (seen.has(k)) continue
        if (!target.has(k)) return false
        if (target.get(k) !== source.get(k)) return false
    }
    return true
}, 2)
