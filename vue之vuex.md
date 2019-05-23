# vue之全局状态管理

## vuex核心
Vuex的核心是state、actions、Mutations、getters

## state
state保存vuex数据，可以理解为vue实例的data

## actions 
actions类似于mutations 不直接修改数据 只是提交到mutations 
通过commit的方式提交当前需要修改的数据 和参数热

## Mutations
Mutations对vuex的数据做更改，需要更改vuex的数据唯一的方法就是提交给mutations

## getters
有时候我们需要从 store 中的 state 中派生出一些状态 或过滤一些东西出来
可以认为是 store 的计算属性 把他缓存起来 值变化之后会跟着变化

## mapGetters 辅助函数
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性 可以在vue文件中使用这些属性

## mapActions 辅助函数
mapActions辅助函数会将 store 中的 action 方法映射到组件的 methods中
