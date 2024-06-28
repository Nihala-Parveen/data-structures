function Lsearch ( arr , val ) {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[i] === val ) return i
    }
    return -1
}
console.log(Lsearch( [ -5 , 2 , 10 , 4 , 6 ] , 10));
console.log(Lsearch( [ -5 , 2 , 10 , 4 , 6 ] , 6));
console.log(Lsearch( [ -5 , 2 , 10 , 4 , 6 ] , 20));