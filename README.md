# `style-loader-treeshakeable`

Import styles as a functions to support treeshaking.

```diff
import styles from "./Butler.mod.css";

-const Butler = props => <div className={styles.alfred}>I am Butler</div>;
+const Butler = props => <div className={styles().alfred}>I am Butler</div>;
```

This is a companion plugin for [`rollup-plugin-postcss-treeshakeable`](https://github.com/dferber90/rollup-plugin-postcss-treeshakeable).


## Setup

### Install

```
npm install style-loader-treeshakeable --save-dev
```

### Add to webpack config

You'll need to replace `style-loader` with `style-loader-treeshakeable`

```diff
{
  test: /\.css$/,
  use: [
-    "style-loader",
+    "style-loader-treeshakeable",
    {
      loader: "css-loader",
      query: { modules: true }
    }
  ]
```

## Motivation

This plugin is only really useful if you are working on a library exposing components, produce your bundle with Rollup, develop with Webpack, use CSS modules and want to support treeshaking CSS of components your library consumers are not using.

The `rollup-plugin-postcss-treeshakeable` requires imported CSS to be a function.
That's why this plugin serves as a replacement for `style-loader` which lets you write `styles().foo` instead of `style.foo`. This enables the components that support treeshaking to be used by Rollup and Webpack.
