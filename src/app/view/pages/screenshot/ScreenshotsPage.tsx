import { Button, SelectInput } from '@components';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function ScreenshotPage() {
  const n = 3; // Assume n is the number of timeline entries

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-3">
        Screenshot
      </h1>

      <div className="flex flex-col p-2">
        <div className="flex space-x-8 p-3">
          <div>
            <h1 className="font-bold">Team</h1>
            <SelectInput
              options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
              ]}
            />
          </div>
          <div>
            <h1 className="font-bold">User</h1>
            <SelectInput placeholder="Development" fullWidth options={[]} />
          </div>
          <div>
            <h1 className="font-bold">From</h1>
            <SelectInput placeholder="Development" fullWidth options={[]} />
          </div>
          <div>
            <h1 className="font-bold">To</h1>
            <SelectInput placeholder="Development" fullWidth options={[]} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 p-4 ">
            <h1 className="text-2xl font-bold mb-4">Captured At:</h1>

            <div className="p-6 ">
              <img
                src={
                  'https://webhost365.net/wp-content/uploads/2021/09/how-to-take-Screenshot.jpg'
                }
                className="max-w-full mb-4 max-w-lg"
              />
            </div>

            <div className="p-4 flex space-x-4">
              <Button>Capture Now</Button>
              <Button variant="filled" color="warning">
                Delete
              </Button>
            </div>
          </div>

          <div className="w-full md:w-2/5 p-4 ">
            <h1 className="text-2xl font-bold mb-4">Timeline </h1>

            {Array.from({ length: n }, (_) => (
              <div>
                <div className="flex items-center p-3">
                  <AiOutlineClockCircle size={30} className="mr-2" />
                  <h3>{`x minutes ago`}</h3>
                </div>
                <div className="p-10 border-l border-gray-500 ml-6">
                  <img
                    src={
                      'https://webhost365.net/wp-content/uploads/2021/09/how-to-take-Screenshot.jpg'
                    }
                    className="max-w-full mb-4 max-w-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
