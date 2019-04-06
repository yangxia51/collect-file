# 模块导入import 、default区别
- export，import  单个/多个变量引入
- export var name="李四";
- import { name } from "/.a.js"

 - var name1="李四";
 - var name2="张三";
 - export { name1 ,name2 }
 - import { name1 , name2 } from "/.a.js" //路径根据你的实际情况填写

- 1、export与export default均可用于导出常量、函数、文件、模块等
- 2、你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
- 3、在一个文件或模块中，export、import可以有多个，export default仅有一个
- 4、通过export方式导出，在导入时要加{ }，export default则不需要
- 这样来说其实很多时候export与export default可以实现同样的目的，只是用法有些区别。注意第四条，通过export方式导出，在导入时要加{ }，export default则不需要。使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。

## 注意
- var name="李四";
- export default name
- //import name from "/.a.js" 这里name不需要大括号

## 什么时候用export，import ，export default（各人习惯）
- 导入对象的时候用export default
