# every

```ts
function Map.every<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): boolean
```

Tests whether all entries in the map pass the test implemented by the `predicate` function. It returns `true` if all entries pass, otherwise `false`.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.every(
    new Map([
        ["a", 2],
        ["b", 4],
        ["c", 6],
    ]),
    (value) => value % 2 === 0,
); // true
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 2],
        ["b", 4],
        ["c", 6],
    ]),
    Map.every((value) => value % 2 === 0),
); // true
```

:::
