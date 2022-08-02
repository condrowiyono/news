// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INews[]>
) {
  const response: INews[] = [1,2,3,4,5,6,7,8,9,10].map((el) => {
    return ({
      id: el,
      link: `#${el}`,
      title: faker.lorem.sentence(),
      category: faker.lorem.word(),
      date: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z').toISOString(),
      image: faker.image.city(300, 600, true),
      total_play: faker.mersenne.rand(0,10000),
    })
  })
  res.status(200).json(response)}
