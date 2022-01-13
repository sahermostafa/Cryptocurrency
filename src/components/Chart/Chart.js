import React from "react";
import "./Chart.css";
import Cartlines from "./Cartlines";
import Chartpie from "./Chartpie";
import Chartline from "./Chartline";

function Chart(){ 
 return (
    <div style={{ textAlign: "center" }}>
      <h1>Cryptocurrency</h1>
      <div className="Chart">
        <Cartlines />
        <Chartpie />
      </div>
    </div>
  );
};
export default Chart;