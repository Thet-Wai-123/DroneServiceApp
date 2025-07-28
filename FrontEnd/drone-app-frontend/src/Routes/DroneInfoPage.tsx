import { useEffect, useState } from 'react';
import type { Drone } from '../Types/Drone';
import { useParams } from 'react-router';

export function DroneInfoPage() {
  const [droneInfo, setDroneInfo] = useState<Drone | null>(null);

  const backend_url = import.meta.env.VITE_BACKEND_API_URL;
  const { id } = useParams();

  useEffect(() => {
    fetch(backend_url + `/drone/${id}`)
      .then((response) => response.json())
      .then((data) => setDroneInfo(data));
  }, []);

  if (!droneInfo) {
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
