<template>
	<v-container class="profile-container">
		<h1>Profile</h1>
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
			type="text" 
			class="profile-container__input"
			v-model="user.restaurantName"
			placeholder="Restaurant name">
		</v-text-field>
		<v-text-field
			type="password" 
			class="profile-container__input"
			v-model="user.password"
			placeholder="Password">
		</v-text-field>
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
			user: []
		}
	},
	methods: {
		getUser() {
      AuthDataService.profile(33)
        .then(response => {
          console.log(response.data);
					this.user = response.data
					this.getRestaurant()
        })
        .catch(e => {
          console.log(e);
        });
		},
		getRestaurant() {
			  AuthDataService.getRestaurant(this.user.id)
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
			AuthDataService.update(this.user.id, this.user)
        .then(response => {
          console.log(response.data);
          this.message = 'Your profile was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
		},
		deleteUser() {
      AuthDataService.delete(this.user.id)
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