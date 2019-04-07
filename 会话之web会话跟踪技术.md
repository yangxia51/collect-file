# web会话跟踪技术

## 什么是会话
客户端发送链接到服务器，服务器响应请求的过程称为会话

## 什么是会话跟踪技术
同一用户向服务器发出的请求和接受服务器响应的交互过程的监视
（判断是否为同一个用户同一个会话ID）

## 会话跟踪技术的几种方式
 - 1、隐藏input  <input type="hidden">可存储大量数据的会话应用。
 - 2、URL 重写：URL 可以在后面附加参数，和服务器的请求一起发送，这些参数为名字/值对。
 - 3、Cookie：一个 Cookie 是一个小的，已命名数据元素。服务器使用 SET-Cookie 头标将它作为 HTTP响应的一部分传送到客户端，客户端被请求保存 Cookie 值，在对同一服务器的后续请求使用一个Cookie 头标将之返回到服务器。与其它技术比较，Cookie 的一个优点是在浏览器会话结束后，甚至在客户端计算机重启后它仍可以保留其值。
 - 4、Session：使用 setAttribute(String str,Object obj)方法将对象捆绑到一个会话

## 常用的会话跟踪技术Cookie和Session
## Cookie
   存储在用户本地终端上的数据。有时也用cookies，指某些网站为了辨别用户身份，进行session跟踪而存储在本地终端上的数据，通常经过加密。一般应用最典型的案列就是判断注册用户是否已经登过该网站。
## Session
   存储在服务器上的数据。客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。这就是Session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了。
## Cookie和Session区别
   Cookie通过在客户端记录信息确定用户身份，Session通过在服务器端记录信息确定用户身份。

## html提供的客户端存储方法
    localStorage 、sessionStorage
## localStorage 和sessionStorage区别
   localStorage 没有时间限制的数据存储，sessionStorage有时间限制，当用户关闭浏览器窗口后，数据会被删除。


