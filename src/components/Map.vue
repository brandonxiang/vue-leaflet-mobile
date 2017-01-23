<template>
  <div class="full-height">
  <layout tab="map"></layout>
  <div id="map"></div>
</div>
</template>

<script>
import L from 'leaflet'
import Layout from './Layout'

export default{
  components:{
    Layout,
  },
  mounted(){
    L.map('map',	{
      center:[22,114],
			zoom:9
    })
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

#map {
		width: 100%;
    height: calc(100% - 55px);  
	}

html, body, .full-height {
    height: 100%;
}

body {
    padding: 0;
    margin: 0;
}

.leaflet-control-attribution{
  display:none;
}
</style>
