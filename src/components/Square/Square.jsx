/* eslint-disable react/prop-types */
const Square = ({ color, height }) => {
  let units = 'px';
  let squareSize = height + units;

  return (
    <p
      className="Square"
      style={{
        backgroundColor: color,
        height: squareSize,
        width: squareSize,
        border: 'black solid 2px',
      }}>
        <button onSubmit={''}>Duplicate</button>
        <button onSubmit={''}>Delete</button>
    </p >
  );
}

export default Square;
