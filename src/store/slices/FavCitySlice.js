import { createSlice } from "@reduxjs/toolkit";

const favCitySlice = createSlice({
  name: "favCity",
  initialState: {
    favCity: [],
  },
  reducers: {
    addFavCity: (state, action) => {
      const cityExist = state.favCity.find(
        (city) => city.location.name === action.payload.location.name
      );
      if (cityExist) {
        alert("City already added to favorites");
        return;
      } else {
        alert("City added to favorites");
        state.favCity.push(action.payload);
      }
    },
    removeFavCity: (state, action) => {
      state.favCity = state.favCity.filter(
        (city) => city.location.name !== action.payload.location.name
      );
    },
  },
});

export const { addFavCity, removeFavCity } = favCitySlice.actions;
export const favCityReducer = favCitySlice.reducer;
