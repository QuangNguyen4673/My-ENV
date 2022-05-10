import { render, screen } from "@testing-library/react"
import DashBoard from "../DashBoard"

test("renders learn react link", async () => {
  render(<DashBoard />)
  const element = await screen.findByTestId("weather-status")
  expect(element).toHaveTextContent("Cloudy")
})
