function stair ( n ) {
    const numOfways = [ 1 , 2 ] 
    for ( let i = 2 ; i <= n ; i++) {
        numOfways[i] = numOfways[i-1] + numOfways[i-2]
    }
    return numOfways[n-1]
}

console.log(stair(1));
console.log(stair(2));
console.log(stair(3));
console.log(stair(4));
console.log(stair(5));