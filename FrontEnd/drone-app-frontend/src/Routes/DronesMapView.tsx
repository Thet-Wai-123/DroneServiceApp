import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchBar } from '../Componenets/SearchBar';
import { useAvaliableDroneList } from '../CustomHooks/useAvaliableDroneList';

export function DronesMapView() {
  const drones = useAvaliableDroneList();

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
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
    console.log("Use Effect is called again")
  }, [userLocation.lat, userLocation.lng]);

  const nav = useNavigate();
  //For info window when hovered
  const [hoveredDroneId, setHoveredDroneId] = useState<number | null>(null);

  //Exporting from env
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  return (
    <div>
      {/*Search Bar*/}
      <SearchBar />

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
          {drones.map((drone) => (
            <AdvancedMarker
              position={{ lat: userLocation.lat, lng: userLocation.lng }}
              onClick={() => {
                nav(`drone/${drone.id}`);
              }}
              onMouseEnter={() => {
                setHoveredDroneId(drone.id);
              }}
            >
              <Pin
                background={'blue'}
                borderColor={'black'}
                glyphColor={'blue'}
              ></Pin>
            </AdvancedMarker>
          ))}

          {/* {hoveredDroneId === 1 && (
            <InfoWindow
              position={{
                lat: userLocation.lat,
                lng: userLocation.lng,
              }}
              onCloseClick={() => setHoveredDroneId(null)}
            >
              Info about the drone here
            </InfoWindow>
          )} */}
        </Map>
      </APIProvider>
    </div>
  );
}
