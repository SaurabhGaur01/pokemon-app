import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const {
    id, name, sprites, height, weight, abilities
  } = pokemon;
  const abilitiesList = abilities.map(ability => ability.ability.name);
  return (
    <div>
      <Link className="pokemon-card" to={`/pokemon/${id}`} id="link-detail">
        <div className="d-flex-around title-card">
          <span>
            #
            {id}
          </span>
          <span data-testid="pokemon-name">
            {name && name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        </div>
        <img className="card-image" src={sprites.front_default} alt={name} />
        <span className="type-title">Height - {height}</span>
        <span className="type-title">Weight - {weight}</span>
        <div className="type-container">
          <span className="type-title">Abilities</span>
          <ul className="type-list">
            {
              abilitiesList && abilitiesList.map(ability => (<li key={ability}>{ability}</li>))
            }
          </ul>
        </div>
      </Link>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({}).isRequired,
    types: PropTypes.arrayOf.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default withRouter(Pokemon);