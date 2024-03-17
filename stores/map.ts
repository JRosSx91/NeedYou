export const useMapaStore = defineStore('mapa', {
  state: (): MapState => ({
    mapCenter: [47.413220, -1.219482], // Valores predeterminados
    radius: 5000 // Ejemplo de valor predeterminado
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
