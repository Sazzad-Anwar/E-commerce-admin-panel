import React from 'react';
import { Column } from '@ant-design/charts';

const BarChart = ({ xField, yField, fillColor, data }) => {
    const config = {
        data,
        xField: xField,
        yField: yField,
        label: {
            position: 'middle',
            style: {
                fill: fillColor,
                opacity: 0.6,
            },
        },
        meta: {
            month: { alias: 'Month' },
            sales: { alias: 'Sales' },
        },
    };
    return (
        <Column
            {...config}
            onReady={(plot) => {
                plot.on('plot:click', (evt) => {
                    const { x, y } = evt;
                    const { xField } = plot.options;
                    const tooltipData = plot.chart.getTooltipItems({ x, y });
                    console.log(tooltipData);
                });
            }}
        />
    );
};

export default BarChart;
