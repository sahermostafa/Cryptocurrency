import React from 'react';
import PieChart, { Legend,  Series, Label, Font, Connector,} from 'devextreme-react/pie-chart';
//import { dataSource } from './data.js';

function Chartpie(){ 
  const dataSource = [
    { name: "Bitcoin", ratio: 2000000000 },
    { name: "Ethereum", ratio: 1500000000 },
    { name: "Ripple", ratio: 1000000000 },
    { name: "Litecoin", ratio: 500000000 },
  ];

    return (
      <PieChart id="pie" palette="Bright" dataSource={dataSource} >
        <Legend orientation="horizontal" itemTextPosition="right" horizontalAlignment="center" verticalAlignment="bottom" columnCount={4} />
        <Series argumentField="name" valueField="ratio">
          <Label visible={true} position="columns" customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>
    );
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}
export default Chartpie;
