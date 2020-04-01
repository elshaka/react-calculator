import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Display = ({ result }) => <div className="Display">{result}</div>;

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  result: state.next || state.total || '0',
});

export default connect(mapStateToProps)(Display);
