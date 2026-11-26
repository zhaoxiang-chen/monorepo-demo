import { describe, it, expect } from "vitest"
import { readBoolean } from "./boolean.js"

describe("readBoolean", () => {
  it('should return true for "true"', () => {
    expect(readBoolean("true")).toBe(true)
  })

  it('should return false for "false"', () => {
    expect(readBoolean("false")).toBe(false)
  })
})
