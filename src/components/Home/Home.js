import * as React from 'react';
import Navbarhome from "../Navbar/Navbarhome";
import Tophome from "../ContentHome/Tophome";
import Chart from "../Chart/Chart";
import Buttomhome from "../ContentHome/Buttomhome";

function Home(){ 
  return (
    <div>
      <Navbarhome />
      <Tophome />
      <Chart />
      <Buttomhome />
    </div>
  );
}
export default Home;
/*
 <Navbarhome />
      <Tophome />
      <Chart />
      <Buttomhome />
*/