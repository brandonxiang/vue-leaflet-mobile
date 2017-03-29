<template>
    <div class="full-height">
        <l-map :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom">
        <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
        <l-marker :position="center" :title="title" :opacity="opacity" :draggable="draggable">
        <l-tooltip :content="title"></l-tooltip>
        </l-marker>
        </l-map>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    data() {
     return {
      zoom: 9,
      minZoom: 1,
      maxZoom: 18,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: 'brandon.xiang',
      title: 'test-marker',
      opacity: 1,
      draggable:false
    };
  },
  computed: mapState({
      center: state => state.app.coordinate,
  }),
}

</script>

<style>

@import "~leaflet/dist/leaflet.css";
#map {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 53px;
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
