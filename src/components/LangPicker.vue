<template>
    <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide"></popup-picker>
</template>

<script>
import { PopupPicker, Group} from 'vux'

export default {
  components: {
    PopupPicker,
    Group
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    }
  },
  data () {
    return {
      title1: '语言',
      list1: [['中文', '英文']],
      value1:['中文'],
    }
  }
}
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>
