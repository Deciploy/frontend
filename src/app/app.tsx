import { Button } from '@components';
export function App() {
  return (
    <div className="flex justify-center">
      <Button
        onClick={() => {
          console.log('clicked');
        }}
      >
        Filled
      </Button>
    </div>
  );
}

export default App;
