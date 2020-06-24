import { all, fork } from 'redux-saga/effects';
import {
  watcherGetWeather, watcherChangeTempScale
} from "./weatherSaga"

export default function* rootSaga() {
  yield all([
    fork(watcherGetWeather),
    fork(watcherChangeTempScale),
  ]);
}
