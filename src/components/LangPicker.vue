<template>
  <div>
    <popup-picker :title="$t('Language')" :data="langs" v-model="lang" @on-change="onChange"></popup-picker>
  </div>
</template>

<i18n>
Language:
  zh-CN: 语言
</i18n>


<script>
import { PopupPicker} from 'vux'

export default {
  components: {
    PopupPicker,
  },
  data () {
    return {
      langs: [['中文', 'English']],
      lang:['中文'],
    }
  },
  methods: {
    onChange (val) {
      if(val[0]==='中文'){
        this.$i18n.set('zh-CN')
        // this.$locale.set('zh-CN')
      }else if(val[0]==='English'){
        this.$i18n.set('en')
        // this.$locale.set('en')
      }
     },
  },
}
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>
