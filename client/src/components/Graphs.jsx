import React from 'react';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

const Graphs = (props) => {
  const { experiences } = props
  const experienceList = {}
  experiences.forEach((experience, idx) => experienceList[experience.created_at] =
  experience.final_rating?
  ((experience.init_rating + experience.second_rating + experience.final_rating) / 3).toFixed(1) :
  ((experience.init_rating + experience.second_rating) / 2).toFixed(1))
  return(
    <div className="graphs-container">
      {/*<BarChart data={[["Work", 32], ["Play", 1492]]} />*/}
      <LineChart data={experienceList} />
      <PieChart data={[
      ["Social", experiences && experiences.filter(ex => ex.exp_type === "Social").length],
      ["Work", experiences && experiences.filter(ex => ex.exp_type === "Work").length],
      ["Family", experiences && experiences.filter(ex => ex.exp_type === "Family").length],
      ["Personal", experiences && experiences.filter(ex => ex.exp_type === "Personal").length]]} />
    </div>
  )
}

export default Graphs;
