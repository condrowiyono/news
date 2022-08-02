import { render } from "@testing-library/react";
import Profile from "@modules/Profile";
import { profile } from "./Profile.spec";

it("renders Profile unchanged", () => {
  const { container } = render(<Profile {...profile} />);
  expect(container).toMatchSnapshot();
});
