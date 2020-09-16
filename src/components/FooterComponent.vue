<template>
	 <v-footer dark class="footer-component pa-0 ma-0" color="#292C45">
    <v-container class="pa-2">
      <contact-us-component></contact-us-component>
      <v-divider></v-divider>
      <v-row class="pt-4 px-5">
        <v-col class="footer-box text-left pa-0 pr-lg-12" lg="6" md="6" sm="8" cols="12">
          <p class="pr-lg-12">
            laboris! Vel tortor anim morbi exercitation eligendi accusantium praesentium platea malesuada porro unde
            gravida, magni alias? Temporibus. Consectetuer iaculis, convallis venenatis! Eius aut! Aenean mollis? Quia
            illo, sociis dolorem temporibus eleifend, eum animi porttitor. Facilisi iure perferendi
          </p>
        </v-col>
        <v-col class="footer-box text-left pa-0 justify-center" lg="6" md="6" sm="8" cols="12">
          <h3 class="text-center">
            About us
          </h3>
          <ul class="text-center">
            <li>
             <router-link to="/">Home</router-link>
            </li>
            <li>
               <router-link to="/about">About us</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact us</router-link>
            </li>
            <li>
               <router-link to="/register">Sign up</router-link>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
    </v-container>
    <v-container fluid class="pa-0 ma-0">
        <v-row class="pa-0 ma-0 justify-center">
          <v-col class="footer-box pa-0 ma-0" lg="12" md="12" sm="12" cols="12">
            <v-card flat tile class="footer-hold white--text text-center pa-0" color="#292C45">
              <v-card-title class="footer-copyright white--text pa-0 justify-center">
                Rights reserved {{ currentYear }}© &nbsp;yummee.com
              </v-card-title>

            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import ContactUsComponent from  './ContactUsComponent.vue';

export default {
	name: 'FooterComponent',
	data() {
		return {
			currentYear: new Date().getFullYear(),
			icons: ["fab fa-facebook", "fab fa-twitter", "fab fa-instagram"],
			searchFocus: false
		}
	},
	components: {
		ContactUsComponent
	}
}
</script>