import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Chart from "../index.js"

it("renders Chart visible", () => {
  render(<Chart />)
  const element = screen.getByTestId("weather-chart")
  const svgElement = screen.getByTestId("weather-chart-svg")

  expect(element).toContainElement(svgElement)
  expect(svgElement).toBeInTheDocument()
})

fit("renders top text visible", async () => {
  const { container } = render(<Chart />)
  const topText = container.querySelector('[class="weather-chart"]')
  await waitFor(() => expect(topText).toBeInTheDocument())
})
