import React from 'react';
import PropTypes from 'prop-types';
import { useMapEvents, Popup, Marker } from 'react-leaflet';
import LeafletIcon from 'leaflet';
import markerImage from '../../Assets/images/marker.png';

export default function LocationMarker({ position, setPosition }) {
  const markerIcon = new LeafletIcon.Icon({
    iconUrl: markerImage,
    iconSize: [38, 50],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  map.flyTo(position, map.getZoom());

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>{`${position.lat} : ${position.lng}`}</Popup>
    </Marker>
  );
}

LocationMarker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  setPosition: PropTypes.func.isRequired,
};
