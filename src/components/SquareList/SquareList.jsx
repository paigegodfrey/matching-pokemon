/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import Square from '../Square/Square';

const SquareList = ({ squares, setSquares }) => {
  const deleteSquare = (id) => {
    setSquares((prevSquares) => prevSquares.filter((square) => square.id !== id));
  }

  const clearSquares = () => setSquares([]);

  const duplicateSquare = (square, id) => {
    const squaresCopy = [...squares];
    const idx = squares.findIndex((sqr) => sqr.id === id);
    squaresCopy.splice(idx, 0, {
      id: uuidv4(),
      color: square.color,
      size: square.size,
    });
    setSquares(squaresCopy);
  }

  return (
    <div className='SquareList'>
      <div>
        <button className='reset-button' onClick={clearSquares}>
          Clear All
        </button>
      </div>
      <div className='display-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          {squares.map((square) => (
            <Square
              square={square}
              duplicateSquare={duplicateSquare}
              deleteSquare={deleteSquare}
              key={square.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SquareList;
