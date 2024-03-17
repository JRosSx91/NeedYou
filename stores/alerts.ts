export const useAlertasStore = defineStore('alerts', {
  state: () => ({
    alerts: [] as Alert[]
  }),
  getters: {
    activeAlerts: state => state.alerts.filter(alerts => true)
  },
  actions: {
    addAlerts (newAlert: Alert) {
      this.alerts.push(newAlert);
    }
  }
});
