import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "../Navbar";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Primary: ComponentStory<typeof Navbar> = ({ title }) => (
  <Navbar title={title} />
);

Primary.args = {
  title: undefined,
};
