import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// https://codesandbox.io/s/react-select-map-1qdik?file=/src/App.js:0-1099
const SquareForm = ({ addSquare, clearSquares }) => {
  const colorOptions = [
    {
      value: 'red',
      label: '🟥 Red'
    },
    {
      value: 'orange',
      label: '🟧 Orange'
    },
    {
      value: 'yellow',
      label: '🟨 Yellow'
    },
    {
      value: 'green',
      label: '🟩 Green'
    },
    {
      value: 'blue',
      label: '🟦 Blue'
    },
    {
      value: 'purple',
      label: '🟪 Purple'
    },
  ]

  const sizeOptions = [100, 150, 200];

  const INITIAL_FORM_DATA = { color: '', size: '' }
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = (event) => {
    event.preventDefault();
    addSquare(
      {
        id: uuidv4(),
        color: formData.color,
        size: formData.size,
      }
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <div className='SquareForm'>
      <form onSubmit={handleSubmit}>
        <select name='color' onChange={handleChange}>
          <option value={'Select Color'}>-- Select Color --</option>
          {colorOptions.map((color, idx) => (
            <option key={idx} value={color.value}>{color.label}</option>
          ))}
        </select>
        <select name='size' onChange={handleChange}>
          <option value={'Select Size'}>-- Select Size --</option>
          {sizeOptions.map((size, idx) => (
            <option key={idx} value={size}>{size}</option>
          ))}
        </select>
        <button>
          Create
        </button>
      </form>
      <div>
        <button className='reset-button' onClick={clearSquares}>
          Clear All
        </button>
      </div>
    </div >
  );
}

export default SquareForm;
