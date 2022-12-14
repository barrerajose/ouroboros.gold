import React from "react"
import {Previewer} from "pagedjs"
import "./paginator.css"

export function usePaginator(onRendered?: Exec) {
  const [counter, refresh] = React.useState(0)
  React.useEffect(() => {
    if (!counter) return
    new Previewer()
      .preview(
        document.querySelector("#root")?.innerHTML,
        [],
        document.querySelector("#preview")
      )
      .then((flow: any) => {
        console.log("preview rendered, total pages", flow.total, {flow})
        onRendered?.()
      })
    return () => {
      document.head
        .querySelectorAll("[data-pagedjs-inserted-styles]")
        .forEach(e => e.parentNode?.removeChild(e))
    }
  }, [counter])
  return () => refresh(counter => counter + 1)
}
