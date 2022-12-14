import React from "react"
import {isEqual} from "lodash"

export function useMemoIfEqual<V>(value: V): V {
  const ref = React.useRef<V>(value)
  const equal = isEqual(ref.current, value)
  React.useLayoutEffect(() => {
    if (!equal) {
      ref.current = value
    }
  }, [equal, value])
  return equal ? ref.current : value
}
