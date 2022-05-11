import { render, screen, waitFor } from "@testing-library/react"
import Chart from "../index.js"

describe("Chart", () => {
  it("renders Chart visible", async () => {
    render(<Chart />)
    const element = screen.getByTestId("weather-chart")
    const svgElement = screen.getByTestId("weather-chart-svg")
    expect(element).toContainElement(svgElement)
    expect(svgElement).toBeInTheDocument()
    const { container } = render(<Chart />)
    await waitFor(() =>
      expect(container.querySelector('[class="top-text"]')).toBeInTheDocument()
    )
  })
})
