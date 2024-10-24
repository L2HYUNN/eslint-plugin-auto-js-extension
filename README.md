# eslint-plugin-auto-js-extension

An [ESLint](https://eslint.org) plugin for auto js extension

## Installation

Prerequisites: [ESLint](https://www.npmjs.com/package/eslint) `v9`.

```sh
npm install eslint eslint-plugin-auto-js-extension --save-dev
```

or

```sh
npm install eslint@8.57.0 eslint-plugin-auto-js-extension --save-dev
```

## Usage

ESLint `v9` uses a [Flat config file](https://eslint.org/docs/latest/use/configure/configuration-files) format with filename `eslint.config.*js` by default. For instructions on using a deprecated [eslintrc-type](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) config file from previous ESLint versions, please refer to the below instructions.

To set up a flat configuration, add a file `eslint.config.mjs` to the root directory of your project and include the following instructions to import the available flat configurations using:

```shell
import eslintPluginAutoJsExtension from "eslint-plugin-auto-js-extension";
```

💼 Configurations enabled in.\

| Name              | Description                                      | 💼  |
| :---------------- | :----------------------------------------------- | :-- |
| auto-js-extension | Ensure all JavaScript files have a .js extension | 💼  |

## Usage examples

### Flat config

```js
// eslint.config.mjs
import eslintPluginAutoJsExtension from "eslint-plugin-auto-js-extension";

export default [
  {
    ignores: ["eslint.config.mjs"],
  },
  {
    plugins: { eslintPluginAutoJsExtension },
    rules: {
      "eslintPluginAutoJsExtension/auto-js-extension": "error",
    },
  },
];
```

### Deprecated config

```js
// .eslintrc.json
{
  "plugins": ["auto-js-extension"],
  "rules": {
    "auto-js-extension/auto-js-extension": "error"
  }
}
```
