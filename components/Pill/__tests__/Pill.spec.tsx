import { render, screen } from "@testing-library/react";
import Pill from "@components/Pill";

describe("Pill", () => {
  it("renders a Pill with title active", () => {
    render(<Pill active>Title</Pill>);

    const heading = screen.getByText(/^Title$/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders a Pill with title inactive", () => {
    render(<Pill>Title</Pill>);

    const heading = screen.getByText(/^Title$/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders a Pill without title inactive", () => {
    render(<Pill />);

    const heading = screen.getByTestId("pill");

    expect(heading).toBeInTheDocument();
  });
});
