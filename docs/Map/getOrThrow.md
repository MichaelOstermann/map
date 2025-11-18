# getOrThrow

`getOrThrow(map, key)`

Gets the value associated with `key` from `map`, throwing an error if the key doesn't exist or the value is nullable.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.getOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // 1

Map.getOrThrow(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
); // throws FnError

Map.getOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // throws FnError
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.getOrThrow("a"),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrThrow("b"),
); // throws FnError

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.getOrThrow("c"),
); // throws FnError
```

:::
