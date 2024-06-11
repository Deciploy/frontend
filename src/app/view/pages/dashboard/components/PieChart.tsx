import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Chart
        width={'100%'}
        height={'100%'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours '],
          ['Vs Code', 11],
          ['Excel', 2],
          ['Word', 5],
          ['Chrome', 22],
        ]}
        options={{
          chartArea: { width: '100%', height: '100%' },
        }}
      />
    </div>
  );
};

export default PieChart;
