import operate from '../logic/operate';

const handleDigits = (amount, digit) => {
  if (amount) { return amount + digit; }
  if (digit === '.') { return '0.'; }
  return digit;
};

const reducer = (state = { total: null, next: null, operation: null }, action) => {
  let { total, next, operation } = state;

  switch (action.type) {
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
        operation = action.type;
      } else if (total) {
        operation = action.type;
      }
      break;
    default:
      if (action.type.match(/^\d|\.$/)) {
        if (operation) {
          next = handleDigits(next, action.type);
        } else {
          total = handleDigits(total, action.type);
        }
      }
  }

  return { total, next, operation };
};

export default reducer;
