<template>
  <div class="max-w-md mx-auto my-10">
    <form
      @submit.prevent="sendAlert"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Descripción física
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nombre (opcional)"
          v-model="alert.name"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Descripción física
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Descripción física"
          v-model="alert.description"
          required
        />
      </div>
      <!-- Último Lugar -->
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="lastPlace"
        >
          Última Ubicación (Latitud, Longitud)
        </label>
        <input
          v-model="alert.lastPlace[0]"
          type="number"
          step="any"
          id="lastPlaceLat"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Latitud"
        />
        <input
          v-model="alert.lastPlace[1]"
          type="number"
          step="any"
          id="lastPlaceLon"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Longitud"
        />
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
          v-model="alert.lastHour"
          type="datetime-local"
          id="lastHour"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <!-- Foto (URL) -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="photo">
          Foto (URL)
        </label>
        <input
          v-model="alert.photo"
          type="text"
          id="photo"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="URL de la foto"
        />
      </div>
      <!-- Repite la estructura anterior para los demás campos del formulario -->
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar Alerta
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Alert } from "@/types/interfaces";

const alert = ref<Alert>({
  id: "",
  name: "",
  description: "",
  lastPlace: [0, 0], // Ejemplo de coordenadas iniciales
  lastHour: new Date(), // Inicializa con la fecha y hora actual, ajusta según sea necesario
  photo: "",
});

function sendAlert() {
  console.log(alert.value);
  // Aquí implementarías la lógica para enviar los datos del formulario
}
</script>
