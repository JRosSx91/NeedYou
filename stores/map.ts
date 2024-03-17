// stores/mapa.js
import { defineStore } from 'pinia';

export const useMapaStore = defineStore('mapa', {
  state: () => ({
    centroMapa: [47.413220, -1.219482], // Valores predeterminados o vacíos
    radio: 5000 // Ejemplo de valor predeterminado
  }),
  actions: {
    setCentroMapa (centro) {
      this.centroMapa = centro;
    },
    setRadio (radio) {
      this.radio = radio;
    }
  }
});
