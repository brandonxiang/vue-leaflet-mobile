<template>
  <div>
    <layout tab="setting"></layout>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h4>brandonxiang</h4>
    </div>
    <group>
      <cell title="设置" is-link></cell>
    </group>
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
