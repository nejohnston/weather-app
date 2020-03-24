var fetch = require('node-fetch');

module.exports = (app) => {
  const WEATHER_URL = `http://localhost:${app.get('JSON_PORT')}/config`;
  return {
    getLocations() {
      return fetch(WEATHER_URL).then((r) => r.json());
    },
    getWeatherURL(location) {
      return fetch(`${WEATHER_URL}/${location}/weatherNumber`).then((r) =>
        r.json()
      );
    }
  };
};
