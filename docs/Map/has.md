# has

`has(map, key)`

Checks if `map` contains the specified `key`.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.has(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // true

Map.has(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.has("a"),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.has("c"),
); // false
```

:::
