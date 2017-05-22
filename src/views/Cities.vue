<template>
  <div class="vux-1px-t">
    <swipeout>
      <swipeout-item link="/" transition-mode="follow" v-for="item in selectedCities">
        <div slot="right-menu">
          <swipeout-button @click.native="deleteCity(item.name)" type="warn">{{$t('Delete')}}</swipeout-button>
        </div>
        <router-link slot="content" to="/" class="navigator vux-1px-b" @click="changeCity(item)">
          {{$t(item.name)}}
        </router-link>
      </swipeout-item>
    </swipeout>
    <router-link to="more" class="navigator vux-1px-b">{{$t('More')}}</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Swipeout, SwipeoutItem, SwipeoutButton, Cell } from 'vux'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {

  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Cell
  },

  computed: {
    ...mapGetters([
      "selectedCities"
    ]),
  },

  mounted() {
    this.SET_TITLE(this.$t('Cities'))
    this.SET_RIGHT_OPTION({ show: false })
  },

  methods: {
    ...mapMutations(['SET_TITLE', 'SET_RIGHT_OPTION']),
    ...mapActions([
      'changeCity',
      'deleteCity',
    ]),
  }
}

</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 1rem;
  height: 1rem;
}

.navigator {
  display: block;
  padding: 10px 10px;
  color: rgb(0, 0, 0);
}
</style>
