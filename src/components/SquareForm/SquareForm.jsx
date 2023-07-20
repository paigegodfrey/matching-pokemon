import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// https://codesandbox.io/s/react-select-map-1qdik?file=/src/App.js:0-1099
const SquareForm = ({ addSquare }) => {
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
  ];

  // value refers to height/width in px
  const sizeOptions = [
    {
      value: 100,
      label: 'Small'
    },
    {
      value: 150,
      label: 'Medium'
    },
    {
      value: 200,
      label: 'Large'
    }
  ];

  const INITIAL_FORM_DATA = { color: '', size: '' }
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const validSelection = () => {
    return Object.values(formData).every(x => x !== '');
  }

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
            <option key={idx} value={size.value}>{size.label}</option>
          ))}
        </select>
        <button disabled={!validSelection()}>
          Create
        </button>
      </form>
    </div >
  );
}

export default SquareForm;
