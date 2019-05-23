# ajax异步网络请求 
Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面

## ajax封装
- function ajax (url, onSuccess, onError) {
  - var request = new XMLHttpRequest();  
  - request.onreadystatechange = function () {
    - if (request.readyState === 4) {
      - if (request.status === 200) {
        - onSuccess && onSuccess(request.responseText)
      - } else {
        - onError && onError()
      - }
    - } else {
    - }
  - };
  - request.open('GET', url);
  - request.send();
}
## ajax调用
 - ajax('arr.txt', function (data) {
      - console.log('请求成功' + data)
      - var newdata = eval(data)  // 把扔回来的东西,变成数组
      -  oText.style.display = 'block'
      - oText.innerHTML = newdata
      - console.log(newdata[0])
   - }, function () {
        - console.log('请求失败')
-  })

- 缺点：
- 多个请求之间如果有先后关系的话，就会出现回调地狱。配置和调用方式非常混乱，而且基于事件的异步模型不友好

# axios
基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范
优点：支持 Promise API ,拦截请求和响应，转换请求和响应数据，取消请求，自动转换JSON数据



