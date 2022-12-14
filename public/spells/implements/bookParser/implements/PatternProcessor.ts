import {Processor, selectProcessor} from "./Parser"

export enum EndMode {
  LINE,
  NEXT_PROCESSOR,
}

export function PatternProcessor<R, C>({
  regExp,
  endMode = EndMode.LINE,
  process,
}: {
  regExp: RegExp
  endMode?: EndMode
  process(index: number, params: RegExpExecArray, body: string[], context: C): R
}): Processor<R, C> {
  return reader => {
    const segment = reader.current()
    const matches = segment ? regExp.exec(segment.text) : null
    return !matches
      ? undefined
      : (reader, context, processors) => {
          reader.advance()
          const body: string[] = []
          if (endMode === EndMode.NEXT_PROCESSOR) {
            for (
              reader.current();
              reader.current() && !selectProcessor(reader, processors);
              reader.advance()
            ) {
              body.push(reader.current()!.text)
            }
          }
          return process(segment!.index, matches!, body, context)
        }
  }
}
