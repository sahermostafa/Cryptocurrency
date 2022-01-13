import React from "react";
import "./Chart.css";
import {  Tooltip , BarChart , XAxis , YAxis , Legend , CartesianGrid , Bar,} from "recharts";

function Chart(){ 
  const data = [
    { name: "Bitcoin", ratio: 2000000000 },
    { name: "Ethereum", ratio: 1500000000 },
    { name: "Ripple", ratio: 1000000000 },
    { name: "Litecoin", ratio: 500000000 },
  ];
  return (
    <BarChart width={500} height={300} data={data} margin={{ top: 5 , right: 30 , left: 80 , bottom: 5,}} barSize={20} >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="ratio" fill="#1cb617" background={{ fill: "#eee" }} />
        </BarChart>
  );
};
export default Chart;