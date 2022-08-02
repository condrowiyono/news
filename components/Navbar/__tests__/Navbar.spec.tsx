import { render, screen } from "@testing-library/react";
import Navbar from "@components/Navbar";

describe("Navbar", () => {
  it("renders a Navbar with title", () => {
    render(<Navbar title="Title" />);

    const heading = screen.getByText(/^Title$/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders a Navbar with no title", () => {
    render(<Navbar />);

    const heading = screen.getByTestId("title");

    expect(heading).toBeInTheDocument();
  });
});
