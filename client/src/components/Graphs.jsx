import React from 'react';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

const Graphs = (props) => {
  const { experiences } = props
  const things = experiences.slice
  const experienceList = {}
  const init_list = {}
  const second_list = {}
  const final_list = {}
  const data = [
    {"name":"Average Rating", data:experienceList},
    {"name":"Initial Feelings", data:init_list},
    {"name":"Secondary Feelings", data:second_list},
    {"name":"Final Feelings", data:final_list}
  ]

  {/*Initial rating graph*/}
  experiences.forEach((experience, idx) => init_list[experience.created_at] =
  ((experience.init_rating + 0) / 1).toFixed(1));

  {/*Second rating graph*/}
  experiences.forEach((experience, idx) => second_list[experience.created_at] =
  ((experience.second_rating + 0) / 1).toFixed(1));

  {/*Final rating graph*/}
  experiences.forEach((experience, idx) => final_list[experience.created_at] =
  ((experience.final_rating + 0) / 1).toFixed(1));

  {/*Complete average rating graph*/}
  experiences.forEach((experience, idx) => experienceList[experience.created_at] = experience.final_rating?
  ((experience.init_rating + experience.second_rating + experience.final_rating) / 3).toFixed(1) :
  ((experience.init_rating + experience.second_rating) / 2).toFixed(1));

  return(
    <div className="graphs-container">
      <h1>What You Are Anxious About Most Often</h1>
      <PieChart data={[
      ["Social", experiences && experiences.filter(ex => ex.exp_type === "Social").length],
      ["Work", experiences && experiences.filter(ex => ex.exp_type === "Work").length],
      ["Family", experiences && experiences.filter(ex => ex.exp_type === "Family").length],
      ["Personal", experiences && experiences.filter(ex => ex.exp_type === "Personal").length]]} />
      <h1>Your Inital Feelings</h1>
      <LineChart data={init_list} />
      <h1>Your Feelings After Writing About Them</h1>
      <LineChart data={second_list} />
      <h1>Your Feelings When Your Issue Has Resolved</h1>
      <LineChart data={final_list} />
    </div>
  )
}

export default Graphs;
