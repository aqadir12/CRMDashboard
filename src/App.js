import React, { createContext, useState, useEffect } from 'react';
import Linechart from './Chart/lineChart';
import Piechart from './Chart/piehart';
import ProgressCircle from './Chart/progresscircle'
import Table from './Chart/table';
import Nav from './Nav/nav';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { config } from './configurator/configurator';
const numeric = config.widgets.filter(x => x.type === 'numeric').flat()[0]

export const MyContext = createContext("");

export const generateRandomArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomValue());
  }
  return arr;
}

function getRandomValue(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default function App() {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(true);
  // const url = "https://my.api.mockaroo.com/appconfig.json?key=c9275ec0";
  const url = "https://api.npoint.io/cae811cd268f8663002b";

  const fetchData = async () => {
    try {
      await fetch(url).then(res => res.json()).then(data => setText(data));
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])


  function renderSwitchs(param, i) {
    switch (param) {
      case 'line':
        return <div key={i} className='col-md-8'><Linechart /> </div>;
      case 'numeric':
        return <div key={i} className='col-md-4'><ProgressCircle /> </div>;
      case 'pie':
        return <div key={i} className='col-md-4'> <Piechart /></div>;
      case 'table':
        return <div key={i} className='col-md-8'><Table /> </div>;
      default:
        return;
    }
  };

  if (loading) {
    return (
      <>
        <div>Loading...</div>
      </>)
  }
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <Nav />
        <div className='container'>
          <div className="col-lg-12">
            <h4 className="card p-3">Wellcome Tim Collins</h4>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="card p-3 mb-2">
                    <div className="bb-1">
                      <h6><strong>Repairs</strong> (10)</h6>
                    </div>
                    <div>
                      <p><strong>$</strong><span className="numprices">7645.89</span></p>
                      <div className="d-flex justify-content-between">
                        <p className="m-0">(25%)</p>
                        <p className="m-0">(15000)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-3 mb-2">
                    <div className="bb-1">
                      <h6><strong> Network Unlocks</strong> (10)</h6>
                    </div>
                    <div>
                      <p><strong>$</strong><span className="numprices">7645.89</span></p>
                      <div className="d-flex justify-content-between">
                        <p className="m-0">(25%)</p>
                        <p className="m-0">(15000)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-3 mb-2">
                    <div className="bb-1">
                      <h6><strong>Accessories & Parts </strong> (5)</h6>
                    </div>
                    <div>
                      <p><strong>$</strong><span className="numprices">7645.89</span></p>
                      <div className="d-flex justify-content-between">
                        <p className="m-0">(25%)</p>
                        <p className="m-0">(15000)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-3 mb-2">
                    <div className="bb-1">
                      <h6><strong> Trade In</strong> (10)</h6>
                    </div>
                    <div>
                      <p><strong>$</strong><span className="numprices">7645.89</span></p>
                      <div className="d-flex justify-content-between">
                        <p className="m-0">(25%)</p>
                        <p className="m-0">(15000)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card p-3 h-100">
                <h4 className="color-danger">LOGO</h4>
                <h6 className="fw-bolder mb-2">Store Profile</h6>
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="w-100 bar">
                      <span style={{ width: numeric.dataSource + '%' }} className="progress"></span>
                    </div>

                    <span className="fw-bolder ms-3" >{numeric.dataSource}%</span>
                  </div>
                  <p className="color-success m-0">Complete your profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            {text.map((x, i) => renderSwitchs(x.type, i))}
          </div>
        </div>
      </MyContext.Provider>
    </div>
  )
}

