<template>
  <v-app>
    <!-- <Register/> -->
    <!-- <Login v-if="!authenticated" @logged="authenticated = true"/> -->
    <div class="app">
      <v-navigation-drawer class="elevation-1" v-model="drawer">
          <div class="pa-4">
            <span class="text-h6">Smart UBS</span>
          </div>
          <v-divider ></v-divider>
          <v-list density="compact" nav>
            <v-list-item @click="routerTo('/consults')" prepend-icon="mdi-hospital-box-outline" title="Minhas consultas" value="myfiles"></v-list-item>
            <v-list-item @click="routerTo('/consult-request')" prepend-icon="mdi-doctor" title="Solicitar consulta" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-hospital-building" title="UBS proximas de mim" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
      <v-main>
        <div class="app-bar d-flex align-center justify-space-between rounded-lg elevation-1 ma-6 pa-2">
          <div>
            <v-btn
              icon
              x-small
              elevation="0"
              @click="drawer = !drawer"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </div>
          <div class="d-flex align-center">
            <v-btn
              class="mr-2"
              icon
              x-small
              elevation="0"
            >
              <v-badge content="2" color="error">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
            <div>
              <v-avatar>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                ></v-img>
              </v-avatar>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      drawer: true,
      authenticated: false
    }
  },
  methods: {
    routerTo(router: string) {
      this.$router.push(router)
    }
  }
})


</script>

<style>
.app {
  background: #f4f5fa;
  width: 100vw;
  height: 100vh;
}

.app-bar {
  background: white;
}
</style>
