import {TagProcessor} from "../../../../implements/bookParser/implements/TagProcessors"
import React from "react"
import {Sigil} from "../../sigils/Sigil"
import {Appearance} from "../../Appearance"

export const SigilProcessor = TagProcessor({
  tag: "SIGIL",
  process({suffix, id}, appearance: Appearance) {
    const [entityName, title] = suffix.split(/,/)
    return (
      <Sigil
        data-tag="SIGIL"
        key={id}
        text={title}
        data={entityName}
        color={appearance.sigilColor}
        svgProps={{height: 200}}
      />
    )
  },
})
