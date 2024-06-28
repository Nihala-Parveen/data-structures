class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearch {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if ( this.isEmpty() ){
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(!root.left) root.left = newNode
            else this.insertNode(root.left,newNode)
        } else {
            if(!root.right) root.right = newNode
            else this.insertNode(root.right,newNode)
        }
    }

    inOrder(root){
        let arr = []
        if(root) {
            this.inOrder(root.left)
            arr.push(root.value)
            this.inOrder(root.right)
        }
    }
}

const bst = new binarySearch()
bst.insert(5)
bst.insert(10)
bst.insert(80)

console.log();

