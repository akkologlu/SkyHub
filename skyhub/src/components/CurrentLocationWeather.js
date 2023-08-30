import React, { useEffect, useState } from "react";
import { getForecastByCurrentLocation } from "../api/api";
import { FaTemperatureHalf, FaSun } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

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
  const splitter = (str) => {
    const arr = str.split("-");
    return arr[2] + "/" + arr[1];
  };
  return (
    <div className=" ml-6">
      {fetched ? (
        <div className="flex xl:flex-nowrap flex-wrap">
          <div className="">
            <div className="flex justify-between mt-4 p-12 ">
              <div className="flex flex-col space-y-20">
                <div className="flex flex-col space-y-5">
                  <p className="text-5xl font-bold text-gray-800">
                    {forecast.location.name}
                  </p>
                  <p className="text-xl text-gray-400">
                    {forecast.current.condition.text}
                  </p>
                </div>
                <div className="text-7xl font-bold text-gray-800">
                  <p>{Math.round(forecast.current.feelslike_c)}°</p>
                </div>
              </div>
              <div className="">
                <img src={forecast.current.condition.icon} className="h-60" />
              </div>
            </div>
            <div className="  mt-12 p-6 rounded-3xl bg-[#ebecf0]">
              <p className="text-xl font-bold text-gray-500">
                TODAY'S FORECAST
              </p>

              <div className="flex items-center lg:space-x-10 sm:space-y-0 space-y-3 space-x-0  flex-wrap sm:flex-nowrap md:space-x-4 sm:space-x-2 justify-center mt-8">
                <div className="todayForecast">
                  <p className="todayForecastTime">6:00 AM</p>
                  <img
                    src={
                      forecast.forecast.forecastday[0].hour[6].condition.icon
                    }
                    className="w-24"
                  />
                  <p className="todayForecastDegree">
                    {Math.round(
                      forecast.forecast.forecastday[0].hour[6].feelslike_c
                    )}
                    °
                  </p>
                </div>

                <hr className="w-1 h-36  border border-l-gray-300" />
                <div className="todayForecast">
                  <p className="todayForecastTime">9:00 AM</p>
                  <img
                    src={
                      forecast.forecast.forecastday[0].hour[9].condition.icon
                    }
                    className="w-24"
                  />
                  <p className="todayForecastDegree">
                    {Math.round(
                      forecast.forecast.forecastday[0].hour[9].feelslike_c
                    )}
                    °
                  </p>
                </div>
                <hr className="w-1 h-36   border border-l-gray-300" />

                <div className="todayForecast">
                  <p className="todayForecastTime">12:00 PM</p>
                  <img
                    src={
                      forecast.forecast.forecastday[0].hour[12].condition.icon
                    }
                    className="w-24"
                  />
                  <p className="todayForecastDegree">
                    {Math.round(
                      forecast.forecast.forecastday[0].hour[12].feelslike_c
                    )}
                    °
                  </p>
                </div>
                <hr className="w-1 h-36  border border-l-gray-300" />

                <div className="todayForecast">
                  <p className="todayForecastTime">3:00 PM</p>
                  <img
                    src={
                      forecast.forecast.forecastday[0].hour[15].condition.icon
                    }
                    className="w-24"
                  />
                  <p className="todayForecastDegree">
                    {Math.round(
                      forecast.forecast.forecastday[0].hour[15].feelslike_c
                    )}
                    °
                  </p>
                </div>
                <hr className="w-1 h-36  border border-l-gray-300" />

                <div className="todayForecast">
                  <p className="todayForecastTime">6:00 PM</p>
                  <img
                    src={
                      forecast.forecast.forecastday[0].hour[18].condition.icon
                    }
                    className="w-24"
                  />
                  <p className="todayForecastDegree">
                    {Math.round(
                      forecast.forecast.forecastday[0].hour[18].feelslike_c
                    )}
                    °
                  </p>
                </div>
                <hr className="w-1 h-36 border border-l-gray-300" />

                <div className="todayForecast">
                  <p className="todayForecastTime">9:00 PM</p>
                  <img
                    src={
                      forecast.forecast.forecastday[0].hour[21].condition.icon
                    }
                    className="w-24"
                  />
                  <p className="todayForecastDegree">
                    {Math.round(
                      forecast.forecast.forecastday[0].hour[21].feelslike_c
                    )}
                    °
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-12 p-6 rounded-3xl bg-[#ebecf0]">
              <p className="text-xl font-bold text-gray-500">AIR CONDITIONS</p>
              <div className="flex ">
                <div className="mt-8 flex flex-col space-y-12 flex-1">
                  <div className="flex items-center space-x-2">
                    <FaTemperatureHalf className="text-4xl text-gray-600" />
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-gray-600">
                        Real Feel
                      </p>
                      <p className="text-5xl font-bold text-gray-700">
                        {Math.round(forecast.current.temp_c)}°
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <WiHumidity className="text-4xl text-gray-600" />
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-gray-600">
                        Humidity
                      </p>
                      <p className="text-5xl font-bold text-gray-700">
                        {Math.round(forecast.current.humidity)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col space-y-12  flex-1">
                  <div className="flex items-center space-x-2">
                    <FiWind className="text-4xl text-gray-600" />
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-gray-600">Wind</p>
                      <p className="text-5xl font-bold text-gray-700">
                        {Math.round(forecast.current.wind_kph)} km/h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaSun className="text-4xl text-gray-600" />
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-gray-600">
                        UV Index
                      </p>
                      <p className="text-5xl font-bold text-gray-700">
                        {Math.round(forecast.current.uv)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ebecf0] xl:ml-8 my-8 rounded-3xl xl:w-fit w-full p-12">
            <p className="text-2xl font-bold text-gray-600 mb-8">
              7 DAY FORECAST
            </p>
            <div>
              {forecast.forecast.forecastday.map((day, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col space-y-4 py-8 justify-center">
                      <div className="flex items-center space-x-8">
                        <div style={{ flex: 1 }}>
                          <p className="text-lg font-bold text-gray-500">
                            {splitter(day.date)}
                          </p>
                        </div>
                        <div
                          className="flex items-center space-x-2"
                          style={{ flex: 4 }}
                        >
                          <img
                            src={day.day.condition.icon}
                            alt="Weather Icon"
                          />
                          <p className="text-lg font-bold text-gray-800">
                            {day.day.condition.text}
                          </p>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p>
                            <span className="text-lg font-bold text-gray-800">
                              {Math.round(day.day.maxtemp_c)}
                            </span>
                            <span className="text-lg font-bold text-gray-500">
                              /{Math.round(day.day.mintemp_c)}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border border-l-gray-300 " />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>loading..</div>
      )}
    </div>
  );
}

export default CurrentLocationWeather;
