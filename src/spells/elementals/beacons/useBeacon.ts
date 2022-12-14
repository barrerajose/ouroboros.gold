import React from "react"
import {Beacon} from "./Beacon"

export function useBeacon<V>(beacon: Beacon<V>): [V, Beacon<V>["value"]] {
  const [value, setValue] = React.useState(beacon.value())
  React.useEffect(() => {
    setValue(beacon.value())
    return beacon.on(setValue)
  }, [beacon])
  return [value, beacon.value]
}
