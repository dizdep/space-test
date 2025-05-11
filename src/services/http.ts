import axios, { HttpStatusCode } from 'axios'

import { Token } from '@/types/enums.ts'

let isRefreshing = false
let subscribers: ((accessToken: string) => void)[] = []

const REFRESH_PATH = '/auth/refresh'
const LOGIN_PATH = '/auth'

async function refreshTokens() {
  return axiosIns.post<{
    [Token.ACCESS]: string
    [Token.REFRESH]: string
  }>(REFRESH_PATH, {
    [Token.REFRESH]: localStorage.getItem(Token.REFRESH)
  })
}

function onTokensUpdated(accessToken: string) {
  subscribers = subscribers.filter(callback => callback(accessToken))
}
function addSubscriber(callback: (accessToken: string) => void) {
  subscribers.push(callback)
}

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000
})

axiosIns.interceptors.request.use(config => {
  const token = localStorage.getItem(Token.ACCESS)

  if (token && config.headers) config.headers['Authorization'] = `Bearer ${token}`

  return config
}, Promise.reject)

axiosIns.interceptors.response.use(
  response => response,
  async err => {
    if (!axios.isAxiosError(err)) return Promise.reject(err)
    const { config, response } = err
    const originalRequest = config
    if (response?.status === HttpStatusCode.Unauthorized && window.location.pathname !== LOGIN_PATH) {
      if (!isRefreshing) {
        isRefreshing = true
        refreshTokens()
          .then(async ({ data }) => {
            isRefreshing = false

            localStorage.setItem(Token.ACCESS, data[Token.ACCESS])
            localStorage.setItem(Token.REFRESH, data[Token.REFRESH])

            onTokensUpdated(data[Token.ACCESS])
          })
          .catch(async () => {
            //logout
            window.location.pathname = LOGIN_PATH
          })
      } else if (isRefreshing && config?.url === REFRESH_PATH) {
        //logout
        window.location.pathname = LOGIN_PATH
      }
      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber((accessToken: string) => {
          if (originalRequest && originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`
            resolve(axiosIns(originalRequest))
          }
        })
      })
      return retryOriginalRequest
    }
    return Promise.reject(err)
  }
)

export const http = axiosIns
