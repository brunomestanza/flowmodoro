import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getProfileMock } from './example/mocks/get-profile'

export const worker = setupWorker(getProfileMock)

const ignoredRequestsEndPath = ['.png', '.ico']

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start({
    onUnhandledRequest(req, print) {
      if (!ignoredRequestsEndPath.some((item) => req.url.endsWith(item))) {
        print.warning()
      }
    },
  })
}
