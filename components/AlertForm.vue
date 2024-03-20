<template>
  <div class="max-w-md mx-auto my-10">
    <form
      class="shadow-md rounded px-8 pt-6 pb-8 mb-4 font-primary2 text-gray-900
        dark:text-white"
      @submit.prevent="sendAlert"
    >
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="name">
          Nombre (opcional)
        </label>
        <input
          id="name"
          v-model="alert.name"
          class="shadow appearance-none border rounded w-full py-2 px-3
               leading-tight focus:outline-none
                focus:shadow-outline"
          type="text"
          placeholder="Ejemplo: Toby"
        >
      </div>
      <div class="mb-4">
        <label
          class="block text-sm font-bold mb-2"
          for="description"
        >
          Descripción física
        </label>
        <input
          id="description"
          v-model="alert.description"
          class="shadow appearance-none border rounded w-full py-2 px-3
              leading-tight focus:outline-none
                focus:shadow-outline"
          type="text"
          placeholder="Descripción física"
          required
        >
      </div>
      <div class="mb-4">
        <label
          class="block text-sm font-bold mb-2"
          for="lastPlace"
        >
          Última Ubicación (Latitud, Longitud)
        </label>
      </div>
      <AlertMap
        :initial-location="alert.lastPlace"
        @update-location="updateLocation"
      />
      <div class="mb-4 mt-3">
        <label
          class="block text-sm font-bold mb-2"
          for="lastHour"
        >
          Última Hora Visto
        </label>
        <input
          id="lastHour"
          v-model="alert.lastHour"
          type="time"
          class="shadow appearance-none border rounded w-full py-2 px-3
              leading-tight focus:outline-none
                focus:shadow-outline"
          required
        >
      </div>

      <!-- Foto (URL) -->
      <div class="mb-6">
        <label class="block text-sm font-bold mb-2" for="photo">
          Foto (URL)
        </label>
        <input
          id="photo"
          v-model="alert.photo"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3
              leading-tight focus:outline-none
                focus:shadow-outline"
          placeholder="URL de la foto"
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold
              py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar Alerta
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const alert = ref<Alert>({
  id: '',
  name: '',
  description: '',
  lastPlace: [0, 0],
  lastHour: '',
  photo: ''
});

const router = useRouter();

function sendAlert () {
  const store = useMapStore();
  store.setMapCenter({
    lat: alert.value.lastPlace[0],
    lng: alert.value.lastPlace[1]
  });

  const lastHourParts = alert.value.lastHour.split(':');
  const lastHourDate = new Date();
  lastHourDate.setHours(parseInt(lastHourParts[0]),
    parseInt(lastHourParts[1]), 0, 0);

  const currentDate = new Date();
  const diff = currentDate.getTime() - lastHourDate.getTime();
  let passedHours = diff / (1000 * 60 * 60);
  passedHours = Math.max(0, passedHours);
  passedHours = Math.round(passedHours * 100) / 100;

  const calculatedRadius = passedHours * 5000;
  store.setRadius(calculatedRadius);

  router.push({ name: 'event' });
}
function updateLocation (coordinates: Coordinates) {
  alert.value.lastPlace = [coordinates.lat, coordinates.lng];
}
</script>
