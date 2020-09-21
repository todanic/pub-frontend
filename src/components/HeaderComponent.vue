<template>
	<v-container fluid class="header-container">
		<v-row class="align-center">
			<v-col class="d-flex  align-center pl-5" lg="4" md="4" sm="4" cols="4">
				<router-link to="/">
						<v-img max-width="180px" class="header-container__logo mt-2" src="../assets/images/logo.png" alt="logo"></v-img>
				</router-link>
			</v-col>
			<v-col lg="8" md="8" sm="8" cols="8">
				<ul class="header-container__menu pl-0 pt-4 justify-right pr-5" v-if="!this.$store.state.loggedIn">
					<li class="header-container__item">
							<router-link to="/contact">Contact us</router-link>
					</li>
					<li class="header-container__item">
							<router-link to="/register">Register</router-link>
					</li>
					<li class="header-container__item">
						<router-link to="/login">Login</router-link>
					</li>
				</ul>
				<ul class="header-container__menu pl-0 pt-4 justify-right pr-5" v-else>
					<li class="header-container__item">
						<router-link to="/about">About us</router-link>
					</li>
					<li class="header-container__item">
							<router-link to="/contact">Contact us</router-link>
					</li>
					<li class="header-container__item">
						<router-link :to="{path: '/profile/' + this.$store.state.loggedIn}">Profile</router-link>
					</li>
					<li class="header-container__item">
						<router-link :to="{path: '/restaurant/' + this.$store.state.loggedIn}">Resturant profile</router-link>
					</li>
					<li class="header-container__item">
							<span @click="logout">Log out</span>
					</li>
				</ul>
			</v-col>
		</v-row>
  </v-container>
</template>

<script>
export default {
	name: 'header-component',
	data() {
		return {
		
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout');
			this.$router.push('/')
		}
	}
}
</script>
