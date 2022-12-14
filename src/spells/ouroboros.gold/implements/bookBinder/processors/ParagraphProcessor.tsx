import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {EndMode} from "../../../../implements/bookParser/implements/PatternProcessor"
import React from "react"
import {RichText} from "../../../../implements/bookParser/implements/RichTect"
import {toInt} from "../../../../elementals/toInt"

export const ParagraphProcessor = TagProcessor({
  tag: "T",
  endMode: EndMode.NEXT_PROCESSOR,
  process({suffix, body, id, params}) {
    return (
      <p key={id} data-tag="T" style={{columns: toInt(params, 1)}}>
        <RichText text={[suffix, body].filter(l => l.length).join("\n")} />
      </p>
    )
  },
})
