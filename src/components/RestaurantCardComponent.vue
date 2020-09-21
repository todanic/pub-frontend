<template>
	<v-card 
		class="restaurant-card ml-1 mt-2 mr-6 mb-4 rounded-lg" 
		elevation="50"
		@click="opened" 
		width="350px"
		height="auto"
		min-height="200px"
		:href="restaurantLink"
		:ripple="false"> 
		<!-- restaurant name and image -->
		<v-row class="pa-3 pb-0 pt-0 restaurant-card__row"> 
			<v-img class="restaurant-card__row-image" height="180px" width="80px" src="../assets/images/noimage.png"></v-img>
			<v-col lg="12" md="12" sm="12" cols="12" class="pt-2 pb-2 text-center restaurant-card-row__title">
				<p>
					{{ restaurant.restaurantName }}
				</p>
			</v-col>
			<!-- restaurant address -->
			<v-col cols="12" class="pa-0 ma-0 pt-4 pr-1 pl-3 pr-3 pb-0">	
				<v-card-subtitle class="pa-0 pt-1 ma-0 restaurant-card__subtitle">
					<i class="fas fa-map-marker-alt restaurant-card__subtitle-icon"></i>&nbsp;{{ restaurant.address }}
				</v-card-subtitle>
			</v-col>
		<!-- restaurant description -->
			<v-col align="start" cols="12" class="pl-3 pr-3 text-left pt-1 pb-0">
				<v-card-text class="pa-0 ma-0 restaurant-card__description">
					{{ restaurant.description }}
				</v-card-text>
			</v-col>
		</v-row>
	</v-card>
</template>
<script>
export default {
	name: 'RestaurantCardComponent',
	data() {
		return {
			restaurantLink: ''
		}
	},
	props: {
		restaurant: {
			type: Object,
			required: true
		},
	},
	methods: {
		opened: function (restaurant) {
			this.$emit('opened', restaurant)
		},
	},
	mounted() {
		this.restaurantLink = '/restaurant-profile/' + this.restaurant.id;

		if(!this.restaurant.image) {
			this.restaurant.image = "../assets/images/noimage.png";
		}
	}
}
</script>