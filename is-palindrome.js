const Stack = require('./stack');
const { peek, display } = require('./stack-helper');

/**
 * d a d
 *  push
 *  d
 *  a
 *  d
 *  pop
 *  d 1
 *  a 2
 *  d  3
 *
 * string
 * resultString
 * push each character of string into stack
 * store
 *  pop each character of stack
 *    set equal to result
 *  if order is preserved, its palindrome
 *
 */

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  let result = '';

  for (let char of s) {
    stack.push(char);
  }

  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  //if true return true
  return result === s;
}

console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));
