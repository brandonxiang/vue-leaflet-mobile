<template>
  <div>
    <grid>
      <grid-item link="/"  v-for="item in icons" :label="item.title" @on-item-click="changeMarker({coordinates:item.coordinates,cityName:item.title})">
         <img slot="icon" src="../assets/logo.png">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
import {mapMutations} from 'vuex'

export default {
  components: {
    Grid,
    GridItem
  },
  computed:{
    icons:{
      get: function(){
        return[
          {title:this.$t('Shenzhen'), coordinates:[22.5455537937,114.0544373601]},
          {title:this.$t('Beijing'), coordinates:[39.9032724643,116.4009203787]},
          {title:this.$t('Shanghai'), coordinates:[31.2323076784,121.4691562490]},
          {title:this.$t('Guangzhou'), coordinates:[23.1317346641,113.2590285241]},
          {title:this.$t('Hangzhou'), coordinates:[30.2764554112,120.1504383337]},
          {title:this.$t('Xiamen'), coordinates:[24.4822103305,118.0844769942]},
          {title:this.$t('Haerbin'), coordinates:[45.8001578452,126.5297346860]},
          {title:this.$t('Xian'), coordinates:[34.3427473471,108.9351962803]},
          {title:this.$t('Wuhan'), coordinates:[30.5951668577,114.2998018195]}
        ];
      }
    }
  },
  methods: mapMutations([
    'changeMarker'
  ])
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
