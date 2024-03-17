<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold text-center my-8">
      Bienvenido a la Aplicación de Alertas
    </h1>
    <div class="flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="emitirAlerta"
      >
        Emitir Alerta
      </button>
    </div>
    <div>
      <AlertForm></AlertForm>
    </div>
    <div>
      <AlertMap></AlertMap>
    </div>
  </div>
</template>

<script setup>
import AlertForm from "~/components/AlertForm.vue";
import AlertMap from "~/components/AlertMap.vue";

function emitirAlerta() {
  console.log("Emitir alerta");
}
</script>

<style></style>
