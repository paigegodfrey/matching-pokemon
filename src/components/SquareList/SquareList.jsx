import Square from '../Square/Square';

const SquareList = ({ squares }) => {
  return (
    <div className="SquareList">
      {squares.map(square => {
        <Square color={square.color} height={square.height} />
      })}
    </div>
  );
}

export default SquareList;
