- **Type:** `string`
- **Default:**

```ts
// isProd indicates that the production build
const localIdentName = isProd
  ? '[hash:base64:5]'
  : '[path][name]__[local]--[hash:base64:5]';
```

Sets the format of the className generated by CSS Modules after compilation.

### Default Value

`cssModuleLocalIdentName` has different default values in development and production.

In a production, Builder will generate shorter class names to reduce the bundle size.

```ts
import styles from './index.module.scss';

// In development, the value is `.src-index-module__header--xxxxx`
// In production, the value is `.xxxxx`
console.log(styles.header);
```

### Template String

You can use the following template strings in `cssModuleLocalIdentName`:

- `[name]` - the basename of the asset.
- `[local]` - original class.
- `[hash]` - the hash of the string.
- `[folder]` - the folder relative path.
- `[path]` - the relative path.
- `[file]` - filename and path.
- `[ext]` - extension with leading dot.
- `[hash:<hashDigest>:<hashDigestLength>]`: hash with hash settings.

:::tip
When using Rspack as the bundler, currently does not support custom `<hashDigest>`.
:::

### Example

Set `cssModuleLocalIdentName` to other value:

```ts
export default {
  output: {
    cssModuleLocalIdentName: '[hash:base64:4]',
  },
};
```
