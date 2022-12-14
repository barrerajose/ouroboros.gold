import React from "react"
import {summon} from "../../../implements/summon/summon"
import {classes} from "../../../elementals/classes"
import {Appearance, useAppearance} from "../Appearance"
import {Directory} from "../../../implements/summon/Directory"
import {Parser} from "../../../implements/bookParser/implements/Parser"
import {TextProcessor} from "./processors/TextProcessor"
import {CodeProcessor} from "./processors/CodeProcessor"
import {ImageProcessor} from "./processors/ImageProcessor"
import {ParagraphProcessor} from "./processors/ParagraphProcessor"
import {SigilProcessor} from "./processors/SigilProcessor"
import {SvgProcessor} from "./processors/SvgProcessor"
import {TitleProcessor} from "./processors/TitelProcessor"
import {useMemoIfEqual} from "../../../elementals/react/useMemoIfEqual"

export function BookBinder({
  entityName,
  onFinished,
}: {
  entityName: string
  onFinished?: Exec
}) {
  const appearance = useAppearance()
  const [components, setComponents] = React.useState<React.ReactNode[]>([])
  React.useEffect(() => {
    async function load() {
      const parser = Parser<any, Appearance>(
        appearance,
        TextProcessor,
        CodeProcessor,
        ImageProcessor,
        ParagraphProcessor,
        SigilProcessor,
        SvgProcessor,
        TitleProcessor
      )
      const text = await summon(Directory.resolve(entityName))
      return await Promise.all(parser(text))
    }

    console.log("rendering", entityName, appearance)
    load()
      .then(setComponents)
      .then(() => onFinished?.())
  }, [useMemoIfEqual([entityName, appearance])])

  return (
    <div
      className={classes(
        "flex flex-col items-stretch ",
        appearance.font,
        appearance.paper,
        appearance.textColor
      )}
    >
      {!components.length ? "Nothing" : <>{components}</>}
    </div>
  )
}
