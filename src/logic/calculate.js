import operate from './operate';

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
      total *= (-1);
      next *= (-1);
      break;
    case 'A/C':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      next = 0.01 * total;
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      operation = buttonName;
      break;
    default:
      if (operation) {
        total += buttonName;
      } else {
        next += buttonName;
      }
  }

  return { total, next, operation };
};

export default calculate;
