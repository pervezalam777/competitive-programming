class Queue {
    constructor(){
        this.data = []
    }

    add(value){
        this.data.unshift(value);
    }

    remove() {
        return this.data.pop();
    }

    get length(){
        return this.data.length;
    }

    toString(){
        return this.data.toString();
    }
}

let queue = new Queue();
queue.add("Person One");
queue.add("Person two");

console.log(queue.remove());

queue.add("Person three");

console.log('length: ', queue.length);

console.log('waiting list:',queue.toString())
