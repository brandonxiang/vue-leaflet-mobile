import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//lazy loading components
const Setting = resolve => require(['../components/Setting'], resolve)
const MapCtrl = resolve => require(['../components/Map'], resolve)
const Discovery = resolve => require(['../components/Discovery'], resolve)
const About = resolve => require(['../components/About'], resolve)
const More = resolve => require(['../components/More'], resolve)

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