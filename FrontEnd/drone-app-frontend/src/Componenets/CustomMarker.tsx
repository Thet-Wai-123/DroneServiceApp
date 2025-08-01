import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import type { Drone } from '../Types/DroneType';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export function CustomMarker(drone: Drone) {
  const nav = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  //to show the short description when hovered
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <AdvancedMarker
       onMouseEnter={() => {
            console.log("Enter")
          setIsHovered(true);
        }}
        onMouseLeave={() => {
            console.log("Exit");
            setIsHovered(false)}}
    

        position={{ lat: drone.latitude, lng: drone.longitude }}
        onClick={() => {
          nav(`/drones/drone/${drone.id}`);
        }}
      >
        <Pin
          background={'blue'}
          borderColor={'black'}
          glyphColor={'blue'}
        ></Pin>
      </AdvancedMarker>

      {isHovered && (
        <div 
          className="absolute bg-white "
          style={{
            left: mousePos.x,
            top: mousePos.y,
            
          }}
        >
          <p className="font-sans text-2xl">Name: {drone.name}</p>
          <p className="font-sans text-2xl">Price: ${drone.price}</p>
        </div>
      )}
    </div>
  );
}
