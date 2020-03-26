import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  let className = 'Button';
  if (color === 'gray') className += ' ButtonGray';
  if (wide) className += ' ButtonWide';

  return <button className={className} type="button">{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
