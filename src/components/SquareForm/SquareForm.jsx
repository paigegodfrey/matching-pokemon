/* eslint-disable react/prop-types */
import { useState } from 'react';

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

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addSquare(
      {
        color: selectedColor,
        size: selectedSize,
      }
    );
  }

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="SquareForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <select onChange={handleColorChange}>
          <option value={'Select Color'}>-- Select Color --</option>
          {colorOptions.map((color, idx) => (
            <option key={idx} value={color.value}>{color.label}</option>
          ))}
        </select>
        <label htmlFor="size">Size:</label>
        <select onChange={handleSizeChange}>
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
