import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pill from "../Pill";

export default {
  title: "Pill",
  component: Pill,
} as ComponentMeta<typeof Pill>;

export const Primary: ComponentStory<typeof Pill> = ({ children, active }) => (
  <Pill active={active}>{children} </Pill>
);

Primary.args = {
  children: "Berita",
  active: true,
  onClick: () => alert("onClick"),
};
