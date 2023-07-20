import React, { useContext } from 'react';
import { MyContext, generateRandomArray } from '../App';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function ProgressCircle() {
    const { text } = useContext(MyContext);
    const numeric = text.filter(x => x.type === 'numeric')[0]
    const percentage = generateRandomArray(numeric.dataSource);
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
