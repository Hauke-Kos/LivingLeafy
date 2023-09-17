<template>
    <button class="w-full h-full rounded-full text-4xl text-white bg-nice-green-4 font-mono font-bold" @click="geocode">Geocode</button>
</template>

<script>

import { geocoding } from '../lib/geocoding.js' 
import { coordinatesStore } from '../lib/coordinatesStore.js';
import { addressAndRadiusStore } from '../lib/addressAndRadiusStore.js';

export default ({
    name: 'GeocodeButton',
    components: {},
    data() {
        return {
            coordinatesStore,
            addressAndRadiusStore
        }
    },
    methods: {
        async geocode() {
            // Check for a number for the input of the radius
            if (typeof(addressAndRadiusStore.radius) !== "number" ) {
                alert("Please enter a number as radius!");
                window.location.reload();
            }
            console.log(addressAndRadiusStore.radius);
            // Check for a number between 1 and 10000 as a number for the radius
            console.log(addressAndRadiusStore.radius < 1);
            console.log(addressAndRadiusStore.radius >= 10000);
            if (addressAndRadiusStore.radius < 1 || addressAndRadiusStore.radius >= 10000) {
                alert("Please enter a number between 1 and 10000 as meters for the radius!");
                window.location.reload();
            }
            this.coordinates = await geocoding(addressAndRadiusStore.street);
            coordinatesStore.lat = this.coordinates.lat;
            coordinatesStore.lon = this.coordinates.lon;
        }
    }
})
</script>
