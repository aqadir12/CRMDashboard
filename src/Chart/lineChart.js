import React, { useContext } from 'react';
import { MyContext, generateRandomArray } from '../App';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Linechart() {
  const { text } = useContext(MyContext);

  const data = {
    labels: text.filter(x => x.type === 'line')[0].labels,
    datasets: text.filter(x => x.type === 'line')[0].dataSource.map(x => ({
      backgroundColor: x.backgroundColor,
      borderColor: x.borderColor,
      data: generateRandomArray(x.data),
      fill: x.fill,
      label: x.label,
      lineTension: x.lineTension
    }))

  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: text.filter(x => x.type === 'line')[0].title,
      },
    },
  };
  return (<div className='border my-3'>
    <Line options={options} data={data} />;
    <div id="textLine" className="d-flex justify-content-around my-3">
      <div className="text-center">
        <h6 className="">NUMBER OF INVOICES</h6>
        <h6 className="fw-bold invoices">75</h6>
      </div>

      <div className="text-center mx-2">
        <h6 className="">SALES</h6>
        <h6 className="fw-bold sales">$5649</h6>
      </div>
      <div className="text-center">
        <h6 className="">COGS</h6>
        <h6 className="fw-bold cogs">$2004</h6>
      </div>
    </div>
  </div>)
}
