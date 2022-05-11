import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Chart", () => {
  it("App name appears", async () => {
    render(<App />)
    const appName = screen.getByText("myENV")
    expect(appName).toBeInTheDocument()
  })
})
