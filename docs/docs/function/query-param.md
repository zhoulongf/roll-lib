<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/query-param.md
 * @Date: 2021-11-30 11:42:01
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:42:02
 * @Description: 
-->
## queryParams 对象转URL参数

### 介绍
该方法，可以将一个对象形式参数转换成get传参所需参数形式，如把{name: 'lisa', age: 20}转换成?name=lisa&age=20

用途：无需自己手动拼接URL参数

###
#### queryParams(data, isPrefix = true, arrayFormat = 'brackets')
`data <Object>` 对象值，如`{name: 'lisa', age: 20}`

`isPrefix <Boolean>` 是否在返回的字符串前加上"?"，默认为t`rue`

`arrayFormat <Boolean>` 属性为数组的情况下的处理办法，默认为`brackets`，见后面说明

```javascript
export default {
    data() {
        return {
            data: {
                name: 'lisa',
                age: 20
            }
        }
    },
    mounted() {
        console.log(this.$utility.queryParams(this.data));
        // 结果为：?name=lisa&age=20
    }
}
```

#### arrayFormat参数说明
如果您传入的data对象内部某些属性值为数组的情况下，您可能需要留意这个参数的配置：

该参数可选值有4个：`indices`，`brackets`，`repeat`，`comma`，具体效果请见下方的演示说明

```javascript
export default {
	data() {
		return {
			data: {
				name: '冷月夜',
				fruits: ['apple', 'banana', 'orange']
			}
		}
	},
	mounted() {
		this.$utility.queryParams(this.data, true, 'indices');
		// 结果为：?name=冷月夜&fruits[0]=apple&fruits[1]=banana&fruits[2]=orange
		
		this.$utility.queryParams(this.data, true, 'brackets');
		// 结果为：?name=冷月夜&fruits[]=apple&fruits[]=banana&fruits[]=orange
		
		this.$utility.queryParams(this.data, true, 'repeat');
		// 结果为：?name=冷月夜&fruits=apple&fruits=banana&fruits=orange
		
		this.$utility.queryParams(this.data, true, 'comma');
		// 结果为：?name=冷月夜&fruits=apple,banana,orange
	}
}
```

