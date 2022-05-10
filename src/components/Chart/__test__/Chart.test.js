import { render, screen } from "@testing-library/react"
import Chart from "../index.js"

it("renders Chart visible", () => {
  render(<Chart />)
  const element = screen.getByTestId("weather-chart")
  /*  console.log(element)
  const svgElement = screen.getByTestId("weather-chart-svg")
  console.log(svgElement) */
  //expect(element).toContainElement(svgElement)
  expect(element).toBeInTheDocument()
})
