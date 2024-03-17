import { defineStore } from "pinia/dist/pinia.js";

interface Alerta {
  id: string;
  descripcion: string;
  ultimaUbicacion: [number, number];
  horaDesaparicion: Date;
}

export const useAlertasStore = defineStore('alertas', {
  state: () => ({
    alertas: [] as Alerta[],
  }),
  getters: {
    // Puedes definir getters para obtener partes del estado
    // Por ejemplo, obtener todas las alertas activas
    alertasActivas: (state) => state.alertas.filter((alerta) => /* tu lógica aquí */),
  },
  actions: {
    // Aquí puedes definir acciones para modificar el estado
    agregarAlerta(nuevaAlerta: Alerta) {
      this.alertas.push(nuevaAlerta);
    },
  },
});