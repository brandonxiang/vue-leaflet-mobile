<template>
  <div>
    <layout tab="setting"></layout>
    <grid>
      <grid-item  v-for="item in icons" :label="item.title">
         <img slot="icon" src="../assets/logo.png">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
import Layout from './Layout'

export default {
  components: {
    Layout,
    Grid,
    GridItem
  },
  data () {
    return {
      icons: [
        {title:"深圳", coordinates:[22.5455537937,114.0544373601]},
        {title:"北京", coordinates:[39.9032724643,116.4009203787]},
        {title:"上海", coordinates:[31.2323076784,121.4691562490]},
        {title:"广州", coordinates:[23.1317346641,113.2590285241]},
        {title:"杭州", coordinates:[30.2764554112,120.1504383337]},
        {title:"厦门", coordinates:[24.4822103305,118.0844769942]},
        {title:"哈尔滨", coordinates:[45.8001578452,126.5297346860]},
        {title:"西安", coordinates:[34.3427473471,108.9351962803]},
        {title:"武汉", coordinates:[30.5951668577,114.2998018195]}}
      ]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
