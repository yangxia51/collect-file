# 生命周期钩子函数
## vue生命周期 就是vue实例挂载到销毁的过程
- 1、beforeCreate 创建前 获取不到props和data 因为这些数据初始化都在initState
- 2、created 创建 可以访问props和data 但是没有挂载 看不到数据
- 3、beforeMount -  mounted  创建VDOM 并渲染为真是的DOM并渲染数据  查询并   挂载所有子组件 最后挂载到实例
- 4、beforeUpdate -  updated 数据更新前和数据更新后
- 5、beforeDestroy -destroyed 销毁事件和定时器 最后执行destroyed
## created/mounted钩子函数区别
- created在模板渲染成html或者模板编译进路由之前执行 初始化某些值后再渲染模板
- mounted 已完成模板 已经渲染完成后执行  初始化页面后对页面进行操作

## 组件通讯的几种方式
- 父子组件通信 (父传子 props  子传父 emit)  
- 兄弟组件通信 
- 跨多层级组件通信  
- 任意组件 Vuex

## mixin/mixins 区别
全局混入和局部混入

## computed 和 watch 区别
- computed 计算属性 依赖别的属性 别的属性变化后更新数据
- wacth 监听属性 监听到值变化后就更新数据
## keep-alive
- 组件切换保存组件状态防止多次渲染，可使用 keep-alive 组件包裹需要保存的组件。
- keep-alive拥有两个独有的生命周期钩子函数，分别为 activated 和 deactivated 。缓存到内存中并执行 deactivated 钩子函数，缓存渲染后会执行 actived 钩子函数。

## v-show 与 v-if 区别
- v-show 只是在 display: none 和 display: block 之间切换 组件都会被渲染出来 适用于频繁切换
- v-if不会 减少渲染开销

## vue响应式原理 双向绑定
Object.defineProperty() 实现数据响应式，通过这个函数可以监听到 set 和 get 的事件
[参考详情](https://segmentfault.com/a/1190000006599500?utm_source=tag-newest)
## vue模板编译过程
- vue一切皆模板
- 渲染过程：
   - 1.将模板解析为 AST
  -  2.优化 AST
  -  3.将 AST 转换为 render 函数
  -  4.render 生成 Virtual DOM 最终映射为真实 DOM

