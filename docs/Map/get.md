# get

```ts
function Map.get(map, key)
```

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
