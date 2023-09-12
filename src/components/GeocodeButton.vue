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
            this.coordinates = await geocoding(addressAndRadiusStore.street);
            coordinatesStore.lat = this.coordinates.lat;
            coordinatesStore.lon = this.coordinates.lon;
        }
    }
})
</script>
