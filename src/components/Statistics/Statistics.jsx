import React from 'react';
import './Statistics.css'

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const assignmentData = [
    {
        name: 'Assignment-One',
        value: 27,
        id: 2365
    },
    {
        name: 'Assignment-Two',
        value: 27,
        id: 3515
    },
    {
        name: 'Assignment-Three',
        value: 5,
        id: 8745
    },
    {
        name: 'Assignment-Four',
        value: 20,
        id: 6548
    },
    {
        name: 'Assignment-Five',
        value: 45,
        id: "1545"
    },
    {
        name: 'Assignment-Six',
        value: 5,
        id: 9454
    },
    {
        name: 'Assignment-Seven',
        value: 5,
        id: 3984
    },
];

const Statistics = () => {
    return (
        <div>
            <h1 className='recharts-header'>Assignment Numbers With Recharts</h1>
            <div className='pie-chart'>
                <PieChart width={600} height={600}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={assignmentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
