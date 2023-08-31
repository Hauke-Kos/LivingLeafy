<template>
    <div class="max-h-screen flex flex-col" id="address-input">
        <div class="flex flex-col"> 
            <label class="text-2xl text-teal-400 font-mono">Adress</label>
            <input class="rounded-full" type="text" v-model="street" placeholder="Enter a street">
        </div>
        <div class="flex flex-col"> 
            <label class="text-2xl text-teal-400 font-mono">Radius</label>
            <input class="rounded-full" type="text" v-model="radius" placeholder="Enter a radius">
        </div>
        <div class="justify-content-center"> 
            <button class="rounded-full text-2xl bg-teal-400 font-mono" @click="geocode">Geocode</button>
        </div>
        <div> 
            <label class="rounded-full text-2xl text-teal-400 font-mono">{{coordinatesStore.relativeArea}}% Park-Area</label>
        </div>
    </div>
</template>

<script>

import { geocoding } from '../lib/geocoding.js' 
import { coordinatesStore } from '../lib/coordinatesStore.js';

export default {
    name: 'TheInputAdressField',
    components: {},
    data() {
        return {
            coordinatesStore
        }
    },
    methods: {
        async geocode() {
            this.coordinates = await geocoding(this.street);
            coordinatesStore.lat = this.coordinates.lat;
            coordinatesStore.lon = this.coordinates.lon;
            coordinatesStore.radius = this.radius;
        }
    }
}
</script>