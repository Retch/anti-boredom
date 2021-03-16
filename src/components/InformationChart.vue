<template>
  <div>
    <Chart type="bar" :data="chartData" :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    participants: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    accessibility: {
      type: Number,
      default: 0,
    },
  },
  created() {
    this.chartData.datasets[0].data[0] = this.participants;
    this.chartData.datasets[0].data[1] = this.price;
    this.chartData.datasets[0].data[2] = this.accessibility;
  },
  data() {
    return {
      chartData: {
        labels: ["Participants", "Price", "Accessibility"],
        datasets: [
          {
            label: "Activity Information",
            backgroundColor: "#42A5F5",
            data: [0, 0, 0],
          },
        ],
      },
      options: {
        responsive: true,
        hoverMode: "index",
        stacked: false,
        scales: {
          yAxes: [
            {
              type: "linear",
              display: true,
              position: "left",
              id: "y-axis-1",
            },
            {
              type: "linear",
              display: false,
              position: "right",
              id: "y-axis-2",
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    };
  },
});
</script>
