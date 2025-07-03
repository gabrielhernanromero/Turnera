<template>
  <div>
    <h1>Gestión de Turnos</h1>
    <p>Esta es la vista para usuarios comunes que gestionan sus turnos.</p>

    <div v-if="turnos.length === 0">
      <p>No hay turnos cargados aún.</p>
    </div>

    <ul v-else>
      <li v-for="turno in turnos" :key="turno.id">
        <strong>Fecha:</strong> {{ turno.fecha }} |
        <strong>Hora:</strong> {{ turno.hora }} 
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getTurnos } from '../services/turnosService.js'

const turnos = ref([]);

const obtenerTurnos = async () => {
  try {
  const response = await getTurnos();
  turnos.value = response.data;
} catch (error) {
  console.error('Falló la obtención de turnos:', error);
}
};

// Llamamos a la API cuando el componente se monta
onMounted(() => {
  obtenerTurnos();
});
</script>