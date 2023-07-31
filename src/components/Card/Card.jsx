/* eslint-disable react/prop-types */
const Card = () => {
  // const { id, color, size } = card;
  
  // css style variables
  let cardSize = '100px';
  let marginTop = '5px';
  let border = 'black solid 2px';

  return (
    <p
      className='Card'
      style={{
        backgroundColor: 'blue',
        height: cardSize,
        width: cardSize,
        marginTop,
        border
      }}>
    </p >
  );
}

export default Card;
