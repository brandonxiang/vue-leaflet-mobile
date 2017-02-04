<template>
  <div>
    <layout tab="setting"></layout>
    <head-part></head-part>
    <group>
      <lang-picker></lang-picker>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import Layout from './Layout'
import HeadPart from './HeadPart'
import LangPicker from './LangPicker'

export default {
  components: {
    Group,
    Cell,
    Layout,
    HeadPart,
    LangPicker
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>
