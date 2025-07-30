import { useEffect, useState } from 'react';
import { DroneCard } from '../Componenets/DroneCard/DroneCard';
import Header from '../Componenets/Header/Header';
import type { Drone } from '../Types/Drone';

const drones = [
  {
    id: 1,
    name: 'AirSky',
    model: '200',
    operator: 'John Doe',
    description: 'A high-speed aerial drone for surveillance.',
    price: 1499.99,
    isAvailable: true,
  },

  {
    id: 2,
    name: 'AirSky2',
    model: '200',
    operator: 'John Doe',
    description: 'A high-speed aerial drone for surveillance.',
    price: 1499.99,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'AirSky3',
    model: '200',
    operator: 'John Doe',
    description: 'A high-speed aerial drone for surveillance.',
    price: 1499.99,
    isAvailable: true,
  },
  {
    id: 4,
    name: 'AirSky4',
    model: '200',
    operator: 'John Doe',
    description: 'A high-speed aerial drone for surveillance.',
    price: 1499.99,
    isAvailable: true,
  },
];


export function DronesList() {
  // const [drones, setDrones] = useState<Drone[]>([]);

  // const backend_url = import.meta.env.VITE_BACKEND_API_URL;

  // useEffect(() => {
  //   fetch(backend_url + `/drones`)
  //     .then((response) => response.json())
  //     .then((data) => setDrones(data));
  // }, []);

  return (
    <>
      <div className="flex flex-wrap bg-indigo-100">
        {drones.map((template) => (
          <DroneCard {...template} />
        ))}
      </div>
    </>
  );
}
