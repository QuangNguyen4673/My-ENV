import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  it("App name appears", async () => {
    render(<App />)
    const appName = screen.getByText("myENV")
    expect(appName).toBeInTheDocument()
  })
})
