type Fn<R = any, P = any> = (p: P) => R
type AsyncFn<R = any, P = any> = Fn<Promise<R>, P>
type Optional<T> = T | undefined
type Nullable<T> = T | null
type Nully<T> = T | null | undefined
type Dictionary<T = string> = Record<string, T>
type Supplier<S> = () => S
type ValueOrSupplier<S> = S | (() => S)
type ParamsUpdate<V extends Obj> = Partial<{[k in keyof V]: Optional<V[k]>}>
type UpdateOrFn<S> = ParamsUpdate<S> | Fn<ParamsUpdate<S>, S>
type ValueOrFn<S> = S | Fn<S, S>
type Setter<S> = Fn<void, ValueOrFn<S>>
type Exec = () => void
type Falsy = false | null | undefined | 0
type Consumer<T> = (t: T) => void
type PromiseType<T> = T extends PromiseLike<infer U> ? U : T
type Obj = Record<string, any>
type ArrContentType<Arr extends readonly unknown[]> =
  Arr extends readonly (infer ElementType)[] ? ElementType : never
type Pair<T> = [T, T]
