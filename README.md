# 西西商城
这是一个个人制作的、围绕Vue3相关技术开发的前台商城系统，包括首页、商品分类、商品搜索、商品详情、购物车阶段、登录注册等模块。

## 技术栈
* Vite、Vue3、Vue-Router 4.0、Pinia、TypeScript；
* Element-Plus、Swiper 8 等。

## 开发
包安装：
```sh
npm install
```
## 目录结构

```
Vue3_Shopping_Web
├─ README.md             // 说明文档
├─ auto-imports.d.ts     // Element自动引入包生成文件
├─ components.d.ts       // Element自动引入包生成文件
├─ env.d.ts              // 全局变量接口
├─ index.html            // 首页入口文件
├─ package-lock.json     // 项目模块信息
├─ package.json          // 项目模块配置
├─ public                // 公共资源目录，包括mockjs模拟返回的图片
├─src
│    ├─ api              // 请求相关文件
│    ├─ assets           // 静态资源
│    ├─ components       // 全局公用组件
│    ├─ mock             // mockjs数据文件
│    ├─ pages            // 页面
│    ├─ router           // 路由
│    ├─ stores           // store
│    ├─ utils            // 全局公用方法
│    ├─ App.vue          // 入口页面
│    └─ main.ts          // 入口文件
├─ tsconfig.config.json  // TypeScript配置文件
├─ tsconfig.json         // TypeScript配置文件
└─ vite.config.ts        // Vite配置文件
```
