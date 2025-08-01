import { DroneCard } from '../Componenets/DroneCard/DroneCard';
import { useAvaliableDroneList } from '../CustomHooks/useAvaliableDroneList';
import type { DroneCardType } from '../Types/DroneCardType';
import type { Drone } from '../Types/DroneType';

export function DronesList() {
  const drones = useAvaliableDroneList();

  return (
    <div className="flex flex-wrap">
      {drones.map((drone) => {
        const droneCard = mapDroneToDroneCard(drone);
        return <DroneCard key={drone.id} {...droneCard} />;
      })}
    </div>
  );
}

function mapDroneToDroneCard(drone: Drone): DroneCardType {
  return {
    id: drone.id,
    name: drone.name,
    model: drone.model,
    operator: drone.operatorName,
    description: drone.description,
    price: drone.price,
    isAvailable: drone.isAvailable,
  };
}
