import React from "react"
import {Props as TextProps, Text} from "./Text"
import {Circle} from "./Circle"
import {ShapeProps} from "./createShape"
import {useUniqueId} from "../../../elementals/react/useUniqueId"

interface Props extends Omit<TextProps, "id" | "textLength" | "path"> {
  text: string
  r: number
  fontSize: number
  ang?: number
  style?: React.CSSProperties
  x?: number
  y?: number
  outer?: boolean
  inner?: boolean
  circleProps?: ShapeProps
  gutter?: number
}

export function CircleText({
  text,
  x = 0,
  y = 0,
  r,
  ang = 0,
  style,
  dy = 0,
  outer,
  inner,
  gutter = 0,
  circleProps,
  fontSize,
}: Props) {
  const id = useUniqueId()
  return (
    <g>
      <Text
        text={text}
        path={
          <Circle
            params={{x, y, r}}
            id={id}
            transform={`rotate(${ang + 90} ${x} ${y})`}
          />
        }
        id={id}
        dy={dy}
        textLength={
          (Math.PI * 2 * (r + dy) * text.length - 1) / (text.length + 1)
        }
        style={{...style, fontSize}}
      />
      {inner && <Circle params={{x, y, r: r}} fill="none" {...circleProps} />}
      {outer && (
        <Circle
          params={{x, y, r: r + fontSize - 2 * dy + gutter}}
          fill="none"
          {...circleProps}
        />
      )}
    </g>
  )
}
