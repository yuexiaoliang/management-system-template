import { storeToRefs } from 'pinia'

import axios from 'axios'

import { REQUEST_BASE_URL, REQUEST_TIMEOUT } from '@/constants'
import { useUserStore } from '@/stores/user'

const http = axios.create({
  baseURL: REQUEST_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  validateStatus: (status) => status >= 200
})

// 请求拦截器
http.interceptors.request.use((config) => {
  const { headers, skipAuth } = config

  if (skipAuth) return config

  const user = useUserStore()

  const { token } = storeToRefs(user)

  if (!token) {
    return Promise.reject(new Error('未登录'))
  }

  if (!headers) config.headers = {}

  config.headers.Authorization = `Bearer ${token.value}`

  return config
})

// 响应拦截器
http.interceptors.response.use((response) => {
  const { data, status } = response

  // 下载导出模板判断
  if (status === 200 && response.config.notData) return response

  if (status === 401) {
    console.log('登录失效')
    return
  }

  const { code, message } = data || {}

  if (code !== 1) {
    const _msg = message || '网络错误'
    console.error(_msg)
    return Promise.reject(new Error(_msg))
  }

  return data
})

export default http
