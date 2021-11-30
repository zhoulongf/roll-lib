/*
 * @Author: zhoulf
 * @FilePath: /lib-test/src/function/trim.js
 * @Date: 2021-11-25 10:05:55
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-25 10:05:55
 * @Description: 
 */
function trim(str, pos = 'both') {
    if (pos == 'both') {
      return str.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
      return str.replace(/^\s*/, '');
    } else if (pos == 'right') {
      return str.replace(/(\s*$)/g, "");
    } else if (pos == 'all') {
      return str.replace(/\s+/g, "");
    } else {
      return str;
    }
  }
  
  export default trim
  