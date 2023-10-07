# node-rsync
Rsync wrapper API for server-side javascript runtimes

> **_NOTE:_**  Requires rsync version `3.1.0` or greater

# Features
* Progress reporting
* Typed rsync options
* Set custom executable path
* CJS + ESM exports
* 0 dependencies

# Install

```bash
yarn add @kyleupton/node-rsync
```

# Example

```javascript
import { setPath, copy } from '@kyleupton/node-rsync'

setPath('/opt/homebrew/Cellar/rsync/3.2.7_1/bin/rsync')

const res = await copy({
  source: '/Users/kyleupton/Downloads/',
  destination: '/Users/kyleupton/Documents/dest/',
  options: {
    archive: true
  },
  onProgress: (progress) => {
    console.log(progress)
  }
})
```
