export const useMapStore = defineStore('map', {
  state: (): MapState => ({
    mapCenter: { lat: 0, lng: 0 },
    radius: 0
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
