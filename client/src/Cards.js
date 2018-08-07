import React from 'react';

const Cards = props => {
  return (
    <div className='card-container'>
      <div className='card-nickname'><h3>Scott's Card</h3></div>
      <div className='card-top'>
        <h2>BALANCE</h2>
      </div>
      <div className='card-balance'>
        <h1>$50</h1>
      </div>
      <div className='card-bottom'>
        <div className='card-serial'>0111001</div>
        <div className='card-passes'><p>AUTO-LOAD: $25</p><p>PUGETPASS SEP18 $2.75</p></div>
      </div>
      <div className='card-buttons'>SHUT UP</div>
    </div>
  );
};

export default Cards;
