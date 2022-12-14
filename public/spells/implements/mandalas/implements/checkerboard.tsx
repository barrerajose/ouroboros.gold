// Creates a path representing a square checkerboard.
export function checkerboard(
  size: number,
  count: number,
  isBlack: (row: number, col: number) => boolean
) {
  const s = size / count
  const tiles = []
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      if (isBlack(col, row))
        tiles.push(`M${col * s} ${row * s} v${s} h${s} v${-s} Z`)
    }
  }
  return tiles.join(" ")
}
