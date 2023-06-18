<template>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-btn color="primary" @click="loginWithGoogle">Login com Google</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import { pinia } from '../store';
  
  export default {
    name: 'Login',
    methods: {
      async loginWithGoogle() {
        const provider = new auth.GoogleAuthProvider();
        try {
          await auth.signInWithPopup(provider);
          pinia.state.loggedIn = true;
          this.$router.push('/crud');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  