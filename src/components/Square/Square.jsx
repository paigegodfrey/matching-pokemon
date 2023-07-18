/* eslint-disable react/prop-types */
const Square = ({ color, height }) => {
  let units = 'px';
  let squareSize = height + units;
  
  return (
    // width is set to height, since squares have equal height and width
    <p className="Square" style={{ backgroundColor: color, height: squareSize, width: squareSize }}>
      SQUARE
    </p >
  );
}

export default Square;
