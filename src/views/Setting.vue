<template>
  <div class="full-height">
    <blur :blur-amount=40 :url="headImg">
      <p class="center headpart">
        <img :src="headImg">
      </p>
    </blur>
    <group>
      <popup-picker :title="$t('Language')" :data="langs" v-model="currentLang" @on-change="onChange"></popup-picker>
      <cell :title="$t('About')" link="/about" is-link></cell>
    </group>
    <grid-link></grid-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Group, Cell, Blur, PopupPicker } from 'vux'
import GridLink from '../components/GridLink'

export default {
  components: {
    Group,
    Cell,
    Blur,
    PopupPicker,
    GridLink,
  },

  computed: {
    currentLang: {
      get: function () {
        const locale = this.$store.state.i18n.locale;
        if (locale === 'zh-CN') {
          return ['中文']
        } else if (locale === 'en') {
          return ['English']
        }
        return null
      }
    }
  },

  data() {
    return {
      headImg: require("../assets/headpart.jpg"),
      langs: [['中文', 'English']],
    }
  },

  mounted() {
    this.SET_HEADER({title: this.$t('Setting')})
  },

  methods: {
    ...mapMutations(['SET_HEADER']),
    onChange(val) {
      if (val[0] === '中文') {
        this.$i18n.set('zh-CN')
      } else if (val[0] === 'English') {
        this.$i18n.set('en')
      }
    },
  },

}
</script>

<style>
.center {
  text-align: center;
}

.headpart {
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}

.headpart img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}

.picker-buttons {
  margin: 0 15px;
}
</style>