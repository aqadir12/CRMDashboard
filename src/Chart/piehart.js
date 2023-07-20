import React, { useContext } from 'react';
import { MyContext, generateRandomArray } from '../App';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { config } from '../configurator/configurator';
import InputList from '../Chart/pieGraph';
ChartJS.register(ArcElement, Tooltip, Legend);

// const pieData = config.widgets.filter(x => x.type === 'pie')[0];




export default function Piechart() {
  const { text } = useContext(MyContext);
  const calculatePercentage = (value, total) => ((value / total) * 100).toFixed(2);
  const options = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const dataArr = ctx.chart.data.datasets[0].data;
          const total = dataArr.reduce((acc, data) => acc + data, 0);
          const percentage = calculatePercentage(value, total);
          return percentage + '%';
        },
        color: 'white', // Customize the label text color
        display: true,
      },
    },
  };
  const pieData = text.filter(x => x.type === 'pie')[0].dataSource
    .map(x => ({
      "backgroundColor": x.backgroundColor,
      "borderColor": x.borderColor,
      "borderWdt": x.borderWdt,
      "data": generateRandomArray(x.data),
      "label": x.label
    })
    )
  const data = {
    labels: text.filter(x => x.type === 'pie')[0].labels,
    datasets: pieData,
    options: options,
  };
  return (
    <div className='border my-3'>
      <div className='container'>
        <h4 className='py-3'>{text.filter(x => x.type === 'pie')[0].title}</h4>
        <div class="d-flex justify-content-center">
          <Pie data={data} options={options} />

        </div>
        <div>

          <InputList props={{num: pieData[0].data, color: pieData[0].borderColor} } />
        </div>
      </div>
    </div>
  )

}
