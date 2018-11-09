const Stack = require('./stack');

function peek(stack) {
  return stack.top.value;
}

function display(stack) {
  let temp = stack.top;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

module.exports = { peek, display };
