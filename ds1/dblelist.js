class Node {
    constructor ( value ) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node ( value )
        if ( this.isEmpty() ) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append ( value ) {
        const node = new Node ( value )
        if ( this.isEmpty() ) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    print() {
        if ( this.isEmpty() ) console.log("List is empty");
        else {
            let curr = this.head
            let listValues = ""
            while( curr ) {
                listValues += `${curr.value}\t`
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

// class Node {
//     constructor(value) {
//         this.value = value
//         this.prev = null
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value) 
//         if( this.isEmpty()){
//             this.head = node
//             this.tail = node
//         } else {
//             this.head.prev = node
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append ( value ) {
//         const node = new Node(value)
//         if ( this.isEmpty() ) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }

//     print() {
//         if( this.isEmpty()){
//             console.log("List is empty.");
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while ( curr ) {
//                 listValues += `${curr.value} \t`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

const dl = new LinkedList()
console.log("Added node at beginning : ");
dl.prepend(1)
dl.prepend(2)
dl.prepend(3)
dl.print()
console.log("Added node at end : ");
dl.append(4)
dl.append(5)
dl.print()