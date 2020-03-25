import Big from 'big.js';

const operate = (first, second, operation) => {
  const a = Big(first);
  const b = Big(second);

  switch (operation) {
    case '+':
      return a.plus(b).toString();
    case '-':
      return a.plus(b).toString();
    case '×':
      return a.times(b).toString();
    case '÷':
      if (b === '0') return '0';
      return a.div(b).toString();
    default:
      return '0';
  }
};

export default operate;
