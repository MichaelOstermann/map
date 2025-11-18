# getOr

```ts
function Map.getOr(map, key, or)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "a",
    0,
); // 1

Map.getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
    0,
); // 0

Map.getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "c",
    0,
); // 0
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOr("a", 0),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOr("b", 0),
); // 0

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOr("c", 0),
); // 0
```

:::
