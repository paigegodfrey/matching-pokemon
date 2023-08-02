/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { pokemonId, name, imageUrl } = card;

  // css style variables
  let backgroundColor = 'lightBlue';
  let cardSize = '125px';
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
      {`${pokemonId}- ${name}`}
      <img src={imageUrl} alt={`${name} pic`} style={{height:`100px`}}/>
    </p >
  );
}

export default Card;
