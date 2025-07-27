import { useEffect, useState } from 'react';
import type { Drone } from '../Types/Drone';

export function DroneInfoPage() {
  const [droneInfo, setDroneInfo] = useState<Drone | null>(null);

  useEffect(() => {
    fetch('randomsite')
      .then((response) => response.json())
      .then((data) => setDroneInfo(data));
  }, []);

  while (!droneInfo) {
    return <p>Loading drone info...</p>;
  }
  return (
    <>
      <p>
        <strong>Status:</strong> {droneInfo.name}
      </p>
      <p>
        <strong>Model:</strong> {droneInfo.model}
      </p>
      <p>
        <strong>Description:</strong> {droneInfo.description}
      </p>
      <p>
        <strong>Price:</strong> {droneInfo.price}
      </p>
      
      {/* I wanna dispaly the location as a google maps */}
    </>
  );
}
