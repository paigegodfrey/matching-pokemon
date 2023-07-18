import { useState } from 'react';

const SquareForm = ({ addSquare }) => {
  const INITIAL_FORM_DATA = { color: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addSquare(formData);
    setFormData(INITIAL_FORM_DATA);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <div className="SquareForm">
      <form onSubmit={handleOnSubmit}>
        <label className="form-label" htmlFor="color">Color:</label>
        <input
          className="form-input"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="qty">Height:</label>
        <input
          className="form-input"
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SquareForm;
