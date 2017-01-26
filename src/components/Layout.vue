<template>
  <div>
    <tabbar>
      <tabbar-item link="/">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">地图</span>
      </tabbar-item>
      <tabbar-item link="/discovery">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">发现</span>
      </tabbar-item :selected="tab=='setting'">
      <tabbar-item  link="setting" v-on:on-item-click="itemclick">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">设置</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  props:['tab'],
  methods:{
    itemclick:function(){
      console.log(1)
    }
  }
}
</script>
