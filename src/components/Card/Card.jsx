/* eslint-disable react/prop-types */
const Card = ({ card, count }) => {
  const { name } = card;

  // css style variables
  let backgroundColor = 'lightBlue';
  let cardSize = '100px';
  let padding = '2px';
  let margin = '5px';
  let border = 'black solid 2px';

  return (
    <p
      className='Card'
      style={{
        backgroundColor,
        height: cardSize,
        width: cardSize,
        padding,
        margin,
        border
      }}>
      {`${count} - ${name}`}
    </p >
  );
}

export default Card;
