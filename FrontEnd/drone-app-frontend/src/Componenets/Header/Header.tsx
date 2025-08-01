import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Header() {
  const nav = useNavigate();
  return (
    <header className="text-white px-5 py-5 flex justify-between items-center border-b border-black">
      <div className="flex items-c  enter space-x-4">
        <h1 className="mb-2 text-slate-800 text-xl font-semibold">
          Drone Service App
        </h1>
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={() => nav('/map')}
        >
          Map View
        </button>

        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={() => nav('/drones')}
        >
          Drones List
        </button>
      </div>
      <button
        onClick={() => nav('/profile')}
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      >
        My Profile
      </button>
    </header>
  );
}
