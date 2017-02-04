<template>
  <div>
    <tabbar>
      <tabbar-item v-for="item in items" :link="item.link">
        <img slot="icon" :src="item.logo">
        <span slot="label">{{item.name}}</span>
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
  data(){
    return {
    items:[{
      link: "/",
      logo: require("../assets/map.png"),
      name: "地图"
    },{
      link: "/discovery",
      logo: require("../assets/discovery.png"),
      name: "discovery"
    },{
      link:"/setting",
      logo: require("../assets/setting.png"),
      name: "settting"
    }]
  }},
  props:['tab'],
  methods:{
    itemclick(){
      console.log(1)
    }
  }
}
</script>
