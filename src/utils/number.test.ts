import { roundTo } from "./number"

describe("roundTo", () => {
    it("rounds to 4 decimal places by default", () => {
        expect(roundTo(0.123456)).toBe(0.1235)
        expect(roundTo(0.99994)).toBe(0.9999)
        expect(roundTo(0.99995)).toBe(1)
    })

    it("rounds to 2 decimal places when specified", () => {
        expect(roundTo(0.8499, 2)).toBe(0.85)
        expect(roundTo(0.8549, 2)).toBe(0.85)
        expect(roundTo(0.8551, 2)).toBe(0.86)
    })

    it("handles integers correctly", () => {
        expect(roundTo(5)).toBe(5)
        expect(roundTo(5.00001)).toBe(5)
    })
})
