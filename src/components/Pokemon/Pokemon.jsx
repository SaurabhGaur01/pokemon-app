import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const {
    number, name, image, height, weight, abilities
  } = pokemon;
  return (
    <div>
      <Link className="pokemon-card" to={`/pokemon/${number}`} id="link-detail">
        <div className="d-flex-around title-card">
          <span>
            #
            {number}
          </span>
          <span data-testid="pokemon-name">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        </div>
        <img className="card-image" src={image} alt={name} />
        <span className="type-title">Height - {height}</span>
        <span className="type-title">Weight - {weight}</span>
        <div className="type-container">
          <span className="type-title">Abilities</span>
          <ul className="type-list">
            {
              abilities.map(ability => (<li key={ability}>{ability}</li>))
            }
          </ul>
        </div>
      </Link>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

export default withRouter(Pokemon);