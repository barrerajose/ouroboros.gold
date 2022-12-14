export function getValue<V>(original: V, vOrFn: ValueOrFn<V>): V {
  return typeof vOrFn === "function" ? (vOrFn as any)(original) : vOrFn
}
