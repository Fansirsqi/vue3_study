### 2. `ref`函数
- 定义一个响应式数据
> 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。
```js
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```
### 3. `reactive`函数
- 作用，定义一个**对象类型**的响应式数据（基本类型用`ref`）
- 语法，`const 代理对象 = reactive(源对象)`接收一个对象，或数组，返回一个代理对象，（proxy对象）
- `reactive`定义的响应式数据是"深层次的"
- 内部基于ES6的porxy实现，通过代理对象操作源对象内部数据进行操作
```js
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
```