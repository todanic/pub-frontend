<template>
	<v-container fluid class="register-container">
		<v-row class="justify-center">
			<v-col lg="12">
				<h1 class="text-center">Register</h1>
			</v-col>
			<v-col lg="4">
				<v-text-field
					type="text" 
					class="register-container__input"
					v-model="fields.email"
					placeholder="Email">
				</v-text-field>
				<v-text-field
					type="text" 
					class="register-container__input"
					v-model="fields.name"
					placeholder="Name">
				</v-text-field>
				<v-text-field
					type="text" 
					class="register-container__input"
					v-model="fields.restaurantName"
					placeholder="Restaurant name">
				</v-text-field>
				<v-text-field
					type="password" 
					class="register-container__input"
					v-model="fields.password"
					placeholder="Password">
				</v-text-field>
				<v-btn min-width="150px" type="submit" @click="register">
					Register
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AuthDataService from "../services/AuthDataService";

export default {
	name: 'register',
	data() {
		return {
			fields: {
				id: null,
				email: '',
				name: '',
				restaurantName: '',
				password: ''
			}
		}
	},
	methods: {
		register() {
			var data = {
				email: this.fields.email,
				name: this.fields.name,
				restaurantName: this.fields.restaurantName,
				password: this.fields.password
			};

			AuthDataService.register(data)
				.then(response => {
				this.fields.id = response.data.id;
				this.registerRestaurant()
				console.log(response.data);
        })
        .catch(e => {
          console.log(e);
			  });
			
		
		},
		registerRestaurant() {
			var data = {
				restaurantName: this.fields.restaurantName,
				userId: this.fields.id
			};
console.log(data)
			AuthDataService.registerRestaurant(data)
				.then(response => {
				console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
		}
	}
}
</script>

<style>

</style>