const Stack = require('./stack');
const { peek } = require('./stack-helpers');

function sort(stack){
  const aux = new Stack();

  while(!stack.isEmpty()){
    let temp = stack.pop();

    while(!aux.isEmpty() && peek(aux) < temp){
      stack.push(aux.pop());
    }

    aux.push(temp);
  }

  return aux;
}

function main(){
  const input = new Stack();
  [1, 5, 7, 3, 4, 5, 8, 20].forEach(value => input.push(value));
  console.log('Before sort:');
  input.print();
  const sorted = sort(input);
  console.log('\nAfter sort:');
  sorted.print();
}

if(require.main === module){
  main();
}