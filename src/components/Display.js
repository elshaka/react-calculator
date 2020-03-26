import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => <input className="Display" value={result} />;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
