import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Livestream, { SkeletonLivestream } from "../Livestream";

export default {
  title: "Livestream",
  component: Livestream,
} as ComponentMeta<typeof Livestream>;

export const Primary: ComponentStory<typeof Livestream> = ({ ...arg }) => (
  <div style={{ width: 156 }}>
    <Livestream {...arg} />
  </div>
);

Primary.args = {
  category: "Berita",
  title: "Judul Berita yang sangat panjang sekali",
  total_play: 12132123,
  image: "https://loremflickr.com/156/156/animals",
  live_event: true,
  date: "2022-08-02",
  viewer_count: 10012,
};

export const Skeleton: ComponentStory<typeof SkeletonLivestream> = () => (
  <div style={{ width: 156 }}>
    <SkeletonLivestream />
  </div>
);
