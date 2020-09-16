<template>
	<v-row class="footer-btn-row">
		<v-col lg="5" md="6" sm="12" cols="12" class="d-flex footer-btn-hold ml-auto mr-auto">
			<h2 class="text-center	mb-5">Contact us!</h2>
			<v-text-field v-model="email" class="pr-0 footer-text-field" outlined dark placeholder="Email address">
			</v-text-field>
			<v-textarea v-model="message" class="pr-0 footer-text-field" outlined dark placeholder="Message">
			</v-textarea>
			<v-btn @click="send" class="footer-btn c2s-btn--large" dark color="#ee2c30">
					Send
				</v-btn>
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
			message: ''
		}
	},
	methods: {
		send() {
			var data = {
				email: this.email,
				message: this.message
			}

			AuthDataService.contact(data)
			.then(response =>{
				console.log(data)
			})
			.catch(e =>{
				console.log(e)
			})
		}
		
	}
}
</script>