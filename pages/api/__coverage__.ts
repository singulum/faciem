import { NextApiRequest, NextApiResponse } from 'next'

export default async function coverage(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await require('@cypress/code-coverage/middleware/nextjs')(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
