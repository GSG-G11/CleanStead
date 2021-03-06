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
      if (e.latlng) {
        setPosition([parseFloat(e.latlng.lat), parseFloat(e.latlng.lng)]);
      }
    },
  });
  map.flyTo(position, map.getZoom());

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>{`${position[0]} : ${position[1]}`}</Popup>
    </Marker>
  );
}

LocationMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  setPosition: PropTypes.func.isRequired,
};
