<template>
  <div class="mx-auto" style=" width: 24rem; height: 20rem">
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
const emit = defineEmits(['update-location']);
const zoom = ref(15);
const center = ref([41.35451379803448, 2.0675604273697]);
const markerLocation = ref(null);
const geojsonData = ref({
  type: 'FeatureCollection',
  features: []
});

function onMapClick (event) {
  const { lat, lng } = event.latlng;
  markerLocation.value = L.latLng(lat, lng);
  emit('update-location', { lat, lng });
}
</script>

<style>
body {
  margin: 0;
}
</style>
