# get

```ts
function Map.get<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): V | undefined
```

Gets the value associated with the specified key, or `undefined` if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.get(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // 1

Map.get(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // undefined
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.get("a"),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.get("c"),
); // undefined
```

:::
