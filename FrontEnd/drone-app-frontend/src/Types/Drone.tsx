export interface Drone {
  id: number;
  name: string;
  model: string;
  operator: string;
  description: string;
  price: number;
  isAvailable: boolean;
  location: {lat: number, lng:number};
}
