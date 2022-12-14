export function mapEntries<V, M>(
  obj: Record<string, V>,
  entryFilter: Fn<[string, M], [string, V]>
) {
  return Object.fromEntries(Object.entries(obj).map(entryFilter))
}
