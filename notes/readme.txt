1、依赖关系

config/dev.evn.js和config/prod.evn.js------》依赖于config/index.js

config/prod.evn.js-------->依赖于config/dev.evn.js

2、Vue学习笔记   http://blog.csdn.net/chang_yuan_2011

3、vuex适用于大型的项目

4、对package.json的分析
     
    "name": 项目名,
    "version": 版本,
    "description": 描述,
    "author": 作者,
    "private": private为true，npm会拒绝发布，
    "scripts": 定义脚本命令，npm run dev等价于node build/dev-server.js
{
    "dev": "node build/dev-server.js",
    "build": "node build/build.js"
 },
    "dependencies":   在生产环境中所依赖的其他包，npm i node_module –S,（自己开发使用）
    "devDependencies":在开发环境中所依赖的其他包，npm i node_module –D,（对外提供服务）
    "engines": 指示当前包依赖的node&npm版本 
{
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
 }

5