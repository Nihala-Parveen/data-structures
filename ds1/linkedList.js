// const n1 = {
//     data : 100
// }

// const n2 = { 
//     data : 200
// }

// n1.next = n2
// console.log(n1);

class Node {
    constructor(data , next = null) {
        this.data = data
        this.next = next
    }
}

// const n1 = new Node(100)
// console.log(n1);

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    //Insert first node
    insertFirst(data){
        this.head = new Node(data , this.head)
        this.size++
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data)
        let current

        //If empty , make head
        if(!this.head){
            this.head = node
        } else {
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    // Insert at index
    insertAt(data , index){
        //If index is out of range
        if(index > 0 && index > this.size){
            return
        }
        //If first index
        if(index === 0) {
            this.insertFirst(data);
            return;
        }
        const node = new Node (data)
        let current , previous

        //setcurrrent to first
        current = this.head
        let count = 0

        while(count < index){
            previous = current //Node before index
            count++
            current = current.next //node after index
        }
        node.next = current
        previous.next = node
        this.size++
    }

    // Get an Index
    getAt(index) {
        let current = this.head
        let count = 0
        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++
            current = current.next
        }
        return null
    }

    // Remove at index
    removeAt(index){
        if(index > 0 && index > this.size) {
            return
        }
        let current = this.head
        let previous
        let count = 0

        //Remove first
        if(index === 0) {
            this.head = current.next
        } else {
            while(count < index) {
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }

    // Clear list
    clearList(){
        this.head = null
        this.size = 0
    }

    // Print list data
    printList(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

const l1 = new LinkedList()
l1.insertFirst(100)
l1.insertFirst(200)
l1.insertFirst(300)
l1.insertLast(400)
//l1.insertAt(500,0)
l1.removeAt(3)
l1.clearList()
l1.printList()
//l1.getAt(0)