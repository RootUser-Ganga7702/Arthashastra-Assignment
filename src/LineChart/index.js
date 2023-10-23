import React from "react";
import { Component } from "react";
import "./index.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dummyData = [
  { year: 2004, medals: 1 },
  { year: 2008, medals: 3 },
  { year: 2012, medals: 6 },
  { year: 2016, medals: 2 },
  { year: 2020, medals: 7 },
];

class LineChartData extends Component {
  render() {
    return (
      <div className="center-chart">
        <LineChart
          width={800}
          height={400}
          data={dummyData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            className="year-word"
            dataKey="year"
            label={{ value: "Years", position: "insideBottom", offset: -10 }}
          />
          <YAxis
            className="medalwon-Word"
            label={{
              value: "Medals Won",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="..."
            dataKey="medals"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }
}

export default LineChartData;
