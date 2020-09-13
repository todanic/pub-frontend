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
					v-model="user.email"
					placeholder="Email">
				</v-text-field>
				<div
					v-if="submitted && errors.has('email')"
					class="alert-danger">
					{{errors.first('email')}}
				</div>
				<v-text-field
					type="password" 
					class="register-container__input"
					v-model="user.password"
					placeholder="Password">
				</v-text-field>
				 <div
            v-if="submitted && errors.has('password')"
            class="alert-danger">
						{{errors.first('password')}}
					</div>
					<v-text-field
						type="text" 
						class="register-container__input"
						v-model="user.name"
						placeholder="Name">
					</v-text-field>
				 <div
            v-if="submitted && errors.has('name')"
            class="alert-danger">
						{{errors.first('name')}}
					</div>
						<v-text-field
					type="text" 
					class="register-container__input"
					v-model="user.restaurantName"
					placeholder="Restaurant name">
				</v-text-field>
				 <div
            v-if="submitted && errors.has('restaurantName')"
            class="alert-danger">
						{{errors.first('restaurantName')}}
					</div>
				<v-btn min-width="150px" type="submit" @click="register">
					Register
				</v-btn>
			</v-col>
			<v-col>
				<div
					v-if="message"
					class="alert"
					:class="successful ? 'alert-success' : 'alert-danger'">
					{{message}}
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AuthDataService from "../services/AuthDataService";
import User from '../models/user';

export default {
	name: 'register',
	data() {
		return {
		user: new User('', '', '', '', ''),
		submitted: false,
		successful: false,
		message: '',
		}
	},
	methods: {
		register() {
			var data = {
				email: this.user.email,
				name: this.user.name,
				restaurantName: this.user.restaurantName,
				password: this.user.password
			};

			AuthDataService.register(data)
				.then(response => {
				this.user.id = response.data.id;
				this.registerRestaurant()
				console.log(response.data);
        })
        .catch(e => {
          console.log(e);
			  });
		},
		registerRestaurant() {
			var data = {
				restaurantName: this.user.restaurantName,
				userId: this.user.id
			};

			AuthDataService.registerRestaurant(data)
				.then(response => {
					console.log(response.data);
					localStorage.setItem('user', this.user.id);
					this.$store.dispatch('login');
					this.$router.push(`/profile/${this.user.id}`)
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