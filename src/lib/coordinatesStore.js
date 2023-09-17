/**
 * This store contains the coordinates of the street given by user input after geocoding these street
 */
import { reactive } from 'vue'

export const coordinatesStore = reactive ({
        lat: 0,
        lon: 0,
});