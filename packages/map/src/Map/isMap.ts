import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.isMap(target)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.isMap(Map.create()); // true
 * Map.isMap({}); // false
 * Map.isMap([]); // false
 * ```
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * pipe(Map.create(), Map.isMap()); // true
 * pipe({}, Map.isMap()); // false
 * pipe([], Map.isMap()); // false
 * ```
 */
export const isMap: {
    (): (target: unknown) => target is Map<unknown, unknown>
    (target: unknown): target is Map<unknown, unknown>
} = dfdlT((target: unknown): target is Map<unknown, unknown> => {
    return target instanceof Map
}, 1)
