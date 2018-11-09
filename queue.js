class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Queue {
  
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const newNode = new Node(value, null);
    if(!this.first){
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }

  dequeue(){
    if(!this.first){
      console.log('This queue is empty.');
      return null;
    }
    const value = this.first.value;
    this.first = this.first.next;
    return value;
  }

  isEmpty(){
    return !this.first;
  }

  size(){
    let size = 0;
    let temp = this.first;
    while(temp){
      size++;
      temp = temp.next;
    }
    return size;
  }

  print(){
    let temp = this.first;
    while(temp){
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

module.exports = Queue;

function main(){
  const starTrekQ = new Queue();
  ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'].forEach(name => {
    starTrekQ.enqueue(name);
  });
  console.log('Initial state of queue:');
  starTrekQ.print();
  // remove Kirk and Spock from queue
  console.log('\nQueue after calling dequeue() twice:');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.print();
}

if(require.main === module){
  main();
}
