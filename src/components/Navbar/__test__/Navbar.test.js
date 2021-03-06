import { render, screen } from "@testing-library/react"
import Navbar from "../index.js"
describe("Navbar", () => {
  it("renders Navbar burger icon", () => {
    render(<Navbar />)
    const element = screen.getByTestId("burger")
    expect(element).toBeInTheDocument()
  })
})
