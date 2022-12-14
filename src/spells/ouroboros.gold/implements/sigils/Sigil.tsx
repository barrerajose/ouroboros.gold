import React from "react"
import {Mandala} from "../../../implements/mandalas/Mandala"
import {hash} from "../../../elementals/hash"

type Props = {
  color: string
  text: string
  data: string
  svgProps?: React.SVGProps<SVGSVGElement>
}
export function Sigil({color, svgProps, text, data}: Props) {
  data = "http://" + data
  const strokeWidth = 0.01
  const r = 0.7
  const fontSize = 0.2
  const polyCount = text.length
  // const qrCodeR = r * Math.cos(Math.PI / polyCount)
  const qrCodeR = r
  const pathStyle = {
    strokeWidth,
    stroke: color,
    fill: "none",
  }
  return (
    Mandala()
      .add({
        builder: "CircleText",
        params: {
          text,
          r: r,
          fontSize,
          dy: -fontSize * 0.2,
          style: {
            fontFamily: "AureWestraCJ",
            fill: color,
            stroke: "none",
          },
          ang: -5,
          outer: true,
          inner: true,
          circleProps: pathStyle,
          gutter: -fontSize * 0.3,
        },
      })

      // .add({
      //   builder: "CircleText",
      //   params: {
      //     text: "x",
      //     r: 0.65,
      //     fontSize: 0.2,
      //     style: {
      //       fontFamily: "AureWestraKB",
      //       fill: color,
      //       stroke: "none",
      //     },
      //     ang: -10,
      //   },
      // })
      // .add({
      //   builder: "Star",
      //   params: {
      //     params: {r1: r + fontSize * 1.2, r2: 0.95, count: 6},
      //     ...pathStyle,
      //   },
      // })

      // .add({
      //   builder: "Polygon",
      //   params: {
      //     params: {r: r, ang: 180 / polyCount, count: polyCount},
      //     ...pathStyle,
      //   },
      // })

      // .add({
      //   builder: "Polygon",
      //   params: {
      //     params: {r: r, ang: 0, count: polyCount},
      //     ...pathStyle,
      //   },
      // })

      .add({
        builder: "QrCode",
        params: {
          r: qrCodeR,
          data,
          color,
        },
      })
      .build(svgProps)
  )
}
