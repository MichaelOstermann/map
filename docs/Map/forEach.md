# forEach

```ts
function Map.forEach<K, V>(
    target: ReadonlyMap<K, V>,
    fn: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => any,
): ReadonlyMap<K, V>
```

Executes a function for each entry in the map and returns the original map.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.forEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => console.log(key, value),
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.forEach((value, key) => console.log(key, value)),
); // Map(2) { "a" => 1, "b" => 2 }
```

:::
