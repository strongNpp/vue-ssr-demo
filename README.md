# vue-ssr-demo 

>此demo是用`vue-hackernews-2.0`做的，主要用于了解服务端渲染。

## 项目启动

1. 执行`npm install`或`cnpm install`安装依赖；
2. 进入到`mock`文件夹下，执行`node server.js`，启动mock的接口；
3. 在进入到项目中执行`npm run dev`启动项目。

## 项目主要包含

1. 用express去mock数据；
2. 给`vue-hackernews-2.0`框架增加`eslint-loader`、`less-loader`的配置；
3. 增加`element-ui`；
4. 封装`axios`来发送请求；
5. 用`asyncData`和`store`做数据的预取和存储。


