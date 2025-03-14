    import * as React from 'react';
    import { LineChart } from '@mui/x-charts/LineChart';

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 8500, 9000, 9200, 9999];
    const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    ];

    export default function SimpleLineChart() {
    return (
        <LineChart
        width={500}
        height={300}
        series={[
            { data: pData, label: 'Bitcoin' },
            { data: uData, label: 'Regular index' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
    );
    }