// pages/api/calendly.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { CALENDLY_ACCESS_TOKEN } = process.env;
  
    const response = await fetch("https://api.calendly.com/event_types", {
      headers: {
        Authorization: `Bearer ${CALENDLY_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
    res.status(200).json(data);
  }
  