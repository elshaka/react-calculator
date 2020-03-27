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
      if (operation && next) {
        next = (next * -1).toString();
      } else if (total) {
        total = (total * -1).toString();
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      if (operation && next) {
        next = (next * 0.01).toString();
      } else if (total) {
        total = (total * 0.01).toString();
      }
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      if (operation && total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = buttonName;
      } else if (total) {
        operation = buttonName;
      }
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
