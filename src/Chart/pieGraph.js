import React, { useState } from 'react';

export default function InputList(props) {
  const [data] = useState(props.props.num);
  let sum = 0;
  let dataArr = data;
  dataArr.map(data1 => {
  return  sum += data1;
  });
  const content = data.map((n, i) =>
    <div className="d-flex justify-content-start align-items-center" key={i}>
      <div className="pieSales ms-2"  style={{ 'backgroundColor': props.props.color[i],
       'borderColor': props.props.color[i], 
       'width': Math.floor(((n * 100) / sum).toFixed(2)) + "%" }} ></div>
      <div>{Math.floor(((n * 100) / sum).toFixed(2)) + "%"}</div>
    </div>
  )
  return (
    <div>{content}</div>
  )
}
