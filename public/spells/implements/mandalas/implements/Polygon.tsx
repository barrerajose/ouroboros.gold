import React from "react"
import {polarToXY} from "../elementals/polarToXY"
import {createShape} from "./createShape"

type Params = {
  x?: number
  y?: number
  r: number
  ang?: number
  count: number
}

export const Polygon = createShape(
  ({x = 0, y = 0, r, ang = 0, count}: Params) => {
    const inc = 360 / count
    const xys = [...Array(count)]
      .map((_, idx) => polarToXY({r, ang: ang + inc * idx, x, y}))
      .flat()
    return `M${xys}Z`
  }
)
