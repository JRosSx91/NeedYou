<template>
  <div style="height: 40vh; width: 40vw;">
    <LMap ref="map" :zoom="zoom" :center="center">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <LMarker :lat-lng="store.mapCenter" />
      <LCircle
        :lat-lng="store.mapCenter"
        :radius="radius"
        :color="circleOptions.color"
        :fill-color="circleOptions.fillColor"
        :fill-opacity="circleOptions.fillOpacity"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
const store = useMapStore();
const center: [number, number] =
  [store.mapCenter.lat, store.mapCenter.lng];
const radius = computed(() => store.radius);
const zoom = ref(10);
const circleOptions = { color: 'red', fillColor: '#f03', fillOpacity: 0.5 };
</script>

  <style>
  @import "leaflet/dist/leaflet.css";
  </style>
