import React, { Component } from "react";
import "./weatherCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faPercent } from "@fortawesome/free-solid-svg-icons";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const date = new Date(Date.parse(this.props.datetime));
    return (
      <div className="card col-md-2 m-3 p-0">
        <div className="blue-gradient p-3 text-white">
          <span className="characteristic-1">
            {this.props.scale == "°C"
              ? this.props.temp.toFixed(0) + "°C"
              : (this.props.temp * 1.8 + 32).toFixed(0) + "°F"}
          </span>
          <img
            className="card-img-top img-fluid"
            src={`https://www.weatherbit.io/static/img/icons/${this.props.weather.icon}.png`}
            alt="Card image cap"
            title={"Probability of Precipitation: " + this.props.rh}
          />
          <p className="characteristic-2">
            {this.props.rh} <FontAwesomeIcon icon={faTint} />
          </p>
          <p className="description text-left mb-0">
            {this.props.weather.description}
          </p>
        </div>
        <div className="card-body text-center p-2">
          <h6 className="card-title">{days[date.getDay()]}</h6>
          <p className="card-text">
            {date.getDate()} {monthNames[date.getMonth()]}
          </p>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
