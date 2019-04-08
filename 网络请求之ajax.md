# ajax异步网络请求 
ajax是用JavaScript执行异步网络请求，主要依靠XMLHttpRequest对象

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
