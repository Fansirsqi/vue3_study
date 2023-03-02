### 1. 拉开序幕的`setup`
1. `vue3`中的一个新的配置项，值为一个函数
2. `setup`是所有组合式`API`表演的舞台
3. 组件中所有用到的数据、方法等待，均要配置在`setup`中
4. 两种返回值：
 - 1. 一个对象，，对象中的属性，方法，在模板中可以直接使用！！
 - 2. 渲染函数，可以自定义渲染内容（了解）
 5. <font color='red'>注意点</font>:
   1. 不建议`vue2`,`vue3`混用
    - `Vue2.x`配置的（`data`，`methods`，`computed`...）中可以访问到setup中的属性，方法
    - 但是在`setup`中不能访问`vue2`的配置（`data`，`methods`，`computed`...）
    - 如果有混合定义，那么`vue3`的优先级高
   2. `setup`不是一个`async`函数，因为返回值不再是`return`的对象，而是`promise`，模板看不到`return`对象中的属性### 1. 拉开序幕的`setup`
1. `vue3`中的一个新的配置项，值为一个函数
2. `setup`是所有组合式`API`表演的舞台
3. 组件中所有用到的数据、方法等待，均要配置在`setup`中
4. 两种返回值：
 - 1. 一个对象，，对象中的属性，方法，在模板中可以直接使用！！
 - 2. 渲染函数，可以自定义渲染内容（了解）
 5. <font color='red'>注意点</font>:
   1. 不建议`vue2`,`vue3`混用
    - `Vue2.x`配置的（`data`，`methods`，`computed`...）中可以访问到setup中的属性，方法
    - 但是在`setup`中不能访问`vue2`的配置（`data`，`methods`，`computed`...）
    - 如果有混合定义，那么`vue3`的优先级高
   2. `setup`不是一个`async`函数，因为返回值不再是`return`的对象，而是`promise`，模板看不到`return`对象中的属性
