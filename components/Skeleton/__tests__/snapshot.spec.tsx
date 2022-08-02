import { render } from "@testing-library/react";
import Skeleton from "@components/Skeleton";

it("renders Button unchanged", () => {
  const { container } = render(<Skeleton width={100} height={300} />);
  expect(container).toMatchSnapshot();
});
