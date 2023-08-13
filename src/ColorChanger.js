import { useState } from 'react';

function ColorChanger({ onChange }) {
  const [select, setSelect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(select);
    setSelect('');
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='m-2 p-1 border border-gray-500 bg-gray-50'
          value={select}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
export default ColorChanger;
