import "./App.css";
import React from "react";
import CurrentLocationWeather from "./components/CurrentLocationWeather";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import CityDetail from "./components/CityDetail";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="flex">
        <SideBar />
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
