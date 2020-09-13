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
import AuthDataService from "../services/AuthDataService";
import Restaurant from '../models/restaurant';

export default {
	name: 'home-view',
	components: {
		SplashComponent,
		RestaurantCardComponent
	},
	data() {
		return {
		restaurant: new Restaurant('', '', '', '', '', ''),
		shops: []
		}
	},
	methods: {
		getRestaurants() {
			AuthDataService.getRestaurants()
			.then(response => {
				this.shops = response.data;
			})
			.catch(e => {
				console.log(e)
			})
		}
	},
	mounted() {
		this.getRestaurants();
	}
}

</script>

