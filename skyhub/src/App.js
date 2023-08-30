import "./App.css";
import React, { useState, useEffect } from "react";
import CurrentLocationWeather from "./components/CurrentLocationWeather";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<CurrentLocationWeather />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
