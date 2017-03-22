<template>

<div class="full-height">
    <layout tab="map"></layout>
    <l-map :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom">
    <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
    <l-marker :position="center" :title="title" :opacity="opacity" :draggable="draggable">
      <l-tooltip :content="title"></l-tooltip>
    </l-marker>
    </l-map>
</div>

</template>

<script>

import L from 'leaflet'
import Layout from './Layout'

export default {
    components: {
        Layout,
    },
    data() {
     return {
      zoom: 9,
      center: this.$store.state.app.center,
      minZoom: 1,
      maxZoom: 18,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: 'brandon.xiang',
      title: 'test-marker',
      opacity: 1,
      draggable:false
    };
  },
}

</script>

<style>

@import "~leaflet/dist/leaflet.css";
#map {
    width: 100%;
    height: calc(100% - 53px);
}

html,
body,
.full-height {
    height: 100%;
}

body {
    padding: 0;
    margin: 0;
}

</style>
