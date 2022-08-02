import { render } from "@testing-library/react";
import Thumbnail, { SkeletonThumbnail } from "@components/Thumbnail";
import { news } from "./Thumbnail.spec";

describe("Snapshot Thumbnail", () => {
  it("renders Thumbnail unchanged", () => {
    const { container } = render(<Thumbnail {...news} />);
    expect(container).toMatchSnapshot();
  });

  it("renders SkeletonThumbnail unchanged", () => {
    const { container } = render(<SkeletonThumbnail />);
    expect(container).toMatchSnapshot();
  });
});
