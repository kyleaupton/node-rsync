import { setPath } from '../src/bin'
import { copy } from '../src/copy'

setPath('/opt/homebrew/Cellar/rsync/3.2.7_1/bin/rsync')

copy({
  source: '/Users/kyleupton/Downloads/Barbie (2023).mkv',
  destination: '/Users/kyleupton/Documents/dest',
  onProgress: (progress) => {
    console.log(progress)
  }
})
  .then(res => { })
  .catch(error => { console.log(error) })
