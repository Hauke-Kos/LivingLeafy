<template>
    <div class="flex flex-col"> 
        <label class="text-2xl font-mono">Radius</label>
        <input class="rounded-full font-mono placeholder-nice-green-3" @input="saveRadius" type="number" min="100" max="10000" v-model="radius" placeholder="Enter a radius">
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
