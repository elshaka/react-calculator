import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  let className = 'Button';
  if (color === 'gray') className += ' ButtonGray';
  if (wide) className += ' ButtonWide';

  const handleClick = () => clickHandler(name);

  return <button className={className} type="button" onClick={handleClick}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
