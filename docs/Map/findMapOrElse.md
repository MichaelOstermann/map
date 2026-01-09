# findMapOrElse

```ts
function Map.findMapOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    orElse: (target: ReadonlyMap<K, V>) => O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or the result of calling `orElse` with the map if no entry is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    (value) => value * 10,
    (map) => map.size,
); // 3
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMapOrElse(
        (value) => value > 10,
        (value) => value * 10,
        (map) => map.size,
    ),
); // 3
```

:::
