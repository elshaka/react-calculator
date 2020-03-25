import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="ButtonRow">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div className="ButtonRow">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="×" />
    </div>
    <div className="ButtonRow">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div className="ButtonRow">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div className="ButtonRow">
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
