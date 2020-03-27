import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="ButtonPanel">
    <div className="ButtonRow">
      <Button color="gray" name="AC" clickHandler={clickHandler} />
      <Button color="gray" name="+/-" clickHandler={clickHandler} />
      <Button color="gray" name="%" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} />
    </div>
    <div className="ButtonRow">
      <Button color="gray" name="7" clickHandler={clickHandler} />
      <Button color="gray" name="8" clickHandler={clickHandler} />
      <Button color="gray" name="9" clickHandler={clickHandler} />
      <Button name="×" clickHandler={clickHandler} />
    </div>
    <div className="ButtonRow">
      <Button color="gray" name="4" clickHandler={clickHandler} />
      <Button color="gray" name="5" clickHandler={clickHandler} />
      <Button color="gray" name="6" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} />
    </div>
    <div className="ButtonRow">
      <Button color="gray" name="1" clickHandler={clickHandler} />
      <Button color="gray" name="2" clickHandler={clickHandler} />
      <Button color="gray" name="3" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} />
    </div>
    <div className="ButtonRow">
      <Button color="gray" wide name="0" clickHandler={clickHandler} />
      <Button color="gray" name="." clickHandler={clickHandler} />
      <Button name="=" clickHandler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
