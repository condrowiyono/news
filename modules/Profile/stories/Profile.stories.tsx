import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Profile from "../Profile";

export default {
  title: "Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

export const Primary: ComponentStory<typeof Profile> = ({ ...arg }) => (
  <Profile {...arg} />
);

Primary.args = {
  profile_picture: "https://loremflickr.com/80/80/animals?56789",
  is_verified: true,
  name: "Samantha William",
  num_following: 9998,
  num_follower: 99800,
  description:
    "Yuk follow aku biar kita streaming game bareng setiap hari senin & jumat jam 10 AM - 3 PM. Jangan lupa follow IG aku juga ya @Sam_will",
};
