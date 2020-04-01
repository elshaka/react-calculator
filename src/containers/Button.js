import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clickButton from '../actions';

const Button = ({
  name, color, wide, clickButton,
}) => {
  let className = 'Button';
  if (color === 'gray') className += ' ButtonGray';
  if (wide) className += ' ButtonWide';

  const handleClick = () => clickButton(name);

  return <button className={className} type="button" onClick={handleClick}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickButton: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default connect(null, { clickButton })(Button);
