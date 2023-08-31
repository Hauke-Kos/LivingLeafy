<template>
	<div class="min-h-screen flex flex-col bg-gradient-to-r from-emerald-900 to-cyan-800">
		<TheHeader class="basis-1/6"/>
		<TheMap style="height:500px"/>
		<TheInputAddressField class="basis-2/6"/>
		<TheFooter class="basis-1/6"/>
	</div>
</template>
 
<script>

import TheMap from './components/TheMap.vue';
import TheInputAddressField from './components/TheInputAddressField.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
	name: 'App',
	components: {
		TheMap,
		TheInputAddressField,
		TheHeader,
		TheFooter
	}
}
</script>
