import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPokemons from '../../actions/filterPokemons';
import sortPokemons from '../../actions/sortPokemons';
import AppDropdown from '../shared/AppDropdown';
import { SORT_TYPES } from '../../constants/appConstants';

const FilterBar = ({
  filterPokemons,
  sortPokemons,
}) => {
  const inputOnchage = (event) => {
    filterPokemons(event.target.value);
  }

  const onSortChange = (event) => {
    sortPokemons(event.target.value);
  }

  return (
    <div className="row">
      <div className="center-child col-md-4">
        <AppDropdown
          label="Sort By"
          options={SORT_TYPES}
          onSelection={onSortChange}
        />
     </div>

      <div className="center-child col-md-4">
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                    Search By
                </span>
            </div>
            <input
              id="name-input"
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={inputOnchage}
              placeholder="Name or Abilities" 
            />
        </div>
      </div>
  </div>
  )
}

FilterBar.propTypes = {
  filterPokemons: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  filterPokemons,
  sortPokemons,
};

export { FilterBar as TestableFilterBar };

export default connect(null, mapDispatchToProps)(FilterBar);