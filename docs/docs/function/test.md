<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/test.md
 * @Date: 2021-11-30 11:43:58
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:43:59
 * @Description: 
-->
## test 规则校验

### 介绍
包含一些校验规则，如是否手机号，邮箱号，URL等
这些规则方法，挂载在`$utility.test`下面，如验证是否手机号：`$utility.test.mobile('13888889999')`，如果验证通过，返回`true`，否则返回`false`

### 是否验证码
#### code(value, len = 6)
校验是否验证码(要求为数字)，返回`true`或者`false`。
####
`value <String>` 验证码字符串

`len <Number>` 验证码长度，默认为`6`

```javascript
console.log(this.$utility.test.code('4567', 4));
```

### 是否数组
#### array(array)
校验是否数组，返回`true`或者`false`。
####
`array <Array>` 数组
```javascript
console.log(this.$utility.test.array([1, 2, 3]));
```

### 是否Json字符串
#### jsonString(json)
校验是否数组，返回true或者false。
#### 
`json <Json>` Json字符串
####
注意：请留意json字符串的要求：

整体为一个字符串

字符串对象内的属性需要用""双引号包含
```javascript
console.log(this.$utility.test.jsonString('{"a": 1}'));
```

### 是否对象
#### object(object)
校验是否数组，返回true或者false。
####
`object <Object>` 对象
````javascript
console.log(this.$utility.test.object({a: 1}));
````

### 是否邮箱号
#### email(email)
校验是否邮箱号，返回true或者false。
####
`email <String>` 字符串
```javascript
console.log(this.$utility.test.email('123465798@gmail.com'));
```

### 是否手机号
#### mobile(mobile)
校验是否手机号，返回true或者false。
####
`mobile <String>` 字符串
```javascript
console.log(this.$utility.test.mobile('13845678900'));
```

### 是否URL
#### url(url)
校验是否URL链接，返回true或者false。
####
`url <String>` 字符串
````javascript
console.log(this.$utility.test.url('http://www.baidu.com'));
````

### 是否为空
这里指的“空”，包含如下几种情况：
####
值为`undefined`(一种类型)，非字符串`"undefined"`

字符串长度为`0`，也即空字符串

值为`false`(布尔类型)，非字符串`"false"`

值为数值`0`(非字符串`"0"`)，或者`NaN`

值为`null`，空对象`{}`，或者长度为0的数组

#### isEmpty(value)
####
校验值是否为空，返回`true`或者`false`。

此方法等同于empty名称，但是为了更语义化，推荐用isEmpty名称。
####
`value <any>` 字符串
```javascript
console.log(this.$utility.test.isEmpty(false));
```

### 是否普通日期

验证一个字符串是否日期，返回`true`或者`false`，如下行为正确：
####
`2020-02-10`、`2020-02-10` `08:32:10`、`2020/02/10` `3:10`、`2020/02/10` `03:10`、`2020/02-10` `3:10`
####
如下为错误：
####
`2020年02月10日`、`2020-02-10 25:32`
####
总的来说，年月日之间可以用"/"或者"-"分隔(不能用中文分隔)，时分秒之间用":"分隔，数值不能超出范围，如月份不能为13，则检验成功，否则失败。

#### date(date)
`date <String>` 日期字符串
```javascript
console.log(this.$utility.test.date('2020-02-10 08:32:10'));
```

### 是否十进制数值
整数，小数，负数，带千分位数(2,359.08)等可以检验通过，返回`true`或者`false`
#### number(number)
`number <String>` 数字
```javascript
console.log(this.$utility.test.number('2020'));
```

### 是否整数
所有字符都在0-9之间，才校验通过，结果返回`true`或者`false`。

#### digits(number)
`number <String>` 数字
```javascript
console.log(this.$utility.test.digits('2020'));
```

### 是否身份证号
身份证号，包括尾数为"X"的类型，可以校验通过，结果返回`true`或者`false`。

#### idCard(idCard)
`idCard <String>` 身份证号
```javascript
console.log(this.$utility.test.idCard('110101199003070134'));
```

### 是否车牌号
可以校验旧车牌号和新能源类型车牌号，结果返回`true`或者`false`。

#### carNo(carNo)
`carNo <String>` 车牌号
```javascript
console.log(this.$utility.test.carNo('京A88888'));
```

### 是否金额
最多两位小数，可以带千分位，结果返回`true`或者`false`。

#### amount(amount)
`amount <String>` 金额字符串
```javascript
console.log(this.$utility.test.amount('3,233.08'));
```

### 是否汉字
可以为单个汉字，或者汉字组成的字符串，结果返回`true`或者`false`。

#### chinese(zh)
`zh <String>` 中文字符串
```javascript
console.log(this.$utility.test.chinese('更上一层楼'));
```

### 是否字母
只能为"a-z"或者"A-Z"之间的字符，结果返回`true`或者`false`。

#### letter(en)
`en <String>` 字母串
```javascript
console.log(this.$utility.test.letter('uView'));
```

### 是否字母或数字
只能是字母或者数字，结果返回`true`或者`false`。

#### enOrNum(str)
`str <String>` 字母或者数字字符串
```javascript
console.log(this.$utility.test.enOrNum('uView'));
```

### 是否包含某个值
字符串中是否包含某一个子字符串，区分大小写，结果返回`true`或者`false`。

#### contains(str, subStr)
`str <String>` 字符串

`subStr <String>` 子字符串
```javascript
console.log(this.$utility.test.contains('cci', 'cc'));
```

### 数值是否在某个范围内
如30在"29-35"这个范围内，不在"25-28"这个范围内，结果返回`true`或者`false`。

#### range(number, range)
`number <Number>` 数值

`range <Array>` 如"[25-35]"
```javascript
console.log(this.$utility.test.range(35, [30, 34]));
```

### 字符串长度是否在某个范围内
如"abc"长度为3，范围在"2-5"这个区间，结果返回`true`或者`false`。

#### rangeLength(str, range)
`str <String>` 数值
`range <Array>` 如"[25, 35]"
```javascript
console.log(this.$utility.test.rangeLength('abc', [3, 10]));
```
