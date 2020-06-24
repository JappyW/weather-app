import React, { Component } from "react";
import "./settings.scss";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: this.props.weather.scale };
  }

  requestChangeTempScale = (event) => {
    if (this.state.scale !== event.target.value) {
      this.setState({ scale: event.target.value });
      this.props.requestChangeTempScale(event.target.value);
    }
  };

  resetCache = () => {
    const activeBtns = document.getElementsByClassName("btn");
    activeBtns[1].classList.remove("active");
    activeBtns[0].classList.add("active");
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      this.props.requestWeather(this.state.location);
      this.props.requestChangeTempScale("°C");
    });
  }

  render() {
    return (
      <div className="container-fluid main-page text-center mt-5">
        <h5 className="text-center mb-2">Units</h5>
        <div className="btn-group btn-group-toggle mb-4" data-toggle="buttons">
          <label className="btn btn-rounded-left active">
            <input
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              defaultChecked
              value="°C"
              onClick={(e) => this.requestChangeTempScale(e)}
            />
            °C
          </label>
          <label className="btn btn-rounded-right">
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              value="°F"
              onClick={(e) => this.requestChangeTempScale(e)}
            />
            °F
          </label>
        </div>
        <div>
          <h5 className="text-center mb-2">System Settings</h5>
          <button className="btn btn-reset bold" onClick={this.resetCache}>Reset Cache</button>
        </div>
      </div>
    );
  }
}

export default Settings;
