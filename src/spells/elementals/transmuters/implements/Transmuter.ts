export interface Transmuter<T> {
  type: string
  toQuery: Fn<Optional<string>, Optional<T>>
  toValue: Fn<Optional<T>, Optional<string>>
  valid: Fn<boolean>
}

export function Transmuter<T>(
  type: string,
  toQuery: Fn<string, T>,
  toValue: Fn<T, string>,
  valid: Fn<boolean>
): Transmuter<T> {
  return {
    type,
    toQuery: value => (value === undefined ? undefined : toQuery(value)),
    toValue: query => {
      if (query === undefined) return undefined
      const value = toValue(query)
      if (!valid(value)) throw `[${value}] is not ${type}`
      return value
    },
    valid,
  }
}
