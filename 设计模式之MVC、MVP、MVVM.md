# 设计模式之MVC、MVP、 MVVM

## 常见的软件架构设计模式有哪些？
 MVC MVVM MVP 分离关注点来改进代码的组织方式 解决问题而抽象出来的方法


## MVVM MVC MVP的区别
- 相同点： M V 
- 不同点：VM 、C、P

## MVC
MVC模式是V层把控制权交给C层 C层去决定应该调用M层的那个接口 然后M层通过观察者的模式去通知V层更新 V层更新 
MVC优缺点： 视图层和模型层分开 模块化程度高 观察者模式可以做到多视图同时更新
C层测试困难，V层同步操作由V自己操作在没有UI环境下对C层应有逻辑的准确性无法验证,M层更新的时候无法对V层更新操作断言。无法组件化，View是强依赖特定的Model的，如果需要把这个View抽出来作为一个另外一个应用程序可复用的组件就困难了。因为不同程序的的Domain Model是不一样的


## MVP
MVP模式（两种调用模式）
MVC模式的升级版 打破了视图层和模型层的关系 其余一样
V层的操作都会交移给P层处理。P层告知M层执行，M层执行完毕后通过观察者模式传递给P ，P获取后通过V提供的接口操作新界面
和MVC的区别是 mvc中C层不可以操作V层 这里可以。M仍然通过事件广播自己的变化 但是这里的MVP监听的是P 而不是V MVC是一个圆 MVP不是 依赖P为核心
MVP优缺点：便于测试 View可以进行组件化View不依赖Model，可以抽离出来，可以对业务完全无知只需要提供一系列接口给上层操作，可以做到复用。但是P层出了应有逻辑外还有大量的V层控制比较笨重 维护起来会比较困难

## MVVM
MVVM模式是对MVP的改良
Model-View-ViewModel视图的模型 包含领域模型和视图的状态
MVVM的调用关系和MVP一样 但是VM中有一个binder 承接mvp中P的工作，
在View的模版语法当中，指令式地声明View上的显示的内容是和Model的哪一块数据绑定的。 当VM对M层更新的时候 Biner会自动的更新到V层 这样的方式为双向数据绑定 可以理解为一个模板引擎但是会根据数据变更为实时渲染
MVVM优缺点 提高可维护性 双向绑定机制解决大量手动V层M层同步的问题
简化测试。因为同步逻辑是交由Binder做的，View跟着Model同时变更，所以只需要保证Model的正确性，View就正确。大大减少了对View同步更新的测试。
缺点：
过于简单的图形界面不适用，或说牛刀杀鸡。
对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高。
数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的。


