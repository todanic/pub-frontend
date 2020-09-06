<template>
		<v-container fluid class="register-container">
		<v-row class="justify-center">
			<v-col lg="12">
				<h1 class="text-center">Login</h1>
			</v-col>
			<v-col lg="4">
				<v-text-field
					type="text" 
					class="register-container__input"
					v-model="fields.email"
					placeholder="Email">
				</v-text-field>
				<v-text-field
					type="password" 
					class="register-container__input"
					v-model="fields.password"
					placeholder="Password">
				</v-text-field>
				<v-btn min-width="150px" type="submit" @click="login">
					Login
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AuthDataService from "../services/AuthDataService";

export default {
	name: 'login',
	data() {
		return {
			fields: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		login() {
			var data = {
				email: this.fields.email,
				password: this.fields.password
			};

		AuthDataService.login(data)
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
