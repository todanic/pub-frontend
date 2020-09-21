<template>
	<v-row class="footer-btn-row">
		<v-col lg="5" md="6" sm="12" cols="12" class="d-flex footer-btn-hold ml-auto mr-auto" v-if="!loading">
			<h1 class="text-center	mb-5">Contact us!</h1>
			<v-text-field v-model="email" class="pr-0 footer-text-field" outlined :dark="dark" placeholder="Email address">
			</v-text-field>
			<v-textarea v-model="message" class="pr-0 footer-text-field" outlined :dark="dark" placeholder="Message">
			</v-textarea>
			<v-btn @click="send" class="footer-btn c2s-btn--large ml-auto mr-auto" width="200px" height="50px" dark color="#ee2c30">
					Send
				</v-btn>
		</v-col>
		<v-col v-else class="text-center">
			<p>Loading...</p>
		</v-col>
	</v-row>
</template>
<script>
import AuthDataService from '../services/AuthDataService'
export default {
	name: 'ContactUsComponent',
	data() {
		return {
			email: '',
			message: '',
			loading: false,
		}
	},
	props: {
		dark: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	methods: {
		send() {
			this.loading = true;
			var data = {
				email: this.email,
				message: this.message
			}
		
			AuthDataService.contact(data)
			.then(response =>{
				alert("Email successfully sent!");
				console.log(data)
			})
			.catch(e =>{
				alert("Email failed to send!");
				console.log(e)
			})
			.finally(() => this.loading = false);
		}
		
	}
}
</script>