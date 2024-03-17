<template>
  <div style="height: 40vh; width: 100%">
    <LMap v-if="mostrarMapa" :zoom="zoom" :center="center">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <LMarker :lat-lng="markerLocation" />
      <LCircle
        :lat-lng="markerLocation"
        :radius="radio"
        :color="circleOptions.color"
        :fill-color="circleOptions.fillColor"
        :fill-opacity="circleOptions.fillOpacity"
      />
    </LMap>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { LMap, LTileLayer, LMarker, LCircle } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

// Props recibidas del componente padre
const props = defineProps({
  centroMapa: Object,
  radio: Number,
  mostrarMapa: Boolean
});

const center = ref(props.centroMapa);
const zoom = ref(10);
const markerLocation = ref(props.centroMapa);
const circleOptions = { color: 'red', fillColor: '#f03', fillOpacity: 0.5 };

watchEffect(() => {
  center.value = props.centroMapa;
  markerLocation.value = props.centroMapa;
});
</script>

  <style>
  @import "leaflet/dist/leaflet.css";
  </style>
