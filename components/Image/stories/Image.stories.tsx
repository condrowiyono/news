import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "../Image";

export default {
  title: "Image",
  component: Image,
} as ComponentMeta<typeof Image>;

export const Primary: ComponentStory<typeof Image> = ({
  src,
  width,
  height,
  style,
}) => (
  <Image src={src} width={width} height={height} style={style} unoptimized />
);

Primary.args = {
  src: "https://loremflickr.com/156/156/animals",
  width: 100,
  height: 100,
  style: {},
};
