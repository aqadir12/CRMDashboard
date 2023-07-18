import React from 'react';
import { config } from '../configurator/configurator';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const numeric = config.widgets.filter(x => x.type === 'numeric').flat()[0]
const percentage = numeric.dataSource;
export default function ProgressCircle() {
    return (
        <div className='border my-3'>
            <h2 className='text-center py-4'>
                {numeric.title}
            </h2>
            <div className='d-flex justify-content-center'>
                <div className='w-75'>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                </div>
            </div>
        </div>
    )
}
