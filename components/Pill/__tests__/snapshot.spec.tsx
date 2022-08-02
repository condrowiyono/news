import { render } from "@testing-library/react";
import Pill from "@components/Pill";

it("renders Pill unchanged", () => {
  const { container } = render(<Pill active>Title</Pill>);
  expect(container).toMatchSnapshot();
});
