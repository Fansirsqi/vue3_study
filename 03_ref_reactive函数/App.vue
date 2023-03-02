<template>
  <h1>xx的信息</h1>
  <h2>Name: {{ person.name }}</h2>
  <h2>Age: {{ person.age }}</h2>
  <h2>salary：{{ person.salary }}</h2>
  <h2>like：{{ person.hobby }}</h2>
  <h2>work：{{ person.job }}</h2>
  <button @click="changeInfo">say</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'//引入 HellWorld组件
import { ref, reactive } from 'vue'
export default {
  name: 'App',//给组件命名，
  setup() {
    //数据
    const refvalue = ref(666)//基本类型数据实例对象示例
    const person = reactive({
      name: '姓名',
      age: 18,
      job: '会计',
      salary: '10k',
      hobby: ['study', 'lol', 'csgo']
    })
    // 方法
    function changeInfo() {
      person.name = 'Jack'
      person.age = 23
      person.job = '睡觉'
      person.salary = '1元'
      person.hobby[1] = 'pubg'
      console.log(person)
      setTimeout(()=>{
        person.salary = refvalue.value
      },2000)
    }
    return {
      person,
      changeInfo
    }
  }
}
</script>