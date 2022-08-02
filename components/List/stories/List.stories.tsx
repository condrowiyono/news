import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import List, { SkeletonList } from "../List";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

export const Primary: ComponentStory<typeof List> = ({ ...arg }) => (
  <div style={{ width: 375 }}>
    <List {...arg} />
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

export const Skeleton: ComponentStory<typeof SkeletonList> = () => (
  <div style={{ width: 375 }}>
    <SkeletonList />
  </div>
);
