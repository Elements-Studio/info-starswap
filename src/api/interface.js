import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/uaa/login/token',
//     method: 'post',
//     data,
//   })
// }

// network: main barnard halley
const network = 'main'

export function getPool(params) {
  return request({
    url: '/swap/pool/' + network + '/page/' + params.page,
    method: 'get'
  })
}
export function swapStats(params) {
  return request({
    url: '/swap/stats/' + network + '/page/' + params.page + '?count=' + params.count,
    method: 'get'
  })
}
export function tokenList(params) {
  return request({
    url: '/swap/token/' + network + '/page/1',
    method: 'get',
    params
  })
}
export function getTokenDetail(params) {
  return request({
    url: '/swap/token/' + network + '/' + params.token,
    method: 'get'
  })
}
export function getPoolDetail(params) {
  return request({
    url: '/swap/pool/stats/' + network + '/?pool_name=' + params.token,
    method: 'get'
  })
}
export function poolStats(params) {
  return request({
    url: '/swap/pool/stats/' + network + '/' + params.token + '/page/' + params.page,
    method: 'get'
  })
}
export function transactionsPool(params) {
  return request({
    url: '/swap/transactions/pool/' + network,
    method: 'get',
    params
  })
}
export function transactionsToken(params) {
  return request({
    url: '/swap/transactions/token/' + network,
    method: 'get',
    params
  })
}
export function transactions(params) {
  return request({
    url: '/swap/transactions/' + network,
    method: 'get',
    params
  })
}
export function poolFees(params) {
  return request({
    url: '/swap/pool/fees/' + network + '/page/' + params.page + '?pool_name=' + params.token,
    method: 'get'
  })
}
export function tokenPrice(params) {
  return request({
    url: '/swap/token/price/' + network + '/' + params.token + '/page/' + params.page + '?count=' + params.count,
    method: 'get'
  })
}
export function poolList(params) {
  return request({
    url: '/swap/pool/list/' + network + '/page/' + params.page + '?pool_name=' + params.token + '&count=' + params.count,
    method: 'get'
  })
}
