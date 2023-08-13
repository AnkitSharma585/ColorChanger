import { useState } from 'react';
import ColorChanger from './ColorChanger';

function App() {
  const [colors, setColors] = useState('');

  return (
    <div className='flex items-center justify-center flex-col gap-2 container my-4'>
      <h1 className='font-bold text-2xl text-gray-700'>Color Changing App</h1>
      <div
        style={{
          background: colors,
          width: '8rem',
          height: '8rem',
          border: '1px solid gray',
        }}
      />
      <ColorChanger onChange={setColors} />
    </div>
  );
}
export default App;
