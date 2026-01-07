# mapOrElse

```ts
function Map.mapOrElse<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    orElse: (target: ReadonlyMap<K, V>) => U,
): ReadonlyMap<K, V> | U
```

Transforms the value at the specified key using the provided function, or calls the fallback function if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    () => null,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    (map) => map.size,
); // 2
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrElse(
        "a",
        (value) => value * 2,
        () => null,
    ),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrElse(
        "c",
        (value) => value * 2,
        (map) => map.size,
    ),
); // 2
```

:::
