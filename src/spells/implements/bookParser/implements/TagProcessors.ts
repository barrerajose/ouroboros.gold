import {EndMode, PatternProcessor} from "./PatternProcessor"
import React from "react"

type Params = {
  id: string
  tag: string
  suffix: string
  body: string
  params: string
  matches: RegExpExecArray
}

export interface ProcessorDesc<R, C> {
  tag: string
  regExp?: RegExp | string
  prefix?: string
  params?: string
  endMode?: EndMode
  process(params: Params, context: C): R
}

export function TagProcessor<R, C = any>({
  prefix = "",
  tag,
  regExp,
  endMode,
  process,
}: ProcessorDesc<R, C>) {
  return PatternProcessor<R, C>({
    regExp: RegExp(
      regExp || `^\\s*${prefix}<(${tag})(?:\\s+([^>]+))?>(.*)`,
      "i"
    ),
    endMode,
    process(index, matches, body, context) {
      return process(
        {
          id: `${index}`,
          tag,
          params: (matches[2] ?? "").trim(),
          suffix: (matches[3] ?? "").trim(),
          body: body.join("\n"),
          matches,
        },
        context
      )
    },
  })
}
