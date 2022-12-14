import React from "react"
import {useMemoIfEqual} from "../../../elementals/react/useMemoIfEqual"

export type ShapeProps = Omit<React.SVGProps<SVGPathElement>, "d">
export interface Props<Params> extends ShapeProps {
  params: Params
}
export function createShape<Params>(getPath: Fn<string, Params>) {
  return ({params, ...props}: Props<Params>) => {
    const d = React.useMemo(() => getPath(params), [useMemoIfEqual(params)])
    return <path d={d} {...props} />
  }
}
