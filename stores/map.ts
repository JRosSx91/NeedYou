export const useMapaStore = defineStore('mapa', {
  state: (): MapState => ({
    mapCenter: [47.413220, -1.219482],
    radius: 5000
  }),
  actions: {
    setCentroMapa (center: [number, number]) {
      this.mapCenter = center;
    },
    setRadio (radius: number) {
      this.radius = radius;
    }
  }
});
