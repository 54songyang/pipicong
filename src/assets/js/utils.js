/*
 * @Author: songyang 
 * @Date: 2019-02-16 22:57:57 
 * @Desc: 公共方法
 * @Last Modified by: songyang
 * @Last Modified time: 2019-02-23 20:46:18
 */
export default{
  isAndroid() {
    var u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  },
  isIos() {
    var u = navigator.userAgent;
    return u.indexOf('IOS') > -1 || u.indexOf('iOS') > -1 || u.indexOf('iPhone')>-1; //ios终端
  },
}