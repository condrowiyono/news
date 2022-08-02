import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Skeleton from "../Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Primary: ComponentStory<typeof Skeleton> = ({ ...arg }) => (
  <Skeleton {...arg} />
);

Primary.args = {
  width: 128,
  height: 24,
  borderRadius: 8,
};
