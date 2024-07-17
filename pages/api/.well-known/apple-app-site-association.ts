import type { NextApiRequest, NextApiResponse } from 'next'

const BUNDLE_ID = 'org.reactjs.native.example.bookendsmarketplace';
const TEAM_ID = '9S4K5QK28B';

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${TEAM_ID}.${BUNDLE_ID}`,
        paths: ['*', "/"],
      },
    ],
  },
}

export default (_: NextApiRequest, response: NextApiResponse) => {
  return response.status(200).send(association)
}