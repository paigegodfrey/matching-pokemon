/* eslint-disable react/prop-types */
import Square from '../Square/Square';

const SquareList = ({ squares, clearSquares }) => {
  return (
    <div className="SquareList">
      <div className='reset-container'>
        <button className='reset-button' onSubmit={clearSquares}>
          Clear All
        </button>
      </div>
      <div className='display-container'>
        {squares.map((square, idx) => (
          <Square color={square?.color} height={square?.height} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default SquareList;
