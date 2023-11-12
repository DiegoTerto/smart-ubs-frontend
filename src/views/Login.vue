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
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        v-model:model-value="user.login"
        density="compact"
        placeholder="Insira seu email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Senha
      </div>

      <v-text-field
        v-model:model-value="user.password"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        density="compact"
        placeholder="Insira sua senha"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="changeShowPassword"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="login"
      >
        Entrar
      </v-btn>

      <v-card-text class="text-center">
        <span
          class="text-blue text-decoration-none change-mode"
          @click="changeMode"
        >
          Cadastre-se <v-icon icon="mdi-chevron-right"></v-icon>
      </span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import User from '@/domain/User';
import { defineComponent } from 'vue'
import UserService from '@/domain/UserService'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      showPassword: false,
      user: new User()
    }
  },
  methods: {
    changeShowPassword() {
      this.showPassword = !this.showPassword
    },
    login() {
      UserService.login(this.user).then((json) => {
        localStorage.setItem('patientId', json.id)
        this.$emit('logged')
      });
    },
    changeMode() {
      this.$emit('changeMode')
    }
  },
})
</script>

<style lang="css" scoped>
.change-mode:hover {
  cursor: pointer;
}
</style>
