import { defineStore } from "pinia/dist/pinia.js";
import type { Alert } from "@/types/interfaces";

export const useAlertasStore = defineStore("alertas", {
  state: () => ({
    alertas: [] as Alert[],
  }),
  getters: {
    alertasActivas: (state) => state.alertas.filter((alerta) => true), // Ejemplo de lógica aquí
  },
  actions: {
    agregarAlerta(nuevaAlerta: Alert) {
      this.alertas.push(nuevaAlerta);
    },
  },
});
