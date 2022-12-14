import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {EndMode} from "../../../../implements/bookParser/implements/PatternProcessor"
import React from "react"
import {RichText} from "../../../../implements/bookParser/implements/RichTect"

export const TextProcessor = TagProcessor({
  tag: "DEFAULT",
  regExp: /(.*)/,
  endMode: EndMode.NEXT_PROCESSOR,
  process({body, id}) {
    return (
      <div key={id} data-tag="TEXT" style={{columns: 2}}>
        <RichText text={body} />
      </div>
    )
  },
})
