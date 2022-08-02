// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProfile>
) {
  const response: IProfile = {
    profile_picture: faker.image.city(112, 84, true),
    is_verified: faker.mersenne.rand(0,2) > 0,
    name: faker.name.findName(),
    num_following: faker.mersenne.rand(0,100000),
    num_follower: faker.mersenne.rand(0,100000),
    description: faker.lorem.paragraph()
  }
  res.status(200).json(response)}
