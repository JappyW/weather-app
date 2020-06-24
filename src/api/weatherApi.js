import axios from "axios";

export const getWeather = async (data) => {
  const response = await axios.get(`http://localhost:8080/weather?lat=${data.lat}&lng=${data.lng}`);
  console.log(response.data)
  return response.data;
};