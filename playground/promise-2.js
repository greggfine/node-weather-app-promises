const request = require('request');
const KEY = "yqvOYHnCqIkJg5osqAtAAydsDBTPCjiM";

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${address}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Google servers.');
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address.')
            } else if(response.statusCode === 200){
                resolve({
                    Latitude: body.results[0].locations[0].latLng.lat,
                    Longitude: body.results[0].locations[0].latLng.lng,
                    Location: body.results[0].providedLocation.location
                });
            } 
        })

    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => console.log(errorMessage));


