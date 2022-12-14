import React from "react"
import {polarToXY} from "./elementals/polarToXY"
import {PathBuilder} from "./implements/PathBuilder"
import {Circle} from "./implements/Circle"

const jump = 0.1
export function Paint() {
  const count = 40
  const r = 0.6

  const strokeWidth = 0.015
  const patternWidth = strokeWidth * (1 - 0.5)
  const inc = 360 / count
  const head = polarToXY({r, ang: 0})
  return (
    <svg
      className="absolute w-full h-full"
      viewBox="-1 -1 2 2"
      strokeWidth={r * strokeWidth}
      fill="none"
      stroke="red"
    >
      <path d={cog(count, r)} strokeWidth={r * patternWidth} />
      <path d={cog(count, r, inc)} strokeWidth={r * patternWidth} />
      <Circle params={{r: r * (1 + jump * 0.5)}} />
      <Circle params={{r: r * (1 - jump * 0.5)}} />
      <Circle params={{r: r * 0.15, x: head[0], y: head[1]}} fill="white" />
      <path
        d={smooth([0, 0, 0, 0.5, 0.5, 0.5], false, 0.5)}
        strokeWidth={r * patternWidth}
      />
    </svg>
  )
}

function smooth(points: number[], closed: boolean, tension = 0.5) {
  const toPtIdx = (idx: number) => idx * 2
  const point = (idx: number) =>
    points.slice(toPtIdx(idx), toPtIdx(idx + 1)) as [number, number]
  function ctrlPts([x0, y0, x1, y1, x2, y2]: number[]) {
    const d01 = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)
    const d12 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    const fa = (tension * d01) / (d01 + d12)
    const fb = (tension * d12) / (d01 + d12)
    return [
      x1 - fa * (x2 - x0),
      y1 - fa * (y2 - y0),
      x1 + fb * (x2 - x0),
      y1 + fb * (y2 - y0),
    ] as const
  }
  const count = points.length / 2

  if (count < 2 || points.length % 2 !== 0)
    throw `Invalid points: ${points.length}`

  const builder = PathBuilder().M(...point(0))
  for (let idx = 1; idx < count - 1; idx++) {
    builder.C(
      ...ctrlPts(points.slice(toPtIdx(idx - 1), toPtIdx(idx + 2))),
      ...point(idx)
    )
  }
  if (!closed || count === 2) {
    builder.L(...point(count - 1))
  } else {
    const r = [...points.slice(toPtIdx(count - 2), toPtIdx(count)), ...point(0)]
    builder.C(...ctrlPts(r), ...point(0)).Z()
  }
  const d = builder.build()
  console.log(d)
  return d
}

function cog(count: number, r: number, ang = 0) {
  const builder = PathBuilder().M(...polarToXY({r, ang}))
  const inc = 360 / count
  for (let idx = 1; idx < count; idx++) {
    const [cx, cy] = polarToXY({
      ang: inc * idx - 0.5 * inc + ang,
      r: r * (idx % 2 ? 1 - jump : 1 + jump),
    })
    const [x2, y2] = polarToXY({r, ang: inc * idx + ang})
    builder.Q(cx, cy, x2, y2)
  }
  builder.L(...polarToXY({r, ang: ang}))
  builder.Z()
  return builder.build()
}
