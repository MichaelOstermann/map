# findOrElse

```ts
function Map.findOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    orElse: (target: ReadonlyMap<K, V>) => O,
): V | O
```

Returns the first value in the map that satisfies the provided `predicate` function, or the result of calling `orElse` with the map if no value is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findOrElse(
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
    Map.findOrElse(
        (value) => value > 10,
        (map) => map.size,
    ),
); // 3
```

:::
