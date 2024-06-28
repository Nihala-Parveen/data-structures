class Node { 
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarSearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if ( this.isEmpty() ) this.root = newNode
        else this.insertNode(this.root,newNode)
    }

    insertNode(root , newNode){
        if ( newNode.value < root.value){
            if(root.left === null) root.left = newNode
            else this.insertNode(root.left,newNode)
        } else {
            if (root.right === null) root.right = newNode
            else this.insertNode(root.right,newNode)
        }
    }

    search(root,value){
        if(!root) return false
        else if ( root.value === value ) return true
        else if ( value < root.value ) return this.search(root.left,value)
        else return this.search(root.right,value)
    }

    min(root){
        if(!root.left) return root.value
        else return this.min(root.left)
    }

    max(root){
        if ( !root.right ) return root.value
        else return this.max(root.right)
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root) return root
        else if ( value < root.value ) root.left = this.deleteNode(root.left,value)
        else if ( value > root.value ) root.right = this.deleteNode(root.right,value)
        else {
            if(!root.left && root.right) return null
            if(!root.left) return root.right
            if(!root.right) return root.left
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isBst(){
        return this.checkBst(this.root,Number.MIN_VALUE,Number.MAX_VALUE)
    }

    checkBst(root,min,max){
        if(!root) return true
        if(root.value < min || root.value > max) return false
        return ( this.checkBst(root.left,min,root.value) && this.checkBst(root.right,root.value,max) ) 
    }
}

const bst = new binarSearchTree()
console.log("Tree is empty" , bst.isEmpty() );

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,15));
console.log(bst.search(bst.root,20));

console.log("PreOrder traversal");
bst.preOrder(bst.root)

console.log("InOrder traversal:");
bst.inOrder(bst.root)

console.log("PostOrder traversal");
bst.postOrder(bst.root)

console.log("Breadth first search: ");
bst.levelOrder()

console.log("Min Value : ",bst.min(bst.root));
console.log("Max value : ",bst.max(bst.root));

console.log("Delete node:");
bst.delete(10)
bst.levelOrder()

console.log(bst.isBst());