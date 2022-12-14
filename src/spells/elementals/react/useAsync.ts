import React from "react"
import {useMemoIfEqual} from "./useMemoIfEqual"

export function useAsync<R, P, V = R>(
  params: Optional<P>,
  fn: AsyncFn<R, P>,
  transmuter?: Fn<V, R>
) {
  const [value, setValue] = React.useState<
    [Optional<V>, boolean, undefined | any]
  >([undefined, false, undefined])
  React.useEffect(() => {
    if (params === undefined) {
      setValue([undefined, false, undefined])
    } else {
      setValue([undefined, true, undefined])
      fn(params)
        .then(r => setValue([transmuter?.(r) ?? (r as any), false, undefined]))
        .catch(error => setValue([undefined, false, error]))
    }
  }, [useMemoIfEqual(params)])
  return value
}
