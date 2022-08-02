import { render } from "@testing-library/react";
import Content from "@modules/Content";
import { news } from "./Content.spec";

it("renders Content unchanged", () => {
  const { container } = render(<Content data={news} />);
  expect(container).toMatchSnapshot();
});
