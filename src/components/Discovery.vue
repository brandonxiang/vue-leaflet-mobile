<template>
  <div>
    <layout tab="setting"></layout>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Discory</h1>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import Layout from './Layout'

export default {
  components: {
    Group,
    Cell,
    Layout
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
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
