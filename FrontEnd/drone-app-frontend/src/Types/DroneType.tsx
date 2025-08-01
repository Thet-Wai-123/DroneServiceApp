export interface Drone {
  id: number;
  name: string;
  model: string;
  operatorName: string;
  description: string;
  price: number;
  isAvailable: boolean;
  latitude: number;
  longitude: number;
}
