import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import Chart from "../index.js"
afterEach(cleanup)
describe("Chart", () => {
  it("chart visible", async () => {
    render(<Chart />)
    const weatherChart = screen.getByTestId("weather-chart")
    const svgElement = screen.getByTestId("weather-chart-svg")
    expect(weatherChart).toContainElement(svgElement)
    expect(svgElement).toBeInTheDocument()
    const { container } = render(<Chart />)
    await waitFor(() =>
      expect(container.querySelector('[class="top-text"]')).toBeInTheDocument()
    )
  })
  it("chart scrolling", async () => {
    const { container } = render(<Chart />)
    await waitFor(() =>
      expect(container.querySelector(".moon")).toBeInTheDocument()
    )
    const weatherChart = screen.getByTestId("weather-chart")
    expect(container.querySelector(".moon")).not.toBeVisible()
    fireEvent.scroll(weatherChart, { target: { scrollLeft: 200 } })
    expect(container.querySelector(".moon")).toBeVisible()
    fireEvent.scroll(weatherChart, { target: { scrollLeft: 1300 } })
    expect(container.querySelector(".moon")).not.toBeVisible()
  })
})
