# node-rsync
Rsync API for server-side javascript runtimes

# Features
* Progress reporting
* Typed rsync options
* Set custom executable path
* CJS + ESM exports
* 0 dependencies

# Example

```javascript
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
