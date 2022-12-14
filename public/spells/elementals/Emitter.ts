export function Emitter<V = any>(
  onListener?: (listener: Consumer<V>, subscribing: boolean) => void
) {
  let listeners: Consumer<V>[] = []
  return {
    emit(v: V) {
      listeners.forEach(l => l(v))
    },
    on(listener: Consumer<V>) {
      listeners = listeners.concat([listener])
      onListener?.(listener, true)
      return () => {
        listeners = listeners.filter(l => l !== listener)
        onListener?.(listener, false)
      }
    },
  } as const
}

export type Emitter<V = any> = ReturnType<typeof Emitter<V>>
