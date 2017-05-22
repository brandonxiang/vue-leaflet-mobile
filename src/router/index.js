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
      component: resolve => require(['../views/Map'], resolve),
    }, 
    {
      path: '/setting',
      component: resolve => require(['../views/Setting'], resolve),
    }, 
    {
      path: '/cities',
      component: resolve => require(['../views/Cities'], resolve),
    }, 
    {
      path: '/discovery',
      component: resolve => require(['../views/Discovery'], resolve),
    }, 
    {
      path: '/about',
      component: resolve => require(['../views/About'], resolve),
    }, 
    {
      path: '/more',
      component: resolve => require(['../views/More'], resolve),
    },
    {
      path:'/weather',
      component: resolve => require(['../views/Weather'], resolve),
    }
  ]
}
else {
  routes = [
    {
      path: '/',
      component: require('../views/Map'),
    }, 
    {
      path: '/setting',
      component: require('../views/Setting'),
    }, 
    {
      path: '/cities',
      component: require('../views/Cities'),
    }, 
    {
      path: '/discovery',
      component: require('../views/Discovery'),
    }, 
    {
      path: '/about',
      component: require('../views/About'),
    }, 
    {
      path: '/more',
      component: require('../views/More'),
    },
    {
      path: '/weather',
      component: require('../views/Weather')
    }
  ]
}


const router = new VueRouter({mode:'history', routes })

export default router