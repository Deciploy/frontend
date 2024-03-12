import { Button, SelectInput } from '@components';

export default function InsightsPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-3">
        Insights
      </h1>

      <div className="flex flex-col p-2">
        <div className="flex space-x-8 p-3">
          <div>
            <h1>Team</h1>
            <SelectInput
              placeholder="All"
              options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
              ]}
            />
          </div>
          <div>
            <h1>Employee</h1>
            <SelectInput placeholder="All" fullWidth />
          </div>
          <div>
            <h1>Activity Type</h1>
            <SelectInput placeholder="All" fullWidth />
          </div>
          <div>
            <h1>Activity</h1>
            <SelectInput placeholder="All" fullWidth />
          </div>

          <div>
            <h1>From</h1>
            <SelectInput placeholder="All" fullWidth />
          </div>
          <div>
            <h1>To</h1>
            <SelectInput placeholder="All" fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
}
