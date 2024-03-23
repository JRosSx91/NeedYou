<template>
  <div>
    <MapEvent
      :map-center="mapCenter"
      :radius="calculateRadius"
      :show-map="true"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const store = useMapStore();
const mapCenter = ref(store.mapCenter);
const calculateRadius = ref(store.radius);

definePageMeta({
  middleware: 'auth'
});

onMounted(() => {
  const query = route.query;

  if (query.mapCenter && typeof query.mapCenter === 'string') {
    const parts = query.mapCenter.split(',').map(Number);
    const center: Coordinates = { lat: parts[0], lng: parts[1] };
    store.setMapCenter(center);
  }

  if (query.radius && typeof query.radius === 'string') {
    const radius: number = Number(query.radius);
    store.setRadius(radius);
  }
});
</script>
