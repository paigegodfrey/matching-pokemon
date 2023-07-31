/* eslint-disable react/prop-types */
import { useState } from 'react';

const GameForm = ({ generatePairs }) => {
  const DEFAULT_NUM_PAIRS = 10;
  const INITIAL_FORM_DATA = { numPairs: DEFAULT_NUM_PAIRS };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = (event) => {
    event.preventDefault();
    generatePairs(formData.numPairs);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  return (
    <div className='GameForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numPairs">Number of Pairs:</label>
        <input
          type="number"
          name="numPairs"
          value={formData.numPairs}
          onChange={handleChange}
        />
        <button>
          Create
        </button>
      </form>
    </div >
  );
}

export default GameForm;
