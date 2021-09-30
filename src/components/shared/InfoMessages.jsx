import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const InfoMessages = ({ message }) => (
  <div className="info-message self-center">
    {message}
  </div>
);

InfoMessages.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  message: state.message,
});

export default connect(mapStateToProps)(InfoMessages);