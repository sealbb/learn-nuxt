<script setup>
import * as d3 from 'd3';
import { ref, onMounted } from 'vue';

const data = ref([10, 20, 30, 90, 50]);
const chart = ref(null);

onMounted(() => {
  const svg = d3.select(chart.value)
    .append('svg')
    .attr('width', 300)
    .attr('height', 150);

  // Create 'rect' elements based on the data
  svg.selectAll('rect')
    .data(data.value)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 60)
    .attr('y', d => 150 - d)
    .attr('width', 40)
    .attr('height', d => d)
    .attr('fill', 'white');

  // Create x-axis
  const xScale = d3.scaleLinear()
    .domain([0, data.value.length - 1])
    .range([0, 300]);

    const xAxis = d3.axisBottom().scale(xScale);

  svg.append('g')
    .attr('transform', 'translate(0, 150)')
    .call(xAxis);
});
</script>

<template>
  <div class="bg-black">
    <div ref="chart" class="h-screen flex items-center justify-center"></div>
  </div>
</template>

<style scoped>
/* Styles go here */
</style>
