import { useState, useEffect } from "react";
import axios from 'axios';
import {GOOGLE_MAPS_KEY} from '../config/config'

const useGoogleAddress = (address, city) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address} ${city}&key=${GOOGLE_MAPS_KEY}`;


  useEffect( () => {
    console.log(address)
    async function fetchData(){
      try {
        const response = await axios.get(API);
        setMap(response.data.results[0].geometry.location);
      } catch (error) {
        throw error
      }
      
    }

    fetchData()
  }, [address])
  
  return map;
}



export default useGoogleAddress;