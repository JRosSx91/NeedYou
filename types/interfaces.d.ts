interface Alert {
  id: string;
  name: string;
  description: string;
  lastPlace: [number, number];
  lastHour: string;
  photo: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapState {
  mapCenter: Coordinates;
  radius: number;
}