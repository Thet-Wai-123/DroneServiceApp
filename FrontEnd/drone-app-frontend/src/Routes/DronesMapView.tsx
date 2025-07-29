import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import type { Drone } from '../Types/Drone';

export function DronesMapView() {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 40.758,
    lng: -73.9855,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        ...userLocation,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  //Change this to drones info from the backend instead later
  const drones: Drone[] = [
    {
      id: 1,
      name: 'Eagle',
      model: '31',
      operator: 'John Doe',
      description: 'des',
      price: 3,
      isAvailable: true,
      location: { lat: 3, lng: 2 },
    },
  ];
  const nav = useNavigate();

  //Exporting from env
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const backend_url = import.meta.env.VITE_BACKEND_API_URL;

  return (
    <div>
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{
            lat: userLocation.lat,
            lng: userLocation.lng,
          }}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={MAP_ID}
          clickableIcons={false}
        >
          <AdvancedMarker
            position={{ lat: userLocation.lat, lng: userLocation.lng }}
            onClick={() => {
              nav(`drone/${1}`);
            }}
          >
            <Pin
              background={'blue'}
              borderColor={'black'}
              glyphColor={'blue'}
            ></Pin>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}
