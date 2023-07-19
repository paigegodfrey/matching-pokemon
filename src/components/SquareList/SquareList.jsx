/* eslint-disable react/prop-types */
import Square from '../Square/Square';

const SquareList = ({ squares, deleteSquare }) => {
  return (
    <div className='SquareList'>
      <div className='display-container'>
        {squares.map((square) => (
          <Square
            id={square?.id}
            deleteSquare={deleteSquare}
            backgroundColor={square?.color}
            size={square?.size}
            key={square?.id} />
        ))}
      </div>
    </div>
  );
}

export default SquareList;
