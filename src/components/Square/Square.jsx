const Square = ({color, height}) => {

  return (
    // width is set to height, since squares have equal height and width
    <div className="Square" style={{ backgroundColor: { color }, height: { height }, width: { height } }}>
      SQUARE
    </div >
  );
}

export default Square;
