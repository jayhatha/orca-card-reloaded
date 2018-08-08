import React from 'react';

const Cards = props => {
  return (
    <div>
      <h1>Your Cards</h1>
      <div className='card-container'>
        <div className='card-nickname'><h3>Scott's Card</h3></div>
        <div className='card-top'>
          <h2>BALANCE</h2>
        </div>
        <div className='card-balance'>
          <h1>$50</h1>
        </div>
        <div>
        <span className='card-serial'>0111001</span>
        <span className='card-passes'>
          PUGETPASS SEP18 $2.75
        </span>
        <span className='card-passes'>
          AUTO-RELOAD $25
        </span>
      </div>

      </div>
      <div className='card-buttons'>auto-load / pass / reload buttons go here</div>
    </div>
  );
};

export default Cards;
