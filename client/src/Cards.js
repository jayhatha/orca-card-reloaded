import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
          <h1>${props.card.balance}</h1>
        </div>
        <div>
        <span className='card-serial'>{props.card.id}</span>
        <span className='card-passes'>
          {props.card.pass ?
          (<p>AUTO-RELOAD {props.card.pass}</p>) : ('')
          }
        </span>
        <span className='card-passes'>
          {props.card.auto_reload ?
          (<p>AUTO-RELOAD {props.card.auto_reload}</p>) : ('')
          }
        </span>
      </div>

      </div>
      <div className='card-buttons'>
      <Button id="button" component={Link} to="/reload" className="button">Add value to card</Button>
      <Button id="button" component={Link} to="/addpass" className="button">Add a pass</Button>
      </div>
    </div>
  );
};

export default Cards;
