import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {EndMode} from "../../../../implements/bookParser/implements/PatternProcessor"
import React from "react"
import {RichText} from "../../../../implements/bookParser/implements/RichTect"

export const ParagraphProcessor = TagProcessor({
  tag: "T",
  endMode: EndMode.NEXT_PROCESSOR,
  process({suffix, body, id}) {
    return (
      <p key={id} data-tag="T">
        <RichText text={[suffix, body].filter(l => l.length).join("\n")} />
      </p>
    )
  },
})
