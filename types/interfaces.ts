export interface Alert {
  id: string;
  name: string;
  description: string;
  lastPlace: [number, number];
  lastHour: string;
  photo: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MapState {
  mapCenter: Coordinates;
  radius: number;
}
