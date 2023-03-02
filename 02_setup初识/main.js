// 引入的不再是2.0的 Vue构造函数（首字母大写，通过new调用）了，而是一个名为creataApp的工厂函数（无需new调用）
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
//以上拆解
const app = createApp(App)//创建应用实例对象，app类似于vue2中的 vm 但比vm更‘轻’
// 挂载
app.mount('#app')

// setTimeout(()=>{
//     //定时器，间隔一秒钟，卸载
//     app.unmount('#app')
// },1000)


// Vue2写法
// new Vue({
//     render:h => h(App)
// }).mount('#app')
// //上面拆解一下
// const vm = new Vue({
//     render:h => h(App)
// })
// vmm.mount('#app')