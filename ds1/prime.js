function isPrime(n) {
    if ( n < 2 ) {
        return false
    }
    for ( let i = 2 ; i <= Math.sqrt(n) ; i++ ) {
        if ( n % i === 0 ) {
            return false
        }
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

function recPrime ( n , i = 2 ) {
    if ( n <= 1 ) return false
    if(n === 2 ) return true
    if ( n % i === 0 ) return false
    if (i * i > n) return true;
    return recPrime(n,i+1)
}

console.log(recPrime(1));
console.log(recPrime(5));
console.log(recPrime(4));