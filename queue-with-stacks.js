const Stack = require('./stack');

class Queue {
  constructor(){
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value){
    
    while(!this.secondStack.isEmpty){
      this.firstStack.push(this.secondStack.pop());
    }
    this.firstStack.push(value);
  }

  dequeue(){
    if(this.firstStack.isEmpty() && this.secondStack.isEmpty()){
      console.log('The queue is empty.');
      return null;
    }

    while(!this.firstStack.isEmpty){
      this.secondStack.push(this.firstStack.pop());
    }
    
    return this.secondStack.pop();
  }

  print(){
    if(this.firstStack.isEmpty() && this.secondStack.isEmpty()){
      console.log('Queue is empty');
    }

    while(!this.firstStack.isEmpty()){
      this.secondStack.push(this.firstStack.pop());
    }

    this.secondStack.print();
  }
}

module.exports = Queue;

if(require.main === module){
  console.log('Initial state of queue:');
  const starTrekQ = new Queue();
  ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'].forEach(name => {
    starTrekQ.enqueue(name);
  });
  starTrekQ.print();
  
  // remove Kirk and Spock from queue
  console.log('\nQueue after calling queue twice:');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.print();
}

