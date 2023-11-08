<template>
  <div>
    <v-card class="ma-6 access-fast" rounded="lg">
      <v-card-title>
        Acesso rapido
      </v-card-title>
      <v-row class="px-4">
        <v-col cols="12" md="6">
          <v-btn
            width="100%"
            color="blue"
            rounded="lg"
            @click="go('/consults')"
          > 
            <span>
              <v-icon class="mr-2">mdi-hospital-box-outline</v-icon>
              Minhas consultas
            </span>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn
            width="100%"
            color="purple"
            rounded="lg"
            @click="go('/consult-request')"
          >
            <v-icon class="mr-2">mdi-doctor</v-icon>
            Solicitar Consulta
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="px-4 pb-4">
        <v-col cols="12" md="6">
          <v-btn
            width="100%"
            color="grey"
            rounded="lg"
          > 
          <v-icon class="mr-2">mdi-hospital-building</v-icon>
            UBS proximas de mim
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn
            width="100%"
            color="green"
            rounded="lg"
          >
            <v-icon class="mr-2">mdi-whatsapp</v-icon>
            Entre em contato
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Home',
  methods: {
    go(router: string) {
      this.$router.push(router)
    }
  }
})
</script>

<style lang="css" scoped>
.access-fast {
  width: 50%;
}
</style>
