import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './Routes/Home';
import { DroneInfoPage } from './Routes/DroneInfoPage';
import { DronesList } from './Routes/DronesList';
import dotenv from 'dotenv';
import { DronesMapView } from './Routes/DronesMapView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drones" element={<DronesList/>} />
        <Route path="/map" element={<DronesMapView/>} />
        <Route path="/drones/drone/:id" element={<DroneInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
