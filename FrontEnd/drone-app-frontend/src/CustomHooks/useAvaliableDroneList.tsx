/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import type { Drone } from '../Types/DroneType';

export function useAvaliableDroneList(): Drone[] {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_API_URL;

  const [drones, setDrones] = useState<Drone[]>([]);

  useEffect(() => {
    fetch(BACKEND_URL + `/drone/getAllAvailable`)
      .then((responses) => responses.json())
      .then((datas) => setDrones(datas));
  }, []);
  return drones;
}
