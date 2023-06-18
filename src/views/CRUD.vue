<template>
    <v-card>
      <v-card-title>CRUD</v-card-title>
      <v-card-text>
        <v-form @submit="addUser" ref="form">
          <v-text-field v-model="user.name" label="Nome" required></v-text-field>
          <v-text-field v-model="user.email" label="Email" required></v-text-field>
          <v-text-field v-model="user.password" label="Senha" required></v-text-field>
          <v-text-field v-model="user.phone" label="Telefone" required></v-text-field>
          <v-btn color="primary" type="submit">Adicionar Usuário</v-btn>
        </v-form>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="(user, index) in users" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ user.phone }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn color="error" @click="deleteUser(index)">Excluir</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { db } from '../firebase';
  import { ref } from 'vue';
  import { pinia } from '../store';
  
  export default {
    name: 'CRUD',
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          phone: '',
        },
        users: [],
      };
    },
    methods: {
      async addUser() {
        try {
          const docRef = await db.collection('users').add(this.user);
          const newUser = { id: docRef.id, ...this.user };
          this.users.push(newUser);
          this.resetForm();
        } catch (error) {
          console.error(error);
        }
      },
      async deleteUser(index) {
        const userId = this.users[index].id;
        try {
          await db.collection('users').doc(userId).delete();
          this.users.splice(index, 1);
        } catch (error) {
          console.error(error);
        }
      },
      resetForm() {
        this.user = {
          name: '',
          email: '',
          password: '',
          phone: '',
        };
        this.$refs.form.reset();
      },
    },
    async mounted() {
      const snapshot = await db.collection('users').get();
      snapshot.forEach((doc) => {
        const userData = { id: doc.id, ...doc.data() };
        this.users.push(userData);
      });
    },
  };
  </script>
  
  <style>
  /* Estilos personalizados podem ser adicionados aqui, se necessário */
  </style>
  