import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//lazy loading components
const Setting = resolve => require(['../pages/Setting'], resolve)
const MapCtrl = resolve => require(['../pages/Map'], resolve)
const Discovery = resolve => require(['../pages/Discovery'], resolve)
const About = resolve => require(['../pages/About'], resolve)
const More = resolve => require(['../pages/More'], resolve)

const routes = [{
  path: '/',
  component: MapCtrl,
}, {
  path: '/setting',
  component: Setting,
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