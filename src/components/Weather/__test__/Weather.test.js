import { render, screen, waitFor } from "@testing-library/react"
import Weather from "../index.js"

it("renders weather status", async () => {
  render(<Weather />)
  const element = screen.getByTestId("weather-status")
  await waitFor(() => expect(element).toHaveTextContent(/cloudy/i))
})
