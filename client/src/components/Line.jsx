import React from 'react';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)

const Line = (props) => {
  const { experiences } = props
  const experienceList = {}
  experiences.forEach((experience, idx) => experienceList[experience.created_at] =
  experience.final_rating?
  ((experience.init_rating + experience.second_rating + experience.final_rating) / 3).toFixed(1) :
  ((experience.init_rating + experience.second_rating) / 2).toFixed(1))
  return (
    <div className="line">
      <LineChart data={experienceList} />
    </div>
  )
}

export default Line;
