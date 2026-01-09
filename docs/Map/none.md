# none

```ts
function Map.none<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): boolean
```

Returns `true` if no entries in the map satisfy the provided `predicate` function, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.none(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
); // true
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.none((value) => value > 10),
); // true
```

:::
