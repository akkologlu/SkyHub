import React, { useEffect, useState } from "react";
import { getForecastByCurrentLocation } from "../api/api";
import Spinner from "./Spinner";
import CityDetail from "./CityDetail";

function CurrentLocationWeather() {
  const [forecast, setForecast] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    setFetched(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getForecastByCurrentLocation(
            position.coords.latitude,
            position.coords.longitude
          ).then((data) => {
            setForecast(data);
            setFetched(true);
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div className="md:ml-6 ml-0 w-[80vw] flex justify-center">
      {fetched ? (
        <CityDetail forecast={forecast} />
      ) : (
        <div className="w-[80vw] flex justify-center items-center h-screen">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default CurrentLocationWeather;
