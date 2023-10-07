import { spawn } from 'child_process'
import { getPath } from './bin.js'
import { type IOptions, type IProgress, type IRsyncAPI, RsyncAPIMap } from './copyOptions.js'
import { humanReadableToBytes } from './utils/bytes.js'

interface IReturn {
  command: string
  ellapsedTime: number
}

export const copy = async (param: IOptions): Promise<IReturn> => {
  return await new Promise<IReturn>((resolve) => {
    const payload: IReturn = {
      command: '',
      ellapsedTime: -1
    }

    const start = Date.now()
    const rsync = getPath()

    // Form param
    const options = []
    if (param.options) {
      for (const key in param.options) {
        // TODO: figure out how to not use 'as'
        const _key = key as keyof IRsyncAPI
        const value = param.options[_key]
        const rsyncAPIKey = RsyncAPIMap[key]

        let option

        if (typeof value === 'boolean' && value) {
          option = `${rsyncAPIKey}`
        } else if (typeof value === 'string' || typeof value === 'number') {
          option = `${rsyncAPIKey}=${value}`
        } else if (typeof value === 'object') {
          // TODO: figure this one out. Maybe some recursion?
          // Only effects the `backup` option currently
        }

        if (option) options.push(option)
      }
    }

    payload.command = `${rsync} ${options.join(' ')} ${param.source} ${param.destination} --info=progress2`

    const proc = spawn(
      rsync,
      [...options, param.source, param.destination, '--info=progress2']
    )

    proc.on('error', (error) => {
      console.log(error)
    })

    proc.on('exit', () => {
      payload.ellapsedTime = (Date.now() - start) / 1000
      resolve(payload)
    })

    if (param.onProgress) {
      proc.stdout.on('data', (data) => {
        // https://unix.stackexchange.com/questions/231647/rsync-and-xfr1-to-chk-0-1-what-do-they-mean
        const match = data.toString().match(/(?<bytes>[\d,]+)\s+(?<percent>\d+)%\s+(?<speedString>(?<speedBytes>[\d\\.]+)\w{2,3}\/s)\s+(?<eta>[\d:]+)(?<isBadLine>\s+\(xfr.+\))?/)

        if (match !== null) {
          const { bytes, percent, speedString, eta, isBadLine } = match.groups

          if (!isBadLine) {
            const [hours, minutes, seconds] = eta.split(':')
            const etaSeconds = Number(seconds) + Number((minutes * 60)) + Number((hours * 60 * 60))

            const progress: IProgress = {
              percentage: Number(percent),
              transferred: Number(bytes.replaceAll(',', '')),
              eta: etaSeconds,
              runtime: (Date.now() - start) / 1000,
              speed: humanReadableToBytes(speedString).bytes
            }

            if (param.onProgress) param.onProgress(progress)
          }
        }
      })
    }
  })
}
