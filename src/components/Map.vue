<template>

<div class="full-height">
    <layout tab="map"></layout>
    <div id="map"></div>
</div>

</template>

<script>

import L from 'leaflet'
import Layout from './Layout'

export default {
    components: {
        Layout,
    },
    mounted() {
        const center = this.$store.state.app.center
        const mapObject = this.mapObject = L.map('map', {
            center: center,
            zoom: 9
        })
        this.fixImageUrl()
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapObject)
        L.marker(center).addTo(mapObject)
    },
    methods: {
        fixImageUrl() {
            //https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-261904061
            delete L.Icon.Default.prototype._getIconUrl
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                iconUrl: require('leaflet/dist/images/marker-icon.png'),
                shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
            });
        }
    }
}

</script>

<style>

@import "~leaflet/dist/leaflet.css";
#map {
    width: 100%;
    height: calc(100% - 55px);
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
