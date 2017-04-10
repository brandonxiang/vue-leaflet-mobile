// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import FastClick from 'fastclick';
import vuexI18n from 'vuex-i18n';
import VueLeaflet from 'vueleaflet';

import router from './router/index'
import App from './App';
import module from './vuex/store';
import locales from './locales/locales'

import DevicePlugin from 'vux/src/plugins/device'
Vue.use(DevicePlugin)

FastClick.attach(document.body);

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
