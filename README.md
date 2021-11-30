<!--
 * @Author: zhoulf
 * @FilePath: /lib-test/README.md
 * @Date: 2021-11-25 09:59:33
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-25 10:09:27
 * @Description: 
-->
### 函数库
- debounce 防抖处理
- deepClone 深度克隆
- deepMerge 深度拷贝
- guid 全局唯一标识符
- queryParams 对象转url参数
- random 随机数
- randomArray 数组打乱
- test 校验工具
- throttle 节流处理
- timeFormat Date扩展格式化
- timeFrom 时间戳转为多久之前
- trim 去除空格
## 示例代码

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
