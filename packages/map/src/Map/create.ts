/**
 * `Map.create(iterable?)`
 *
 * Creates a new Map, an alias for `new Map(iterable?)`.
 *
 * ## Example
 *
 * ```ts
 * Map.create([
 *     ["a", 1],
 *     ["b", 2],
 *     ["c", 3],
 * ]) // Map(2) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 */
export function create<K, V>(iterable?: Iterable<readonly [K, V]> | null | undefined): Map<K, V> {
    return new globalThis.Map(iterable)
}
