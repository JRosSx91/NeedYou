export interface Alert {
  id: string;
  name: string;
  description: string;
  lastPlace: [number, number];
  lastHour: Date;
  photo: string;
}
