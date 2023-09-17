import { spawn } from 'child_process'
import { getPath } from './bin'

interface IOptions {
  source: string
  destination: string
  onProgress?: (progress: IProgress) => void
}

interface IProgress {
  percentage: number
  transferred: number
  eta: number
  runtime: number
  speed: number
}

export const copy = async (options: IOptions): Promise<void> => {
  await new Promise<void>((resolve) => {
    const start = Date.now()
    const rsync = getPath()

    const proc = spawn(
      rsync,
      [options.source, options.destination, '--info=progress2']
    )

    proc.on('error', (error) => {
      console.log(error)
    })

    proc.on('exit', () => {
      resolve()
    })

    if (options.onProgress) {
      proc.stdout.on('data', (data) => {
        const match = data.toString().match(/(?<bytes>[\d,]+)\s+(?<percent>\d+)%\s+(?<speedString>(?<speedBytes>[\d\\.]+)\w{2,3}\/s)\s+(?<eta>[\d:]+)/)

        if (match !== null) {
          const { bytes, percent, speedBytes, eta } = match.groups

          const [hours, minutes, seconds] = eta.split(':')
          const etaSeconds = Number(seconds) + Number((minutes * 60)) + Number((hours * 60 * 60))

          const progress: IProgress = {
            percentage: Number(percent),
            transferred: Number(bytes.replaceAll(',', '')),
            eta: Number(percent) === 100 ? 0 : etaSeconds,
            runtime: (Date.now() - start) / 1000,
            speed: Number(speedBytes)
          }

          if (options.onProgress) options.onProgress(progress)
        }
      })
    }
  })
}
