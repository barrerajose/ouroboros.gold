import {polarToXY} from "../elementals/polarToXY"
import {createShape} from "./createShape"
import {Polar} from "../elementals/Polar"

interface Params {
  x?: number
  y?: number
  r1: number
  r2: number
  count: number
  ang?: number
}

export const Star = createShape(
  ({x = 0, y = 0, r1, r2, count, ang = 0}: Params) => {
    const inc = 360 / (count * 2)
    const xys = [...Array(count * 2)]
      .map((_, idx) =>
        polarToXY({r: idx % 2 == 0 ? r2 : r1, ang: ang + inc * idx, x, y})
      )
      .flat()
    return `M${xys}Z`
  }
)
