import { render, screen } from "@testing-library/react";
import Button from "@components/Button";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button />);

    const heading = screen.getByTestId("button");

    expect(heading).toBeInTheDocument();
  });
});
