import {getValue} from "./getValue"

// A Flask is used to hold a substance.
// Invoked with no arguments, it returns the current substance.
// Passing it a new substance, it holds it and returns
// what it currently contained.
export function Flask<S>(
  substance: S,
  {
    isEqual = (a, b) => a === b,
    on,
  }: {isEqual?(a: S, b: S): boolean; on?(current: S, previous: S): void} = {}
) {
  interface Flask<V> {
    access(): V
    access(newSubstance: ValueOrFn<V>): V
  }
  const Flask: Flask<S> = {
    access(...args: ValueOrFn<S>[]) {
      if (!args.length) return substance
      const newSubstance = getValue(substance, args[0])
      if (!args.length || isEqual(newSubstance, substance)) return substance
      const previous = substance
      substance = newSubstance
      on?.(substance, previous)
      return previous
    },
  }
  return Flask.access
}
