import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

import { getChartOptions } from "./chartHelper";

type LineChartProps = {
  data: ChartData<"line">;
  // eslint-disable-next-line react/require-default-props
  options?: ChartOptions<"line">;
};

const LineChart = ({ data, options }: LineChartProps) => {
  const mergedOptions = getChartOptions(options);
  return <Line data={data} options={mergedOptions} />;
};

export default LineChart;
