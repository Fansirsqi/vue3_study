<template>
    <h1>One Person Info</h1>
    姓:<input type="text" v-model="person.firstName">
    <br />
    名:<input type="text" v-model="person.lastName">
    <br />
    <span>全名: {{ fullName }}</span>
    <br />
    <h2>Age：{{ person.age }}</h2>
    <br />
    <el-button @click="test">test demo组件的触发事件{{ fullName }}</el-button>
</template>
  
<script>
import { ElButton } from 'element-plus'
import { reactive, computed } from 'vue'
export default {
    components:{ElButton},
    name: 'components-Demo',
    props: ['msg', 'school'],//
    emits: ['hello'],
    beforeCreate() {
        console.log('-beforeCreate-')
    },
    setup(props, context) {
        console.log('--setup--\n[props]', props)
        console.log('--setup--\n[context]', context)
        // console.log('-setup--\n[context.attrs]用于捕获最前面定义的msg,school,但是未在后面声明的key--', context.attrs)//相当于vue2中的$attrs,用于捕获最前面定义的msg,school,但是未在后面声明的key，
        // console.log('-setup--\n[context.emit]', context.emit)//触发自定义事件的
        console.log('--setup--\n[context.slots]:', context.slots)
        let person = reactive({
            firstName: 'Susan',
            lastName: 'Jack',
            age: 16
        })
        //computed, 计算属性
        let fullName = computed(() => {
            return person.firstName + '-' + person.lastName
        })
        function test() {
            context.emit('hello', 666)
        }
        return {
            person, test, fullName
        }
    }
}
// import HelloWorld from './HelloWorld'

// export default {
//     name: 'app',
//     components: {
//         HelloWorld
//     }
// }


</script>
  
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
}
</style>