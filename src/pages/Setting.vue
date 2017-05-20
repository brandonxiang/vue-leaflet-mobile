<template>
  <div>
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

  methods: {
    ...mapMutations(['SET_TITLE', 'SET_RIGHT_OPTION']),
    onChange(val) {
      if (val[0] === '中文') {
        this.$i18n.set('zh-CN')
      } else if (val[0] === 'English') {
        this.$i18n.set('en')
      }
    },
  },

  mounted() {
    this.SET_TITLE(this.$t('Setting'))
    this.SET_RIGHT_OPTION({ show: false })
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