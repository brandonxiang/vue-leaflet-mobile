# Leaflet 笔记九：vue-leaflet-mobile

> vue组件化三部曲：
- [Leaflet 笔记四（续）：Vue-Leaflet2.0](http://www.jianshu.com/p/e034ee64bea0)
- [Leaflet 笔记九：vue-leaflet-mobile](http://www.jianshu.com/p/6f6c6f47e1dc)
- [Cordova笔记二：vue-leaflet-cordova的创建](http://www.jianshu.com/p/c1178cbc515f)

## 前言

> github源码在此，记得点星:
https://github.com/brandonxiang/vue-leaflet-mobile

为了驱动我对[vue-leaflet](https://github.com/brandonxiang/vueleaflet)的开发，我决心把它应用在一个web app，也算是一个基于vue的H5SPA的demo。如果你还不是很了解vue-leaflet，[Leaflet 笔记四（续）：Vue-Leaflet2.0](http://www.jianshu.com/p/e034ee64bea0)里面有详细的介绍。

在构思做一款移动端H5时，我第一个考虑的就是能把它放在我的微信公众号里面。

![微信公众号](http://upload-images.jianshu.io/upload_images/685800-b90086f21952919c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

欢迎关注我的微信公众号。回复“实验室”就可以看到这个web app。

## 构思

- 前端框架 vue
- 数据流管理 vuex
- 路由控制 vue-router
- 界面样式 vux

在界面选型的时候，我仔细看过[mint-ui](https://github.com/ElemeFE/mint-ui)和[vux](https://github.com/airyland/vux)。考虑到微信jssdk和we-UI的界面，我选择了vux。

## 功能

- 发现页面，可以切换地点
- marker有提示信息
- 切换中英文语言
- 关于页面

## 截屏

![截屏](http://upload-images.jianshu.io/upload_images/685800-c99dda680b652714.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 欢迎大家fork

转载，请表明出处。[总目录Awesome GIS](http://www.jianshu.com/p/3b3efa92dd6d)

![微信公众号](http://upload-images.jianshu.io/upload_images/685800-b90086f21952919c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)