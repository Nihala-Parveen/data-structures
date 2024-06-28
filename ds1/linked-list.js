class Node {
    constructor ( value ) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size()
    }

    //add node at beginning
    prepend( value ) {
        const node = new Node ( value )
        if ( this.isEmpty() ) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    //add node at end
    append ( value) {
        const node = new Node ( value )
        if ( this.isEmpty() ) {
            this.head = node
        } else {
            let prev = this.head
            while ( prev.next ) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    //insert a value at index
    insert ( index , value ) {
        const node = new Node (value)
        if ( index < 0 || index > this.size ) {
            return null
        } else if ( index === 0 ) {
            node.next = this.head
            this.head = node
        } else {
            let prev = this.head
            for ( let i = 0 ; i < index - 1 ; i++ ) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    //insert a value before value
    insertvalue ( insert , value ) {
        const node = new Node ( value )
        if ( this.isEmpty() ) {
            return null
        } else if ( this.head.value === insert ) {
            node.next = this.head
            this.head = node
        } else {
            let prev = null
            let curr = this.head
            while ( curr.next !== null ) {
                if ( curr.value === insert ) {
                    node.next = curr
                    prev.next = node
                }
                prev = curr
                curr = curr.next
            }
        }
        this.size++
    }

    //find value and delete previous node
    findAndDelete ( value ) {
        if ( this.isEmpty() ) return null
        let prev = this.head
        let curr = this.head.next
        while ( curr ) {
            if ( curr.next && curr.next.value === value ) prev.next = curr.next
            prev = curr
            curr = curr.next
        }
    }

    //search
    search ( value ) {
        if ( this.isEmpty() ) {
            return -1
        } 
        let i = 0
        let curr = this.head
        while ( curr ) {
            if( curr.value === value ) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    //reverse list
    reverse() {
        let prev = null
        let curr = this.head
        while ( curr ) {
            let next  = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    //remove by index
    removeFrom ( index ) {
        if ( index < 0 || index >= this.size ) { 
            return null
        }
        let removeNode
        if ( index === 0 ) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for ( let i = 0 ; i < index - 1 ; i++ ) {
                prev = prev.next
            } 
            removeNode = prev.next
            prev.next  = removeNode.next          
        }
        this.size--
        return removeNode.value
    }

    //remove by value 
    removeValue( value ) {
        if ( this.isEmpty() ) {
            return null
        }
        if ( this.head.value === value ) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while ( prev.next && prev.next.value !== value ) {
                prev = prev.next
            }
            if ( prev.next ) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print() {
        if ( this.isEmpty() ) {
            console.log("List is Empty");
        } else {
            let curr = this.head
            let listValues = ''
            while ( curr ) {
                listValues += `${curr.value} \t`
                curr = curr.next
            } 
            console.log(listValues);
        }
    }
}

const list = new linkedList()
// function attli( arr ) {
//     arr.forEach((item) => list.append(item))
//     return list
// }
// console.log("array to linklist");
// const li = attli([1,2,3,4,5])
// li.print()

console.log("Initial list : ");
list.print()

console.log("Add node at beginning : ");
list.prepend(10)
list.prepend(20)
list.print()

console.log("Add node at end : ");
list.append(30)
list.append(40)
list.append(50)
list.print()

console.log("Node inserted at index 1 : ");
list.insert(1,100)
list.print()

console.log("Insert before value : ");
list.insertvalue(100 , 5)
list.print()

console.log("Find and delete previous node : ");
list.findAndDelete(10)
list.print()

console.log("Reversed list : ");
list.reverse()
list.print()

console.log("Search value by index : " , list.search(30));

console.log("Remove node by index : ");
console.log("Removed Node : " , list.removeFrom(2));
list.print()

console.log("Remove node by value : ");
console.log("Removed value : " , list.removeValue(40));
list.print()