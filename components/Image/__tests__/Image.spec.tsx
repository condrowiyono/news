import { render, screen } from "@testing-library/react";
import ImageServer from "@components/Image";

describe("ImageServer", () => {
  it("renders an image without error", () => {
    render(
      <ImageServer
        src="https://loremflickr.com/1234/2345/cat?6849"
        width={100}
        height={100}
      />
    );

    const image = screen.getByAltText("image");

    expect(image).toBeInTheDocument();
  });

  it("renders an image error", () => {
    render(<ImageServer src="/pppp.png" width={100} height={100} />);

    const image = screen.getByAltText("image");

    expect(image).toBeInTheDocument();
  });
});
