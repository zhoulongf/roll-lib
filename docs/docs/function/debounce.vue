<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/debounce.vue
 * @Date: 2021-11-30 11:20:15
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 14:27:16
 * @Description: 
-->
<template>
  <button @click="$utility.debounce(btnClick,500)">防抖按钮</button>
</template>

<script>
import Vue from "vue"
import utility from 'lib-cci-test'
Vue.use(utility)
export default {
  name: "debounce",
  methods:{
    btnClick(){
      console.log("clicked")
    }
  }
}
</script>

<style scoped>

</style>
