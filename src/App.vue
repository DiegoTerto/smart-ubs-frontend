<template>
  <v-app id="inspire">
    <!-- <Register/> -->
    <Login v-if="!authenticated" @logged="authenticated = true"/>
    <div v-else>
      <v-navigation-drawer v-model="drawer">
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-hospital-box-outline" title="Minhas consultas" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-doctor" title="Solicitar consulta" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-hospital-building" title="UBS proximas de mim" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>Smart UBS</v-app-bar-title>
      </v-app-bar>
  
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';

const drawer = ref(null)

const authenticated = ref(false);

</script>
