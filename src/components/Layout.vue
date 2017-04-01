<template>
    <tabbar>
      <tabbar-item v-for="item in items" :link="item.link">
        <img slot="icon" :src="item.logo">
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  computed:{
    items:function(){
      return [{
        link: "/",
        logo: require("../assets/map.png"),
        name: this.$t('Map')
      },{
        link: "/discovery",
        logo: require("../assets/discovery.png"),
        name: this.$t('Discovery')
      },{
        link:"/setting",
        logo: require("../assets/setting.png"),
        name: this.$t('Setting')
      }];
    }
  },
}
</script>
