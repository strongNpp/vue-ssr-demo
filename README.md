# vue-hackernews-demo 

> `vue-hackernews-2.0`支持服务端渲染，此demo是用`vue-hackernews-2.0`做的，主要用于了解服务端渲染。

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

## 项目展示
![页面展示.jpg](https://upload-images.jianshu.io/upload_images/12080676-44ea6cabb829385a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

与客户端渲染不同，服务端渲染对seo友好，并且可以渲染出后台接口返回的数据，如下图所示：
![查看网页源代码看到的html.jpg](https://upload-images.jianshu.io/upload_images/12080676-e4c9ea2104e6405e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

