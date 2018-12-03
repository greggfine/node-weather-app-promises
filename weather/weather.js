// make a call to forecast api and print out the temperature based on the given lat/long
// https://api.darksky.net/forecast/a39d91cf22562ec7f677bb82472fcd20/42.121185,-72.749082

const request = require('request');

const FORECAST_KEY = "a39d91cf22562ec7f677bb82472fcd20";

// const getWeather = (lat, lng, callback) => {
const getWeather = (obj, callback) => {
    request(
      {
        url: `https://api.darksky.net/forecast/${FORECAST_KEY}/${obj.lat},${obj.lng}`,
        // url: `https://api.darksky.net/forecast/${FORECAST_KEY}/${lat},${lng}`,
        json: true
      },
      (error, response, body) => {
          if (error) {
            callback("Unable to connect to server");
        } else if (response.statusCode === 400) {
          callback("The given location (or time) is invalid.");
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            }
            )
        }
    })}

module.exports.getWeather = getWeather;
