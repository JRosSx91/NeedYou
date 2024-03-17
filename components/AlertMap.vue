<template>
  <div class="leaflet-map">
    <l-map style="height: 400px; width: 100%" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" />
      <!-- Aquí puedes añadir más componentes como marcadores o áreas -->
    </l-map>
  </div>
</template>

<script setup>
import { LMap, LTileLayer } from "vue-leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "vue";

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
const center = ref([40.416775, -3.70379]); // Ejemplo: Centro de Madrid
const zoom = ref(13);

// Corrección para el problema común de iconos de Leaflet que no se muestran correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
</script>

<style>
/* Importante para asegurar que el mapa se muestre correctamente */
.leaflet-map {
  width: 100%;
  height: 400px;
}
</style>
