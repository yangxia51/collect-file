// 基于node的 遵循commonjs规范的
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let purfiyCSSWebpack = require('purifycss-webpack')
let glob = require('glob')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js', // 单入口
  // entry: {
  //   index: './src/index.js',
  //   a: './src/index.js'
  // }, // 多入口  文件之间没有关联 需要打包文件 ./src/index.js无法满足
  output: {
    filename: '[name].js', // 打包出的js 名称 自动生成8位的hash 解决缓存的问题
    path: path.resolve('./build') // 这个路径必须是绝对路径 解析一个绝对路径
  }, // 出口
  devServer: {
    contentBase: './build', // 启动路径
    port: 3000, // 端口号 
    compress: true, // 服务器压缩
    open: true, // 自动打开浏览器
    hot: true // 热更新
  }, // 开发服务器
  module: {
    rules: [
      {
        test: /\.css$/, use: ExtractTextPlugin.extract({
          use: [{
            loader: "postcss-loader"
          }, {
            loader: "css-loader"
          }]
        })
      }
    ]
  }, // 模块配置
  plugins: [
    // new CleanWebpackPlugin(['build']),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'css/index2.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: '珠峰学习',
      hash: true, // 版本
      minify: {
        removeAttributeQuotes: true // 删除双引号
        // collapseWhitespace: true // 折叠空行
      }
    }),
    // 没用的css会被消除掉
    new purfiyCSSWebpack({
      paths: glob.sync(path.resolve('src/*.html'))
    })
    // new HtmlWebpackPlugin({ // 多页面入口配置
    //   filename: 'b.html',
    //   template: './src/index.html',
    //   title: '珠峰学习',
    //   hash: true, // 版本
    //   minify: {
    //     removeAttributeQuotes: true // 删除双引号
    //     // collapseWhitespace: true // 折叠空行
    //   },
    //   chunks: ['a'] // 引用文件
    // }),
  ], // 插件的配置
  mode: 'development', // 可以更改模式
  resolve: {} //配置解析
}
// 在webpack中如何配置开发服务器 webpack-dev-server 安装 npm install webpack-dev-server -D
// webpack插件 将html打包到build下 可以自动引入生产的js html-webpack-plugin
/**
 * let HtmlWebpackPlugin = require('html-webpack-plugin')
 * plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ], // 插件的配置
 */
// webapck插件  npm install clean-webpack-plugin -D 清除打包文件 每次重新打包
// 多页需求 
/**
 * entry的写法
 * 对象、数组、 字符串
 * 多入口-多出口 见上图
 */

// 热更新 只更新当前操作部分

// loader 加载器
/**
 * style-loader css-loader  less less-loade
 * npm install style-loader css-loader less less-loade -D
 */

/** 抽离样式 抽离到一个css文件  ExtractTextPlugin 通过css文件的方式来引用
 * 安装 npm install --save-dev extract-text-webpack-plugin@next
 */

 /** 删除未引用的样式 不打包  purfycss-webpack purfiy-css
  * npm install purifycss-webpack purify-css glob -D
 */

 /** 自动加前缀
  * npm install postcss-loader autoprefixer -D
 */