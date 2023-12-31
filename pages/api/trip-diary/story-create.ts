import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { addStoryList } from '@/db/control/addStoryList'
import { Method, StatusType } from '@/utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const sessions = await getSession({ req })
  const { user } = sessions || {}
  const { email = 'jangheon.lee012@gmail.com' } = user || { email: 'jangheon.lee012@gmail.com' }

  if (method !== Method.POST) {
    res.status(500).json({ status: StatusType.ERROR, resultMsg: 'Invalid Method' })
    return
  }

  if (!email) {
    res.status(500).json({ status: StatusType.ERROR, resultMsg: 'unknown user' })
    return
  }

  try {
    const { title } = body || {}

    if (!title) {
      res.status(500).json({ status: StatusType.ERROR, resultMsg: '제목을 입력해주세요.' })
      return
    }

    const isSuccess = await addStoryList(email, body)

    if (!isSuccess) {
      res.status(500).json({ status: StatusType.ERROR, resultMsg: 'Story 등록 실패' })
      return
    }

    res.json({ status: StatusType.SUCCESS, resultMsg: 'Story 등록 Success' })
  } catch (e) {
    res.status(500).json({ status: StatusType.ERROR, resultMsg: 'Story 등록 실채' })
  }
}

export default handler
