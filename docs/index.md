---
aside: true
---

# map

<Badge type="info" class="size">
    <span>Minified</span>
    <span>3.43 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>1.03 KB</span>
</Badge>

**Functional utilities for maps.**

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`filter(map, () => true) === map`)
- Pipe-friendly (`pipe(filter(() => true))(map)`)
- Graceful failure handling (`get()`, `getOr()`, `getOrElse()`, `getOrThrow()`)

## Installation

::: code-group

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

:::

## Tree-shaking

### Installation

::: code-group

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

:::

### Usage

::: code-group

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

:::
