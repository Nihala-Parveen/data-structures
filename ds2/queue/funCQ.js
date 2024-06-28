var myCircularQueue = function ( k ) {
    this.queue = []
    this.size = k
}

myCircularQueue.prototype.enqueue = function (value) {
    if ( this.size === this.queue.length ) return false
    this.queue.push(value)
    return true
}

myCircularQueue.prototype.dequeue = function() {
    if ( this.queue.length === 0 ) return false
    this.queue.shift()
    return true
}

myCircularQueue.prototype.Front = function() {
    if ( this.queue.length === 0 ) return -1
    return this.queue[0]
}

myCircularQueue.prototype.Rear = function() {
    if ( this.queue.length === 0 ) return -1
    return this.queue[ this.queue.length - 1 ]
}

myCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0
}

myCircularQueue.prototype.isFull = function() {
    return this.size === this.queue.length
}

var q = new myCircularQueue((3))
q.enqueue(1)
q.enqueue(4)
q.enqueue(2)
q.dequeue()
q.enqueue(5)
q.dequeue()
q.enqueue(72)

console.log(q.Front() , q.Rear());
