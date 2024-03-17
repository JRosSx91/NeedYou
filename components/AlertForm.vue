<template>
  <div class="max-w-md mx-auto my-10">
    <form
      @submit.prevent="enviarAlerta"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="descripcion"
        >
          Descripción física
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="descripcion"
          type="text"
          placeholder="Descripción física"
          v-model="alerta.descripcion"
          required
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

interface Alerta {
  descripcion: string;
  // Agrega aquí más propiedades según los campos del formulario
}

const alerta = ref<Alerta>({
  descripcion: "",
  // Inicializa aquí los demás campos
});

function enviarAlerta() {
  console.log(alerta.value);
  // Aquí implementarías la lógica para enviar los datos del formulario
}
</script>
