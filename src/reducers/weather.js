import { RECEIVE_WEATHER_DATA, RECEIVE_CHANGE_TEMP_SCALE } from "../constants/actionTypes";

const initialState = {
  data: null,
  city: null,
  cc: null,
  scale: "°C"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER_DATA:
      return {
        ...state,
        data: action.payload.data,
        city: action.payload.city_name,
        cc: action.payload.country_code
      };
    case RECEIVE_CHANGE_TEMP_SCALE:
      return {
        ...state,
        scale: action.payload,
      };
    default:
      return state;
  }
};
