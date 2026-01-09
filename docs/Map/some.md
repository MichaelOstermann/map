# some

```ts
function Map.some<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): boolean
```

Returns `true` if at least one entry in the map satisfies the provided `predicate` function, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.some(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 2,
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
    Map.some((value) => value > 2),
); // true
```

:::
