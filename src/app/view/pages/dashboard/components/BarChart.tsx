import React from 'react';
import { Chart } from 'react-google-charts';

const BarChart: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Chart
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Productivity'],
          ['Monday', 38],
          ['Tuesday', 80],
          ['Wednesday', 75],
          ['Thursday', 90],
          ['Friday', 55],
        ]}
        options={{
          title: 'Company Performance',
          legend: { position: 'none' },
          bars: 'vertical',
          colors: ['#B5B7EF'],
        }}
        width={'100%'}
        height={'250px'}
      />
    </div>
  );
};

export default BarChart;
