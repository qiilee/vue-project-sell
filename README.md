# life-app-vue
[在线效果预览][1]
> A Vue.js project

## Build Setup

``` bash
本地调试启动：
# install dependencies
第一步：npm install（用淘宝的cnpm代理安装会更快，方法是：1.安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org   2.用cnpm代理npm安装： cnpm install）

# serve with hot reload at localhost:8088
第二步：npm run dev


打包：
# build for production with minification
npm run build
```

 1. 在vue-cli2.0 脚手架基础上开发的
 2. 方便管理，抽取了一下common文件，和cache文件
 3. vuex是用在“智能机器人”对话的时候
 4. 也是为了熟悉下vue的流程，功能上不太复杂
 5. 样式用了sass，�移动适配用了rem方案
 6. 本地启动 上面两个步骤应该就能起来
 7. 有问题交流可以issue留言交流
 

##在线预览的是我通过nginx配置的，代码还会更新：

**过几天会总结几个点的心得，包括下面几点：**

 - 项目的目录划分，vue的使用心得
 - 发布环境，前端代码单独部署，如何配合nginx
 - nginx的一些配置，和前后端分离异步接口反向代理
 - **前端性能的优化，前端缓存**(预览地址已经做前端代码永久缓存，你会发现第一次加载会慢一些，以后再访问会快不少，因为所以的前端代码都做了永久缓存策略)，打包策略(如何利用浏览器并行请求)等采用的方法

 
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


  [1]: http://test.clibchina.com/#/index
