import request from '@/utils/request'

export function upload(data) {
  return request({
    url: '/api/file/getUploadUrl',
    method: 'post',
    // headers: { 'Content-Type': 'multipart/form-data;boundary =' + new Date().getTime() },
    data
  })
}
