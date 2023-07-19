/* eslint-disable react/prop-types */
import Square from '../Square/Square';

const SquareList = ({ squares }) => {
  return (
    <div className='SquareList'>
      <div className='display-container'>
        {squares.map((square, idx) => (
          <Square backgroundColor={square?.color} size={square?.size} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default SquareList;
