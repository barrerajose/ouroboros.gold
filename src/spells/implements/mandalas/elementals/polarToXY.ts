import {Polar} from "./Polar"

export function polarToXY({x = 0, y = 0, r, ang}: Polar) {
  const rads = ((ang - 90) * Math.PI) / 180.0
  return [x + r * Math.cos(rads), y + r * Math.sin(rads)] as const
}
