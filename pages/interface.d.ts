interface INews {
  id?: number;
  title: string;
  category: string;
  date: string | number;
  image: string;
  link?: string;
  live_event?: boolean;
  viewer_count?: number;
  total_play?: number;
}

interface IProfile {
  profile_picture: string;
  is_verified: boolean;
  name: string;
  num_following: number;
  num_follower: number;
  description: string;
}