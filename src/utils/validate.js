import { rPassword, rPhone, rUrl } from './regexps'

/**
 * 校验手机号格式是否正确
 * @param {String} val 手机号
 * @returns Boolean
 */
export function validPhone(val) {
  return rPhone.test(val)
}

/**
 * 校验密码格式是否正确
 * @param {String} val 密码
 * @returns Boolean
 */
export function validPassword(val) {
  return rPassword.test(val)
}

/**
 * 是否是合法的url
 * @param {String} val
 * @returns
 */
export function validUrl(val) {
  return rUrl.test(val)
}
