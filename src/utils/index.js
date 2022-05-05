import * as d3 from "d3"
export const dateMonth = (dateTime) => {
  const nth = function (d) {
    if (d > 3 && d < 21) return "th"
    switch (d % 10) {
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  }

  const dateObj = new Date(dateTime)
  const date = dateObj.getDate()
  const month = d3.timeFormat("%b")(dateTime)

  return date + nth(date) + " " + month
}
