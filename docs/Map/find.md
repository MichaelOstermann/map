# find

```ts
function Map.find<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): V | undefined
```

Returns the first value in the map that satisfies the provided `predicate` function, or `undefined` if no value is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.find(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 2,
); // 3
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.find((value) => value > 2),
); // 3
```

:::
