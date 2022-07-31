export const PREFIX = '@ignite-timer'
export const VERSION = '1.0.0'

export function getConfigKey(key: string) {
  return `${PREFIX}:${key}-${VERSION}`
}
