# isShallowEqual

```ts
function Map.isShallowEqual(map, source)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

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
import { Map } from "@monstermann/map";

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
