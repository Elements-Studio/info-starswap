export function alignLeft() {
  const align = document.getElementsByTagName('thead')
  if (align[0] !== undefined) align[0].childNodes[0].childNodes[1].style.textAlign = 'left'
  if (align[1] !== undefined) align[1].childNodes[0].childNodes[1].style.textAlign = 'left'
  if (align[2] !== undefined) align[2].childNodes[0].childNodes[1].style.textAlign = 'left'
}

export function substring(str) {
  return str.substring(0, 4) + '...' + str.substring(str.length - 4)
}

// 时间戳转天
export function transformTime(timestamp = +new Date()) {
  if (timestamp) {
    var time = new Date(timestamp)
    // var y = time.getFullYear()
    // var M = time.getMonth() + 1
    var d = time.getDate()
    // var h = time.getHours()
    // var m = time.getMinutes()
    // var s = time.getSeconds()
    // return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
    return d
  } else {
    return ''
  }
}

// 时间戳转时间 年月日
export function transformDate(timestamp = +new Date()) {
  if (timestamp) {
    var time = new Date(timestamp)
    var y = time.getFullYear()
    var M = time.getMonth() + 1
    var d = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
    return y + '-' + M + '-' + d
  }
}

// 转换币单位
export function unitConvert(num) {
  var moneyUnits = ['', 'k', 'm', 'b']
  var dividend = 1000
  var curentNum = num
  //转换数字
  var curentUnit = moneyUnits[0]
  //转换单位
  for (var i = 0; i < 3; i++) {
    curentUnit = moneyUnits[i]
    if (strNumSize(curentNum) < 4) {
      break
    }
    curentNum = curentNum / dividend
  }
  var m = { num: 0, unit: '' }
  m.num = curentNum.toFixed(2)
  m.unit = curentUnit
  return m
}

export function strNumSize(tempNum) {
  if (tempNum == undefined) return
  var stringNum = tempNum.toString()
  var index = stringNum.indexOf('.')
  var newNum = stringNum
  if (index != -1) {
    newNum = stringNum.substring(0, index)
  }
  return newNum.length
}
