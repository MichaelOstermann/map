# mapOr

```ts
function Map.mapOr<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    or: U,
): ReadonlyMap<K, V> | U
```

Transforms the value at the specified key using the provided function, or returns the fallback value if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    null,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    null,
); // null
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOr("a", (value) => value * 2, null),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOr("c", (value) => value * 2, null),
); // null
```

:::
