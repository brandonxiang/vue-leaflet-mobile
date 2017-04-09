// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import vuexI18n from 'vuex-i18n';
import VueLeaflet from 'vueleaflet';

import App from './App';
import Setting from './components/Setting';
import MapCtrl from './components/Map';
import Discovery from './components/Discovery';
import About from './components/About';
import module from './vuex/store';
import locales from './locales/locales'

FastClick.attach(document.body);

Vue.use(VueRouter);

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
}];

const router = new VueRouter({ routes });

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store,
    app: module,
  },
});

Vue.use(vuexI18n.plugin, store);
Vue.use(VueLeaflet.plugin, store);
Vue.i18n.add('en', locales['en']);
Vue.i18n.add('zh-CN', locales['zh-CN']);
Vue.i18n.set('zh-CN');


const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', { direction: 'forward' })
    } else {
      store.commit('updateDirection', { direction: 'reverse' })
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', { direction: 'forward' })
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
