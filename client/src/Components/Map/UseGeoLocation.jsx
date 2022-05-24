import { useEffect, useState } from 'react';

export default function UseGeoLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onSuccess = (locationCoords) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: locationCoords.coords.latitude,
        lng: locationCoords.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation is not supported by your browser',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
