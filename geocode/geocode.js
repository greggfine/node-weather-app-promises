const request = require("request");
const KEY = "yqvOYHnCqIkJg5osqAtAAydsDBTPCjiM";

// const geocodeAddress = (address, callback) => {
//     const encodedAddress = encodeURIComponent(address);

//     request(
//         {
//             url:
//                 `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
//             json: true
//         },
//         (error, response, body) => {
//             if (error) {
//                 callback("Unable to connect to servers");
//             } else if (body.info.statuscode !== 0) {
//                 callback("oops");
//             } else if (body.info.statuscode === 0) {
//                 callback(undefined, {
//                     Latitude:  body.results[0].locations[0].latLng.lat,
//                     Longitude:  body.results[0].locations[0].latLng.lng,
//                     Location:  body.results[0].providedLocation.location
//                 });
//             }
//         })
// }

// const geocodeAddress = new Promise((resolve, reject) => {
//     const encodedAddress = encodeURIComponent(10012);
//     request(
//         {
//             url:
//                 `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
//             json: true
//         },
//         (error, response, body) => {
//             resolve({
//                     Latitude:  body.results[0].locations[0].latLng.lat,
//                     Longitude:  body.results[0].locations[0].latLng.lng,
//                     Location:  body.results[0].providedLocation.location
//                 });
//             reject('bad');
//         }
//     )
// }).then((message) => {
//     console.log(message)
// }, (errorMessage) => {
//     console.log(errorMessage)
// });


const geocodeAddress = new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(10012);
    request(
        {
            url:
                `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
            json: true
        },
        (error, response, body) => {
            resolve({
                Latitude: body.results[0].locations[0].latLng.lat,
                Longitude: body.results[0].locations[0].latLng.lng,
                Location: body.results[0].providedLocation.location
            });
            reject('bad');
        }
    )
}).then((message) => {
    console.log(message)
}, (errorMessage) => {
    console.log(errorMessage)
});

var gimme = () => {
    return new Promise(() => {
        
    });
}

module.exports = {
   gimme
};