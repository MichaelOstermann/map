# removeOrElse

```ts
function Map.removeOrElse<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    orElse: (target: ReadonlyMap<K, V>) => U,
): Map<K, V> | U
```

Removes the specified key from the map, or calls the fallback function if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.removeOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    () => null,
); // Map(1) { "b" => 2 }

Map.removeOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
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
    Map.removeOrElse("a", () => null),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOrElse("c", (map) => map.size),
); // 2
```

:::
