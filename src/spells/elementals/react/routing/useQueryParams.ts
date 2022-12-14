import React from "react"
import {isEqual} from "lodash"
import {merge} from "../../merge"

export function useQueryParams() {
  const [search, setSearch] = React.useState(window.location.search)
  React.useEffect(() => {
    const listener = () => {
      setSearch(window.location.search)
    }
    document.addEventListener("change", listener)
    return () => {
      document.removeEventListener("change", listener)
    }
  }, [])

  const params = React.useMemo(
    () =>
      Array.from(new window.URLSearchParams(search).entries()).reduce(
        (acc, [k, v]) => {
          acc[k] = v
          return acc
        },
        {} as Dictionary
      ),
    [search]
  )

  const update = React.useCallback(
    (paramsUpdate: Dictionary<Optional<string>>) => {
      const updated = merge(params, paramsUpdate)
      if (!isEqual(updated, params)) {
        const url = new URL(window.location.href)
        url.searchParams.forEach((v, k) => url.searchParams.delete(k))
        Object.entries(updated).forEach(([k, v]) => url.searchParams.set(k, v))
        history.pushState(null, "", url.href)
      }
    },
    [params]
  )

  return [params, update] as [typeof params, typeof update]
}
