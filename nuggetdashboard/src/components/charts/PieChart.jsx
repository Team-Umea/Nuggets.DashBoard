import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 80, label: 'Bitcoin' },
              { id: 1, value: 10, label: 'Family' },
              { id: 2, value: 10, label: 'Cars' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
}
