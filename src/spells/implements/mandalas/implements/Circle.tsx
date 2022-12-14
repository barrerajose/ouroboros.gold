import React from "react"
import {createShape} from "./createShape"

type Params = {x?: number; y?: number; r: number}

export const Circle = createShape(({x = 0, y = 0, r}: Params) => {
  return `M ${x} ${y} 
    m ${-r}, 0 
    a ${r},${r} 0 1,1 ${r * 2},0 
    a ${r},${r} 0 1,1 ${-r * 2},0 Z`
})
