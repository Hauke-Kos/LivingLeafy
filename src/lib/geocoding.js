const axios = require('axios');

const ENDPOINT = 'https://nominatim.openstreetmap.org/';
const FORMAT = 'jsonv2';

let coordinatesLatLon = {
    lat: 0,
    lon: 0
}

module.exports = {

    async geocoding(streetName) {

        const coordinates = await axios.get(ENDPOINT, {
            params: {
                format: FORMAT,
                street: streetName,
                city: 'Hamburg',
                country: 'Germany'
            }
        });
        coordinatesLatLon.lat = coordinates.data[0].lat;
        coordinatesLatLon.lon = coordinates.data[0].lon;
        return coordinatesLatLon;
    },
}