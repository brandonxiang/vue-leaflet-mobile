<template>
  <div>
    <layout tab="setting"></layout>
    <head-part></head-part>
    <group>
      <cell title="设置" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import Layout from './Layout'
import HeadPart from './HeadPart'

export default {
  components: {
    Group,
    Cell,
    Layout,
    HeadPart
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>
