<template>
  <div class="vux-1px-t">
    <swipeout>
      <swipeout-item link="/"
                     transition-mode="follow"
                     v-for="item in selectedCities">
        <div slot="right-menu">
          <swipeout-button @click.native="deleteCity(item.name)"
                           type="warn">{{$t('Delete')}}</swipeout-button>
        </div>
        <a slot="content"
           href="javascript:;"
           class="navigator vux-1px-b"
           @click="changeCityClick(item)">
            {{$t(item.name)}}
          </a>
      </swipeout-item>
    </swipeout>
    <a href="javascript:;"
       class="navigator vux-1px-b"
       @click="moreCity()">{{$t('更多')}}</a>
  </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton, Cell } from 'vux'
import { mapState, mapActions, mapGetters } from 'vuex'
import { go } from 'vux/src/libs/router'

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
  methods: {
    ...mapActions([
      'changeCity',
      'deleteCity',
    ]),
    changeCityClick(item) {
      go('/', this.$router)
      this.changeCity({ coordinates: item.coordinates, cityName: item.name })
    },
    moreCity() {
      go('/more', this.$router)
    },

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
