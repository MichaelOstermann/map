# getOrThrow

```ts
function Map.getOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): Exclude<V, null | undefined>
```

Gets the value associated with the specified key, or throws an error if the value is `null` or `undefined`.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

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
import { Map } from "@monstermann/map";

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
