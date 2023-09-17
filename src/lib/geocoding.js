const axios = require('axios');

const ENDPOINT = 'https://nominatim.openstreetmap.org/';
const FORMAT = 'jsonv2';

// Latitude and longitude coordinates object
let coordinatesLatLon = {
    lat: 0,
    lon: 0
}

module.exports = {

    /**
     * Call openstreemap API to get the coordinates of the street
     * @param {String} streetName 
     * @returns Object
     */
    async geocoding(streetName) {

        const coordinates = await axios.get(ENDPOINT, {
            params: {
                format: FORMAT,
                street: streetName,
                city: 'Hamburg',
                country: 'Germany'
            }
        });
        // Check for correct cooridnates, reloads when they aren't valid
        if(this.coordinates === undefined){
            alert("Error, please enter a valid adress!");
            window.location.reload();
        }
        coordinatesLatLon.lat = coordinates.data[0].lat;
        coordinatesLatLon.lon = coordinates.data[0].lon;
        return coordinatesLatLon;
    },
}