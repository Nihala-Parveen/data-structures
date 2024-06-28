function sum(n) {
    if(n === 0) {
        return 0
    } 
    return n + sum(n-1)
}

console.log(sum(3));

function arraySum ( arr) {
    if(arr.length === 0 ) {
        return 0
    }
    return arr[ 0 ] + arraySum(arr.slice(1))
}

console.log(arraySum([1,2,3 , 4]));

function arrayDef ( arr , index = 0 ) {
    if ( index >= arr.length ) return 0
    return arr[index] + arrayDef( arr , index + 1 )
}

console.log(arrayDef([1,2,3 , 4]));