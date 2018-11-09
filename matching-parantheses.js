const Stack = require('./stack');

function validParentheses(s){
  const stack = new Stack();

  let index = 0;

  for(let c of s){
    if(c === '('){
      stack.push(index);
    } else {
      if(c === ')'){
        if(stack.isEmpty()){
          console.log(`Character at index ${index} is an invalid closing parentheses`);
          return false;
        } else {
          stack.pop();
        }
      }
    }
    index++;
  }
  if(!stack.isEmpty()){
    console.log(`Character at index ${stack.pop()} is an extra opening parentheses`);
    return false;
  } else {
    console.log('The parentheses are balanced');
    return true;
  }
}
module.exports = validParentheses;

if(require.main === module){
  validParentheses('()');
  validParentheses('(()');
  validParentheses('(()))');
  validParentheses('( 8 + 5 ) + ( 9 + 5 ))');
}
