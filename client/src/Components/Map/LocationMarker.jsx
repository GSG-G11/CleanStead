import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMapEvents, Popup, Marker, useMap } from 'react-leaflet';
import LeafletIcon from 'leaflet';
import markerImage from '../../Assets/images/marker.png';

export default function LocationMarker({ position, setPosition }) {
  const markerIcon = new LeafletIcon.Icon({
    iconUrl: markerImage,
    iconSize: [38, 50],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  // const [bbox, setBbox] = useState([]);
  // const map = useMap();

  // useEffect(() => {
  //   map.locate().on("locationfound", function (e) {
  //     setPosition(e.latlng);
  //     map.flyTo(e.latlng, map.getZoom());
  //     const radius = e.accuracy;
  //     const circle = L.circle(e.latlng, radius);
  //     circle.addTo(map);
  //     setBbox(e.bounds.toBBoxString().split(","));
  //   });
  // }, [map]);

  const map = useMapEvents({
    click(e) {
      console.log('Clicked', e.latlng);
      setPosition(e.latlng);
    },
  });
  map.flyTo(position, map.getZoom());

  // return position === null ? null : (
  //   <Marker position={position} icon={markerIcon}>
  //     <Popup>
  //       You are here. <br />
  //       Map bbox: <br />
  //       <b>Southwest lng</b>: {bbox[0]} <br />
  //       <b>Southwest lat</b>: {bbox[1]} <br />
  //       <b>Northeast lng</b>: {bbox[2]} <br />
  //       <b>Northeast lat</b>: {bbox[3]}
  //     </Popup>
  //   </Marker>
  // );
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
