<template>
  <client-only>
    <div style="height: 600px; width: 800px">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
  </client-only>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    LMap: defineAsyncComponent(() =>
      import("@vue-leaflet/vue-leaflet").then((module) => module.LMap)
    ),
    LTileLayer: defineAsyncComponent(() =>
      import("@vue-leaflet/vue-leaflet").then((module) => module.LTileLayer)
    ),
  },
  data() {
    return {
      zoom: 2,
    };
  },
};
</script>

<style>
/* Asegúrate de incluir el CSS de Leaflet aquí o en tu archivo nuxt.config para evitar problemas de estilos */
@import "leaflet/dist/leaflet.css";
</style>
