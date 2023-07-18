import React from 'react';
import Linechart from './Chart/lineChart';
import Piechart from './Chart/piehart';
import ProgressCircle from './Chart/progresscircle'
import Table from './Chart/table';
import Nav from './Nav/nav';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { config } from './configurator/configurator';
const numeric = config.widgets.filter(x => x.type === 'numeric').flat()[0]


export default function App() {
  const Pri = config.widgets.sort((a, b) => a.priority - b.priority).map(x => x.componentName);

  function renderSwitch(param) {

    switch (param) {
      case 'Linechart':
        return <div className='col-md-8'><Linechart /> </div>;
      case 'ProgressCircle':
        return <div className='col-md-4'><ProgressCircle /> </div>;
      case 'Piechart':
        return <div className='col-md-4'> <Piechart /></div>;
      case 'Table':
        return <div className='col-md-8'><Table /> </div>;
      default:
        return 'Linechart';
    }
  };

  return (
    <div>
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
          {Pri.map(x => renderSwitch(x))}
        </div>
      </div>
    </div>

  )
}

