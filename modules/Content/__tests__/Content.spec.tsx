import { render, screen, fireEvent } from "@testing-library/react";
import Content from "@modules/Content";

export const news: INews[] = [
  {
    image: "https://loremflickr.com/1234/2345/cat?6849",
    title: "Samantha William",
    date: "2022-08-02T01:12:58.781Z",
    category: "Bisnis",
    link: "#",
  },
];

describe("Content", () => {
  it("renders a Content", () => {
    render(<Content data={news} isLoading={false} />);

    const title = screen.getByText(/^Samantha William$/i);

    expect(title).toBeInTheDocument();
  });

  it("renders a Content change pill", () => {
    render(<Content data={news} isLoading={false} />);
    const handleClick = jest.fn();
    const livestream = screen.getByText(/^Livestream$/i);
    fireEvent.click(livestream);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("renders a Content change pill to quiz", () => {
    render(<Content data={news} isLoading={false} />);
    const handleClick = jest.fn();
    const quiz = screen.getByText(/^Quiz$/i);
    fireEvent.click(quiz);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("renders a Content change pill and loading", () => {
    render(<Content data={news} isLoading={true} />);
    const handleClick = jest.fn();
    const livestream = screen.getByText(/^Livestream$/i);
    fireEvent.click(livestream);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("renders a Content change pill to quiz loading", () => {
    render(<Content data={news} isLoading={true} />);
    const handleClick = jest.fn();
    const quiz = screen.getByText(/^Quiz$/i);
    fireEvent.click(quiz);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("renders a Content loading", () => {
    render(<Content data={news} isLoading={true} />);

    const title = screen.getAllByTestId("skeleton");

    expect(title[0]).toBeInTheDocument();
  });
});
