class Heap{
    constructor(){
        this.data = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }

    insert(key){
        this.data[this.data.length] = key
        this.heapifyUp()
    }

    heapifyUp(){
        let currIndex = this.data.length - 1
        while(this.data[currIndex] < this.data[this.getParentIndex(currIndex)]){
            this.swap(currIndex,this.getParentIndex(currIndex))
            currIndex = this.getParentIndex(currIndex)
        }
    }
}

const heap = new Heap()
heap.insert(5)
heap.insert(89)
heap.insert(45)
heap.insert(15)
heap.insert(7)

console.log(heap.data.join(','));