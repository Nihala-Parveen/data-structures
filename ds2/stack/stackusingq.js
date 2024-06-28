var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while ( this.q1.length !== 0 ) {
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while ( this.q2.length !== 0 ) {
        this.q1.push(this.q2.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0
};


var stack = new MyStack()
stack.push(3)
stack.push(5)
stack.push(96)
stack.push(24)
stack.pop()
console.log(stack.top());