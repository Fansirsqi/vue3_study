<template>
  <h1>xx的信息</h1>
  <h2>Name: {{ name }}</h2>
  <h2>Age: {{ age }}</h2>
  <button @click="sayHello">say</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'//引入 HellWorld组件
import { h } from 'vue'
export default {
  name: 'App',//给组件命名，
  // 不考虑响应式，只做测试
  setup() {
    //数据
    let name = 'Tom'
    let age = 18
    // 方法
    function sayHello() {
      alert(`My name is ${name},Hello I 'm ${age} age`)
    }
    //返回对象 常用
    // return{
    //   name,
    //   age,
    //   sayHello
    // }

    // 返回一个渲染函数，前面要引用 h import {h} from 'vue'
    // return () => h('h1', '你hao个几把')
  }
}
</script>
