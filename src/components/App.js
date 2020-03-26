import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [calculator, setCalculator] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setCalculator(calculate(calculator, buttonName));
  };

  const result = calculator.next || calculator.total || undefined;

  return (
    <div className="App">
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
