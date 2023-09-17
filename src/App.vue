<template>
	<div class="min-h-screen bg-white text-nice-green-3 font-bold">
		<div class="min-h-screen grid grid-cols-10 grid-rows-10 gap-2">
				<!-- Title -->
				<TheHeader class="col-span-8 col-start-2 self-center"/>
			<div class="col-span-8 row-span-5 col-start-2 row-start-2">
				<!-- Set map with park areas -->
				<TheMap/>
			</div>
			<div class="col-span-4 col-start-2 row-start-7">
				<!-- Addres User Input -->
				<AddressInputField/>
			</div>
			<div class="col-span-4 col-start-6 row-start-7">
				<!-- Radius User Input -->
				<RadiusInputField/>
			</div>
			<div class="col-span-4 col-start-4 row-start-8 self-center">
				<!-- Show raltive park area after calcualtions -->
				<ParkAreaLabel/>
			</div>
			<div class="col-span-2 col-start-5 row-start-9 self-center">
				<!-- Start geocoding and calculations -->
				<GeocodeButton/>
			</div>
			<div class="col-span-8 col-start-2 row-start-10 self-end">
				<!-- Source -->
				<TheFooter/>
			</div>
		</div>
	</div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import TheMap from './components/TheMap.vue';
import AddressInputField from './components/AddressInputField.vue';
import RadiusInputField from './components/RadiusInputField.vue';
import ParkAreaLabel from './components/ParkAreaLabel.vue';
import GeocodeButton from './components/GeocodeButton.vue';
import TheFooter from './components/TheFooter.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheMap,
		AddressInputField,
		RadiusInputField,
		ParkAreaLabel,
		GeocodeButton,
		TheFooter
	}
}
</script>
