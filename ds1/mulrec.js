function multiply (arr) {
    let product = 1
    for ( let i = 0 ; i < arr.length ; i++) {
        product *= arr[i]
    }
    return product
}
console.log(multiply([1,2,3,4]));

// function mulrec ( arr ) {
//     if ( arr.length <= 0 ) return 1
//     return arr[arr.length-1] * mulrec(arr.slice(0,arr.length-1))
// }

function mulrec ( arr ) {
    if ( arr <= 0 ) return 1
    return arr[0] * mulrec(arr.slice(1))
}

console.log(mulrec([1,2,3,4]));

