import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {classes} from "../../../../elementals/classes"
import React from "react"
import {RichText} from "../../../../implements/bookParser/implements/RichTect"

export const TitleProcessor = TagProcessor({
  tag: "CT",
  process({suffix, id}) {
    return (
      <h1
        key={id}
        data-tag="CT"
        className={classes("text-3xl font-bold mb-4", "mt-2")}
      >
        <RichText text={suffix} />
      </h1>
    )
  },
})
