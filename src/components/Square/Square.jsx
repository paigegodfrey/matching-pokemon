/* eslint-disable react/prop-types */
const Square = ({ id, backgroundColor, size, deleteSquare }) => {

  // css style variables
  let squareSize = String(size) + 'px';
  let marginTop ='5px';
  let border = 'black solid 2px';

  return (
    <p
      className='Square'
      style={{
        backgroundColor,
        height: squareSize,
        width: squareSize,
        marginTop,
        border
      }}>
        <button onClick={() => deleteSquare(id)}>Delete</button>
    </p >
  );
}

export default Square;
