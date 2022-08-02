import { render, screen } from "@testing-library/react";
import Skeleton from "@components/Skeleton";

describe("Skeleton", () => {
  it("renders a Skeleton without border", () => {
    render(<Skeleton width={40} height={90} />);

    const heading = screen.getByTestId("skeleton");

    expect(heading).toBeInTheDocument();
  });

  it("renders a Skeleton with border", () => {
    render(<Skeleton width={40} height={90} borderRadius={40} />);

    const heading = screen.getByTestId("skeleton");

    expect(heading).toBeInTheDocument();
  });
});
