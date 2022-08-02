import { render, screen } from "@testing-library/react";
import Thumbnail, { SkeletonThumbnail } from "@components/Thumbnail";

export const news: INews = {
  image: "https://loremflickr.com/1234/2345/cat?6849",
  title: "Judul",
  date: "2022-08-02T01:12:58.781Z",
  category: "Bisnis",
  link: "#",
  total_play: 121212,
};

describe("Thumbnail", () => {
  it("renders a Thumbnail", () => {
    render(<Thumbnail {...news} />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  it("renders a skeleton", () => {
    render(<SkeletonThumbnail />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
