import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const lazyLoading = true
let routes = null


if (lazyLoading) {
  //lazy loading components
  routes = [
    {
      path: '/',
      component: resolve => require(['../pages/Map'], resolve),
    }, 
    {
      path: '/setting',
      component: resolve => require(['../pages/Setting'], resolve),
    }, 
    {
      path: '/cities',
      component: resolve => require(['../pages/Cities'], resolve),
    }, 
    {
      path: '/discovery',
      component: resolve => require(['../pages/Discovery'], resolve),
    }, 
    {
      path: '/about',
      component: resolve => require(['../pages/About'], resolve),
    }, 
    {
      path: '/more',
      component: resolve => require(['../pages/More'], resolve),
    },
    {
      path:'/weather',
      component: resolve => require(['../pages/Weather'], resolve),
    }
  ]
}
else {
  routes = [
    {
      path: '/',
      component: require('../pages/Map'),
    }, 
    {
      path: '/setting',
      component: require('../pages/Setting'),
    }, 
    {
      path: '/cities',
      component: require('../pages/Cities'),
    }, 
    {
      path: '/discovery',
      component: require('../pages/Discovery'),
    }, 
    {
      path: '/about',
      component: require('../pages/About'),
    }, 
    {
      path: '/more',
      component: require('../pages/More'),
    },
    {
      path: '/weather',
      component: require('../pages/Weather')
    }
  ]
}


const router = new VueRouter({mode:'history', routes })

export default router