import React, { useState } from "react";
import { useSelector } from "react-redux";
import CityDetail from "./CityDetail";
import { IoArrowBackOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeFavCity } from "../store/slices/FavCitySlice";
function Favorites() {
  const favorites = useSelector((state) => state.favCity);
  const [selectedCity, setSelectedCity] = useState(null);
  const dispatch = useDispatch();
  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="w-[80vw] h-fit flex flex-wrap">
      {selectedCity ? (
        <div>
          <div className="ml-8 mt-4">
            <button
              onClick={() => setSelectedCity(null)}
              className="bg-gray-300 px-4 py-2 rounded-md mt-4  hover:bg-gray-400"
            >
              <IoArrowBackOutline />
            </button>
          </div>
          <div className="ml-8">
            <CityDetail forecast={selectedCity} />
          </div>
        </div>
      ) : (
        <div className="w-[80vw] flex flex-wrap">
          {favorites.favCity.length > 0 ? (
            favorites.favCity.map((city, index) => (
              <div
                key={index}
                className="w-96 h-fit ml-8 cursor-pointer relative"
              >
                <div
                  onClick={() => handleCityClick(city)}
                  className="flex pr-6 text-gray-500 bg-[#ebecf0] justify-between items-center mt-8 rounded-3xl px-4 py-2  hover:bg-gray-300"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      className="w-20 h-20"
                      src={city.current.condition.icon}
                      alt="weather icon"
                    />
                    <h1 className="text-xl font-bold text-gray-800">
                      {city.location.name}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-500">
                      {Math.round(city.current.temp_c)}°
                    </h1>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFavCity(city))}
                  className=" absolute top-9 right-2"
                >
                  <TiDelete className="text-2xl text-gray-500" />
                </button>
              </div>
            ))
          ) : (
            <div className="flex justify-center mt-12 w-[80vw]">
              <h1 className="text-3xl font-bold text-gray-5>00">
                No Favorites
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Favorites;
