<template>
  <div class="max-w-md mx-auto my-10">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="sendAlert"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nombre (opcional)
        </label>
        <input
          id="name"
          v-model="alert.name"
          class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Ejemplo: Toby"
        >
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Descripción física
        </label>
        <input
          id="description"
          v-model="alert.description"
          class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Descripción física"
          required
        >
      </div>
      <!-- Último Lugar -->
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="lastPlace"
        >
          Última Ubicación (Latitud, Longitud)
        </label>
        <div>
          <AlertMap @location-selected="updateLocation" />
        </div>
      </div>

      <!-- Última Hora -->
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="lastHour"
        >
          Última Hora Visto
        </label>
        <input
          id="lastHour"
          v-model="alert.lastHour"
          type="time"
          class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
      </div>

      <!-- Foto (URL) -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="photo">
          Foto (URL)
        </label>
        <input
          id="photo"
          v-model="alert.photo"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
import AlertMap from '@/components/AlertMap.vue';

const alert = ref<Alert>({
  id: '',
  name: '',
  description: '',
  lastPlace: [0, 0], // Ejemplo de coordenadas iniciales
  lastHour: '',
  photo: ''
});

function sendAlert () {
  console.log(alert.value);
  // Aquí implementarías la lógica para enviar los datos del formulario
}
function updateLocation ({ lat, lng }: Coordinates) {
  alert.value.lastPlace = [lat, lng];
}
</script>
