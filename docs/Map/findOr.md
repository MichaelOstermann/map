# findOr

```ts
function Map.findOr<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    or: O,
): V | O
```

Returns the first value in the map that satisfies the provided `predicate` function, or `or` if no value is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findOr(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    0,
); // 0
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findOr((value) => value > 10, 0),
); // 0
```

:::
