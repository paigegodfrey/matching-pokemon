/* eslint-disable react/prop-types */
import Square from '../Square/Square';

const SquareList = ({ squares, deleteSquare }) => {
  return (
    <div className='SquareList'>
<<<<<<< Updated upstream
      <div className='display-container' style={{display: 'flex', flexWrap: 'wrap'}}>
        {squares.map((square) => (
          <Square
            id={square?.id}
            deleteSquare={deleteSquare}
            backgroundColor={square?.color}
            size={square?.size}
            key={square?.id} />
=======
      <div>
        <button className='reset-button' onClick={clearSquares}>
          Clear All
        </button>
      </div>
      <div className='display-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {squares.map((square) => (
          <Square
            square={square}
            duplicateSquare={duplicateSquare}
            deleteSquare={deleteSquare}
            key={square.id} />
>>>>>>> Stashed changes
        ))}
      </div>
    </div>
  );
}

export default SquareList;
