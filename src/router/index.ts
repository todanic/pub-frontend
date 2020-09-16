import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   alias: '/tutorials',
  //   name: 'tutorials',
  //   component: () => import('../components/TutorialsList.vue'),
  // },
  {
    path: '/',
    name: 'home-view',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: () => import('../components/Tutorial.vue'),
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/AddTutorial.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginComponent.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/RegisterComponent.vue'),
  },
  {
    path: '/profile/:id',
    name: 'profile-view',
    component: () => import('../views/ProfileView.vue'),
  },
  {
    path: '/restaurant/:id',
    name: 'restaurant-view',
    component: () => import('../views/RestaurantView.vue'),
  },
  {
    path: '/footer',
    name: 'footer-component',
    component: () => import('../components/FooterComponent.vue'),
  },
  {
    path: '/contact',
    name: 'contact-us-component',
    component: () => import('../components/ContactUsComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
