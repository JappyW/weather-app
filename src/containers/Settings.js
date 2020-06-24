import { connect } from 'react-redux';
import { requestChangeTempScale, requestWeather } from '../actions/weatherAction';
import SettingsComponent from '../components/Settings/Settings.jsx';

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestChangeTempScale: params => dispatch(requestChangeTempScale(params)),
    requestWeather: params => dispatch(requestWeather(params)),
  };
}

const Settings = connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);
export default Settings;
