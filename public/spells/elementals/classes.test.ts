import {describe, expect, test} from "@jest/globals"
import {classes} from "./classes"

describe("classes", () => {
  test('classes("className1", "className2") // "className1 className2"', () => {
    expect(classes("className1", "className2")).toBe("className1 className2")
  })
  test('classes("className1", false) // "className1 className2"', () => {
    expect(classes("className1", false)).toBe("className1")
  })
  test('classes(null, false) // ""', () => {
    expect(classes(null, false)).toBe("")
  })
})
