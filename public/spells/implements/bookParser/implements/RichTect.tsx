import React from "react"
import {simpleRichText} from "simple-rich-text"
import {classes} from "../../../elementals/classes"

const FlagClasses: Dictionary = {
  bold: "font-bold",
  italic: "italic",
}

export function RichText({text}: {text: string}) {
  const richText = simpleRichText(text, {
    tokens: [
      {
        expression: /\*\*/g,
        flagName: "bold",
      },
      {
        expression: /__/g,
        flagName: "italic",
      },
    ],
  })

  return (
    <>
      {richText.map(({text, flags}, idx) => (
        <span
          key={idx}
          className={classes(
            ...Object.keys(flags).map(flag => FlagClasses[flag])
          )}
        >
          {text}
        </span>
      ))}
    </>
  )
}
