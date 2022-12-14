export function PathBuilder() {
  const parts: (string | number)[] = []
  return {
    M(x: number, y: number) {
      parts.push("M", x, y)
      return this
    },
    m(dx: number, dy: number) {
      parts.push("m", dx, dy)
      return this
    },
    L(x: number, y: number) {
      parts.push("L", x, y)
      return this
    },
    l(dx: number, dy: number) {
      parts.push("l", dx, dy)
      return this
    },
    H(x: number) {
      parts.push("H", x)
      return this
    },
    h(dx: number) {
      parts.push("h", dx)
      return this
    },
    V(y: number) {
      parts.push("V", y)
      return this
    },
    v(dy: number) {
      parts.push("v", dy)
      return this
    },
    C(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
      parts.push("C", x1, y1, x2, y2, x, y)
      return this
    },
    c(
      dx1: number,
      dy1: number,
      dx2: number,
      dy2: number,
      dx: number,
      dy: number
    ) {
      parts.push("C", dx1, dy1, dx2, dy2, dx, dy)
      return this
    },
    S(x2: number, y2: number, x: number, y: number) {
      parts.push("S", x2, y2, x, y)
      return this
    },
    s(dx2: number, dy2: number, dx: number, dy: number) {
      parts.push("s", dx2, dy2, dx, dy)
      return this
    },
    Q(x1: number, y1: number, x: number, y: number) {
      parts.push("Q", x1, y1, x, y)
      return this
    },
    q(dx1: number, dy1: number, dx: number, dy: number) {
      parts.push("q", dx1, dy1, dx, dy)
      return this
    },
    T(x: number, y: number) {
      parts.push("T", x, y)
      return this
    },
    t(dx: number, dy: number) {
      parts.push("t", dx, dy)
      return this
    },
    A(
      rx: number,
      ry: number,
      xAxisRot: number,
      largeArc: 0 | 1,
      sweep: 0 | 1,
      x: number,
      y: number
    ) {
      parts.push("A", rx, ry, xAxisRot, largeArc, sweep, x, y)
      return this
    },
    a(
      rx: number,
      ry: number,
      xAxisRot: number,
      largeArc: 0 | 1,
      sweep: 0 | 1,
      dx: number,
      dy: number
    ) {
      parts.push("a", rx, ry, xAxisRot, largeArc, sweep, dx, dy)
      return this
    },
    Z() {
      parts.push("Z")
      return this
    },
    z() {
      parts.push("z")
      return this
    },
    build() {
      return parts.join(" ")
    },
  }
}

export type PathBuilder = ReturnType<typeof PathBuilder>
