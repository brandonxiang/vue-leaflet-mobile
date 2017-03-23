<template>
  <div>
    <layout tab="setting"></layout>
    <blur :blur-amount=40 :url="headImg">
      <p class="center"><img :src="headImg"></p>
    </blur>
    <group>
      <popup-picker :title="$t('Language')" :data="langs" v-model="currentLang" @on-change="onChange"></popup-picker>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Blur, PopupPicker } from 'vux'
import Layout from './Layout'

export default {
  components: {
    Group,
    Cell,
    Layout,
    Blur,
    PopupPicker,
  },
  computed:{
    currentLang:{
      get:function(){
        const locale = this.$store.state.i18n.locale;
        if(locale === 'zh-CN'){
          return ['中文']
        }else if(locale === 'en'){
          return ['English']
        }
        return null
      }
    }
  },
  data () {
    return {
      headImg:require("../assets/headpart.jpg"),
      langs: [['中文', 'English']],
    }
  },
  methods: {
    onChange (val) {
      if(val[0]==='中文'){
        this.$i18n.set('zh-CN')
      }else if(val[0]==='English'){
        this.$i18n.set('en')
      }
     },
  },
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.picker-buttons {
  margin: 0 15px;
}
</style>