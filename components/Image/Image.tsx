import Image, { ImageProps } from "next/image";
import blur from "@utils/blur";
import { useState } from "react";

const ImageServer = ({ alt, src, ...rest }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt || "image"}
      blurDataURL={blur(189, 189, 189)}
      placeholder="blur"
      src={imgSrc}
      onError={() => {
        setImgSrc(blur(189, 189, 189));
      }}
      {...rest}
    />
  );
};

export default ImageServer;
