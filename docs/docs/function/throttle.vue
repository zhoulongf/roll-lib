<!--
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/docs/function/throttle.vue
 * @Date: 2021-11-30 11:20:25
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 14:27:50
 * @Description: 
-->
<template>
  <button @click="$utility.throttle(btnClick,3000)">节流按钮</button>
</template>

<script>
import Vue from "vue"
import utility from 'lib-cci-test'
export default {
  name: "throttle",
  methods:{
    btnClick(){
      console.log("clicked")
    }
  }
}
</script>

<style scoped>

</style>
