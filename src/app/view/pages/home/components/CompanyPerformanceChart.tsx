import { useDateCompanyDataFetch } from '@api';
import { FC } from 'react';
import Chart from 'react-google-charts';
import DataRendingView from 'src/app/view/common/DataRenderingView';

const CompanyPerformanceChart: FC = () => {
  const { data: response, isLoading } = useDateCompanyDataFetch('');
  return (
    <div>
      <div className="text-xl font-medium pb-2">Employee Rating</div>

      <DataRendingView
        data={response?.data}
        loading={isLoading}
        render={(data) => {
          const chartData = [
            ['Date', 'Score'],
            ...data.map((item) => [item.date, item.score]),
          ];

          return (
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={chartData}
              options={{
                curveType: 'function',
                legend: false,
                hAxis: {
                  title: 'Date',
                },
                vAxis: {
                  title: 'Score',
                },
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default CompanyPerformanceChart;
