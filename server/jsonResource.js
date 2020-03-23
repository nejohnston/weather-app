var fetch = require('node-fetch');

module.exports = (app) => {
  const LOCATIONS_URL = `http://localhost:${app.get('JSON_PORT')}/locations`;
  return {
    getLocations() {
      return fetch(LOCATIONS_URL).then((r) => r.json());
    },
    getWeatherURL(location) {
      return fetch(`${LOCATIONS_URL}/${location}/weatherNumber`).then((r) =>
        r.json()
      );
    }
  };
};
