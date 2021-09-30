import React from 'react';
import PropTypes from 'prop-types';

const FilterType = ({ changeFilter, filter }) => {
  const TYPES = ['name',
    'height',
    'width',
  ];
  return (
    <React.Fragment>
      <div>
      <label htmlFor="selType">
        <span>Sort By: </span>
        <select data-testid="filter-type" className="select-box margin-left" name="selType" id="selType" value={filter} onChange={e => changeFilter(e.target.value)}>
          {
            ['Please Select', ...TYPES].map(item => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))
          }
        </select>
      </label>
    </div>
    </React.Fragment>
  );
};

FilterType.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterType;