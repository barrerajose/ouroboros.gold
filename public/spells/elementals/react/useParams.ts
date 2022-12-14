import React from "react"
import {isEqual} from "lodash"
import {merge} from "../merge"

export function useParams<V extends Obj>(initial: V | Supplier<V>) {
  const [state, setState] = React.useState(initial)
  const updater = React.useCallback((update: UpdateOrFn<V>) => {
    setState(state => {
      const updated = merge(
        state,
        typeof update === "function" ? update(state) : update
      )
      return isEqual(state, update) ? state : updated
    })
  }, [])
  return [state, updater] as [V, typeof updater]
}
