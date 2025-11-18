# removeOrThrow

`removeOrThrow(map, key)`

Removes the entry with the specified `key` from `map`, throwing an error if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.removeOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // Map(1) { "b" => 2 }

Map.removeOrThrow(
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
    Map.removeOrThrow("a"),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOrThrow("c"),
); // throws FnError
```

:::
