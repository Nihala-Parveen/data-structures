class Queue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if( !this.isEmpty() ) return this.items.shift()
        return null
    }

    peek() {
        if ( !this.isEmpty() ) return this.items[0]
        return null
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue()
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());