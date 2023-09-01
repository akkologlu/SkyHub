import "./App.css";
import React, { useState } from "react";
import CurrentLocationWeather from "./components/CurrentLocationWeather";
import SideBar from "./components/SideBar";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import CityDetail from "./components/CityDetail";

function App() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="App flex justify-center">
      <div className="flex md:flex-row flex-col">
        <div>
          <div className="md:hidden text-right space-y-4">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="bg-gray-300  px-4 py-2 rounded-md mt-4  hover:bg-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {dropdown ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                )}
              </svg>
            </button>
            {dropdown && (
              <div className="flex text-left flex-col space-y-4 w-72  rounded-3xl bg-[#ebecf0] p-4 mr-4 mb-4 cursor-pointer hover:bg-gray-300 ">
                <Link to="/" className="text-xl font-bold text-gray-800">
                  Home
                </Link>
                <Link to="/search" className="text-xl font-bold text-gray-800">
                  Search
                </Link>
                <Link
                  to="/favorites"
                  className="text-xl font-bold text-gray-800"
                >
                  Favorites
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex ">
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<CurrentLocationWeather />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail" element={<CityDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
