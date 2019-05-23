## 什么是继承
获取存在对象已有属性和方法的一种方式.实现代码复用

## 继承的方式
- 原型链继承
- 构造函数继承 call apply
- 拷贝继承
- 实例继承

# 原型链继承
原型链指的是js中每个对象都有一个内置的-proto-属性指向创建它的构造函数的prototype（原型）属性 原型链的作用就是为了实现对象的继承。
// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};
核心： 将父类的实例作为子类的原型
function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true

# 构造函数继承
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

# 实例继承
核心：为父类实例添加新特性，作为子类实例返回
function Cat(name){
  var instance = new Animal();
  instance.name = name || 'Tom';
  return instance;
}
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false

# 拷贝继承
function Cat(name){
  var animal = new Animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = name || 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

