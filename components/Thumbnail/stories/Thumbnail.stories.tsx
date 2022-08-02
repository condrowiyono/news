import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Thumbnail, { SkeletonThumbnail } from "../Thumbnail";

export default {
  title: "Thumbnail",
  component: Thumbnail,
} as ComponentMeta<typeof Thumbnail>;

export const Primary: ComponentStory<typeof Thumbnail> = ({ ...arg }) => (
  <div style={{ width: 156 }}>
    <Thumbnail {...arg} />
  </div>
);

Primary.args = {
  category: "Berita",
  title: "Judul Berita yang sangat panjang sekali",
  total_play: 12132123,
  image: "https://loremflickr.com/156/156/animals",
};

export const Skeleton: ComponentStory<typeof SkeletonThumbnail> = () => (
  <div style={{ width: 156 }}>
    <SkeletonThumbnail />
  </div>
);
