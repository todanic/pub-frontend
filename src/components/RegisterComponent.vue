<template>
	<v-container fluid class="register-container">
		<v-row class="justify-center register-container__row">
			<v-col lg="12">
				<h1 class="text-center">Register</h1>
			</v-col>
			<v-col lg="4" class="text-center">
				<p v-if="errors.length">
					<b>Please correct the following error(s):</b>
					<ul>
						<li v-for="error in errors" :key="error">{{ error }}</li>
					</ul>
				</p>
				<v-text-field
					type="text" 
					class="register-container__input"
					v-model="user.email"
					placeholder="Email">
				</v-text-field>
				<!-- <div
					v-if="submitted && errors.has('email')"
					class="alert-danger">
					{{errors.first('email')}}
				</div> -->
				<v-text-field
					type="password" 
					class="register-container__input"
					v-model="user.password"
					placeholder="Password">
				</v-text-field>
				 <!-- <div
            v-if="submitted && errors.has('password')"
            class="alert-danger">
						{{errors.first('password')}}
					</div> -->
					<v-text-field
						type="text" 
						class="register-container__input"
						v-model="user.name"
						placeholder="Name">
					</v-text-field>
				 <!-- <div
            v-if="submitted && errors.has('name')"
            class="alert-danger">
						{{errors.first('name')}}
					</div> -->
						<v-text-field
					type="text" 
					class="register-container__input"
					v-model="user.restaurantName"
					placeholder="Restaurant name">
				</v-text-field>
				 <!-- <div
            v-if="submitted && errors.has('restaurantName')"
            class="alert-danger">
						{{errors.first('restaurantName')}}
					</div> -->
				<v-btn class="register-container__btn mt-5" min-width="200px" type="submit" dark color="#ee2c30" @click="register">
					Register
				</v-btn>
			</v-col>
			<!-- <v-col>
				<div
					v-if="message"
					class="alert"
					:class="successful ? 'alert-success' : 'alert-danger'">
					{{message}}
				</div>
			</v-col> -->
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
		errors: []
		}
	},
	methods: {
		register() {
			this.errors = [];

			if (!this.user.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.user.email)) {
        this.errors.push('Valid email required.');
			}
			
			if (!this.user.password) 
        this.errors.push("Password required.");
			
			if (!this.user.name) 
        this.errors.push("Name required.");

			if (!this.user.restaurantName) 
        this.errors.push("Restaurant name required.");
			
			if(this.errors.length !== 0){
				return false;
			}

			var data = {
				email: this.user.email,
				name: this.user.name,
				restaurantName: this.user.restaurantName,
				password: this.user.password
			};

			AuthDataService.register(data)
				.then(response => {
					if(response.data.id){
						this.user.id = response.data.id;
						this.registerRestaurant()
						console.log(response.data);
					} else {
						this.errors.push("Email already exists.")
					}
        })
        .catch(e => {
          console.log(e);
			  });
		},
		 validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
		registerRestaurant() {
			var data = {
				restaurantName: this.user.restaurantName,
				userId: this.user.id
			};

			AuthDataService.registerRestaurant(data)
				.then(response => {
					console.log(response.data);
					this.login();
        })
        .catch(e => {
          console.log(e);
        });
		},
		login() {
			AuthDataService.login(this.user)
			.then(response => {
				console.log(response.data);
				if(response.data) {
					this.$store.dispatch('login', response.data[0].id);
					this.$router.push(`/profile/${response.data[0].id}`)
				} else {
					alert('Invalid username or password!')
				}
					
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