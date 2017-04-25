import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const lazyLoading = false
let Setting = null
let MapCtrl = null
let Cities = null
let Discovery = null
let About = null
let More = null


if (lazyLoading) {
  //lazy loading components
  Setting = resolve => require(['../pages/Setting'], resolve)
  MapCtrl = resolve => require(['../pages/Map'], resolve)
  Cities = resolve => require(['../pages/Cities'], resolve)
  Discovery = resolve => require(['../pages/Discovery'], resolve)
  About = resolve => require(['../pages/About'], resolve)
  More = resolve => require(['../pages/More'], resolve)
}
else {
  Setting = require('../pages/Setting')
  MapCtrl = require('../pages/Map')
  Cities = require('../pages/Cities')
  Discovery = require('../pages/Discovery')
  About = require('../pages/About')
  More = require('../pages/More')
}

const routes = [{
  path: '/',
  component: MapCtrl,
}, {
  path: '/setting',
  component: Setting,
}, {
  path: '/cities',
  component: Cities,
}, {
  path: '/discovery',
  component: Discovery,
}, {
  path: '/about',
  component: About,
}, {
  path: '/more',
  component: More,
}]

const router = new VueRouter({ routes })

export default router