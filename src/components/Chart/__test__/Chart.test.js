import {
  createEvent,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import Chart from "../index.js"

describe("Chart", () => {
  it("renders Chart visible", async () => {
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

  /* fit("renders Chart visible2", async () => {
  render(<Chart />)
  const onScroll = jest.fn().mockImplementation(() => console.log("hi"))
  const weatherChart = screen.getByTestId("weather-chart")

  fireEvent.scroll(weatherChart)

  await waitFor(() => {
    expect(onScroll).toHaveBeenCalled()
  }, 0)
}) */

  it("chart scrolling", async () => {
    render(<Chart />)
    const weatherChart = screen.getByTestId("weather-chart")

    fireEvent.scroll(weatherChart, { target: { scrollLeft: 300 } })

    await waitFor(() => {
      expect(weatherChart).toBeInTheDocument()
    })
  })
})
