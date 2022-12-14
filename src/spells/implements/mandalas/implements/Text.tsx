import React from "react"

export interface Props {
  path: JSX.Element
  dy?: number
  id: string
  textLength: number
  style?: React.CSSProperties
  text: string
}
export function Text({textLength, path, id, dy = 0, style, text}: Props) {
  return (
    <g>
      <defs>{path}</defs>
      <text dy={dy} textLength={textLength} style={style}>
        <textPath xlinkHref={"#" + id}>{text}</textPath>
      </text>
    </g>
  )
}
