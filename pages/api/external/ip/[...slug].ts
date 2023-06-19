import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

import { API } from '../../../../constants'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

    return await httpProxyMiddleware(req, res, {
      target: 'https://geolocation-db.com',
      changeOrigin: true,
      pathRewrite: [{
        patternStr: `^${API.EXTERNAL.IP}/myIp`,
        replaceStr: '/json',
      }],
    })
  } catch (err) {
    return res.status(400).send('proxy error')
  }
}

export default handler
