/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import type { Drone } from '../Types/DroneType';
import { useParams } from 'react-router';

export function DroneInfoPage() {
  const [droneInfo, setDroneInfo] = useState<Drone | null>(null);

  const backend_url = import.meta.env.VITE_BACKEND_API_URL;
  const { id } = useParams();

  useEffect(() => {
    fetch(backend_url + `/drone/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDroneInfo(data);
      });
  }, []);

  if (!droneInfo) {
    return <p>Loading drone info...</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300">
      <p className="text-5xl">
        <strong>{droneInfo.name} </strong>
      </p>
      <p className="text-2xl">
        <strong>Model:</strong> {droneInfo.model}
      </p>
      <p className="text-2xl">
        <strong>Price:</strong> ${droneInfo.price}
      </p>
      <p className="text-2xl">
        <strong>Operator:</strong> {droneInfo.operatorName}
      </p>
      <p className="text-2xl">
        <strong>Description:</strong> {droneInfo.description}
      </p>
    </div>
  );
}
