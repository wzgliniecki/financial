<script setup lang="ts">
import { ref } from 'vue';
import LoanTable from './components/LoanTable.vue';
import LinearChart from './components/LinearChart.vue';

const data = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Loan Amount',
      data: [40, 50, 30, 60, 90],
      fill: false,
      borderColor: '#42b983',
      tension: 0.1
    }
  ]
});

const options = ref({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
});
</script>

<template>
  <header>
  </header>
  <main>
    <LoanTable />
    
    <LinearChart :chartData="data" :chartOptions="options"/>
  </main>
</template>

<style scoped>
</style>
