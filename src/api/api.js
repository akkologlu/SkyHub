import axios from "axios";

const getWeatherByCurrentLocation = async (lat, long) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}&aqi=no`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getWeatherByCurrentLocation:", error);
    throw error;
  }
};

const getForecastByCurrentLocation = async (lat, long) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}&days=7&aqi=no&alerts=no`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getForecastByCurrentLocation:", error);
    throw error;
  }
};

const getForecastByCityName = async (CityName) => {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${CityName}&days=7&aqi=no&alerts=no`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getForecastByCityName:", error);
    throw error;
  }
};
const autoComplete = async (CityName) => {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${CityName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getForecastByCityName:", error);
    throw error;
  }
};

export {
  getWeatherByCurrentLocation,
  getForecastByCurrentLocation,
  getForecastByCityName,
  autoComplete,
};
