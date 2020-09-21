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
		 <!-- <input type="file" ref="fileUpload" @change="encodeImageFileAsURL" /> -->
			<v-file-input ref="fileUpload" @change="encodeImageFileAsURL" color="#000080" prepend-icon="" height="50px" accept="image/*" outlined label="Upload profile image">
			</v-file-input> 
		</v-col>
		<v-btn min-width="150px" type="submit" @click="save">
			Save
		</v-btn>
		<v-img :src="'data:image/jpeg;base64,'+ src" alt="" max-height="300px" max-width="300px"></v-img>
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
			profileImage: '',
			src: ''
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
				this.saveProfilePhoto();
				this.message = 'Your restaurant info was updated successfully!';
			})
			.catch(e => {
				console.log(e);
			});
		},
		encodeImageFileAsURL(e) {
			console.log(e)
			this.profileImage = e;
		},
		saveProfilePhoto() {
			let formData = new FormData();
			formData.append('file', this.profileImage);
			formData.append('restaurantId', this.restaurant.id)
			AuthDataService.updateRestaurantPhoto(formData)
			.then(response => {
				this.src = response.data;

				
			})
			.catch(e => {
				console.log(this.profileImage)
				console.log(e)
			})
		}
	},
	mounted() {
		if(this.$store.state.loggedIn){
			this.getRestaurant(this.$route.params.id);
		} else {
			this.$router.push('/')
		}
	},
	
}
</script>