import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { Geocoder } from '@maptiler/geocoder';
import 'leaflet/dist/leaflet.css';
import '@maptiler/geocoder/css/geocoder.css';
// import LeafletIcon from 'leaflet';
import UseGeoLocation from './UseGeoLocation';
import osm from './osm-providers';
import LocationMarker from './LocationMarker';
import './style.css';
// import markerImage from '../../Assets/images/marker.png';

export default function LeafMap() {
  const mapRef = useRef();
  const ZOOM_LEVEL = 13;
  const [position, setPosition] = useState({
    lat: 31.3547,
    lng: 34.3088,
  });

  const location = UseGeoLocation();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      setPosition({
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
      });
    } else {
      alert(location.error.message);
    }
  };

  const HandleChang = () => {
    const geocoder = new Geocoder({
      input: 'search',
      key: 'FD5YCV5SsqOHNMIhFeXY',
    });

    geocoder.on('select', ({ center }) => {
      setPosition({ lat: center[1], lng: center[0] });
    });
  };

  // const markerIcon = new LeafletIcon.Icon({
  //   iconUrl: markerImage,
  //   iconSize: [38, 50],
  //   iconAnchor: [17, 46],
  //   popupAnchor: [0, -46],
  // });

  return (
    <div className="map-wrapper">
      <input
        autoComplete="off"
        id="search"
        type="text"
        onChange={HandleChang}
      />

      <button type="button" onClick={showMyLocation}>
        Get My Location
      </button>
      <MapContainer
        center={position}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        style={{
          width: '100%',
          height: '90%',
          borderRadius: '12px',
          paddingTop: '10px',
        }}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <LocationMarker position={position} setPosition={setPosition} />

        {/* {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={markerIcon}
          >
            <Popup></Popup>
          </Marker>
        )} */}
      </MapContainer>
    </div>
  );
}
