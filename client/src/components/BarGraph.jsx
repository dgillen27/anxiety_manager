import React from 'react';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

const BarGraph = (props) => {
  return(
    <BarChart data={[["Work", 32], ["Play", 1492]]} />
  )
}

export default BarGraph;
