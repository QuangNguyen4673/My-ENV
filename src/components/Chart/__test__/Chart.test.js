import { fireEvent, render, screen } from "@testing-library/react"
import Chart from "../index.js"

it("renders Chart visible", () => {
  render(<Chart />)
  const element = screen.getByTestId("weather-chart")
  const svgElement = screen.getByTestId("weather-chart-svg")
  expect(element).toContainElement(svgElement)
  expect(svgElement).toBeInTheDocument()
})

/* fit("renders top text visible", () => {
  const { container } = render(<Chart />)
  const element = container.querySelector(".weather-chart")
  const topText = container.querySelector(".top-text")
  expect(topText).toBeInTheDocument()
}) */
