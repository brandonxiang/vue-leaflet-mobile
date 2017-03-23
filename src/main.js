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
import module from './vuex/store';

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
}];

const router = new VueRouter({ routes });

FastClick.attach(document.body);

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store,
    app: module,
    VL: VueLeaflet.store,
  },
});

Vue.use(vuexI18n.plugin, store);
Vue.use(VueLeaflet.plugin, store);

Vue.i18n.add('en', require('json-loader!yaml-loader!src/locales/en.yml'));
Vue.i18n.add('zh-CN', require('json-loader!yaml-loader!src/locales/zh-CN.yml'));
Vue.i18n.set('zh-CN');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
