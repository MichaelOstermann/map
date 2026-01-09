# findRemoveOrElse

```ts
function Map.findRemoveOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    orElse: (target: ReadonlyMap<K, V>) => O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or the result of calling `orElse` with the map if no entry is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemoveOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
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
    Map.findRemoveOrElse(
        (value) => value > 10,
        (map) => map.size,
    ),
); // 3
```

:::
