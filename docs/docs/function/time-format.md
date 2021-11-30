<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/time-format.md
 * @Date: 2021-11-30 11:39:28
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:40:34
 * @Description: 
-->
## time 时间格式

## 格式化时间

### timeFormat | date(timestamp, format = "yyyy-mm-dd")
该函数必须传入第一个参数，第二个参数是可选的，函数返回一个格式化好的时间。
####
`time <String>` 任何合法的时间格式、`秒`或`毫秒`的时间戳

`format <String>` 时间格式，可选。默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如： `yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日` `hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合

```html
<template>
	<div>
		<div>
			时间为：{{$cm.timeFormat(timestamp, 'yyyy年mm月dd日')}}
		</div>
		<div>
			时间为：{{time}}
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
		mounted() {
			this.time = this.$utility.timeFormat(this.timestamp, 'yyyy-mm-dd');
		}
	}
</script>
```

## 多久以前

### timeFrom(time, format = String | false)

该函数必须传入第一个参数，格式为任何合法的时间格式、`秒`或`毫秒`的时间戳，第二个参数是可选的，返回的值类似`刚刚`，`25分钟前`，`3小时前`，`7天前`的结果。 如果第二个参数是时间的格式，当前和传入时间戳相差大于一个月时，返回格式化好的时间；如果第二个参数为`false`，则不会返回格式化好的时间，而是诸如"xxx年前"的结果。
####
`timestamp <String>` 时间戳

`format <String / false>` 时间格式，默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如： `yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日` `hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合。 如果时间戳距离此时的时间，大于一个月，则返回一个格式化好的时间，如果此参数为`false`，返回均为"多久之前"的结果。

```html
<template>
	<div>
		<div>
			时间为：{{$cm.timeFrom(timestamp, 'yyyy年mm月dd日')}}
		</div>
		<div>
			时间为：{{time}}
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
        mounted() {
			this.time = this.$utility.timeFrom(this.timestamp);
		}
	}
</script>
```
