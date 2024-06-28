class Stack {
    constructor() {
        this.stack = []
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    push(element) {
        this.stack.push(element)
    }

    pop(){
        if ( this.isEmpty() ) return "Stack is empty"
        return this.stack.pop()
    }

    peek() {
        if ( this.isEmpty() ) return "Stack is empty"
        return this.stack[this.stack.length - 1]
    }

    print() {
        if ( this.isEmpty() ) console.log("Stack is empty")
        else {
            for ( let i = this.stack.length - 1 ; i >= 0 ; i-- ) console.log(this.stack[i]);
        }
    }
}

const st = new Stack()
st.print()
st.push(10)
st.push(69)
st.push(220)
st.print()
console.log(st.peek());
console.log(st.size());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());

console.log(st.peek());
console.log(st.pop());
console.log(st.isEmpty());
st.print()


