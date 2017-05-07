import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const lazyLoading = false
let routes = null


if (lazyLoading) {
  //lazy loading components
<<<<<<< HEAD
 const routes = [
    {
      path: '/',
      component: resolve => require(['../pages/Map'], resolve),
    }, {
      path: '/setting',
      component: resolve => require(['../pages/Setting'], resolve),
    }, {
      path: '/cities',
      component: resolve => require(['../pages/Cities'], resolve),
    }, {
      path: '/discovery',
      component: resolve => require(['../pages/Discovery'], resolve),
    }, {
      path: '/about',
      component: resolve => require(['../pages/About'], resolve),
    }, {
      path: '/more',
      component: resolve => require(['../pages/More'], resolve),
    }
  ]
=======
  Setting = resolve => require(['../pages/Setting'], resolve)
  MapCtrl = resolve => require(['../pages/Map'], resolve)
  Cities = resolve => require(['../pages/Cities'], resolve)
  Discovery = resolve => require(['../pages/Discovery'], resolve)
  About = resolve => require(['../pages/About'], resolve)
  More = resolve => require(['../pages/More'], resolve)
>>>>>>> fff869a76a76c4614f0a68d3bed6b5a01a9aaab3
}
else {
  routes = [
    {
      path: '/',
      component: require('../pages/Map'),
    }, {
      path: '/setting',
      component: require('../pages/Setting'),
    }, {
      path: '/cities',
      component: require('../pages/Cities'),
    }, {
      path: '/discovery',
      component: require('../pages/Discovery'),
    }, {
      path: '/about',
      component: require('../pages/About'),
    }, {
      path: '/more',
      component: require('../pages/More'),
    }
  ]
}


const router = new VueRouter({ routes })

export default router