<div align="center">

<h1>map</h1>

![Minified](https://img.shields.io/badge/Minified-3.43_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-1.03_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for maps.**

[Documentation](https://MichaelOstermann.github.io/map)

</div>

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`filter(map, () => true) === map`)
- Pipe-friendly (`pipe(filter(() => true))(map)`)
- Graceful failure handling (`get()`, `getOr()`, `getOrElse()`, `getOrThrow()`)

## Installation

```sh [npm]
npm install @monstermann/map
```

```sh [pnpm]
pnpm add @monstermann/map
```

```sh [yarn]
yarn add @monstermann/map
```

```sh [bun]
bun add @monstermann/map
```

## Tree-shaking

### Installation

```sh [npm]
npm install -D @monstermann/unplugin-map
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-map
```

```sh [yarn]
yarn -D add @monstermann/unplugin-map
```

```sh [bun]
bun -D add @monstermann/unplugin-map
```

### Usage

```ts [Vite]
// vite.config.ts
import map from "@monstermann/unplugin-map/vite";

export default defineConfig({
    plugins: [map()],
});
```

```ts [Rollup]
// rollup.config.js
import map from "@monstermann/unplugin-map/rollup";

export default {
    plugins: [map()],
};
```

```ts [Rolldown]
// rolldown.config.js
import map from "@monstermann/unplugin-map/rolldown";

export default {
    plugins: [map()],
};
```

```ts [Webpack]
// webpack.config.js
const map = require("@monstermann/unplugin-map/webpack");

module.exports = {
    plugins: [map()],
};
```

```ts [Rspack]
// rspack.config.js
const map = require("@monstermann/unplugin-map/rspack");

module.exports = {
    plugins: [map()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import map from "@monstermann/unplugin-map/esbuild";

build({
    plugins: [map()],
});
```

## Map

### clone

```ts
function Map.clone<K, V>(target: ReadonlyMap<K, V>): Map<K, V>
```

Creates a shallow copy of the map, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = Map.clone(original); // Map { 'a' => 1, 'b' => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = pipe(original, Map.clone()); // Map { 'a' => 1, 'b' => 2 }
```

### compact

```ts
function Map.compact<K, V>(
    target: ReadonlyMap<K, V>,
): ReadonlyMap<K, Exclude<V, null | undefined>>
```

Removes all entries with `null` or `undefined` values.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.compact(
    new Map([
        ["a", 1],
        ["b", null],
        ["c", undefined],
    ]),
); // Map(1) { "a" => 1 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", null],
        ["c", undefined],
    ]),
    Map.compact(),
); // Map(1) { "a" => 1 }
```

### create

```ts
function Map.create<K, V>(
    iterable?: Iterable<readonly [K, V]> | null | undefined,
): Map<K, V>
```

Creates a new Map from an iterable of key-value pairs.

#### Example

```ts
import { Map } from "@monstermann/map";

Map.create([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]); // Map(2) { "a" => 1, "b" => 2, "c" => 3 }
```

### filter

```ts
function Map.filter<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Returns a new map containing only entries that satisfy the predicate function.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.filter(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.filter((value) => value > 1),
); // Map(2) { "b" => 2, "c" => 3 }
```

### find

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

#### Example

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

### findMap

```ts
function Map.findMap<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMap(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    (value) => value * 10,
); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMap(
        (value) => value > 1,
        (value) => value * 10,
    ),
); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
```

### findMapAll

```ts
function Map.findMapAll<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Finds all entries in the map that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new map with the mapped values.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    (value) => value * 10,
); // Map(3) { "a" => 1, "b" => 20, "c" => 30 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMapAll(
        (value) => value > 1,
        (value) => value * 10,
    ),
); // Map(3) { "a" => 1, "b" => 20, "c" => 30 }
```

### findMapOr

```ts
function Map.findMapOr<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    or: O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or `or` if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapOr(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    (value) => value * 10,
    new Map(),
); // Map(0) {}
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMapOr(
        (value) => value > 10,
        (value) => value * 10,
        new Map(),
    ),
); // Map(0) {}
```

### findMapOrElse

```ts
function Map.findMapOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    orElse: (target: ReadonlyMap<K, V>) => O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or the result of calling `orElse` with the map if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    (value) => value * 10,
    (map) => map.size,
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
    Map.findMapOrElse(
        (value) => value > 10,
        (value) => value * 10,
        (map) => map.size,
    ),
); // 3
```

### findMapOrThrow

```ts
function Map.findMapOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or throws an error if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    (value) => value * 10,
); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMapOrThrow(
        (value) => value > 1,
        (value) => value * 10,
    ),
); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
```

### findOr

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

#### Example

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

### findOrElse

```ts
function Map.findOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    orElse: (target: ReadonlyMap<K, V>) => O,
): V | O
```

Returns the first value in the map that satisfies the provided `predicate` function, or the result of calling `orElse` with the map if no value is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    (map) => map.size,
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
    Map.findOrElse(
        (value) => value > 10,
        (map) => map.size,
    ),
); // 3
```

### findOrThrow

```ts
function Map.findOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): V
```

Returns the first value in the map that satisfies the provided `predicate` function, or throws an error if no value is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findOrThrow(
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
    Map.findOrThrow((value) => value > 2),
); // 3
```

### findRemove

```ts
function Map.findRemove<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemove(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "a" => 1, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findRemove((value) => value > 1),
); // Map(2) { "a" => 1, "c" => 3 }
```

### findRemoveOr

```ts
function Map.findRemoveOr<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    or: O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or `or` if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemoveOr(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    new Map(),
); // Map(0) {}
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findRemoveOr((value) => value > 10, new Map()),
); // Map(0) {}
```

### findRemoveOrElse

```ts
function Map.findRemoveOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    orElse: (target: ReadonlyMap<K, V>) => O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or the result of calling `orElse` with the map if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemoveOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    (map) => map.size,
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
    Map.findRemoveOrElse(
        (value) => value > 10,
        (map) => map.size,
    ),
); // 3
```

### findRemoveOrThrow

```ts
function Map.findRemoveOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or throws an error if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemoveOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "a" => 1, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findRemoveOrThrow((value) => value > 1),
); // Map(2) { "a" => 1, "c" => 3 }
```

### findReplace

```ts
function Map.findReplace<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    replacement: NoInfer<V>,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findReplace(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    10,
); // Map(3) { "a" => 1, "b" => 10, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findReplace((value) => value > 1, 10),
); // Map(3) { "a" => 1, "b" => 10, "c" => 3 }
```

### findReplaceOr

```ts
function Map.findReplaceOr<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    replacement: NoInfer<V>,
    or: O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or `or` if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findReplaceOr(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    99,
    new Map(),
); // Map(0) {}
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findReplaceOr((value) => value > 10, 99, new Map()),
); // Map(0) {}
```

### findReplaceOrElse

```ts
function Map.findReplaceOrElse<K, V, O>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    replacement: NoInfer<V>,
    orElse: (target: ReadonlyMap<K, V>) => O,
): ReadonlyMap<K, V> | O
```

Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or the result of calling `orElse` with the map if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findReplaceOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 10,
    99,
    (map) => map.size,
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
    Map.findReplaceOrElse(
        (value) => value > 10,
        99,
        (map) => map.size,
    ),
); // 3
```

### findReplaceOrThrow

```ts
function Map.findReplaceOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    replacement: NoInfer<V>,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or throws an error if no entry is found.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findReplaceOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    99,
); // Map(3) { "a" => 1, "b" => 99, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findReplaceOrThrow((value) => value > 1, 99),
); // Map(3) { "a" => 1, "b" => 99, "c" => 3 }
```

### forEach

```ts
function Map.forEach<K, V>(
    target: ReadonlyMap<K, V>,
    fn: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => any,
): ReadonlyMap<K, V>
```

Executes a function for each entry in the map and returns the original map.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.forEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => console.log(key, value),
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.forEach((value, key) => console.log(key, value)),
); // Map(2) { "a" => 1, "b" => 2 }
```

### get

```ts
function Map.get<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): V | undefined
```

Gets the value associated with the specified key, or `undefined` if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.get(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // 1

Map.get(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // undefined
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.get("a"),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.get("c"),
); // undefined
```

### getOr

```ts
function Map.getOr<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    or: U,
): Exclude<V, null | undefined> | U
```

Gets the value associated with the specified key, or returns the fallback value if the value is `null` or `undefined`.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "a",
    0,
); // 1

Map.getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
    0,
); // 0

Map.getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "c",
    0,
); // 0
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOr("a", 0),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOr("b", 0),
); // 0

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOr("c", 0),
); // 0
```

### getOrElse

```ts
function Map.getOrElse<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    orElse: (target: ReadonlyMap<K, V>) => U,
): Exclude<V, null | undefined> | U
```

Gets the value associated with the specified key, or calls the provided function to compute a fallback value if the value is `null` or `undefined`.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "a",
    () => 0,
); // 1

Map.getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
    () => 0,
); // 0

Map.getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "c",
    (map) => map.size,
); // 2
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrElse("a", () => 0),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrElse("b", () => 0),
); // 0

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrElse("c", (map) => map.size),
); // 2
```

### getOrThrow

```ts
function Map.getOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): Exclude<V, null | undefined>
```

Gets the value associated with the specified key, or throws an error if the value is `null` or `undefined`.

#### Example

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

### has

```ts
function Map.has<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): boolean
```

Checks whether the map contains the specified key.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.has(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // true

Map.has(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.has("a"),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.has("c"),
); // false
```

### hasAll

```ts
function Map.hasAll<K, V>(
    target: ReadonlyMap<K, V>,
    keys: Iterable<NoInfer<K>>,
): boolean
```

Checks whether the map contains all of the specified keys.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.hasAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "b"],
); // true

Map.hasAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "d"],
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.hasAll(["a", "b"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.hasAll(["a", "d"]),
); // false
```

### hasAny

```ts
function Map.hasAny<K, V>(
    target: ReadonlyMap<K, V>,
    keys: Iterable<NoInfer<K>>,
): boolean
```

Checks whether the map contains any of the specified keys.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

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
import { Map } from "@monstermann/map";

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

### hasNone

```ts
function Map.hasNone<K, V>(
    target: ReadonlyMap<K, V>,
    keys: Iterable<NoInfer<K>>,
): boolean
```

Checks whether the map contains none of the specified keys.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.hasNone(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["c", "d"],
); // true

Map.hasNone(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["a", "c"],
); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.hasNone(["c", "d"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.hasNone(["a", "c"]),
); // false
```

### is

```ts
function Map.is(
    target: unknown,
): target is Map<unknown, unknown>
```

Type guard that checks whether a value is a Map instance.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.is(new Map()); // true
Map.is({}); // false
Map.is([]); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(new Map(), Map.is()); // true
pipe({}, Map.is()); // false
pipe([], Map.is()); // false
```

### isEmpty

```ts
function Map.isEmpty<T, U>(target: ReadonlyMap<T, U>): boolean
```

Checks whether the map is empty (contains no entries).

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.isEmpty(new Map()); // true
Map.isEmpty(new Map([["a", 1]])); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(new Map(), Map.isEmpty()); // true
pipe(new Map([["a", 1]]), Map.isEmpty()); // false
```

### isShallowEqual

```ts
function Map.isShallowEqual<K, V>(
    target: ReadonlyMap<K, V>,
    source: ReadonlyMap<NoInfer<K>, NoInfer<V>>,
): boolean
```

Checks whether two maps are shallowly equal (same keys and values using strict equality).

#### Example

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

### map

```ts
function Map.map<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Transforms the value at the specified key using the provided function. Returns the original map if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.map(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
); // Map(2) { "a" => 2, "b" => 2 }

Map.map(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.map("a", (value) => value * 2),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.map("c", (value) => value * 2),
); // Map(2) { "a" => 1, "b" => 2 }
```

### mapEach

```ts
function Map.mapEach<K, V, U>(
    target: ReadonlyMap<K, V>,
    fn: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => U,
): ReadonlyMap<K, U>
```

Transforms all values in the map using the provided function.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => value * 2,
); // Map(2) { "a" => 2, "b" => 4 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapEach((value, key) => value * 2),
); // Map(2) { "a" => 2, "b" => 4 }
```

### mapOr

```ts
function Map.mapOr<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    or: U,
): ReadonlyMap<K, V> | U
```

Transforms the value at the specified key using the provided function, or returns the fallback value if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    null,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    null,
); // null
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOr("a", (value) => value * 2, null),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOr("c", (value) => value * 2, null),
); // null
```

### mapOrElse

```ts
function Map.mapOrElse<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
    orElse: (target: ReadonlyMap<K, V>) => U,
): ReadonlyMap<K, V> | U
```

Transforms the value at the specified key using the provided function, or calls the fallback function if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    () => null,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    (map) => map.size,
); // 2
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrElse(
        "a",
        (value) => value * 2,
        () => null,
    ),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrElse(
        "c",
        (value) => value * 2,
        (map) => map.size,
    ),
); // 2
```

### mapOrThrow

```ts
function Map.mapOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Transforms the value at the specified key using the provided function, or throws an error if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
); // throws FnError
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrThrow("a", (value) => value * 2),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrThrow("c", (value) => value * 2),
); // throws FnError
```

### reject

```ts
function Map.reject<K, V>(
    target: ReadonlyMap<K, V>,
    by: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Returns a new map excluding entries that satisfy the predicate function.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.reject(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(1) { "a" => 1 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.reject((value) => value > 1),
); // Map(1) { "a" => 1 }
```

### remove

```ts
function Map.remove<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): ReadonlyMap<K, V>
```

Removes the specified key from the map. Returns the original map if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.remove(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // Map(1) { "b" => 2 }

Map.remove(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.remove("a"),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.remove("c"),
); // Map(2) { "a" => 1, "b" => 2 }
```

### removeAll

```ts
function Map.removeAll<K, V>(
    target: ReadonlyMap<K, V>,
    keys: Iterable<NoInfer<K>>,
): ReadonlyMap<K, V>
```

Removes all specified keys from the map.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.removeAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "c"],
); // Map(1) { "b" => 2 }

Map.removeAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["d", "e"],
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.removeAll(["a", "c"]),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.removeAll(["d", "e"]),
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

### removeOr

```ts
function Map.removeOr<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    or: U,
): Map<K, V> | U
```

Removes the specified key from the map, or returns the fallback value if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.removeOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    null,
); // Map(1) { "b" => 2 }

Map.removeOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    null,
); // null
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOr("a", null),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOr("c", null),
); // null
```

### removeOrElse

```ts
function Map.removeOrElse<K, V, U>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    orElse: (target: ReadonlyMap<K, V>) => U,
): Map<K, V> | U
```

Removes the specified key from the map, or calls the fallback function if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.removeOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    () => null,
); // Map(1) { "b" => 2 }

Map.removeOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (map) => map.size,
); // 2
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOrElse("a", () => null),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOrElse("c", (map) => map.size),
); // 2
```

### removeOrThrow

```ts
function Map.removeOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
): Map<K, V>
```

Removes the specified key from the map, or throws an error if the key doesn't exist.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

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
import { Map } from "@monstermann/map";

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

### set

```ts
function Map.set<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    value: NoInfer<V>,
): ReadonlyMap<K, V>
```

Sets or updates the value for the specified key in the map.

#### Example

```ts [data-first]
import { Map } from "@monstermann/map";

Map.set(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    10,
); // Map(2) { "a" => 10, "b" => 2 }

Map.set(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    3,
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.set("a", 10),
); // Map(2) { "a" => 10, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.set("c", 3),
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```
