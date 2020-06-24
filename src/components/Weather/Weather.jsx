import React, { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import Whirligig from "react-whirligig";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import "./weather.scss";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
      children: [],
    };
  }

  componentDidMount() {
    this.getGeoAndWeather();
  }

  getGeoAndWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      this.props.requestWeather(this.state.location);
    });
  };

  render() {
    let whirligig;
    const elements = isMobile ? 1 : 5;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();
    const override = css`
      display: block;
      margin: 0 auto;
    `;
    return (
      <div className="container-fluid main-page">
        {this.props.weather.city ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">
              Weather At{" "}
              <span className="bold">
                {this.props.weather.city}, {this.props.weather.cc}
              </span>
            </h1>
            <button
              className="btn btn-round my-4"
              onClick={this.getGeoAndWeather}
            >
              <FontAwesomeIcon icon={faSyncAlt} />
            </button>
          </div>
        ) : (
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={true}
          />
        )}
        {this.props.weather.data ? (
          <div className="container-fluid d-flex align-items-center">
            <button onClick={prev} className="chevron mr-4">
              <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </button>
            <Whirligig
              className="carousel"
              visibleSlides={elements}
              gutter="20px"
              animationDuration={500}
              ref={(_whirligigInstance) => {
                whirligig = _whirligigInstance;
              }}
            >
              {this.props.weather.data.map((item) => {
                const itemContent = {
                  ...item,
                  scale: this.props.weather.scale,
                };
                return <WeatherCard {...itemContent} />;
              })}
            </Whirligig>
            <button onClick={next} className="chevron ml-4">
              <FontAwesomeIcon icon={faChevronRight} size="2x" />
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
