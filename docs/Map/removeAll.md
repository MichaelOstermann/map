# removeAll

```ts
function Map.removeAll<K, V>(
    target: ReadonlyMap<K, V>,
    keys: Iterable<NoInfer<K>>,
): ReadonlyMap<K, V>
```

Removes all specified keys from the map.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.removeAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "c"],
); // Map(1) { "b" => 2 }

Map.removeAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["d", "e"],
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.removeAll(["a", "c"]),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.removeAll(["d", "e"]),
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

:::
