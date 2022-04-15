import request from '@/utils/request'

export function SendCmd(data) {
  return request({
    url: '/api/SendCmd/post',
    method: 'post',
    data
  })
}
export function getToken(data) {
  return request({
    url: '/api/User/Post',
    method: 'post',
    data
  })
}
