import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function SocialImage(req: NextRequest) {
  return new Response('Social image disabled', { status: 200 })
}
