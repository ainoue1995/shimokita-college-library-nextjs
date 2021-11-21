import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'

const apiBasePath = process.env.NEXT_PUBLIC_API_URL

const axiosBaseInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    'Content-Type': 'application/json',
  },
})

// axiosBaseInstance.interceptors.request.use(
//   async (config) => {
//     const currentUser = auth.currentUser
//     if (typeof window !== 'undefined') {
//       const token = await currentUser?.getIdToken()
//       if (token) {
//         config.headers = {
//           authorization: `Bearer ${token}`,
//         }
//       }
//     }
//     return config
//   },
//   (error) => Promise.reject(error),
// )

axiosBaseInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const currentUser = auth.currentUser
    // const config = error.config

    if (typeof window !== 'undefined') {
      console.error(error)
      switch (error.response?.status) {
        case 400:
        case 404:
          console.error('不正なパラメータです')
          return false

        case 401:
          // if (!config._retry) {
          //   const token = await currentUser?.getIdToken(true)
          //   if (token) {
          //     config.headers.authorization = `Bearer ${token}`
          //     config._retry = true
          //     return axios.request(config)
          //   }
          // }
          location.href = '/signin'
          return false

        case 403:
          console.error('権限がありません')
          return false

        default:
          console.error('エラーが発生しました。時間をおいて再度お試しください')
          return false
      }
    }

    return Promise.reject(error)
  },
)

const useAppAxios = makeUseAxios({ axios: axiosBaseInstance })

export default useAppAxios

export { axiosBaseInstance as axios }
