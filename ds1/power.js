function powerTwo(n) {
    if(n < 1 ){
        return false
    }
    while( n > 1 ) {
        if ( n % 2 !== 0) {
            return false
        }
        n= n / 2
    }
    return true
}

console.log(powerTwo(1));
console.log(powerTwo(2));
console.log(powerTwo(5));

function bitPower ( n ) {
    if ( n < 1 ) { 
        return false
    }
    return ( n & ( n - 1 ) ) === 0
}

console.log(bitPower(1));
console.log(bitPower(2));
console.log(bitPower(5));

