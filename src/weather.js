import React from 'react';
import Moment from 'moment';

class WeatherObj {
    // Readability can suck it
    constructor(hi, lo, type, dateTime) {
        this.high = (hi === undefined) ? 0 : hi;
        this.low = (lo === undefined) ? 0 : lo;
        this.typeOfWeather = (type === undefined) ? 0 : type;
        this.date = (dateTime === undefined) ? 0 : dateTime;  
    }   
}

/** 
 * General Weather Notes
 * 
 * For the first iteration of this, weather is going to be generated randomly.
 * We support 6 different kinds of weather: Cloudy, Partially Cloudy, Lightning, Snow, & Sunny.
 * So following that ordering, we will generate a number between 1 & 6 and that will determine
 * the weather type.
 * 
 * The high and low will then be two randomly generated numbers between -10 & 110, probably
 * going to result in some hilarous combinations but this is just for the first iteration 
 * of this project.
*/
class Weather extends React.Component {
    constructor() {
        super();
        // We don't really need to keep the current day stateful at all
        this.currentDay = Moment();
        this.state = {
            weatherData: [],
        }
    }

    updateWeatherData() {
        let currentWeather = this.state.weatherData;
        currentWeather.push(this.generateFiveDaysOfWeather());

        this.setState({
            weatherData: currentWeather
        })
    }

    // Generate 5 days of weather and add it to the weather data.
    generateFiveDaysOfWeather() {
        for (let i = 0; i < 5; i++) {
            console.log(this.getRandomIntInclusive(1, 6));
        }
    }

    // From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        // The maximum is inclusive and the minimum is inclusive
        return Math.floor(Math.random() * (max - min + 1)) + min;  
      }

    render() {
        return (
            <div className="Weather">
            </div>
        );
    }
}

export default Weather;