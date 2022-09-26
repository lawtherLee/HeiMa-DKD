import request from '@/utils/request'

export const imageCodeAPI = () => {
  return request({
    url: '/api/user-service/user/imageCode/:clientToken'
  })
}
