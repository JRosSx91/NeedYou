export const useAlertasStore = defineStore('alertas', {
  state: () => ({
    alertas: [] as Alert[]
  }),
  getters: {
    alertasActivas: state => state.alertas.filter(alerta => true)
  },
  actions: {
    agregarAlerta (nuevaAlerta: Alert) {
      this.alertas.push(nuevaAlerta);
    }
  }
});
