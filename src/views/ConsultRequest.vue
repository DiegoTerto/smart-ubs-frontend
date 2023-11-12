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
              <input type="datetime-local" id="consult-date-input" class="pa-4" name="trip-start" v-model="consultRequest.realizationConsultDate"/>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model:model-value="consultRequest.priority"
                class="mt-5"
                label="Prioridade"
                rounded="lg"
                variant="outlined"
                item-value="value"
                item-title="description"
                :items="priorityList"
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <v-select
                v-model:model-value="consultRequest.speciality"
                class="mt-5"
                label="Especialidade"
                rounded="lg"
                variant="outlined"
                item-value="value"
                item-title="description"
                :items="specialtyList"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model:model-value="consultRequest.details"
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
                @click="createConsultRequest"
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
import CreateConsultRequest from '@/domain/CreateConsultRequest';
import ConsultRequestService from '@/domain/ConsultRequestService';

export default defineComponent({
  name: 'ConsultRequest',
  data() {
    return {
      menu: false,
      input: '',
      consultRequest: new CreateConsultRequest(),
      priorityList: [
        {
          value: 'HIGH',
          description: 'Alta'
        },
        {
          value: 'MEDIUM',
          description: 'Media'
        },
        {
          value: 'LOW',
          description: 'Baixa'
        }
      ],
      specialtyList: [
        {
          value: 'PSYCHOLOGIST',
          description: 'Psicologo'
        },
        {
          value: 'PHYSIOTHERAPIST',
          description: 'Fisioterapeuta'
        }
      ]
    }
  },
  methods: {
    onChange(val: any) {
      console.error(val)
    },
    updateDate(val: any) {
      this.menu = false;
      console.error(val)
    },
    createConsultRequest() {
      this.consultRequest.patientId = localStorage.getItem('patientId')
      ConsultRequestService.create(this.consultRequest)
    }
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