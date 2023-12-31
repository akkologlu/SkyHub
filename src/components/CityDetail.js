import React from "react";
import { useDispatch } from "react-redux";
import { addFavCity } from "../store/slices/FavCitySlice";
import { FaTemperatureHalf, FaSun } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import Spinner from "./Spinner";

function CityDetail({ forecast }) {
  const splitter = (str) => {
    const arr = str.split("-");
    return arr[2] + "/" + arr[1];
  };
  const dispatch = useDispatch();
  return (
    <div className=" w-[80vw] md:block flex items-center flex-col">
      <div className="flex justify-end">
        <button
          onClick={() => dispatch(addFavCity(forecast))}
          className="bg-gray-300 px-4 py-2 rounded-md mt-4  hover:bg-gray-400"
        >
          Favoriye Ekle
        </button>
      </div>
      <div className="flex xl:flex-nowrap flex-wrap">
        <div>
          <div className="flex justify-center text-center md:text-start md:justify-between mt-4 p-12">
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
            <div>
              <img
                alt="Weather icon"
                src={forecast.current.condition.icon}
                className="h-60 md:block hidden"
              />
            </div>
          </div>
          <div className="  mt-12 p-6 rounded-3xl bg-[#ebecf0]">
            <p className="text-xl font-bold text-gray-500">TODAY'S FORECAST</p>
            {forecast.forecast.forecastday.length > 0 ? (
              <>
                <div className="flex items-center lg:space-x-10 sm:space-y-0 space-y-0 space-x-0  flex-wrap sm:flex-nowrap md:space-x-4 sm:space-x-2 justify-center mt-8">
                  <div className="todayForecast">
                    <p className="todayForecastTime">6:00</p>
                    <img
                      alt="Weather Icon"
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

                  <hr className="w-1 h-36  border border-l-gray-300 hidden md:block" />
                  <div className="todayForecast">
                    <p className="todayForecastTime">9:00</p>
                    <img
                      alt="Weather Icon"
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
                  <hr className="w-1 h-36  border border-l-gray-300 hidden md:block" />

                  <div className="todayForecast">
                    <p className="todayForecastTime">12:00</p>
                    <img
                      alt="Weather Icon"
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
                  <hr className="w-1 h-36  border border-l-gray-300 hidden md:block" />

                  <div className="todayForecast">
                    <p className="todayForecastTime">15:00</p>
                    <img
                      alt="Weather Icon"
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
                  <hr className="w-1 h-36  border border-l-gray-300 hidden md:block" />
                  <div className="todayForecast">
                    <p className="todayForecastTime">18:00</p>
                    <img
                      alt="Weather Icon"
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
                  <hr className="w-1 h-36  border border-l-gray-300 hidden md:block" />
                  <div className="todayForecast">
                    <p className="todayForecastTime">21:00</p>
                    <img
                      alt="Weather Icon"
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
              </>
            ) : (
              <>
                <div className="flex items-center lg:space-x-10 sm:space-y-0 space-y-3 space-x-0  flex-wrap sm:flex-nowrap md:space-x-4 sm:space-x-2 justify-center mt-8">
                  <div className="todayForecast">
                    <p className="todayForecastTime">6:00 AM</p>
                    {<Spinner />}
                  </div>

                  <hr className="w-1 h-36  border border-l-gray-300" />
                  <div className="todayForecast">
                    <p className="todayForecastTime">9:00 AM</p>
                    {<Spinner />}
                  </div>
                  <hr className="w-1 h-36   border border-l-gray-300" />

                  <div className="todayForecast">
                    <p className="todayForecastTime">12:00 PM</p>
                    {<Spinner />}{" "}
                  </div>
                  <hr className="w-1 h-36  border border-l-gray-300" />

                  <div className="todayForecast">
                    <p className="todayForecastTime">3:00 PM</p>
                    {<Spinner />}{" "}
                  </div>
                  <hr className="w-1 h-36  border border-l-gray-300" />

                  <div className="todayForecast">
                    <p className="todayForecastTime">6:00 PM</p>
                    {<Spinner />}{" "}
                  </div>
                  <hr className="w-1 h-36 border border-l-gray-300" />

                  <div className="todayForecast">
                    <p className="todayForecastTime">9:00 PM</p>
                    {<Spinner />}{" "}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" mt-12 p-6 rounded-3xl bg-[#ebecf0]">
            <p className="text-xl font-bold text-gray-500">AIR CONDITIONS</p>
            <div className="flex ">
              <div className="mt-8 flex flex-col space-y-4 md:space-y-12 flex-1">
                <div className="flex items-center space-x-2">
                  <FaTemperatureHalf className="text-2xl text-gray-600" />
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-gray-600">Real Feel</p>
                    <p className="text-lg md:text-5xl font-bold text-gray-700">
                      {Math.round(forecast.current.temp_c)}°
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <WiHumidity className="text-2xl text-gray-600" />
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-gray-600">Humidity</p>
                    <p className="text-lg md:text-5xl font-bold text-gray-700">
                      {Math.round(forecast.current.humidity)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col space-y-4 md:space-y-12  flex-1">
                <div className="flex items-center space-x-2">
                  <FiWind className="text-2xl text-gray-600" />
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-gray-600">Wind</p>
                    <p className="text-lg md:text-5xl font-bold text-gray-700">
                      {Math.round(forecast.current.wind_kph)} km/h
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FaSun className="text-2xl text-gray-600" />
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-gray-600">UV Index</p>
                    <p className="text-lg md:text-5xl font-bold text-gray-700">
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
                    <div className="flex items-center space-x-8 lg">
                      <div style={{ flex: 1 }}>
                        <p className="text-lg font-bold text-gray-500">
                          {splitter(day.date)}
                        </p>
                      </div>
                      <div
                        className="flex flex-col md:flex-row items-center space-x-2"
                        style={{ flex: 4 }}
                      >
                        <img src={day.day.condition.icon} alt="Weather Icon" />
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
    </div>
  );
}

export default CityDetail;
