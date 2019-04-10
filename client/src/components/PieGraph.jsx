import React from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)


const PieGraph = (props) => {
  const { experiences } = props
  return (
    <div className="pie">
      <PieChart data={[["Social", experiences && experiences.filter(ex => ex.exp_type === "Social").length],
      ["Work", experiences && experiences.filter(ex => ex.exp_type === "Work").length],
      ["Family", experiences && experiences.filter(ex => ex.exp_type === "Family").length],
      ["Personal", experiences && experiences.filter(ex => ex.exp_type === "Personal").length]]} />
    </div>
  )
}

export default PieGraph;
