<template>
	<div>
		<splash-component></splash-component>
		<v-container class="pt-5">
				<v-slide-group :center-active="true" class="home-view-shop-cards-slider-group" show-arrows="">
					<v-slide-item class="home-view-shop-cards-slider-group-item" v-for="(shop, index, key) in shops" :key="key">
						<restaurant-card-component :shop="shop"></restaurant-card-component>
					</v-slide-item>
				</v-slide-group>
		</v-container>
	</div>
</template>

<script>
import SplashComponent from  '../components/SplashComponent.vue';
import RestaurantCardComponent from  '../components/RestaurantCardComponent.vue';

export default {
	name: 'home-view',
	components: {
		SplashComponent,
		RestaurantCardComponent
	},
	data() {
		return {
		shops: [
			{
				image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
				shop_name: 'Shop 1',
				shop_address: 'adresa random',
				shop_description: 'ASUDHASIUDGHIADasd asd asd as asd asd as as as asdasdas asd asd as das ddasd asGIASGDIAU',
				shop_rating: 5,
			},
				{
				image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
				shop_name: 'Shop 2',
				shop_address: 'adresa random',
				shop_description: 'ASUDHASIUDGHIADasd asd asd as asd asd as as as asdasdas asd asd as das ddasd asGIASGDIAU',
				shop_rating: 5,
			},
				{
				image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
				shop_name: 'Shop 3',
				shop_address: 'adresa random',
				shop_description: 'ASUDHASIUDGHIADasd asd asd as asd asd as as as asdasdas asd asd as das ddasd asGIASGDIAU',
				shop_rating: 5,
			},
				{
				image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
				shop_name: 'Shop 3',
				shop_address: 'adresa random',
				shop_description: 'ASUDHASIUDGHIADasd asd asd as asd asd as as as asdasdas asd asd as das ddasd asGIASGDIAU',
				shop_rating: 5,
			},
				{
				image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
				shop_name: 'Shop 3',
				shop_address: 'adresa random',
				shop_description: 'ASUDHASIUDGHIADasd asd asd as asd asd as as as asdasdas asd asd as das ddasd asGIASGDIAU',
				shop_rating: 5,
			},
				{
				image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
				shop_name: 'Shop 3',
				shop_address: 'adresa random',
				shop_description: 'ASUDHASIUDGHIADasd asd asd as asd asd as as as asdasdas asd asd as das ddasd asGIASGDIAU',
				shop_rating: 5,
			},
			]
		}
	}
}

</script>

