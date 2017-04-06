<template>
    <div class="full-height">
        <l-map :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom" :attributionControl="attributionControl">
        <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
        <l-marker :position="center" :title="cityName" :opacity="opacity" :draggable="draggable">
        <l-tooltip :content="cityName"></l-tooltip>
        </l-marker>
        </l-map>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import locateControl from 'leaflet.locatecontrol'

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
      draggable:false,
      attributionControl:false,
    };
  },
  computed: mapState({
      center: state => state.app.coordinate,
      cityName: state => state.app.cityName,
      map: state => state.VL.map,
  }),
  mounted(){
      (new locateControl()).addTo(this.map)
  }
}

</script>

<style>

@import "~leaflet/dist/leaflet.css";
@import "~leaflet.locatecontrol/dist/L.Control.Locate.css";
@import "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";

#map {
    width: 100%;
    height:100%;
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
