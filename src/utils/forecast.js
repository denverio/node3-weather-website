const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=dcb7b20c38f9635bfcf75fc1840b4759&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  //=//37.8267,-122.4233--lat,long

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body.current);
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out." +
          "It feels like " +
          body.current.feelslike +
          " degrees out. " +
          "It feels like " +
          body.current.feelslike +
          " degrees out." +
          "The humidity is " +
          body.current.humidity +
          " ."
      );
    }
  });
};

module.exports = forecast;
