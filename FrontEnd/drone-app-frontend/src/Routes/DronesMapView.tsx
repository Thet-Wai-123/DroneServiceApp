import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import type { Drone } from '../Types/Drone';
import { SearchBar } from '../Componenets/SearchBar';

//replace the pin location for user location to every drone instead, and the placeholder id 1 to the real id of the drone.

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
  //For info window when hovered
  const [hoveredDroneId, setHoveredDroneId] = useState<number | null>(null);

  //Exporting from env
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  return (
    <div>
      {/*Search Bar*/}
      <SearchBar/>

      {/*Map*/}
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{
            lat: userLocation.lat,
            lng: userLocation.lng,
          }}
          defaultZoom={13}
          minZoom={11}
          maxZoom={13}
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
            onMouseEnter={() => {
              setHoveredDroneId(1);
            }}
          >
            <Pin
              background={'blue'}
              borderColor={'black'}
              glyphColor={'blue'}
            ></Pin>
          </AdvancedMarker>

          {hoveredDroneId === 1 && (
            <InfoWindow
              position={{
                lat: userLocation.lat,
                lng: userLocation.lng,
              }}
              onCloseClick={() => setHoveredDroneId(null)}
            >
              Info about the drone here
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
