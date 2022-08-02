import { render } from "@testing-library/react";
import Navbar from "@components/Navbar";

it("renders Navbar unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
