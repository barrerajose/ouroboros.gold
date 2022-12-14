import React from "react"
import {useQueryParams} from "./useQueryParams"
import {selectTransmuter} from "../../transmuters/Transmuters"
import {useMemoIfEqual} from "../useMemoIfEqual"
import {isEqual} from "lodash"
import {mapEntries} from "../../mapEntries"

export function useQueryParamsAsState<V extends object>(
  defValue: V,
  queryParamPrefix = ""
) {
  const [params, updateParams] = useQueryParams()
  defValue = React.useMemo(() => defValue, [])
  function toParamName(key: string) {
    return queryParamPrefix + key
  }
  function toKeyName(queryParamName: string) {
    return queryParamName.substring(queryParamPrefix.length)
  }
  const value = useMemoIfEqual(
    React.useMemo(() => {
      return Object.entries(params).reduce(
        (acc, [paramName, paramValue]) => {
          const key = toKeyName(paramName)
          if (key in defValue) {
            const transmuter = selectTransmuter((defValue as any)[key])
            const accAsAny = acc as any
            try {
              accAsAny[key] = transmuter.toValue(paramValue)
            } catch (e) {
              console.error(`Error Decoding URL. param[${key}]`, paramValue, e)
            }
          }
          return acc
        },
        {...defValue}
      )
    }, [params])
  )

  const update = React.useCallback(
    (update: Partial<{[k in keyof V]: Optional<V[k]>}>) => {
      const entries = mapEntries(update, ([key, v]) => {
        const paramName = toParamName(key)
        return [
          paramName,
          isEqual(v, (defValue as any)[key as any])
            ? undefined
            : selectTransmuter(v).toQuery(v),
        ]
      })
      updateParams(entries)
    },
    [updateParams, value]
  )
  return [value, update] as [V, typeof update]
}
