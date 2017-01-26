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
    const mapObject = this.mapObject = L.map('map',	{
      center:[22,114],
			zoom:9
    })
    L.Icon.Default.imagePath = "../assets/";
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapObject)
    this.marker = L.marker([22,114]).addTo(mapObject)

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

</style>
