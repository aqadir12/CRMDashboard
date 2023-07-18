import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { config } from '../configurator/configurator'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineData = config.widgets.filter(x => x.type === 'line').flat()[0]
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: lineData.title,
    },
  },
};

const labels = lineData.labels;
export const data = {
  labels,
  datasets:
    lineData.dataSource
};

export default function Linechart() {
  return (<div className='border my-3'>
    <Line options={options} data={data} />;
    <div id="textLine" class="d-flex justify-content-around my-3">
        <div class="text-center">
          <h6 class="">NUMBER OF INVOICES</h6>
          <h6 class="fw-bold invoices">75</h6>
        </div>

        <div class="text-center mx-2">
          <h6 class="">SALES</h6>
          <h6 class="fw-bold sales">$5649</h6>
        </div>
        <div class="text-center">
          <h6 class="">COGS</h6>
          <h6 class="fw-bold cogs">$2004</h6>
        </div>
      </div>
  </div>) 
}
