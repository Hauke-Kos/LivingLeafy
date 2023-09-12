<template>
    <div class="flex flex-col"> 
        <label class="text-2xl font-mono">Address</label>
        <input class="rounded-full font-mono placeholder-nice-green-3" @input="saveStreet"  type="text" v-model="street" placeholder="Enter a street">
    </div>
</template>

<script>

import { addressAndRadiusStore } from '../lib/addressAndRadiusStore.js';

export default ({
    name: 'AdressInputField',
    components: {},
    data() {
        return {
            addressAndRadiusStore
        }
    },
    methods: {
        saveStreet() {
            addressAndRadiusStore.street = this.street;
        }
    }
})
</script>
