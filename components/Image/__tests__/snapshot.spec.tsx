import { render } from "@testing-library/react";
import ImageServer from "@components/Image";

it("renders Image unchanged", () => {
  const { container } = render(
    <ImageServer
      src="https://loremflickr.com/1234/2345/cat?6849"
      width={100}
      height={100}
    />
  );
  expect(container).toMatchSnapshot();
});
