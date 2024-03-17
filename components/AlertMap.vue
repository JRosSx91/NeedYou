<template>
  <div style="height: 40vh; width: 25vw">
    <LMap ref="map" :zoom="zoom" :center="center" @click="onMapClick">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/
          &quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker v-if="markerLocation" :lat-lng="markerLocation" />
      <LGeoJson :geojson="geojsonData" />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const zoom = ref(6);
const center = ref([41.35451379803448, 2.0675604273697]);
const markerLocation = ref(null);
const geojsonData = ref({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [-1.559482, 47.21322]
      }
    }
    // Agrega más características según sea necesario
  ]
});

function onMapClick (event) {
  // Actualiza markerLocation con las coordenadas del clic
  markerLocation.value = event.latlng;
}
</script>

<style>
body {
  margin: 0;
}
</style>
