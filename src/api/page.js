import request from '@/utils/request'

export function subAudit(data) {
  return request({
    url: '/api/sys/firm/audit',
    method: 'post',
    data,
  })
}
export function auditList(data) {
  return request({
    url: '/api/sys/user/list',
    method: 'post',
    data,
  })
}
