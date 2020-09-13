<template>
	<v-card 
		class="restaurant-card ml-1 mr-6 mb-4 rounded-lg" 
		elevation="50"
		@click="opened" 
		width="350px"
		height="auto"
		min-height="200px"
		:ripple="false"> 
		<!-- Shop name and image -->
		<v-row class="pa-3 pb-0 pt-0 restaurant-card__row"> 
			<v-img class="restaurant-card__row-image" height="150px" width="80px" :src="shop.image"></v-img>
			<v-col lg="12" md="12" sm="12" cols="12" class="pt-2 pb-2 text-center restaurant-card-row__title">
				<p>
					{{ shop.restaurantName }}
				</p>
			</v-col>
			<!-- Shop address -->
			<v-col cols="12" class="pa-0 ma-0 pt-4 pr-1 pl-3 pr-3 pb-0">	
				<v-card-subtitle class="pa-0 pt-1 ma-0 restaurant-card__subtitle">
					<i class="fas fa-map-marker-alt restaurant-card__subtitle-icon"></i>&nbsp;{{ shop.address }}
				</v-card-subtitle>
			</v-col>
		<!-- Shop description -->
			<v-col align="start" cols="12" class="pl-3 pr-3 text-left pt-1 pb-0">
				<v-card-text class="pa-0 ma-0 restaurant-card__description">
					{{ shop.description }}
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
			 
		}
	},
	props: {
		shop: {
			type: Object,
			required: true
		},
	},
	methods: {
		opened: function (shop) {
			this.$emit('opened', shop)
		},
	}
}
</script>