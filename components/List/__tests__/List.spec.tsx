import { render, screen } from "@testing-library/react";
import List, { SkeletonList } from "@components/List";

export const news: INews = {
  image: "https://loremflickr.com/1234/2345/cat?6849",
  title: "Judul",
  date: "2022-08-02T01:12:58.781Z",
  category: "Bisnis",
  link: "#",
};

describe("List", () => {
  it("renders a list", () => {
    render(<List {...news} />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  it("renders a skeleton", () => {
    render(<SkeletonList />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
