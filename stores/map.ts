export const useMapStore = defineStore('map', {
  state: (): MapState => ({
    mapCenter: { lat: 47.413220, lng: -1.219482 },
    radius: 5000
  }),
  actions: {
    setMapCenter (center: Coordinates) {
      this.mapCenter = center;
    },
    setRadius (radius: number) {
      this.radius = radius;
    }
  }
});
