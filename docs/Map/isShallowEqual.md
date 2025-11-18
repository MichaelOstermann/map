# isShallowEqual

`isShallowEqual(map, source)`

Checks if `map` is shallow equal to `source` by comparing their keys and values using strict equality.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.isShallowEqual(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
); // true

Map.isShallowEqual(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    new Map([
        ["a", 1],
        ["b", 3],
    ]),
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.isShallowEqual(
        new Map([
            ["a", 1],
            ["b", 2],
        ]),
    ),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.isShallowEqual(
        new Map([
            ["a", 1],
            ["b", 3],
        ]),
    ),
); // false
```

:::
