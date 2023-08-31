<template>
    <div class="flex flex-col"> 
        <label class="text-2xl text-teal-400 font-mono">Radius</label>
        <input class="rounded-full" @input="saveRadius" type="text" v-model="radius" placeholder="Enter a radius">
    </div>
</template>

<script>

import { addressAndRadiusStore } from '../lib/addressAndRadiusStore.js';

export default ({
    name: 'RadiusInputField',
    components: {},
    data() {
        return {
            addressAndRadiusStore
        }
    },
    methods: {
        saveRadius() {
            addressAndRadiusStore.radius = this.radius;
        }
    }
})
</script>
