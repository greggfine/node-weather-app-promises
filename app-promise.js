const yargs = require("yargs");
const axios = require('axios');
const KEY = "yqvOYHnCqIkJg5osqAtAAydsDBTPCjiM";

const FORECAST_KEY = "a39d91cf22562ec7f677bb82472fcd20";

const argv = yargs
    .options({
        a: {
            demand: true,pwd
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`;

// axios.get returns a Promise
axios
  .get(geocodeURL)
  .then(response => {
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherURL = `https://api.darksky.net/forecast/${FORECAST_KEY}/${lat},${lng}`;
    return axios.get(weatherURL);
  })
  .then((response) => console.log(response.data.currently.temperature))
  .catch(error => console.log(error));