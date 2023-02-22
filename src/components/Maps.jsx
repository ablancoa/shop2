import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_KEY } from '../config/config';

const Maps = ({ location }) => {
  const [center, setCenter] = useState({})

  const containerStyle = {
    height: '50vh',
    width: '100%'
  }

  useEffect(() => {
    function getLocation() {
      console.log(location)
      const center = {
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng)
      }

      setCenter(center)
    }
    getLocation()
  }, [location])

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {center.lat && center.lng && (
          <Marker position={center} onLoad={onLoad} />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default Maps