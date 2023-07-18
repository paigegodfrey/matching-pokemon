/* eslint-disable react/prop-types */
import Square from '../Square/Square';

const SquareList = ({ squares }) => {
  return (
    <div className="SquareList">
      {squares.map((square, idx) => (
          <Square color={square?.color} height={square?.height} key={idx}/>
        ))}
    </div>
  );
}

export default SquareList;
