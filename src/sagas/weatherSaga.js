import { call, put, takeLatest } from "redux-saga/effects";
import {
  REQUEST_WEATHER_DATA,
  REQUEST_CHANGE_TEMP_SCALE
} from "../constants/actionTypes";

import { getWeather } from "../api/weatherApi";
import { receiveWeather, receiveChangeTempScale } from "../actions/weatherAction";

function* workerGetWeather(action) {
  try {
    const response = yield call(getWeather, action.payload);
    yield put(receiveWeather(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetWeather() {
  yield takeLatest(REQUEST_WEATHER_DATA, workerGetWeather);
}

function* workerChangeTempScale(action) {
  try {
    yield put(receiveChangeTempScale(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherChangeTempScale() {
  yield takeLatest(REQUEST_CHANGE_TEMP_SCALE, workerChangeTempScale);
}
