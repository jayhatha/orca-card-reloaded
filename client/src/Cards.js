import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {
  return (
    <div>
      <h1>Your Cards</h1>
      <div className='card-container'>
        <div className='card-nickname'>
          <h3>{props.card.nickname}</h3>
        </div>
        <div className='card-top'>
          <h2>BALANCE</h2>
        </div>
        <div className='card-balance'>
          <h1>${props.card.balance}</h1>
        </div>
        <div className="card-bottom">
          <span className='card-serial'>{props.card.id}</span>
          <div className="card-pass-value">
            {props.card.pass ? (<p className="card-passes">PASS {props.card.pass}</p>) : (<p className="card-passes">PASS: NONE</p>)}
            {props.card.auto_reload ? (<p className='card-passes'>AUTO-RELOAD: ${props.card.auto_reload}</p>) : (<p className="card-passes">AUTO-RELOAD: DISABLED</p>)}
          </div>
        </div>
      </div>
      <div className='card-buttons'>
        <Link id="button" to="/reload" className="button">Add value to card</Link>
        <Link id="button" to="/addpass" className="button">Add a pass</Link>
      </div>
    </div>
  );
};

export default Cards;
