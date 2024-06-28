class Node {
    constructor( value ) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    insert ( value , index ) {
        const node = new Node(value)
        if ( index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let curr = this.head
            for ( let i = 0 ; i < index - 1 ; i++ ) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    delete ( node ) {
        if ( this.isEmpty() ) {
            return null
        } else {
            let prev = null
            let curr = this.head
            while ( curr !== null ) {
                if ( curr.value === node ) {
                    prev.next = node
                    node.next = curr
                }
                prev = curr
                curr = curr.next
            }
        }
        this.size--
    } 

    print () {
        if(this.isEmpty()) console.log("List is empty.")
        else {
         let curr = this.head
         let listValues = ''
         while( curr !== null ) {
            listValues += `{$curr.value}`
            curr = curr.next
         }
         console.log(listValues);
        }
    }
}


const list = new LinkedList()
list.insert(0,56)
list.print()