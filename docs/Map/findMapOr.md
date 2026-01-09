# findMapOr

```ts
function Map.findMapOr<K, V, O>(
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
    or: O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or `or` if no entry is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapOr(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    (value) => value * 10,
    new Map(),
); // Map(0) {}
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMapOr(
        (value) => value > 10,
        (value) => value * 10,
        new Map(),
    ),
); // Map(0) {}
```

:::
