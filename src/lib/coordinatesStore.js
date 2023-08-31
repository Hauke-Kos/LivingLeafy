import { reactive } from 'vue'

export const coordinatesStore = reactive ({
        street: '',
        lat: 0,
        lon: 0,
        radius: 0,
        relativeArea: 0
});