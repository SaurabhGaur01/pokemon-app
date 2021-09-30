import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonName extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
  }

  render() {
    const { changeName, filterName } = this.props;
    return (
      <div className="margin-y">
        <label htmlFor="txtName">
          Search By:
          <input data-testid="filter-name" className="margin-left" type="text" id="txtName" name="txtName" value={filterName} onChange={() => changeName(this.name.value.toLowerCase())} ref={input => { (this.name = input); }} placeholder="Name or Abilities" />
        </label>
      </div>
    );
  }
}

PokemonName.propTypes = {
  changeName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default PokemonName;