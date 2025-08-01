import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { SearchBar } from '../Componenets/SearchBar';
import { useAvaliableDroneList } from '../CustomHooks/useAvaliableDroneList';
import { CustomMarker } from '../Componenets/CustomMarker';

export function DronesMapView() {
  const drones = useAvaliableDroneList();

  const [userLocation, setCenterLocation] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 40.758,
    lng: -73.9855,
  });

  //Default =gets the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenterLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  //Exporting from env
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  return (
    <div>
      {/*Search Bar*/}
      <SearchBar onChange={setCenterLocation} />

      {/*Map*/}
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          center={{
            lat: userLocation.lat,
            lng: userLocation.lng,
          }}
          onCameraChanged={(event)=>{
            setCenterLocation(event.detail.center);
          }}
          defaultZoom={13}
          minZoom={11}
          maxZoom={15}
          disableDefaultUI={true}
          mapId={MAP_ID}
          clickableIcons={false}
        >
          {drones.map((drone) => (
            <CustomMarker {...drone}></CustomMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
