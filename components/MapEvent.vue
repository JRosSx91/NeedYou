<template>
  <div style="height: 40vh; width: 40vw;">
    <LMap v-if="showMap" :zoom="zoom" :center="center">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <LMarker :lat-lng="markerLocation" />
      <LCircle
        :lat-lng="markerLocation"
        :radius="radius"
        :color="circleOptions.color"
        :fill-color="circleOptions.fillColor"
        :fill-opacity="circleOptions.fillOpacity"
      />
    </LMap>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

// Props recibidas del componente padre
const props = defineProps({
  mapCenter: Object,
  radius: Number,
  showMap: Boolean
});

const center = ref(props.mapCenter);
const zoom = ref(10);
const markerLocation = ref(props.mapCenter);
const circleOptions = { color: 'red', fillColor: '#f03', fillOpacity: 0.5 };

watchEffect(() => {
  center.value = props.mapCenter;
  markerLocation.value = props.mapCenter;
});
</script>

  <style>
  @import "leaflet/dist/leaflet.css";
  </style>
