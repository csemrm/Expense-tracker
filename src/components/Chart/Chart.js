import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";
const Chart = (props) => {
  console.log(props);
  const dataPointValues = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const totalMaximum = Math.max(...dataPointValues);

  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
