import React from 'react';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)

const Line = (props) => {
  const { experiences } = props
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
  return (
    <div className="line">
      <LineChart data={data} />
    </div>
  )
}

export default Line;
