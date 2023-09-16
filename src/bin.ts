let path = 'rsync'

export const setPath = (newPath: string): void => {
  path = newPath
}

export const getPath = (): string => {
  return path
}
