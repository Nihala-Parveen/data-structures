function fac ( n ) {
    if ( n === 0 ) {
        return 1
    } 
    return n  * fac( n - 1 )
}

console.log(fac(0));
console.log(fac(1));
console.log(fac(5));