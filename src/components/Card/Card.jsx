/* eslint-disable react/prop-types */
const Card = ({ count }) => {
  // const { id, color, size } = card;

  // css style variables
  let backgroundColor = 'lightBlue';
  let cardSize = '100px';
  let textAlign= 'center';
  let margin = '5px';
  let border = 'black solid 2px';

  return (
    <p
      className='Card'
      style={{
        backgroundColor,
        height: cardSize,
        width: cardSize,
        textAlign,
        margin,
        border
      }}>
      {count}
    </p >
  );
}

export default Card;
