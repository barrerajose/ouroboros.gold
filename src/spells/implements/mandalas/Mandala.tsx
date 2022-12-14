import React from "react"
import {Circle} from "./implements/Circle"
import {Polygon} from "./implements/Polygon"
import {Star} from "./implements/Star"
import {QrCode} from "./implements/QrCode"
import {CircleText} from "./implements/CircleText"
import {Text} from "./implements/Text"

function builder<C extends Fn<JSX.Element>>(C: C) {
  return (props: Parameters<C>[0], key: React.Key) => <C key={key} {...props} />
}
const Builder = {
  Circle: builder(Circle),
  Polygon: builder(Polygon),
  Star: builder(Star),
  QrCode: builder(QrCode),
  CircleText: builder(CircleText),
  Text: builder(Text),
} as const

type BuilderKey = keyof typeof Builder
type BuilderParams<Key extends BuilderKey> = Parameters<typeof Builder[Key]>[0]

export function Mandala() {
  type Params<Key extends keyof typeof Builder> = {
    builder: Key
    params: BuilderParams<Key>
  }

  const params: Params<BuilderKey>[] = []
  return {
    add(p: Params<BuilderKey>) {
      params.push(p)
      return this
    },
    build(props?: React.SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox={`${-1} ${-1} ${2} ${2}`} {...props}>
          {params.map(({builder, params}, idx) =>
            Builder[builder](params as any, idx)
          )}
        </svg>
      )
    },
  }
}
