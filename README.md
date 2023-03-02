## 第一章，入门

### 1. 创建工程

#### 使用脚手架 `vue-cli`创建

##### 安装脚手架 `vue-cli`

- Node 版本要求
  Vue CLI 4.x 需要 [Node.js](https://nodejs.org/) v8.9 或更高版本 (推荐 v10 以上)。你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

```sh
npm install -g @vue/cli
# 或者下面这行
yarn global add @vue/cli
```

- 升级
  如需升级全局的 Vue CLI 包，请运行：

```
npm update -g @vue/cli
# 或者
yarn global upgrade --latest @vue/cli
```

- 查看本地脚手架版本
  `vue -V`/`vue --version`
  版本应大于5.1.0 可以创建vue3项目--具体没试过
- 坑：

```bash
vue : 无法加载文件 xxxxx\nodejs\vue.ps1。未对文件 xxxxx\nodejs\vue.ps1 进行数字签名。无法在当前系统上运行该脚本。有关运行脚本和设置执行策略的详细信息，请参阅 https:/go.microsoft.com/fwlin
k/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ vue --version
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

- 原因：
  **由于使用的是powershell，存在powershell不能或禁止执行脚本**
  powershell无疑是对安全充分考虑，把脚本的执行分成几种策略
  **4种常见的策略：**
- `Restricted`： （默认策略）禁止运行任何脚本和配置文件。
- `AllSigned` ：可以运行脚本，但要求所有脚本和配置文件由可信发布者签名，包括在本地计算机上编写的脚本。
- `RemoteSigned` ：可以运行脚本，但要求从网络上下载的脚本和配置文件由可信发布者签名； 不要求对已经运行和已在本地计算机编写的脚本进行数字签名。
- `Unrestricted` ：可以运行未签名脚本。（危险！）
  **解决办法：**
  获取当前的执行策略 `Get-ExecutionPolicy`命令不区分大小写
  在命令框输入 `set-ExecutionPolicy RemoteSigned`
  在 `PowerShell`中输入会出现如下图，选择 `y`或者 `a`即可
- **创建工程**

```sh
vue create hello-world
```

#### 使用 `Vite`创建

`Vite`新一代前端构建工具-老的是 `webpak`
优势：

- 开发环境中，无需打包，快速冷启动
- 轻量，快速的热重载（HMR）
- 按需编译，不再等待整个应用编译完成
- **创建工程**

```sh
npm init vite-app project-name
```

```log
PS C:\Users\admin> npm init vite-app vue3_study_vite
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Need to install the following packages:
  create-vite-app
Ok to proceed? (y) y
npm WARN deprecated create-vite-app@1.21.0: create-vite-app has been deprecated. run `npm init @vitejs/app` or `yarn create @vitejs/app` instead.
Scaffolding project in C:\Users\admin\vue3_study_vite...

Done. Now run:

  cd vue3_study_vite
  npm install (or `yarn`)
  npm run dev (or `yarn dev`)
```

```sh
cd <project-name>
npm install
```

### 2. `vue-cil`创建的工程分析

![](https://cdn.jsdelivr.net/gh/Fansirsqi/blog-Images/images/202303021601301.png)

##### 主文件 `main.js`

```js
// 引入的不再是2.0的 Vue构造函数（首字母大写，通过new调用）了，而是一个名为creataApp的工厂函数（无需new调用）
import { createApp } from 'vue'
import App from './App.vue'
// createApp(App).mount('#app') //拆解一下
//以上拆解
const app = createApp(App) //创建应用实例对象，app类似于vue2中的 vm 但比vm更‘轻’
// 挂载
app.mount('#app')
setTimeout(()=>{
    //定时器，间隔一秒钟，卸载
    app.unmount('#app')
},1000)


// Vue2写法
// new Vue({
//     render:h => h(App)
// }).mount('#app')
// //上面拆解一下
// const vm = new Vue({
//     render:h => h(App)
// })
// vmm.mount('#app')
```

##### 脚手架配置文件 `vue.config.js`

```js
module.exports = {
  // 选项
  lintOnSave: false, //关闭语法检查
};
```

##### App.vue模板

```vue
<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'//引入 HellWorld组件
export default {
  name: 'App',//给组件命名，
  components: {//注册组件
    HelloWorld
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## 第二章、常用CompositionAPI(组合式API)

### 1. 拉开序幕的 `setup`

1. `vue3`中的一个新的配置项，值为一个函数
2. `setup`是所有组合式 `API`表演的舞台
3. 组件中所有用到的数据、方法等待，均要配置在 `setup`中
4. 两种返回值：

- 1. 一个对象，，对象中的属性，方法，在模板中可以直接使用！！
- 2. 渲染函数，可以自定义渲染内容（了解）

5. `<font color='red'>`注意点`</font>`:
6. 不建议 `vue2`,`vue3`混用
   - `Vue2.x`配置的（`data`，`methods`，`computed`...）中可以访问到setup中的属性，方法
   - 但是在 `setup`中不能访问 `vue2`的配置（`data`，`methods`，`computed`...）
   - 如果有混合定义，那么 `vue3`的优先级高
7. `setup`不是一个 `async`函数，因为返回值不再是 `return`的对象，而是 `promise`，模板看不到 `return`对象中的属性

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

- 作用，定义一个**对象类型**的响应式数据（基本类型用 `ref`）
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
