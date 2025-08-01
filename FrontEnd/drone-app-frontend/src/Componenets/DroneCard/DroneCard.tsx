import type { DroneCardType } from '../../Types/DroneCardType';
import { useNavigate } from 'react-router';

export const DroneCard = ({
  id,
  name,
  model,
  operator,
  description,
  price,
  isAvailable,
}: DroneCardType) => {
  const nav = useNavigate();

  if (!isAvailable) return null;
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ml-5 mb-0">
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">{name}</h5>
        <p className="text-slate-600 leading-normal font-light">
          <strong>Operator: </strong> {operator}
        </p>
        <p className="text-slate-600 leading-normal font-light">
          <strong>Price:</strong> ${price}
        </p>
        <p className="text-slate-600 leading-normal font-light">
          <strong>Model:</strong> {model}
        </p>
        <p className="text-slate-600 leading-normal font-light truncate">
          <strong>Description:</strong> {description}
        </p>

        <button
          className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => nav(`drone/${id}`)}
        >
          Read more
        </button>
      </div>
    </div>
  );
};
