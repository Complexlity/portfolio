// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { validateHeaderValue } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body
    if (!data.name || !data.email || !data.subject || !data.message)
      return res.status(400).json({ message: "Bad request" })
  }
  return res.status(200).json({ message: "posting successful" })
  // return res.status(400).json({ message: "Bad request" })
}
