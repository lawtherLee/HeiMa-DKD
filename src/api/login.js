import request from '@/utils/request'

/**
 * 验证码接口
 * @param randomNum 传递一个随机数
 * @returns {*}
 */
export const imageCodeAPI = (randomNum) => {
  return request({
    url: `/api/user-service/user/imageCode/${randomNum}`,
    responseType: 'blob'
  })
}

/**
 * 登录接口
 * @param data 登录的参数
 * @returns {*}
 */
export const loginAPI = (data) => {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}
