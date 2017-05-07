<template>
  <grid>
    <grid-item v-for="item in items" :label="item.label" :link="item.link">
      <img slot="icon" :src="item.img">
    </grid-item>
  </grid>
</template>

<script>
import {mapMutations} from 'vuex'
import { Grid, GridItem } from 'vux'

export default {
  data() {
    return {
      items: [{
        label: "百度",
        link: "https://www.baidu.com",
        img: require("../assets/vux_logo.png"),
      }, {
        label: "滴滴",
        link: "https://common.diditaxi.com.cn/general/webEntry?code=031RcUHP1bDB5717NpHP1U6KHP1RcUHV&state=123#/",
        img: require("../assets/vux_logo.png"),
      }, {
        label: "美团外卖",
        link: "https://takeaway.dianping.com/waimai/wxwallet#!index/source=redir",
        img: require("../assets/vux_logo.png"),
      }]
    }
  },

  components: {
    Grid,
    GridItem,
  },

  mounted() {
    this.SET_TITLE(this.$t('Discovery'))
  },

  methods: {
    ...mapMutations(['SET_TITLE'])
  }
}
</script>
