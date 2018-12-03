const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');
const yargs = require('yargs');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(results.Location);
//         weather.getWeather({ lat: results.Latitude, lng: results.Longitude }, (errorMessage, weatherResult) => {
//             if (errorMessage) {
//                 console.log(errorMessage)
//             } else {
//                 console.log(
//                     `The apparent temperature is ${weatherResult.apparentTemperature} 
// The actual temperature is ${weatherResult.temperature}`
//                 )
//             }
//         });
//     }
// });


geocode.gimme();
