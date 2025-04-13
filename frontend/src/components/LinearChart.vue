<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

export default {
  name: 'LinearChart',
  components: { Line },
  setup() {
    const chartData = ref({
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'Sales',
          data: [40, 20, 12],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.4
        }
      ]
    })

    const chartOptions = ref({
      responsive: true
    })

    return {
      chartData,
      chartOptions
    }
  }
}
</script>

