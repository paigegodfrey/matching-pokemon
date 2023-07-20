/* eslint-disable react/prop-types */
const Square = ({ square, duplicateSquare, deleteSquare }) => {
  const { id, color, size } = square;
  // css style variables
  let squareSize = String(size) + 'px';
  let marginTop = '5px';
  let border = 'black solid 2px';

  return (
    <p
      className='Square'
      style={{
        backgroundColor: color,
        height: squareSize,
        width: squareSize,
        marginTop,
        border
      }}>
      <button onClick={() => duplicateSquare(square, id)}>Duplicate</button>
      <button onClick={() => deleteSquare(id)}>Delete</button>
    </p >
  );
}

export default Square;
