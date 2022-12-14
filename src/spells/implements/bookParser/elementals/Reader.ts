export interface Segment {
  text: string
  index: number
}

// Takes text and separator and returns a Reader that iterates over
// the segments of the text split by the separator
export function Reader(text: string, separator: string | RegExp) {
  const parts = text.split(separator)
  let index = 0
  return {
    // returns the current segment or undefined if done.
    // Optionally advancing to the next segment.
    current() {
      const text = parts[index] ?? null
      return text !== null ? {text, index} : null
    },
    advance() {
      index = Math.min(parts.length, index + 1)
      return index >= parts.length
    },
  }
}

export type Reader = ReturnType<typeof Reader>
