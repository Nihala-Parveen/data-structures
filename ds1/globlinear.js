function search( arr , target ) {
    let result = []
    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[i] === target ) {
            result.push(i)
        }
    }
    if ( result.length === 0 ) return -1
    else return result
}

console.log(search([ 8 , 9 , 4 , 0 , 9 , 6 , 7 , 0 , 8 , 3 , 4 , 6 ] , 8 ));
console.log(search([ 8 , 9 , 4 , 0 , 9 , 6 , 7 , 0 , 8 , 3 , 4 , 6 ] , 6 ));
console.log(search([ 8 , 9 , 4 , 0 , 9 , 6 , 7 , 0 , 8 , 3 , 4 , 6 ] , 2 ));