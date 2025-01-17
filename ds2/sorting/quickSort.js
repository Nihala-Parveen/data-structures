function quickSort ( arr ) {
    if ( arr.length < 2 ) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for ( let i = 1 ; i < arr.length ; i++ ) {
        if ( arr[i] < pivot ) left.push(arr[i])
        else right.push(arr[i]) 
    }
    return [ ...quickSort(left) , pivot , ...quickSort(right) ]
}

const arr = [ 8 , 20 ,-2 , 4 , -6 ]
console.log(quickSort(arr));