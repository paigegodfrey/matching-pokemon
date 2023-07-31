/* eslint-disable react/prop-types */
import Card from '../Card/Card';

const GameContainer = ({ cards, setCards }) => {
  const clearCards = () => setCards([]);

  return (
    <div className='GameContainer'>
      <div style={{ marginTop: '10px' }}>
        <button className='reset-button' onClick={clearCards}>
          Clear All
        </button>
      </div>
      <div className='display-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <Card key={card?.id} />
        ))}
      </div>
    </div>
  );
}

export default GameContainer;
