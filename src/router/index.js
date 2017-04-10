import Vue from 'vue'
import VueRouter from 'vue-router'

import Setting from '../components/Setting'
import MapCtrl from '../components/Map'
import Discovery from '../components/Discovery'
import About from '../components/About'
import More from '../components/More.vue'


Vue.use(VueRouter)

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