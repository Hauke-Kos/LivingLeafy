/**
 * This store contains the street and the radius given by user input
 */
import { reactive } from 'vue'

export const addressAndRadiusStore = reactive ({
        street: '',
        radius: 0,
});