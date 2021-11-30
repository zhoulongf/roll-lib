<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/quickstart.md
 * @Date: 2021-11-30 11:31:08
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:33:58
 * @Description: 
-->
# 快速上手

### 安装

```bash
# 通过 npm 安装
npm i  -S

# 通过 yarn 安装
yarn add lib-cci-test
```

### 使用

```javascript
// 全局导入
import utility from 'lib-cci-test'
Vue.use(utility)

// 具体使用
console.info('手机号是否校验通过：', this.$utility.test.mobile('17777777777'))
console.info('时间格式化：', this.$utility.timeFormat())


// 单个导入
import {test} from 'lib-cci-test'
console.info('手机号是否校验通过：', test.mobile('17777777777'))
```
