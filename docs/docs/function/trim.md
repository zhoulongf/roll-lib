<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/trim.md
 * @Date: 2021-11-30 11:43:24
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:43:24
 * @Description: 
-->
## trim 去除空格

###
#### trim(str, pos)
该方法可以去除空格，分别可以去除所有空格，两端空格，左边空格，右边空格，默认为去除两端空格
####
`str <String>` 字符串

`pos <String>` 去除那些位置的空格，可选为：`both`-默认值，去除两端空格，`left`-去除左边空格，`right`-去除右边空格，`all`-去除包括中间和两端的所有空格

```javascript
console.log(this.$utility.trim('abc    b ', 'all')); // 去除所有空格
console.log(this.$utility.trim(' abc '));	// 去除两端空格
```
