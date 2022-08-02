import { render, screen } from "@testing-library/react";
import Profile from "@modules/Profile";

export const profile: IProfile = {
  profile_picture: "https://loremflickr.com/80/80/animals?56789",
  is_verified: true,
  name: "Samantha William",
  num_following: 9998,
  num_follower: 99800,
  description:
    "Yuk follow aku biar kita streaming game bareng setiap hari senin & jumat jam 10 AM - 3 PM. Jangan lupa follow IG aku juga ya @Sam_will",
};

describe("Profile", () => {
  it("renders a Profile", () => {
    render(<Profile {...profile} />);

    const title = screen.getByText(/^Samantha William$/i);

    expect(title).toBeInTheDocument();
  });
});
