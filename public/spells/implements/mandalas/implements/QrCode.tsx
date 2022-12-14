import React from "react"
import qr from "qr.js"
import {random} from "../../../elementals/random"
import {hash} from "../../../elementals/hash"
import {checkerboard} from "./checkerboard"

interface Props {
  x?: number
  y?: number
  r: number
  ang?: number
  data: string
  color: string
  circular?: boolean
}

const Sqrt2 = Math.sqrt(2)

export function QrCode({
  r,
  data,
  color,
  x: cx = 0,
  y: cy = 0,
  ang = 225,
  circular = true,
}: Props) {
  const cells: boolean[][] = React.useMemo(() => qr(data).modules, [data])
  const cCount = cells.length
  if (!circular) {
    const count = cells.length
    const size = (2 * r) / Sqrt2

    return (
      <g
        fill={color}
        transform={`rotate(${ang})  translate(${cx - size / 2} ${
          cy - size / 2
        })`}
      >
        <path
          d={checkerboard(
            size,
            count,
            (row: number, col: number) => cells[row]?.[col]
          )}
        />
      </g>
    )
  }

  const rnd = random(hash(data))

  const extraCount = Math.ceil((Sqrt2 * cCount - cCount) / 2)
  const count = cCount + 2 * extraCount
  const half = count / 2
  const half2 = half ** 2

  const size = 2 * r
  return (
    <g
      fill={color}
      transform={`rotate(${ang})  translate(${cx - size / 2} ${cy - size / 2})`}
    >
      <path
        d={checkerboard(size, count, (row, col) =>
          row >= extraCount &&
          row < count - extraCount &&
          col >= extraCount &&
          col < count - extraCount
            ? cells[row - extraCount]?.[col - extraCount]
            : (row - half) ** 2 + (col - half) ** 2 < half2 && rnd() > 0.5
        )}
      />
    </g>
  )
}
