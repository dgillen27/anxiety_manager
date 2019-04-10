import React from 'react';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)

const Line = (props) => {
  const { experiences } = props
  return (
    <div className="line">
      <LineChart data={{"2017-01-01": 11, "2017-01-02": 26, "2017-01-03": 1}} />
    </div>
  )
}

export default Line;
