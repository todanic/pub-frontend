<template>
	<v-carousel dark class="carousel-block" fade cycle light height="500" hide-delimiter-background :show-arrows="false">
		<v-carousel-item src="../assets/images/splash2.jpg">
		</v-carousel-item>
		<v-carousel-item src="../assets/images/splash.jpg">
		</v-carousel-item>
		<v-carousel-item src="../assets/images/splash3.jpg">
		</v-carousel-item>
	</v-carousel>
</template>
<script>

export default {
	name: 'SplashComponent',
	data()  {
		return {
		
		}
	},
}
</script>