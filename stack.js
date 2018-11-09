class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    this.top = new Node(value, this.top);
  }

  pop(){
    if(!this.top) {
      console.log('The stack is empty');
      return null;
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  isEmpty(){
    return !this.top;
  }

  print(){
    let temp = this.top;
    while(temp){
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

module.exports = Stack;

function main(){
  const starTrek = new Stack();
  [ 'Kirk', 'Spock', 'McCoy', 'Scotty' ].forEach(person => {
    starTrek.push(person);
  });
  starTrek.print();
  starTrek.pop();
  starTrek.pop();
  console.log('\n');
  starTrek.print();
}

if(require.main === module){
  main();
}