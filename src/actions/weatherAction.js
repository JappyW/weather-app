import {
  REQUEST_WEATHER_DATA,
  RECEIVE_WEATHER_DATA,
  RECEIVE_CHANGE_TEMP_SCALE,
  REQUEST_CHANGE_TEMP_SCALE,
} from "../constants/actionTypes";



export const requestWeather = payload => ({
  type: REQUEST_WEATHER_DATA,
  payload
});
export const receiveWeather = payload => ({
  type: RECEIVE_WEATHER_DATA,
  payload
});

export const requestChangeTempScale = payload => ({
  type: REQUEST_CHANGE_TEMP_SCALE,
  payload
});

export const receiveChangeTempScale = payload => ({
  type: RECEIVE_CHANGE_TEMP_SCALE,
  payload
})
