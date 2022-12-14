import React from "react"
import {Previewer} from "pagedjs"
import "./BookPreview.css"
import {useParams} from "../../../elementals/react/useParams"

export function useBookPreview() {
  const [{counter, book}, update] = useParams({
    counter: 0,
    book: null as Nullable<JSX.Element>,
  })
  React.useEffect(() => {
    if (!counter) return
    const pages = document.getElementsByClassName("pagedjs_pages")
    for (let idx = 0; idx < pages.length - 1; idx++) {
      pages.item(idx)?.remove()
    }
    new Previewer()
      .preview(
        document.querySelector("#root")?.innerHTML,
        [],
        document.querySelector("#preview")
      )
      .then((flow: any) => {
        console.log("preview rendered, total pages", flow.total, {flow})
        flow.pagesArea.remove()

        update({book: <BookPreview flow={flow} />})
      })
    return () => {
      document.head
        .querySelectorAll("[data-pagedjs-inserted-styles]")
        .forEach(e => e.remove())
    }
  }, [counter])
  return [book, () => update({counter: counter + 1})] as const
}

function BookPreview({flow}: {flow: any}) {
  const elements: React.ReactNode[] = []
  const pages: Element[] = flow.pages.map((page: any) => page.element)
  const count = Math.floor((pages.length - 1) / 2) + 1
  for (let folioIdx = 0; folioIdx < count; folioIdx++) {
    elements.push(
      <div key={folioIdx} className="flex flex-row justify-around">
        <div
          key={folioIdx}
          className="flex flex-row justify-around"
          ref={container => {
            const idx = !folioIdx ? 0 : (folioIdx - 1) * 2 + 1
            if (!container) return

            container.append(pages[idx])
            if (idx > 0 && idx < pages.length - 1) {
              container.append(pages[idx + 1])
            }
          }}
        />
      </div>
    )
  }
  return (
    <div className="flex flex-col w-full h-full bg-gray-700">{elements}</div>
  )
}
