# hasNone

```ts
function Map.hasNone(map, keys)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.hasNone(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["c", "d"],
); // true

Map.hasNone(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["a", "c"],
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.hasNone(["c", "d"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.hasNone(["a", "c"]),
); // false
```

:::
