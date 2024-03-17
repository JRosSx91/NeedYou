<template>
  <div>
    <MapEvent
      :centro-mapa="centroMapa"
      :radio="radioCalculado"
      :mostrar-mapa="true"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MapEvent from '@/components/MapaDeBusqueda.vue';

// Aquí puedes usar `useRoute` para obtener los parámetros pasados a esta página
const route = useRoute();

const centroMapa = ref([47.413220, -1.219482]);
const radioCalculado = ref(5000);

onMounted(() => {});
</script>
