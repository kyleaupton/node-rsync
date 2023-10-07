export const humanReadableToBytes = (string: string) => {
  const units: { [key: string]: number } = {
    kB: 1e+3,
    MB: 1e+6,
    GB: 1e+9,
    TB: 1e+12,
    PB: 1e+15,
    EB: 1e+18,
    ZB: 1e+21,
    YB: 1e+24,
  }

  const match = string.match(/(?<n>[\d\.]+)(?<unit>\w{2})/)

  if (match && match.groups) {
    const { n, unit } = match.groups

    const factor = units[unit];

    if (factor) {
      const bytes = +n * factor;

      return {
        bits: bytes * 8,
        bytes,
      }
    }
  }

  return {
    bits: 0,
    bytes: 0,
  }
}
