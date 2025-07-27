import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-5 py-5 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Drone Service App</h1>
      <button
        onClick={RedirectToMyProfile}
        className="bg-white text-blue-600 font-medium px-4 py-2 rounded hover:bg-gray-100"
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
