import { render } from "@testing-library/react";
import Livestream, { SkeletonLivestream } from "@components/Livestream";
import { live } from "./Livestream.spec";

describe("Livestream List", () => {
  it("renders Livestream unchanged", () => {
    const { container } = render(<Livestream {...live} />);
    expect(container).toMatchSnapshot();
  });

  it("renders SkeletonLivestream unchanged", () => {
    const { container } = render(<SkeletonLivestream />);
    expect(container).toMatchSnapshot();
  });
});
