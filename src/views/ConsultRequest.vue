<template>
  <div class="pa-6">
    <v-card rounded="lg">
      <v-card-title>
        Solicitar consulta
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="6">
              <label for="consult-date-input">Data da consulta:</label>
              <input type="date" id="consult-date-input" class="pa-4" name="trip-start" :value="consultDate"/>
            </v-col>
            <v-col cols="6">
              <v-select
                class="mt-5"
                label="Prioridade"
                rounded="lg"
                variant="outlined"
                :items="['Alta', 'Media', 'Baixa']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <v-select
                class="mt-5"
                label="Especialidade"
                rounded="lg"
                variant="outlined"
                :items="['Psicologo', 'Fisioterapeuta', 'Cardiologista']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                rounded="lg"
                label="Detalhes"
                variant="outlined"
                counter=""
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-btn
                color="blue"
                rounded="lg"
                elevation="0"
              >
                Solicitar
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn
                elevation="0"
                rounded="lg"
                color="grey-lighten-2"
              >
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'ConsultRequest',
  data() {
    return {
      consultDate: '',
      menu: false,
      input: '',
    }
  },
   computed: {
    dateFormatted() {
      return this.input ? new Date(this.input) : "";
    },
    getDate() {
      const date = this.input ? new Date(this.input) : new Date()
      return [date]
    },
  },
  methods: {
    onChange(val: any) {
      console.error(val)
    },
    updateDate(val: any) {
      this.menu = false;
      console.error(val)
    },
  },
})
</script>

<style scoped lang="css">
#consult-date-input {
  border: 1px solid #ababab;
  border-radius: 8px;
  width: 100%;
}
</style>