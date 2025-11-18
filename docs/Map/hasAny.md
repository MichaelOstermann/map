# hasAny

`hasAny(map, keys)`

Checks if `map` contains any of the specified `keys`. This function supports iterables.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.hasAny(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["a", "c"],
); // true

Map.hasAny(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["c", "d"],
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.hasAny(["a", "c"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.hasAny(["c", "d"]),
); // false
```

:::
