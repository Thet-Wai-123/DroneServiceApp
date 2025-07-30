import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Header() {
  return (
    <header className="text-white px-5 py-5 flex justify-between items-center">
      <div className="flex items-c  enter space-x-4">
        <h1 className="mb-2 text-slate-800 text-xl font-semibold">Drone Service App</h1>

        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Map View
        </button>

        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Drones List
        </button>
      </div>
      <button
        onClick={RedirectToMyProfile}
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      >
        My Profile
      </button>
    </header>
  );
}

function RedirectToMyProfile() {
  const nav = useNavigate();
  useEffect(() => {
    nav('/myProfile');
  }, []);
}
