import React from 'react';
import { Line } from '@ant-design/charts';

const Chart = ({ data, xField, yField, size }) => {
    const config = {
        data,
        height: 400,
        xField,
        yField,
        point: {
            size,
            shape: 'diamond',
        },
    };
    return <Line {...config} />;
};

export default Chart;
