# findReplaceOrElse

```ts
function Map.findReplaceOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    replacement: NoInfer<V>,
    orElse: (target: ReadonlyMap<K, V>) => O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or the result of calling `orElse` with the map if no entry is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findReplaceOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    99,
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
    Map.findReplaceOrElse(
        (value) => value > 10,
        99,
        (map) => map.size,
    ),
); // 3
```

:::
