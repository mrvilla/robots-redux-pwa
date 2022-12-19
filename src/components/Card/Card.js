import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className="dib br3 pa2 ma2 tc">
      <img src={`https://robohash.org/${id}?size=220x220`} alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
