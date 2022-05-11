import { render, screen, waitFor } from "@testing-library/react"
import Chart from "../index.js"

describe("Testing sum", () => {
  it("renders Chart visible", () => {
    render(<Chart />)
    const element = screen.getByTestId("weather-chart")
    const svgElement = screen.getByTestId("weather-chart-svg")

    expect(element).toContainElement(svgElement)
    expect(svgElement).toBeInTheDocument()
  })

  it("renders top text visible", async () => {
    const { container } = render(<Chart />)
    await waitFor(() =>
      expect(container.querySelector('[class="top-text"]')).toBeInTheDocument()
    )
  })
})
