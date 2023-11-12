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
        v-model:model-value="person.email"
        density="compact"
        placeholder="Insira seu email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        @update:model-value="setUserEmail"
      ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
        </div>

        <v-text-field
          v-model:model-value="person.users.password"
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
          v-model:model-value="person.name"
          density="compact"
          placeholder="Insira seu nome"
          prepend-inner-icon="mdi-account"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          CPF
        </div>

        <v-text-field
          v-model:model-value="person.document"
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
          v-model:model-value="person.cardSUSNumber"
          type="text"
          density="compact"
          placeholder="Insira o numero do cartao SUS"
          prepend-inner-icon="mdi-credit-card"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Telefone
        </div>

        <v-text-field
          v-model:model-value="person.phone"
          type="text"
          density="compact"
          placeholder="Informe o seu numero de telefone"
          prepend-inner-icon="mdi-phone"
          variant="outlined"
          prefix="+55"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Data de Nascimento
        </div>
        <div>
          <input class="input-date mb-4" type="date" v-model="person.birthDate">
        </div>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Sexo
        </div>

        <v-select
          v-model:model-value="person.sex"
          variant="outlined"
          density="compact"
          placeholder="Selecione o seu sexo"
          item-value="value"
          item-title="description"
          :items="sexList"
        ></v-select>
      </div>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="step = 2"
        v-if="step === 1"
      >
        Proximo
      </v-btn>
      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        v-if="step === 2"
        @click="createPerson"
      >
        Cadastrar'
      </v-btn>

      <v-card-text class="text-center">
        <span
          class="text-blue text-decoration-none change-mode"
          @click="changeMode"
        >
          Voltar para login <v-icon icon="mdi-chevron-right"></v-icon>
        </span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Person from '@/domain/Person';
import PersonService from '@/domain/PersonService'

export default defineComponent({
  name: 'Register',
  data() {
    return {
      showPassword: false,
      step: 1,
      person: new Person(),
      sexList: [
        {
          value: 'MALE',
          description: 'Masculino'
        },
        {
          value: 'FEMALE',
          description: 'Feminino'
        }
      ]
    }
  },
  methods: {
    changeShowPassword() {
      this.showPassword = !this.showPassword
    },
    setUserEmail(value: string) {
      this.person.users.login = value
    },
    createPerson() {
      if (this.step < 2) return 
      PersonService.create(this.person).then((json) => {
        localStorage.setItem('patientId', json.id);
        this.$emit('logged')
      });
    },
    changeMode() {
      this.$emit('changeMode')
    }
  }
})
</script>

<style lang="css" scoped>
.input-date {
  border: 1px solid #ababab;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
}

.change-mode:hover {
  cursor: pointer;
}
</style>