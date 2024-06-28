class Heap {
    constructor(){
        this.data = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return i*2+1
    }

    getRightChildIndex(i){
        return i*2+2
    }

    swap(i1,i2){
        [ this.data[i1] , this.data[i2] ] = [ this.data[i2] , this.data[i1] ]
    }

    push(key){
        this.data[this.data.length] = key
        this.heapifyUp()
    }

    heapifyUp() {
        let currIndex = this.data.length - 1
        while(this.data[currIndex]<this.data[this.getParentIndex(currIndex)]){
            this.swap(currIndex,this.getParentIndex(currIndex))
            currIndex = this.getParentIndex(currIndex)
        }
    }
}

const heap = new Heap()

heap.push(40)
heap.push(100)
heap.push(73)
heap.push(32)
heap.push(7)

console.log("Min heap:",heap.data.join(','));
console.log("Parent node of 32 : " , heap.data[heap.getParentIndex(heap.data.indexOf(32))]);
console.log("Left child of 32 : " , heap.data[heap.getLeftChildIndex(heap.data.indexOf(32))]);
console.log("Right child of 32 : " , heap.data[heap.getRightChildIndex(heap.data.indexOf(32))]);