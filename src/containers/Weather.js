import { connect } from 'react-redux';
import { requestWeather } from '../actions/weatherAction';
import WeatherComponent from '../components/Weather/Weather.jsx';

function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestWeather: params => dispatch(requestWeather(params)),
  };
}

const Weather = connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
export default Weather;
