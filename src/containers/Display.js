import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Display = ({ result }) => <div className="Display">{result}</div>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

const mapStateToProps = state => ({
  result: state.next || state.total || undefined,
});

export default connect(mapStateToProps)(Display);
