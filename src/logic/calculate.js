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
      total = (total * -1).toString();
      next = (next * -1).toString();
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
        next = next ? next + buttonName : buttonName;
      } else {
        total = total ? total + buttonName : buttonName;
      }
  }

  return { total, next, operation };
};

export default calculate;
