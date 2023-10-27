<template>
  <div>
    <v-row class="px-4 py-2">
      <v-col>
        <h2>Acesso rapido</h2>
      </v-col>
    </v-row>
    <v-row class="pl-6">
      <v-col cols="auto">
        <v-btn
          variant="outlined"
          rounded="lg"
        > 
          <span>
            <v-icon class="mr-2">mdi-hospital-box-outline</v-icon>
            Minhas consultas
          </span>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          variant="outlined"
          rounded="lg"
        >
          <v-icon class="mr-2">mdi-doctor</v-icon>
          Solicitar Consulta
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="pl-6">
      <v-col cols="auto">
        <v-btn
          variant="outlined"
          rounded="lg"
        > 
        <v-icon class="mr-2">mdi-hospital-building</v-icon>
          <span class="text-justify">
            UBS proximas <br/> de mim
          </span>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          variant="outlined"
          rounded="lg"
        >
          <v-icon class="mr-2">mdi-whatsapp</v-icon>
          Entre em contato
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
</script>
