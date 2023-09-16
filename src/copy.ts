import { spawn } from 'child_process'
import { getPath } from './bin'

interface IOptions {
  source: string
  destination: string
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

    proc.stdout.on('data', (data) => {
      const match = data.toString().match(/(?<bytes>[\d,]+)\s+(?<percent>\d+)%\s+(?<speed_string>(?<speed_bytes>[\d\\.]+)\w{2,3}\/s)\s+(?<eta>[\d:]+)/)

      if (match !== null) {
        const { bytes, percent, speed_string, speed_bytes, eta } = match.groups

        const progress: IProgress = {
          percentage: Number(percent),
          transferred: Number(bytes.replaceAll(',', '')),
          eta: 0,
          runtime: 0,
          speed: Number(speed_bytes)
        }

        console.log(progress)
      }
    })
  })
}
