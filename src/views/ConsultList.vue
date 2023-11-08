<template>
  <div class="pa-6">
    <v-card rounded="lg" class="pa-4">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Data consulta
            </th>
            <th class="text-left">
              Especialidade
            </th>
            <th class="text-left">
              Medico
            </th>
            <th class="text-left">
              Detalhes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/09/2023</td>
            <td>Psicologo</td>
            <td>Joaquim</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod lorem sem, quis rhoncus tortor lobortis auctor. Praesent sapien lorem.</td>
          </tr>
          <tr>
            <td>17/09/2023</td>
            <td>Cardiologista</td>
            <td>Ana</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod lorem sem, quis rhoncus tortor lobortis auctor. Praesent sapien lorem.</td>
          </tr>
          <tr>
            <td>30/10/2023</td>
            <td>Fisioterapeuta</td>
            <td>Maria</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod lorem sem, quis rhoncus tortor lobortis auctor. Praesent sapien lorem.</td>
          </tr>

          <tr>
            <td>12/11/2023</td>
            <td>Psicologo</td>
            <td>João</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod lorem sem, quis rhoncus tortor lobortis auctor. Praesent sapien lorem.</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConsultList'
})
</script>