import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/uaa/login/token',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/center/basicInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/uaa/logout/token',
    method: 'post'
  })
}

// 注册
export function register(data) {
  debugger
  return request({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

// 后台 - 统一用户管理 - 列表
export function userList(data) {
  return request({
    url: '/api/sys/user/list',
    method: 'post',
    data
  })
}

// 发送验证码
export function getNewCode(data) {
  return request({
    url: '/uaa/smscode/send/register/' + data,
    method: 'post'
  })
}

// 找回密码
export function password(data) {
  return request({
    url: '/uaa/user/forgetPassword',
    method: 'post',
    data
  })
}

// 后台 - 统一用户管理 - 新建
export function userCreate(data) {
  debugger
  return request({
    url: '/api/sys/user/save',
    method: 'post',
    data
  })
}
