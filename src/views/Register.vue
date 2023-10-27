<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      height="200px"
      src="@/assets/logo.png"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
    
    <div v-if="step === 1">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>
      <v-text-field
        density="compact"
        placeholder="Insira seu email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
        </div>

        <v-text-field
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          density="compact"
          placeholder="Insira sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="changeShowPassword"
        ></v-text-field>
      </div>

      <div v-if="step === 2">
        <div class="text-subtitle-1 text-medium-emphasis">Nome completo</div>
        <v-text-field
          density="compact"
          placeholder="Insira seu nome"
          prepend-inner-icon="mdi-account"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          CPF
        </div>

        <v-text-field
          type="text"
          density="compact"
          placeholder="Insira seu CPF"
          prepend-inner-icon="mdi-card-account-details"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Numero cartão SUS
        </div>

        <v-text-field
          type="text"
          density="compact"
          placeholder="Insira o numero do cartao SUS"
          prepend-inner-icon="mdi-credit-card"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Data de Nascimento
        </div>
        <div>
          <input class="input-date mb-4" type="date">
        </div>
      </div>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="step = 2"
      >
        {{step === 1 ? 'Proximo' : 'Cadastrar'}}
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Voltar para login <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

let showPassword = ref(false);
let step = ref(1);

function changeShowPassword() {
  showPassword.value = !showPassword.value
}
</script>

<style lang="css" scoped>
.input-date {
  border: 1px solid #ababab;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
}
</style>