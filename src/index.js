/*
 * @Author: zhoulf
 * @FilePath: /lib-test/src/index.js
 * @Date: 2021-11-24 17:08:23
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-25 10:07:04
 * @Description:
 */
import debounce from "./function/debounce";
import deepClone from "./function/deepClone";
import deepMerge from "./function/deepMerge";
import guid from "./function/guid";
import queryParams from "./function/queryParams";
import random from "./function/random";
import randomArray from "./function/randomArray";
import test from "./function/test";
import throttle from "./function/throttle";
import timeFormat from "./function/timeFormat";
import timeFrom from "./function/timeFrom";
import trim from "./function/trim";
const $utility = {
  debounce,
  deepClone,
  deepMerge,
  guid,
  queryParams,
  random,
  randomArray,
  test,
  throttle,
  timeFormat,
  timeFrom,
  trim,
};
const install = (Vue) => {
  Vue.prototype.$utility = $utility;
};

export default {
  install,
};
export {
  debounce,
  deepClone,
  deepMerge,
  guid,
  queryParams,
  random,
  randomArray,
  test,
  throttle,
  timeFormat,
  timeFrom,
  trim,
};
