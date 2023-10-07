import { setPath } from '../src/bin'
import { copy } from '../src/copy'

setPath('/opt/homebrew/Cellar/rsync/3.2.7_1/bin/rsync')

const res = await copy({
  source: '/Users/kyleupton/Downloads/',
  destination: '/Users/kyleupton/Documents/dest/',
  options: {
    archive: true,
    include: '*.iso',
    exclude: '*'
  },
  onProgress: (progress) => {
    console.log(progress)
  }
})

console.log(res)
