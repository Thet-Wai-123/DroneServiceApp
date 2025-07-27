/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import type { DroneCardPop } from '../../Types/DroneCard';
import './DroneCard.css';
import { useNavigate } from 'react-router';

export const DroneCard = ({
  id,
  name,
  model,
  operator,
  description,
  price,
  isAvailable,
}: DroneCardPop) => {
  const nav = useNavigate();

  if (!isAvailable) return null;
  return (
    <div className="DroneCard basis-1/3" onClick={() => nav(`drone/${id}`)}>
      <h2>{name}</h2>
      <p>
        <strong>Operator:</strong> {operator}
      </p>
      <p>
        <strong>Price:</strong> {price}$
      </p>

      <p className="hidden">
        <strong>Model:</strong> {model}
      </p>

      <p className="hidden">{description}</p>
    </div>
  );
};
