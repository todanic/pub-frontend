<template>
	<v-container class="profile-container">
		<v-col cols="12" class="profile-container__user-col">
			<h1 class="text-center">User info</h1>
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
		<v-col lg="12" class="text-center">
			<v-btn class="profile-container__btn mr-5" min-width="200px" type="submit" dark color="#ee2c30"@click="save">
			Save
			</v-btn>
			<v-btn class="profile-container__btn"  min-width="200px" type="submit" dark color="#ee2c30" @click="deleteUser">
				Delete
			</v-btn>
		</v-col>
	
	</v-container>
</template>
<script>
import AuthDataService from "../services/AuthDataService";
import User from '../models/user';

export default {
	name: 'ProfileView',
	data() {
		return {
			user: new User('', '', '', '', ''),
		}
	},
	methods: {
		getUser() {
      AuthDataService.profile(this.$route.params.id)
        .then(response => {
          console.log(response.data);
					this.user = response.data
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
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
	},
	mounted() {
		if(this.$store.state.loggedIn) {
			this.getUser();
		} else {
			this.$router.push('/')
		}
		
  }
}
</script>