import {getValue} from "./getValue"

type MergeUpdate<V> = Partial<{[k in keyof V]: Optional<V[k]>}>

export function merge<V extends Obj>(
  value: V,
  updateOrFn: UpdateOrFn<MergeUpdate<V>>
) {
  const update: MergeUpdate<V> = getValue(value, updateOrFn)
  const acc = {...value}
  for (const k in update) {
    const v = update[k]
    if (v === undefined) {
      delete acc[k]
    } else {
      acc[k] = v!
    }
  }
  return acc
}
