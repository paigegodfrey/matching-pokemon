/* eslint-disable react/prop-types */
import Card from '../Card/Card';

const GameContainer = ({ cards, clearCards }) => {

  return (
    <div className='GameContainer'>
      <div style={{ marginTop: '10px' }}>
        <button className='reset-button' onClick={clearCards}>
          Clear All
        </button>
      </div>
      <div className='display-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card, idx) => (
          <Card key={card?.id} card={card} count={idx + 1} />
        ))}
      </div>
    </div>
  );
}

export default GameContainer;
