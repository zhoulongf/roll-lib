<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/random-array.md
 * @Date: 2021-11-30 11:40:14
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:40:15
 * @Description: 
-->
## randomArray 数组打乱

### randomArray(array)
该函数可以打乱一维数组元素的顺序，这是随机过程
####
`array <Array>` 一维数组

```javascript
export default{
	data() {
		return {
			array: [1,2,3,4,5]
		}
	},
	mounted() {
		console.log(this.$utility.randomArray(this.array));
	}
}
```
