<template>
	<v-container fluid class="restaurant-profile-view">
		<v-row>	
			<v-col lg="12" class="text-center">
				<h1 class="mb-5">{{ restaurant.restaurantName }}</h1>
			</v-col>
			<v-col lg="6">
				<v-img max-width="500px" src="../assets/images/noimage.png" class="ml-auto"></v-img>
			</v-col>
			<v-col lg="6">
				<div class="restaurant-profile-view__div">
					<h3>
						Address
					</h3>
					<p>
						{{ restaurant.address }}
					</p>
				</div>
				<div class="restaurant-profile-view__div mt-5">
					<h3>
						Phone
					</h3>
					<p>
						{{ restaurant.phone }}
					</p>
				</div>
				<div class="restaurant-profile-view__div mt-5">
					<h3>
						Description
					</h3>
					<p>
						{{ restaurant.description }}
					</p>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import AuthDataService from "../services/AuthDataService";
import Restaurant from '../models/restaurant';

export default {
	name: 'RestaurantProfileView',
	data() {
		return {
			restaurant: new Restaurant('', '', '', '', '', ''),
		}
	},
	methods: {
		getRestaurantById(id) {
			console.log(id)
			AuthDataService.getRestaurantById(id)
			.then(response => {
				this.restaurant = response.data;
			})
			.catch(e => {
				console.log(e);
			});
		},
	},
	mounted() {
		this.getRestaurantById(this.$route.params.id);
	}
}
</script>