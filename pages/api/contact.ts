// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { validateHeaderValue } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
import { mailOPtions, transporter } from '../../util/nodemailer'

type Data = {
  message: string
  success?: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body
    if (!data.name || !data.email || !data.subject || !data.message)
      return res.status(400).json({ message: "Bad request" })


    try {
      await transporter.sendMail({
        ...mailOPtions,
        subject: data.subject,
        text: `
        Name : ${data.name}
        Email: ${data.email}
        Message: ${data.message}
        `

      })
      return res.status(200).json({ message: "posting successful", success: true })
    } catch (error: any) {
      return res.status(400).json({ message: error.message })

    }
  }
}
