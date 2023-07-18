/* eslint-disable react/prop-types */
const Square = ({ backgroundColor, size }) => {

  // css style variables
  let squareSize = String(size) + 'px';

  console.log(backgroundColor);
  console.log(size);

  let marginTop ='5px';
  let border = 'black solid 2px';

  return (
    <p
      className="Square"
      style={{
        backgroundColor,
        height: squareSize,
        width: squareSize,
        marginTop,
        border
      }}>
        <button>Duplicate</button>
        <button>Delete</button>
    </p >
  );
}

export default Square;
