import React from 'react';
import PropTypes from 'prop-types';

const AppDropdown = ({
    label,
    options,
    onSelection,
}) => {
    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                    {label}
                </span>
            </div>
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={onSelection}
                data-testid='connectedDropdown'
            >
                {
                    options.map(({ value, text }, index) => (
                        <option key={index} value={value}>{text}</option>
                    ))
                }
            </select>
        </div>
    );
}

AppDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSelection: PropTypes.func.isRequired,
};

export default AppDropdown;