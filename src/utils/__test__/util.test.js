import { dateMonth } from "../index.js"
describe("Utils", () => {
  it("dateMonth render correct format", () => {
    const date = new Date("1995-12-17T12:00:00")
    const date1 = new Date("1995-12-01T12:00:00")
    const date2 = new Date("1995-12-02T12:00:00")
    const date3 = new Date("1995-12-03T12:00:00")
    expect(dateMonth(date)).toEqual("17th Dec")
    expect(dateMonth(date1)).toEqual("1st Dec")
    expect(dateMonth(date2)).toEqual("2nd Dec")
    expect(dateMonth(date3)).toEqual("3rd Dec")
  })
})
