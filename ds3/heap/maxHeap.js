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

    insert(key){
        this.data[this.data.length] = key
        this.heapifyUp()
    }

    heapifyUp(){
        let currIndex = this.data.length - 1
        while(this.data[currIndex] > this.data[this.getParentIndex(currIndex)]){
            this.swap(currIndex,this.getParentIndex(currIndex))
            currIndex = this.getParentIndex(currIndex)
        }
    }

    remove(){
        let max = this.data[0]
        this.data[0] = this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown()
        return max
    }

    heapifyDown(){
        let currIndex = 0
        while(this.data[this.getLeftChildIndex(currIndex)] !== undefined ) {
            let bigChild = this.getLeftChildIndex(currIndex)
            if(this.getRightChildIndex(currIndex) && this.getRightChildIndex(currIndex) > this.getLeftChildIndex(currIndex)){
                bigChild = this.getRightChildIndex(currIndex)
            }
            if(this.data[currIndex] < this.data[bigChild]){
                this.swap(currIndex,bigChild)
                currIndex = bigChild
            } else {
                return
            }
        }
    }
}

const heap = new Heap()
heap.insert(8)
heap.insert(16)
heap.insert(30)
heap.insert(15)
heap.insert(50)
heap.insert(20)
heap.insert(10)

console.log(heap.data.join(','));

let a = []

a.push(heap.remove())
a.push(heap.remove())
a.push(heap.remove())
a.push(heap.remove())
a.push(heap.remove())
a.push(heap.remove())
a.push(heap.remove())

console.log("Removed elements : " +a);

                                            