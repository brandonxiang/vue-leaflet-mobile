<template>
  <div class="vux-1px-t full-height">
    <swipeout>
      <swipeout-item link="/" transition-mode="follow" v-for="item in selectedCities" :key="item">
        <div slot="right-menu">
          <swipeout-button @click.native="deleteCity(item.name)" type="warn">{{$t('Delete')}}</swipeout-button>
        </div>
        <a slot="content" href="javascript:;" class="navigator vux-1px-b" @click="onChange(item.name)">
          {{$t(item.name)}}
        </a>
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
      "selectedCities",
    ]),
  },

  mounted() {
    this.SET_HEADER({title:this.$t('Cities')})
  },

  methods: {
    ...mapMutations(['SET_HEADER']),
    ...mapActions([
      'changeMapCity',
      'changeWeatherCity',
      'deleteCity',
    ]),
    onChange(name){
       var fromPath = this.$store.state.route.from.fullPath
        if(fromPath === '/'){
          this.changeMapCity(name)
        }else if(fromPath === '/weather'){
          this.changeWeatherCity(name)
        }
        this.$router.go(-1)
       
        
    },
  },

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
