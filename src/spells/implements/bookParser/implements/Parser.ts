import {Reader} from "../elementals/Reader"

// Returns a Processor capable of processing the current segment on the reader,
// otherwise returns undefined.
export type Processor<R, C> = (
  reader: Reader
) => Optional<(reader: Reader, context: C, processors: Processor<R, C>[]) => R>

// Returns the first found Processor from the array capable of processing
// the current segment on the reader, otherwise returns undefined.
export function selectProcessor<R, C>(
  reader: Reader,
  processors: Processor<R, C>[]
) {
  for (const processor of processors) {
    const p = processor(reader)
    if (p) return p
  }
}

// Returns a parser capable TODO...
export function Parser<R, C>(
  context: C,
  defaultProcessor: Processor<R, C>,
  ...processors: Processor<R, C>[]
) {
  return (text: string) => {
    const reader = Reader(text, "\n")
    const items: R[] = []
    while (reader.current()) {
      const processor =
        selectProcessor(reader, processors) || defaultProcessor(reader)!
      if (!processor) {
        throw `Can't process ${reader.current()}`
      }
      items.push(processor(reader, context, processors))
    }
    return items
  }
}
