<template>
    <h1 class="text-center">
        <label class="rounded-full text-4xl font-mono">{{parkAreaStore.relativeArea}}% Park-Area</label>
    </h1>
</template>

<script>

import { parkAreaStore } from '../lib/parkAreaStore.js';

export default ({
    name: 'ParkAreaLabel',
    components: {},
    data() {
        return {
            parkAreaStore
        }
    }
})
</script>
