import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {summon} from "../../../../implements/summon/summon"
import {Directory} from "../../../../implements/summon/Directory"
import React from "react"
import {classes} from "../../../../elementals/classes"

export const ImageProcessor = TagProcessor({
  tag: "IMG",
  async process({suffix, id}) {
    const [src, ...classNames] = suffix.split(/,/)
    return (
      <div key={id} data-tag="IMG" className="self-center m-4 flex relative">
        <img
          className={classes(...classNames.map(c => "ouroboros-gold-" + c))}
          src={await summon(Directory.resolve(src))}
          alt={src}
        />
      </div>
    )
  },
})
