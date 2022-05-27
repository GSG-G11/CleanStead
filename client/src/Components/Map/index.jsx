import React, { useRef } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
import { Geocoder } from '@maptiler/geocoder';
import 'leaflet/dist/leaflet.css';
import '@maptiler/geocoder/css/geocoder.css';
import {
  Input,
  Button,
  Form,
  Image,
  Row,
  Col,
  Typography,
  message,
} from 'antd';
import { PropTypes } from 'prop-types';
import UseGeoLocation from './UseGeoLocation';
// import osm from './osm-providers';
// import LocationMarker from './LocationMarker';
import locationIcon from '../../Assets/icons/location.svg';
import './style.css';

const { Text } = Typography;
export default function LeafMap({ setPosition }) {
  // const mapRef = useRef();
  // const ZOOM_LEVEL = 13;

  const location = UseGeoLocation();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      setPosition({
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
      });
    } else {
      message.error(location.error.message);
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

  return (
    <div className="map-wrapper">
      <Row>
        <Col>
          <Form.Item label="العنوان التفصيلي">
            <Input
              autoComplete="off"
              id="search"
              placeholder="ابحث عن موقعك"
              className="input-user"
              name="userSpecificAddress"
              onChange={HandleChang}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="احصل على عنواني">
            <Button onClick={showMyLocation}>
              <Image alt="location" src={locationIcon} preview={false} />
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 23 }}>
          <Text>يمكنك تحديد الموقع بالتفصيل من خلال الخريطة</Text>
        </Col>
      </Row>
      {/* <MapContainer
        center={position}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="map-container"
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer> */}
    </div>
  );
}

LeafMap.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  setPosition: PropTypes.func.isRequired,
};
