<template>
    <tabbar>
      <tabbar-item link="/" selected>
        <img slot="icon" :src="require('../assets/map.png')">
        <span slot="label">{{$t('Map')}}</span>
      </tabbar-item>
      <tabbar-item link="/discovery">
        <img slot="icon" :src="require('../assets/discovery.png')">
        <span slot="label">{{$t('Discovery')}}</span>
      </tabbar-item>
      <tabbar-item link="/setting">
        <img slot="icon" :src="require('../assets/setting.png')">
        <span slot="label">{{$t('Setting')}}</span>
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
  mounted(){
    // console.log(this.$device.isWechat);
  }
}
</script>
