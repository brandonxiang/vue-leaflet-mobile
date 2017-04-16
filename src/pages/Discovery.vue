<template>
  <div class="vux-1px-t">
    <swipeout>
      <swipeout-item link="/"
                     transition-mode="follow"
                     v-for="item in selectedCities">
        <div slot="right-menu">
          <swipeout-button @click.native="DELETE_CITY(item.name)"
                           type="warn">{{$t('Delete')}}</swipeout-button>
        </div>
        <a slot="content"
           href="javascript:;"
           class="navigator vux-1px-b"
           @click="changeCity(item)">
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
import { mapState, mapMutations, mapGetters } from 'vuex'
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
    ...mapMutations([
      'CHANGE_CITY',
      'DELETE_CITY',
    ]),
    changeCity(item) {
      go('/', this.$router)
      this.CHANGE_CITY({ coordinates: item.coordinates, cityName: item.name })
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
