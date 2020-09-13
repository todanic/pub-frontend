<template>
	<v-container class="profile-container">
		<v-col cols="12" class="profile-container__user-col">
			<h1>User info</h1>
			<v-text-field
			type="text" 
			class="profile-container__input"
			v-model="user.email"
			placeholder="Email">
		</v-text-field>	
		<v-text-field
			type="text" 
			class="profile-container__input"
			v-model="user.name"
			placeholder="Name">
		</v-text-field>
		<v-text-field
			type="password" 
			class="profile-container__input"
			v-model="user.password"
			placeholder="Password">
		</v-text-field>
		</v-col>
		<v-col cols="12" class="profile-container__restaurant-col">
			<h1>Restaurant info</h1>
			<v-text-field
			type="text" 
			class="profile-container__input"
			v-model="user.restaurantName"
			placeholder="Restaurant name">
		</v-text-field>
			<v-text-field
			type="text" 
			class="profile-container__input"
			placeholder="Restaurant phone">
		</v-text-field>
			<v-text-field
			type="text" 
			class="profile-container__input"
			placeholder="Restaurant address">
		</v-text-field>
			<v-text-field
			type="text" 
			class="profile-container__input"
			placeholder="Restaurant description">
		</v-text-field>
		</v-col>
		
		<v-btn min-width="150px" type="submit" @click="save">
			Save
		</v-btn>
		<v-btn min-width="150px" type="submit" @click="deleteUser">
			Delete
		</v-btn>
	</v-container>
</template>
<script>
import AuthDataService from "../services/AuthDataService";

export default {
	name: 'ProfileView',
	data() {
		return {
			user: [],
		}
	},
	methods: {
		getUser() {
      AuthDataService.profile(this.$route.params.id)
        .then(response => {
          console.log(response.data);
					this.user = response.data
					this.getRestaurant(this.$route.params.id)
        })
        .catch(e => {
          console.log(e);
        });
		},
		getRestaurant(userId) {
			  AuthDataService.getRestaurant(userId)
        .then(response => {
          console.log(response.data);
					this.user = response.data
					this.getRestaurant()
        })
        .catch(e => {
          console.log(e);
        });
		},
		save() {
			AuthDataService.update(this.$route.params.id, this.user)
        .then(response => {
          console.log(response.data);
          this.message = 'Your profile was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
		},
		deleteUser() {
      AuthDataService.delete(this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "user" });
        })
        .catch(e => {
          console.log(e);
        });
    }
	},
	mounted() {
		this.getUser();
  }
}
</script>