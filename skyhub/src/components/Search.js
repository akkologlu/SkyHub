import React, { useState, useEffect } from "react";
import { getForecastByCityName } from "../api/api";
import { FaTemperatureHalf, FaSun } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { autoComplete } from "../api/api";
import barcelona from "../assets/cities/barcelona.jpg";
import berlin from "../assets/cities/berlin.jpg";
import budapest from "../assets/cities/budapest.jpg";
import bucharest from "../assets/cities/bucharest.jpg";
import dublin from "../assets/cities/dublin.jpeg";
import hamburg from "../assets/cities/hamburg.jpg";
import london from "../assets/cities/london.jpg";
import madrid from "../assets/cities/madrid.jpg";
import milan from "../assets/cities/milan.jpg";
import munich from "../assets/cities/munich.jpg";
import newDelhi from "../assets/cities/newdelhi.jpg";
import newYork from "../assets/cities/newyorkcity.jpg";
import paris from "../assets/cities/paris.jpeg";
import prague from "../assets/cities/prague.jpg";
import rome from "../assets/cities/rome.jpg";
import sofia from "../assets/cities/sofia.jpg";
import tokyo from "../assets/cities/tokyo.jpg";
import vienna from "../assets/cities/vienna.jpg";
import warsaw from "../assets/cities/warsaw.jpg";
import beijing from "../assets/cities/beijing.jpg";
import { IoArrowBackOutline } from "react-icons/io5";

function Search() {
  const [cityName, setCityName] = useState("");
  const [forecast, setForecast] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (cityName !== "") {
      autoComplete(cityName).then((data) => {
        setSuggestions(data);
      });
    } else {
      setSuggestions([]);
    }
  }, [cityName]);

  const handleSuggestionClick = (suggestion) => {
    getForecastByCityName(suggestion.name).then((data) => {
      setForecast(data);
      setFetched(true);
    });
    setSuggestions([]);
    setCityName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getForecastByCityName(cityName).then((data) => {
      setForecast(data);
      setFetched(true);
      setSuggestions([]);
      setCityName("");
    });
  };
  const splitter = (str) => {
    const arr = str.split("-");
    return arr[2] + "/" + arr[1];
  };

  const cities = [
    {
      name: "London",
      desc: "The historic capital of England, known for its iconic landmarks and rich cultural heritage.",
      img: london,
    },
    {
      name: "Paris",
      desc: "The romantic city of France, famous for its art, fashion, and the Eiffel Tower.",
      img: paris,
    },
    {
      name: "Berlin",
      desc: "The vibrant capital of Germany, recognized for its history, art scene, and modern architecture.",
      img: berlin,
    },
    {
      name: "Madrid",
      desc: "The lively capital of Spain, renowned for its energetic atmosphere, art museums, and cuisine.",
      img: madrid,
    },
    {
      name: "Rome",
      desc: "The ancient city of Italy, filled with historical ruins, art, and delicious Italian food.",
      img: rome,
    },
    {
      name: "Bucharest",
      desc: "The capital of Romania, known for its mixture of architectural styles and dynamic urban life.",
      img: bucharest,
    },
    {
      name: "Vienna",
      desc: "The elegant capital of Austria, celebrated for its classical music heritage and stunning architecture.",
      img: vienna,
    },
    {
      name: "Hamburg",
      desc: "A major port city in Germany, offering a blend of maritime culture, modernity, and history.",
      img: hamburg,
    },
    {
      name: "Budapest",
      desc: "The picturesque capital of Hungary, famous for its thermal baths, castles, and Danube River views.",
      img: budapest,
    },
    {
      name: "Warsaw",
      desc: "The capital of Poland, characterized by a mix of reconstructed historic architecture and modernity.",
      img: warsaw,
    },
    {
      name: "Barcelona",
      desc: "A coastal city in Spain, known for its unique architecture, beaches, and lively street life.",
      img: barcelona,
    },
    {
      name: "Munich",
      desc: "A Bavarian city in Germany, celebrated for its Oktoberfest, art galleries, and cultural scene.",
      img: munich,
    },
    {
      name: "Milan",
      desc: "The fashion capital of Italy, recognized for its design, shopping, and historic art collections.",
      img: milan,
    },
    {
      name: "Prague",
      desc: "The Czech capital, famed for its well-preserved medieval architecture and charming ambiance.",
      img: prague,
    },
    {
      name: "Sofia",
      desc: "The capital of Bulgaria, offering a mix of history, Orthodox churches, and modern development.",
      img: sofia,
    },
    {
      name: "New York City",
      desc: "A bustling metropolis in the USA, known as the 'Big Apple,' famous for its diversity and landmarks.",
      img: newYork,
    },
    {
      name: "New Delhi",
      desc: "The capital of India, a blend of ancient history, bustling markets, and cultural diversity.",
      img: newDelhi,
    },
    {
      name: "Tokyo",
      desc: "The vibrant capital of Japan, a blend of traditional culture and modern technology.",
      img: tokyo,
    },
    {
      name: "Beijing",
      desc: "The ancient capital of China, home to historic sites like the Great Wall and the Forbidden City.",
      img: beijing,
    },
    {
      name: "Dublin",
      desc: "The lively capital of Ireland, famous for its pubs, literary history, and friendly atmosphere.",
      img: dublin,
    },
  ];

  return (
    <div className="ml-6">
      <form onSubmit={handleSubmit} className="mt-6">
        <input
          className="border border-gray-300 rounded-3xl p-4 pl-8 text-2xl w-96 focus:outline-none"
          type="text"
          placeholder="Search"
          name="search"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </form>
      <ul className="autocomplete-list pt-2 pl-4 text-xl ">
        {suggestions.map((suggestion, index) => (
          <li
            className="cursor-pointer w-fit hover:bg-gray-200 rounded-3xl p-2 px-4"
            key={index}
            onClick={() => {
              handleSuggestionClick(suggestion);
            }}
          >
            {suggestion.name}
          </li>
        ))}
      </ul>
      {fetched && (
        <div>
          {/* ... (your existing forecast view JSX) */}
          <button
            className="bg-gray-300 px-4 py-2 rounded-md mt-4  hover:bg-gray-400"
            onClick={() => setFetched(false)} // Show popular cities
          >
            <IoArrowBackOutline />
          </button>
        </div>
      )}

      {fetched ? (
        <div className="flex xl:flex-nowrap flex-wrap">
          <div>
            <div className="flex justify-between mt-4 p-12">
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
        <>
          <div className="w-[80vw]  flex flex-wrap">
            <div className="flex flex-col space-y-4">
              <p className="text-2xl font-bold text-gray-600 my-4">
                POPULAR CITIES
              </p>
              <div className="flex flex-wrap">
                {cities.map((city, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col space-y-4 w-72  rounded-3xl bg-[#ebecf0] p-4 mr-4 mb-4 cursor-pointer hover:bg-gray-300 "
                      onClick={() => {
                        getForecastByCityName(city.name).then((data) => {
                          setForecast(data);
                          setFetched(true);
                        });
                      }}
                    >
                      <img
                        src={city.img}
                        alt="City Image"
                        className="rounded-3xl w-64 h-36"
                      />
                      <p className="text-xl font-bold text-gray-800">
                        {city.name}
                      </p>
                      <p className="text-lg font-bold text-gray-500">
                        {city.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
