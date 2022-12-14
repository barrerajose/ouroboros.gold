import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {summon} from "../../../../implements/summon/summon"
import {Directory} from "../../../../implements/summon/Directory"
import React from "react"
import InlineSVG from "react-inlinesvg"

export const SvgProcessor = TagProcessor({
  tag: "SVG",
  async process({suffix, id}) {
    return (
      <div key={id} data-tag="SVG" className="self-center m-4 text-black">
        <InlineSVG
          width={300}
          stroke={"rgba(100,0,0,.5)"}
          className="text-red-500"
          src={await summon(Directory.resolve(suffix))}
        />
      </div>
    )
  },
})
