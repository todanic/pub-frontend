<template>
		<v-container fluid class="register-container">
		<v-row class="justify-center register-container__row">
			<v-col lg="12">
				<h1 class="text-center">Login</h1>
			</v-col>
			<v-col lg="4" class="text-center">
				<v-text-field
					type="text" 
					class="register-container__input"
					v-model="user.email"
					placeholder="Email">
				</v-text-field>
				<!-- <div
					v-if="errors.has('email')"
					class="alert alert-danger"
					role="alert">
					Email is required!
				</div> -->
				<v-text-field
					type="password" 
					class="register-container__input"
					v-model="user.password"
					placeholder="Password">
				</v-text-field>
				<!-- <div
					v-if="errors.has('password')"
					class="alert alert-danger"
					role="alert">
					Password is required!
				</div> -->
				<span v-show="loading" class="spinner-border spinner-border-sm"></span>
				<v-btn class="register-container__btn mt-5" min-width="200px" type="submit" dark color="#ee2c30" @click="login">
					Login
				</v-btn>
			</v-col>
			<v-col cols='12'>
				 <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AuthDataService from "../services/AuthDataService";
import User from '../models/user';

export default {
	name: 'login',
 	data() {
    return {
      user: new User('', '', '', '', ''),
      loading: false,
      message: ''
    };
  },
	methods: {
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
