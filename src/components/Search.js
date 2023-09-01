import React, { useState, useEffect } from "react";
import { getForecastByCityName } from "../api/api";
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
import CityDetail from "./CityDetail";
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
    <div className="ml-0 md:ml-6 flex md:block items-center flex-col">
      <form onSubmit={handleSubmit} className="mt-6">
        <input
          className="border border-gray-300 rounded-3xl p-4 pl-8 text-2xl md:w-96  w-64 focus:outline-none"
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

      {fetched ? (
        <>
          <div className="w-full">
            <button
              onClick={() => setFetched(false)}
              className="bg-gray-300 px-4 py-2 rounded-md mt-4  hover:bg-gray-400"
            >
              <IoArrowBackOutline />
            </button>
          </div>
          <CityDetail forecast={forecast} />
        </>
      ) : (
        <>
          <div className="w-[80vw] flex flex-wrap justify-center">
            <div className="flex flex-col space-y-4">
              <p className="text-2xl font-bold text-gray-600 my-4 text-center md:text-start">
                POPULAR CITIES
              </p>
              <div className="flex flex-wrap md:justify-start justify-center">
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
                        alt="City "
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
