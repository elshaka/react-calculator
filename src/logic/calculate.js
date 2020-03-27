import operate from './operate';

const handleDigits = (amount, digit) => {
  if (amount) { return amount + digit; }
  if (digit === '.') { return '0.'; }
  return digit;
};

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  switch (buttonName) {
    case '=':
      if (total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    case '+/-':
      if (operation) {
        next = (next * -1).toString();
      } else {
        total = (total * -1).toString();
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      next = (0.01 * total).toString();
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      operation = buttonName;
      break;
    default:
      if (operation) {
        next = handleDigits(next, buttonName);
      } else {
        total = handleDigits(total, buttonName);
      }
  }

  return { total, next, operation };
};

export default calculate;
