// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import vuexI18n from 'vuex-i18n';
import VueLeaflet from 'vueleaflet';
import Sync from 'vuex-router-sync'

import router from './router'
import store from './store'
import App from './App';

import locales from './locales/locales'

import DevicePlugin from 'vux/src/plugins/device'
import AjaxPlugin from 'vux/src/plugins/ajax'
Vue.use(DevicePlugin)
Vue.use(AjaxPlugin)

FastClick.attach(document.body);

Vue.use(vuexI18n.plugin, store);
Vue.use(VueLeaflet.plugin, store);
Vue.i18n.add('en', locales['en']);
Vue.i18n.add('zh-CN', locales['zh-CN']);
Vue.i18n.set('zh-CN');

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count')*1 || 0
history.setItem('/',0)

router.beforeEach(function(to, from, next){
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if(toIndex){
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
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
