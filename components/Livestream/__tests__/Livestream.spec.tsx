import { render, screen } from "@testing-library/react";
import Livestream, { SkeletonLivestream } from "@components/Livestream";

export const live: INews = {
  image: "https://loremflickr.com/1234/2345/cat?6849",
  title: "Judul",
  date: "2022-08-02T01:12:58.781Z",
  category: "Bisnis",
  link: "#",
  live_event: true,
  viewer_count: 10000,
};

const notLive: INews = {
  ...live,
  live_event: false,
};

describe("Livestream", () => {
  it("renders a livestream with live event", () => {
    render(<Livestream {...live} />);

    const liveEvent = screen.getByTestId("live");

    expect(liveEvent).toBeInTheDocument();
  });

  it("renders a livestream with no live event", () => {
    render(<Livestream {...notLive} />);

    const liveEvent = screen.getByTestId("not-live");

    expect(liveEvent).toBeInTheDocument();
  });

  it("renders a skeleton", () => {
    render(<SkeletonLivestream />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
