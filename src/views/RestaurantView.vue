<template>
	<v-container class="restaurant-container">
		<v-col cols="12" class="restaurant-container__restaurant-col">
			<h1>Restaurant info</h1>
			<v-text-field
			type="text" 
			class="restaurant-container__input"
			v-model="restaurant.restaurantName"
			placeholder="Restaurant name">
		</v-text-field>
			<v-text-field
			type="text" 
			class="restaurant-container__input"
			v-model="restaurant.phone"
			placeholder="Restaurant phone">
		</v-text-field>
			<v-text-field
			type="text" 
			class="restaurant-container__input"
			v-model="restaurant.address"
			placeholder="Restaurant address">
		</v-text-field>
			<v-textarea
			type="text" 
			class="restaurant-container__input"
			v-model="restaurant.description"
			placeholder="Restaurant description">
		</v-textarea>
		</v-col>
		<v-btn min-width="150px" type="submit" @click="save">
			Save
		</v-btn>
	</v-container>
</template>
<script>
import Restaurant from '../models/restaurant';
import AuthDataService from "../services/AuthDataService";

export default {
	name: 'RestaurantView',
	data() {
		return {
			restaurant: new Restaurant('', '', '', '', '', ''),
		}
	},
	methods: {
		getRestaurant(userId) {
			console.log(userId)
			AuthDataService.getRestaurant(userId)
			.then(response => {
				this.restaurant = response.data;
			})
			.catch(e => {
				console.log(e);
			});
		},
		save() {
				AuthDataService.updateRestaurant(this.restaurant)
        .then(response => {
					console.log(response.data);
          this.message = 'Your restaurant info was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
		},
	},
	mounted() {
		this.getRestaurant(this.$route.params.id);
	}
}
</script>