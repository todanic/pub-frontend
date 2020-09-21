<template>
	<div>
		<splash-component></splash-component>
		<v-container class="pt-5" fluid>
				<v-slide-group :center-active="true" class="home-view-shop-cards-slider-group" show-arrows="">
					<v-slide-item class="home-view-shop-cards-slider-group-item" v-for="(restaurant, index, key) in restaurants" :key="key">
						<restaurant-card-component :restaurant="restaurant"></restaurant-card-component>
					</v-slide-item>
				</v-slide-group>
		</v-container>
		 <v-container fluid class="home-join-container pa-0">
    <div class="home-join-container__wrap">
      <div class="home-join-container__img">
        <img src="../assets/images/homepage-bg.jpg" alt="home-join">
      </div>  
      <div class="home-join-container__shadow-wrap"></div>
      <v-container class="home-join-container__content-wrap">
        <v-row class="home-join-container__row justify-center align-center">
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="home-join-container__content">
              <h2>own a restaurant?</h2>
              <p>
              Looking to fill those empty seats, especially during those times when you're not as busy? Yummee is a
              website for your restaurant.
              </p>
              <v-btn text color="#fff" class="home-join-container__btn mt-6 pa-2" href="/register">
								Join us
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
		restaurants: []
		}
	},
	methods: {
		getRestaurants() {
			AuthDataService.getRestaurants()
			.then(response => {
				this.restaurants = response.data;
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

