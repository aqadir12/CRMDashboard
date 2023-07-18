import React, { useState } from 'react';

export default function InputList(props) {
  const [data, setData] = useState(props.props[0]);
  let sum = 0;
  let dataArr = data.data;
  dataArr.map(data1 => {
    sum += data1;
  });
  const content = data.data.map((n, i) =>
    <div className="d-flex justify-content-start align-items-center">
      <div class="pieSales ms-2" style={{ 'backgroundColor': data.backgroundColor[i], 'borderColor': data.borderColor[i], 'width': Math.floor(((n * 100) / sum).toFixed(2)) + "%" }} ></div>
      <div>{Math.floor(((n * 100) / sum).toFixed(2)) + "%"}</div>
    </div>
  )
  return (
    <div>{content}</div>
  )
}
