import { render } from "@testing-library/react";
import List, { SkeletonList } from "@components/List";
import { news } from "./List.spec";

describe("Snapshot List", () => {
  it("renders List unchanged", () => {
    const { container } = render(<List {...news} />);
    expect(container).toMatchSnapshot();
  });

  it("renders SkeletonList unchanged", () => {
    const { container } = render(<SkeletonList />);
    expect(container).toMatchSnapshot();
  });
});
