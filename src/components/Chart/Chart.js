import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //we need to get the max value of months
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMax = Math.max(...dataPointsValues) //spread operator because max take max(1,2,3)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
