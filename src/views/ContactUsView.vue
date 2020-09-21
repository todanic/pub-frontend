<template>
	<v-container>
		<contact-us-component :dark="false"></contact-us-component>
	</v-container>
</template>
<script>
import ContactUsComponent from  '../components/ContactUsComponent.vue';

export default {
	name: 'ContactUsView',
	components: {
		ContactUsComponent
	}
}
</script>