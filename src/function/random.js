/*
 * @Author: zhoulf
 * @FilePath: /lib-test/src/function/random.js
 * @Date: 2021-11-25 10:03:36
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-25 10:03:36
 * @Description: 
 */
function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      let gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    } else {
      return 0;
    }
  }
  
  export default random;
  