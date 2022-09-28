import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

// const TimeOut = 3600 // token超时上限时间

// 对比是否超时函数
// function IsCheckTimeOut() {
//   const currentTime = Date.now()
//   const timeStamp = (currentTime - store.getters.hrsaasTime) / 1000
//   return timeStamp > TimeOut
// }

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// service.interceptors.request.use(
//   (config) => {
//     if (store.getters.token) {
//       config.headers.
//     }
//   }
// )

// 响应拦截器 配置响应拦截器 验证码失效
// service.interceptors.response.use(
//   (response) => {
//     const { message, success, data } = response.data
//     if (success) return data
//     Message.error(message)
//     return Promise.reject(new Error(message))
//   }, (error) => {
//     if (error.response?.status === 401) {
//       store.dispatch('user/logout')
//       router.push('/login')
//       Message.error('token失效请重新登录')
//     } else {
//       Message.error(error.message)
//     }
//     return Promise.reject(error)
//   }
// )

export default service
