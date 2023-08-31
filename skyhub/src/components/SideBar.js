import React from "react";
import { FaCloudSunRain } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import logo from "../assets/logo1.png";
import { NavLink } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
function SideBar() {
  return (
    <div className="ml-4 w-28 rounded-3xl space-y-8 bg-[#ebecf0] sidebar">
      <div className="flex justify-center mt-8">
        <img src={logo} className="w-20 mb-12" alt="Logo" />
      </div>
      <NavLink to={"/"} className="flex flex-col items-center text-gray-500">
        <FaCloudSunRain className="text-3xl icon" />
        <p className="font-bold">Weather</p>
      </NavLink>
      <NavLink
        to={"/search"}
        className="flex flex-col items-center text-gray-500"
      >
        <IoSearchCircleSharp className="text-3xl" />
        <p className="font-bold ">Search</p>
      </NavLink>
      <NavLink
        to={"/favorites"}
        className="flex flex-col items-center text-gray-500"
      >
        <MdFavorite className="text-3xl" />
        <p className="font-bold ">Favorites</p>
      </NavLink>
    </div>
  );
}

export default SideBar;
