<template>
    <h1 class="text-center">
        <label class="rounded-full text-4xl text-teal-400 font-mono">{{coordinatesStore.relativeArea}}% Park-Area</label>
    </h1>
</template>

<script>

import { coordinatesStore } from '../lib/coordinatesStore.js';

export default ({
    name: 'ParkAreaLabel',
    components: {},
    data() {
        return {
            coordinatesStore
        }
    }
})
</script>
