import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import {EndMode} from "../../../../implements/bookParser/implements/PatternProcessor"
import {summon} from "../../../../implements/summon/summon"
import {Directory} from "../../../../implements/summon/Directory"
import React from "react"

export const CodeProcessor = TagProcessor({
  tag: "CODE",
  endMode: EndMode.NEXT_PROCESSOR,
  async process({suffix: entityName, id}) {
    return (
      <div key={id} data-tag="CODE" className="my-2">
        <h1 className="text-lg font-bold py-2">{entityName}</h1>
        <div className="table w-full">
          {(await summon(Directory.resolve(entityName)))
            .split("\n")
            .map((line, idx) => (
              <div key={idx} className="table-row">
                <div className="table-cell">{idx + 1}</div>
                <div className="table-cell whitespace-pre-wrap">{line}</div>
              </div>
            ))}
        </div>
      </div>
    )
  },
})
