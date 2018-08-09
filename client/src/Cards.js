import React from 'react';

const Cards = props => {
  return (
    <div>
      <h1>Your Cards</h1>
      <div className='card-container'>
        <div className='card-nickname'><h3>{props.card.nickname}</h3></div>
        <div className='card-top'>
          <h2>BALANCE</h2>
        </div>
        <div className='card-balance'>
          <h1>{props.card.balance}</h1>
        </div>
        <div>
        <span className='card-serial'>{props.card.id}</span>
        <span className='card-passes'>
          PUGETPASS SEP18 $2.75
        </span>
        <span className='card-passes'>
          {props.card.auto_reload ?
          (<p>AUTO-RELOAD {props.card.auto_reload}</p>) : ('')
          }
        </span>
      </div>

      </div>
      <div className='card-buttons'>auto-load / pass / reload buttons go here</div>
    </div>
  );
};

export default Cards;
