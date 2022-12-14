import React from "react"

let id = 0
export function useUniqueId() {
  return React.useMemo(() => `ID${++id}`, [])
}
