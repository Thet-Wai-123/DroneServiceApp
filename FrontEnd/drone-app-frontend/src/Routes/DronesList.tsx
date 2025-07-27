
import { DroneCard } from '../Componenets/DroneCard/DroneCard';
import Header from '../Componenets/Header/Header';

const templateData = [
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
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        {templateData.map((template) => (
          <DroneCard {...template} />
        ))}
      </div>
    </>
  );
}
