# hasAll

```ts
function Map.hasAll(map, keys)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.hasAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "b"],
); // true

Map.hasAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "d"],
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.hasAll(["a", "b"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.hasAll(["a", "d"]),
); // false
```

:::
